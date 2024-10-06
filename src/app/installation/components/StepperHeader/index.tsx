import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import React from "react";
import Check from "@mui/icons-material/Check";
import theme from "@/theme";
import { usePathname, useRouter } from "next/navigation";
interface Step {
  title?: string;
  component?: React.ReactNode;
}
interface StepperHeaderProps {
  setStepFn: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  formSteps: Step[];
  progressBarPercentage: number;
}
const StepperHeader: React.FC<StepperHeaderProps> = ({
  setStepFn,
  activeStep,
  formSteps,
  progressBarPercentage,
}) => {
  const stepWidth = 100 / formSteps.length;
  const router = useRouter();

  const location = usePathname();
  const formStepHandlar = (step: number): void => {
    router.push(`${location}?step=${step}`);
    setStepFn(step);
  };

  return (
    <Box>
      <Typography
        sx={{ textAlign: "right", fontWeight: "bold", paddingY: "5px" }}
        variant="subtitle1"
        color="text.primary"
      >{`${Math.round(progressBarPercentage)}%`}</Typography>

      <Box sx={{ width: "100%", position: "relative" }}>
        {formSteps.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                position: "absolute",
                left: `${stepWidth * index}%`,
                width: `${stepWidth}%`,
                height: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              {activeStep > index && (
                <IconButton
                  onClick={() => formStepHandlar(index)}
                  sx={{
                    width: "30px",
                    height: "30px",
                    zIndex: 100,
                    bgcolor: theme?.colorConstants.cyan,
                    color: "white",
                    "&:hover": {
                      bgcolor: "#009688",
                    },
                    "&:active": {
                      bgcolor: "#00796B",
                    },
                  }}
                >
                  {activeStep > index && <Check />}
                </IconButton>
              )}
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: `${stepWidth * index}%`,
                top: "1rem",
                width: `${stepWidth}%`,
                height: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Box>
                <Typography
                  gutterBottom
                  sx={{
                    color: "#A3A3A3",
                    fontSize: "0.8rem",
                  }}
                >
                  {`Step ${index + 1}`}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    maxWidth: "200px",
                    color: "#191919",
                    fontWeight: activeStep === index ? "600" : "500",
                    fontSize: "1rem",
                  }}
                >
                  {item?.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}

        <LinearProgress
          sx={{
            bgcolor: "#E7E5ED",
            borderRadius: "5px",
            "& .css-twzagb-MuiLinearProgress-bar1": {
              bgcolor: theme.palette?.secondary.main,
            },
          }}
          variant="determinate"
          value={progressBarPercentage}
        />
      </Box>
    </Box>
  );
};

export default StepperHeader;
