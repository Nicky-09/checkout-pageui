import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const BasicDetails = () => {
  return (
    <div>
      <div className="mt-0 sm:mt-12">
        <p className="text-lg mb-1 details">Enter your details</p>
        <p className="sub-color text-sm">
          {"We'll be sending your tickets to the details below. Booking"}
          for a friend? Add their details.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <div className="w-full mb-6">
              <TextField
                sx={{
                  "& label": {
                    fontWeight: 300,
                  },
                }}
                label="Full Name"
                variant="outlined"
                defaultValue="Tickete Inc"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                fullWidth
              />
            </div>
            <div className="w-full">
              <TextField
                sx={{
                  "& label": {
                    fontWeight: 300,
                  },
                }}
                label="<Full Name>"
                variant="outlined"
                defaultValue="hi@tickete.com"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                fullWidth
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full mb-6">
              <TextField
                sx={{
                  "& label": {
                    fontWeight: 300,
                  },
                }}
                label="<Phone Number>"
                variant="outlined"
                defaultValue="+852345345678"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Image
                        alt="no details"
                        src="/MasterFlag.png"
                        height="30"
                        width="30"
                      />
                    </InputAdornment>
                  ),
                }}
                // size="small"
                fullWidth
              />
            </div>
            <div className="w-full ">
              <TextField
                sx={{
                  "& label": {
                    fontWeight: 300,
                  },
                }}
                label="<Full Name>"
                variant="outlined"
                defaultValue="hi@tickete.com"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                fullWidth
                error
                helperText="<error message>"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
