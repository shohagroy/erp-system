import { Box, TextField, Typography } from "@mui/material";
import { Field, FieldProps } from "formik";
import React from "react";

export enum IInputType {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  PASSWORD = "password",
}

interface IInput {
  name: string;
  type?: IInputType;
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  inline?: boolean;
  required?: boolean;
  errorMessage?: boolean;
  variant?: "standard" | "filled" | "outlined";
}

const FormInputField: React.FC<IInput> = ({
  name,
  label,
  placeholder,
  icon,
  type = IInputType.TEXT,
  inline,
  required,
  errorMessage,
  variant,
}) => {
  return (
    <Box
      maxWidth={"500px"}
      display={"flex"}
      flexDirection={{ xs: "column", md: inline ?? false ? "row" : "column" }}
    >
      {variant !== "standard" && (
        <Typography
          variant="body1"
          marginBottom={inline ?? false ? "0px" : "10px"}
          paddingY={inline ?? false ? "15px" : "0px"}
          sx={{
            fontWeight: 500,
            width: "200px",
          }}
        >
          {label ?? label}
        </Typography>
      )}

      <Field name={name} type={type}>
        {({ field, meta }: FieldProps) => {
          return (
            // <TextField
            //   // label={variant === "standard" ? label : ""}
            //   label="company name"
            //   variant="standard"
            //   size="small"
            //   type="text"
            //   sx={{
            //     width: "100%",
            //     fontSize: "14px",
            //     fontWeight: 500,
            //   }}
            // />
            <TextField
              label={variant === "standard" ? label : ""}
              size="small"
              {...field}
              type={type}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">{icon}</InputAdornment>
              //   ),
              // }}
              sx={{
                width: "100%",
                fontSize: "14px",
                fontWeight: 500,
              }}
              required={required}
              variant={variant ?? "outlined"}
              placeholder={placeholder}
              error={meta.touched && Boolean(meta.error)}
              helperText={errorMessage && meta.touched && meta.error}
            />
          );
        }}
      </Field>
    </Box>
  );
};

export default FormInputField;
