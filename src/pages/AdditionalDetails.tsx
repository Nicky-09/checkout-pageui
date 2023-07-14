import { MenuItem, TextField } from "@mui/material";
import React from "react";
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "<dropdown>",
    label: "<dropdown>",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
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
            <TextField
              sx={{
                "& label": {
                  fontWeight: 300,
                },
              }}
              label="<Full Name>"
              variant="outlined"
              defaultValue="<custom input>"
              inputProps={{
                style: { fontSize: 14, color: "#474747" },
              }}
              fullWidth
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
              label="<dropdown>"
              defaultValue="<dropdown>"
              inputProps={{
                style: { fontSize: 14, color: "#474747" },
              }}
              fullWidth
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
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
