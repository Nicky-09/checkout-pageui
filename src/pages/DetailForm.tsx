"use client";
import { CreditCardFilled, QuestionCircleOutlined } from "@ant-design/icons";
import { InputAdornment, TextField } from "@mui/material";
import { Button, Input, Radio } from "antd";
import Image from "next/image";
import React from "react";
import CollapseQuestions from "./CollapseQuestions";

const DetailForm = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <h2 className="text-4xl text-color ffont-semibold mb-4 ">
          Confirm and pay
        </h2>
        <div className="flex flex-col-reverse justify-between gap-10 sm:flex-row">
          {/* left side bar */}

          {/* left side bar */}

          <div className="flex-1">
            <div>
              <div className="mt-8">
                <p className="text-lg mb-1">Enter your details</p>
                <p className="sub-color text-sm">
                  Enter your details sending you tickets{" "}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <div className="w-full mb-6">
                      <TextField
                        label="<Full Name>"
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
                        label="<Phone Number>"
                        variant="outlined"
                        defaultValue="+852345345678"
                        inputProps={{
                          style: { fontSize: 14, color: "#474747" },
                        }}
                        // size="small"
                        fullWidth
                      />
                    </div>
                    <div className="w-full ">
                      <TextField
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
            {/* additional */}
            <div>
              <div className="mt-10 mb-4">
                <p className="text-lg mb-1">Additional information</p>
                <p className="sub-color text-sm">
                  We need a few more details to complete your registration{" "}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <TextField
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
                      label="<dropdown>"
                      variant="outlined"
                      defaultValue="+852345345678"
                      inputProps={{
                        style: { fontSize: 14, color: "#474747" },
                      }}
                      fullWidth
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* credit */}
            <div>
              <div className="mt-10">
                <p className="text-lg mb-1">Select your mode of payment</p>
                <p className="sub-color text-sm">
                  Payment with tickete are secure and encrypted.{" "}
                </p>
                <div className="flex justify-between mt-6 mb-6">
                  <div className="flex items-center gap-4 text-sm">
                    <CreditCardFilled /> Credit and Debit card
                  </div>
                  <Radio />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <div className="w-full mb-4">
                      <TextField
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
                        // endAdornment={
                        //   <InputAdornment position="end"></InputAdornment>
                        // }
                        // size="small"
                        fullWidth
                      />
                    </div>
                    <div className="w-full ">
                      <TextField
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

            {/* klarna */}
            <hr className="mt-4 mb-4" />
            <div className="flex justify-between mt-4 mb-4">
              <div className="flex items-center gap-4 text-sm">
                <CreditCardFilled /> Klarna
              </div>
              <Radio />
            </div>
            <hr className="mt-4 mb-8" />
            {/* total price */}
            <div className="text-xl">
              <span>Total: </span>
              <span> {"<price>"}</span>
              <p className="sub-color text-sm underline-offset-auto">
                You will pay in currency
              </p>
            </div>
            {/* receive notif */}
            <div className="mt-6 bg-radio p-4 rounded-md">
              <Radio>
                {" "}
                Receive travel tips , suggestions and offers in city by email
              </Radio>
            </div>
            <div className="sub-color text-sm mt-4 mb-4">
              {" "}
              With payment, you agree to the terms and conditions of Tickete &
              the activity provider
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

          {/* right side bar */}

          {/* right side bar */}

          {/* right side bar */}
          <div>
            <div className="relative overflow-hidden mb-2">
              <Image
                className="rounded-md"
                object-fit="cover"
                //   fill={true}
                alt="no details"
                src="/travel.png"
                height="320"
                width="350"
              />
            </div>
            <p>Description of the travel and the booking details </p>
            <div className="mt-4 text-sm">
              <div className="flex gap-4 mb-2">
                {" "}
                <span>
                  <Image
                    alt="no details"
                    src="/Ticket.png"
                    height="20"
                    width="20"
                  />
                </span>
                <span>{"<variant name>"}</span>
              </div>
              <div className="flex gap-4 mb-2">
                {" "}
                <span>
                  <Image
                    alt="no details"
                    src="/CalendarBlank.png"
                    height="20"
                    width="20"
                  />
                </span>
                <span>{"<date>"}</span>
              </div>
              <div className="flex gap-4 mb-2">
                {" "}
                <span>
                  <Image
                    alt="no details"
                    src="/Clock.png"
                    height="20"
                    width="20"
                  />
                </span>
                <span>{"<time>"}</span>
              </div>
            </div>
            <hr className="mt-4 mb-6" />
            {/* tickets overview */}
            <div>
              <p>Tickets Overview</p>
              <div className="flex flex-col text-sm">
                <div className="flex justify-between mt-2">
                  <span>{"<pax type>"}</span>
                  <span>{"<price>"}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>{"<pax type>"}</span>
                  <span>{"<price>"}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>{"<fee>"}</span>
                  <span>{"<price>"}</span>
                </div>
                <div className="flex justify-between mt-2 discount">
                  <span>{"<discount applied>"}</span>
                  <span>{"< - price>"}</span>
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            {/* promo cdde  */}
            <div className="flex gap-4 text-sm discount">
              <span>
                <Image alt="no details" src="/Tag.png" height="20" width="20" />
              </span>
              <span>Have a promo code ?</span>
            </div>
            <hr className="mt-4 mb-4" />
            {/* total price */}
            <div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>{"<price>"}</span>
              </div>
              <span className="text-sm sub-color">
                You will pay in {"<currency>"}
              </span>
            </div>
            {/* free cancellation */}
            <div className="mt-4 mb-4 bg-radio p-4 rounded-md">
              <p>Free cancellation</p>
              <p className="text-sm sub-color">
                Cancel before {"<date>"} for a full refund
              </p>
            </div>
          </div>
        </div>

        {/* frequently sked questions */}

        {/* frequently sked questions */}
        <hr className="mt-4 mb-4" />
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <p className="text-lg mt-4">Frequently asked questions</p>
            <div className="mt-4">
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
      {/* tickete promise */}
      <p className=" mb-6">The Tickete promise</p>
      <div className="flex flex-col justify-between sm:flex-row gap-4">
        <div className="promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
          <div className="">
            <Image
              alt="no details"
              src="/CircleWavyCheck.png"
              height="30"
              width="30"
            />
          </div>
          <div>
            <p>Official Tickets</p>
            <p className="sub-color text-sm">
              Authorised reseller to top attraction
            </p>
          </div>
        </div>
        <div className="promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
          <div className="">
            <Image
              alt="no details"
              src="/ChatsCircle.png"
              height="30"
              width="30"
            />
          </div>
          <div>
            <p>24/7 dedicated support</p>
            <p className="sub-color text-sm">
              {"We're here to help, talk to an expert"}
            </p>
          </div>
        </div>
        <div className="promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
          <div className="">
            <Image
              alt="no details"
              src="/CalendarBlank1.png"
              height="30"
              width="30"
            />
          </div>
          <div>
            <p>Flexible bookings</p>
            <p className="sub-color text-sm">
              Book stress-free with easy cancellation
            </p>
          </div>
        </div>

        <div className="promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
          <div className="">
            <Image
              alt="no details"
              src="/ShieldCheckered1.png"
              height="30"
              width="30"
            />
          </div>
          <div>
            <p>100% secure payments</p>
            <p className="sub-color text-sm">
              Internationally recognized encrypted payment process
            </p>
          </div>
        </div>
      </div>

      {/* footer */}

      {/* <div className="mb-8 footer-tickete">
        <div>tickete</div>
        <hr className="mt-4 mb-4" />
        <div className="flex justify-between">
          <div>
            <span>Tickete</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cancellation policy</span>
          </div>
          <div>
            <span>insta</span>
            <span>Facebook twitter</span>
            <span>insta</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DetailForm;
