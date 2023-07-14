import { CreditCardFilled } from "@ant-design/icons";
import { InputAdornment, TextField } from "@mui/material";
import { Radio } from "antd";
import Image from "next/image";
import React from "react";

const CreditDetails = () => {
  return (
    <div>
      <div className="mt-10">
        <p className="text-lg mb-1 details">Select your mode of payment</p>
        <p className="sub-color text-sm">
          Payment with tickete are secure and encrypted.{" "}
        </p>
        <div className="flex justify-between mt-6 mb-6">
          <div className="flex items-center gap-4 text-sm">
            <CreditCardFilled /> Credit and Debit card
          </div>
          <Radio className="radio-select" />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <div className="w-full mb-4">
              <TextField
                sx={{
                  "& label": {
                    fontWeight: 300,
                  },
                }}
                label="<Name on Card>"
                variant="outlined"
                defaultValue="Tickete Inc"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                // size="small"
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
                label="<Expiry Date>"
                variant="outlined"
                defaultValue="06/26"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                // size="small"
                fullWidth
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full mb-4">
              <TextField
                sx={{
                  "& label": {
                    fontWeight: 300,
                  },
                }}
                label="<Card Number>"
                variant="outlined"
                defaultValue="1234 1234 1234 1234"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Image
                        alt="no details"
                        src="/Visa.png"
                        height="70"
                        width="70"
                      />
                    </InputAdornment>
                  ),
                }}
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
                label="<CVV/CVC>"
                variant="outlined"
                defaultValue="***"
                inputProps={{
                  style: { fontSize: 14, color: "#474747" },
                }}
                // size="small"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditDetails;
