"use client";

import theme from "@/theme";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import StepperHeader from "./components/StepperHeader";
import CompanyDetails from "./components/CompanyDetails";
import UserInformation from "./components/UserInformation";
import CompanyOverview from "./components/Overview";
import { useRouter, useSearchParams } from "next/navigation";

const Installation = () => {
  const formRef = useRef<FormikProps<FormikValues>>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialStep = Number(searchParams.get("step"));
  const [activeStep, setActiveStep] = useState<number>(
    !isNaN(initialStep) ? initialStep : 0
  );

  const formSteps = [
    {
      title: "Enter Company Details",
      component: <CompanyDetails />,
    },
    {
      title: "Enter User Details",
      component: <UserInformation />,
    },
    {
      title: "Company Overview",
      component: <CompanyOverview />,
    },
  ];

  const getProgressBarPercentage = (): number => {
    switch (activeStep) {
      case 0:
        return 50;
      case 1:
        return 80;
      case 2:
        return 100;
      default:
        return 0;
    }
  };

  const defaultValues = {};

  const formSubmitHandler = (values: FormikValues): void => {
    console.log(values);
    if (activeStep !== formSteps.length - 1) {
      setActiveStep(activeStep + 1);
      router.push(`/installation?step=${activeStep + 1}`);
    }
  };

  const previewHandlar = (): void => {
    setActiveStep(activeStep - 1);
    router.push(`/installation?step=${activeStep - 1}`);
  };

  return (
    <Box
      sx={{
        paddingX: "5%",
        paddingY: "1rem",
        bgcolor: theme?.colorConstants?.whitishGray,
        height: "100vh",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          bgcolor: theme?.colorConstants?.primaryColor,
          color: "white",
          fontSize: "1rem",
          fontWeight: 400,
          textAlign: "center",
          padding: "0.5rem",
        }}
      >
        Note: This System is under construction
      </Typography>

      <Box
        marginY="1rem"
        sx={{
          width: "80%",
          marginX: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            fontSize: "1.5rem",
            fontWidth: 600,
          }}
        >
          Setup your Company
        </Typography>

        <Box>
          <Formik
            innerRef={formRef}
            onSubmit={(values, formikHelpers) => {
              formSubmitHandler(values);
              formikHelpers?.resetForm();
              void formikHelpers?.setValues(values);
              // if (!isDynamicForm) {
              //   if (step === formStepsLength - 1) {
              //     void formikHelpers?.setValues(initialValues);
              //   } else {
              //     void formikHelpers?.setValues(values);
              //   }
              // }
            }}
            initialValues={defaultValues}
            // validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <StepperHeader
                  setStepFn={setActiveStep}
                  activeStep={activeStep}
                  formSteps={formSteps}
                  progressBarPercentage={getProgressBarPercentage()}
                />
                <Box
                  sx={{
                    paddingTop: "100px",
                  }}
                >
                  {formSteps[activeStep]?.component}
                </Box>

                <Box
                  paddingY={"20px"}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"center"}
                >
                  <Stack direction={"row"} spacing={2}>
                    {activeStep > 0 && (
                      <Button
                        variant="outlined"
                        onClick={previewHandlar}
                        size="large"
                        sx={{
                          mr: 1,
                          textTransform: "capitalize",
                          width: "150px",
                        }}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      sx={{ textTransform: "capitalize", width: "150px" }}
                    >
                      {/* {updateLoading && !saveAsDraft ? (
                            <CircularProgress
                              color="primary"
                              size={24}
                              sx={{
                                color: "white",
                              }}
                            />
                          ) : (
                            "Continue"
                          )} */}
                      {activeStep === formSteps.length - 1
                        ? "Save"
                        : "Continue"}
                    </Button>
                  </Stack>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Installation;
