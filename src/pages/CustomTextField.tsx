import { TextField } from "@mui/material";
import React from "react";

interface CustomTextFieldProps {
  label: string;
  defaultValue: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  defaultValue,
}) => {
  return (
    <>
      {" "}
      <TextField
        sx={{
          "& label": {
            fontWeight: 300,
          },
        }}
        label={label}
        variant="outlined"
        defaultValue={defaultValue}
        inputProps={{
          style: { fontSize: 14, color: "#474747" },
        }}
        fullWidth
      />
    </>
  );
};

export default CustomTextField;
