"use client";
import { CreditCardFilled, QuestionCircleOutlined } from "@ant-design/icons";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { Button, Input, Radio, Select } from "antd";
import Image from "next/image";
import React from "react";
import CollapseQuestions from "./CollapseQuestions";
import BasicDetails from "./BasicDetails";
import AdditionalDetails from "./AdditionalDetails";
import CreditDetails from "./CreditDetails";
import SideInfo from "./SideInfo";
import PromiseCard from "./PromiseCard";

const DetailForm = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <h2 className="text-4xl text-color mb-4 confirm">Confirm and pay</h2>
        <div className="flex flex-col-reverse justify-between gap-10 sm:flex-row">
          {/* left side bar */}

          <div className="flex-1 border-0 sm:border-r border-gray-300 border-solid border-1 pr-3">
            <BasicDetails />

            <AdditionalDetails />

            <CreditDetails />

            <hr className="mt-4 mb-4" />
            <div className="flex justify-between mt-4 mb-4">
              <div className="flex items-center gap-4 text-sm">
                <CreditCardFilled /> Klarna
              </div>
              <Radio className="radio-select" />
            </div>
            <hr className="mt-4 mb-8" />
            {/* total price */}
            <div className="text-xl details">
              <span>Total: </span>
              <span> {"<price>"}</span>
              <p className="sub-color text-xs underline-offset-auto underline">
                You will pay in currency
              </p>
            </div>
            {/* receive notif */}
            <div className="mt-6 bg-radio p-4 rounded-md">
              <Radio className="radio-select">
                {" "}
                Receive travel tips , suggestions and offers in city by email
              </Radio>
            </div>
            <div className="sub-color text-xs mt-4 mb-4">
              {" "}
              With payment, you agree to the{" "}
              <a className="links">terms and conditions of Tickete </a>& the{" "}
              <a className="links">activity provider. </a>
            </div>
            <div>
              <Button
                size="large"
                className="bg-black text-white rounded-lg flex items-center justify-center w-full sm:w-1/3"
              >
                Confirm and pay
                <Image
                  alt="no details"
                  className="ml-2"
                  src="/ShieldCheckered.png"
                  height="20"
                  width="20"
                />
              </Button>
            </div>
          </div>

          <SideInfo />
        </div>

        <hr className="mt-4 mb-4" />
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <p className="text-lg mt-4">Frequently asked questions</p>
            <div className="collapsible-container-sm sm:collapsible-container mt-4">
              <CollapseQuestions />
            </div>
          </div>

          <div className="dark-pumpkin">
            <div className="pumpkin">
              <div className="flex justify-between">
                <span>Need help?</span>
                <span>
                  <Image
                    alt="no details"
                    src="/ChatsCircle.png"
                    height="30"
                    width="30"
                  />
                </span>
              </div>
              <p className="text-sm mb-2"> We are here to help , 24*7</p>
              <Button className="rounded-md chat">Chat with us </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-10" />
      <p className=" mb-6">The Tickete promise</p>
      <PromiseCard />
    </div>
  );
};

export default DetailForm;
