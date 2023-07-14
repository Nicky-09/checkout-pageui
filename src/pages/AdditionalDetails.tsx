import { MenuItem, TextField } from "@mui/material";
import React from "react";
import CustomTextField from "./CustomTextField";
const currencies = [
  {
    value: "<dropdown1>",
    label: "<dropdown>",
  },
  {
    value: "<dropdown2>",
    label: "<dropdown>",
  },
  {
    value: "<dropdown3>",
    label: "<dropdown>",
  },
  {
    value: "<dropdown4>",
    label: "<dropdown>",
  },
];
const AdditionalDetails = () => {
  return (
    <div>
      <div className="mt-10 mb-4">
        <p className="text-lg mb-1 details">Additional information</p>
        <p className="sub-color text-sm">
          We need a few more details to complete your registration{" "}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <CustomTextField
              label="<Full Name>"
              defaultValue="<custom input>"
            />
          </div>
          <div className="w-full ">
            <TextField
              select
              sx={{
                "& label": {
                  fontWeight: 300,
                },
              }}
              inputProps={{
                style: { fontSize: 14, color: "#474747" },
              }}
              fullWidth
            >
              {currencies.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  defaultValue="<dropdown>"
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
