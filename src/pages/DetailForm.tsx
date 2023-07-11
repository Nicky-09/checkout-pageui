"use client";
import { Button, Input, Radio } from "antd";
import React from "react";

const DetailForm = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <div>
          <h2 className="text-2xl font-bold ">Confirm and Pay</h2>
          <div className="mt-4">
            <p className="text-lg">Enter your details</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <div className="w-full">
                  <Input placeholder="First Name" />
                </div>
                <div className="w-full">
                  <Input placeholder="Last Name" />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <Input placeholder="Email" />
                </div>
                <div className="w-full ">
                  <Input placeholder="Address" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* additional */}
        <div>
          <div className="mt-4">
            <p className="text-lg">Enter your details</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <Input placeholder="First Name" />
              </div>
              <div className="w-full ">
                <Input placeholder="Last Name" />
              </div>
            </div>
          </div>
        </div>
        {/* credit */}
        <div>
          <h2 className="text-2xl font-bold ">Confirm and Pay</h2>
          <div className="mt-4">
            <p className="text-lg">Enter your details</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <Input placeholder="First Name" />
              </div>
              <div className="w-full ">
                <Input placeholder="Last Name" />
              </div>
              <div className="w-full">
                <Input placeholder="Email" />
              </div>
              <div className="w-full">
                <Input placeholder="Address" />
              </div>
            </div>
          </div>
        </div>

        {/* klarna */}
        <hr className="mt-4 mb-4" />
        <div className="flex justify-between mb-4">
          Klarna
          <Radio />
        </div>
        <hr className="mt-4 mb-4" />
        {/* total price */}
        <div>
          <span>Total:</span>
          <span>Price</span>
          <p>You will pay in currency</p>
        </div>
        {/* receive notif */}
        <div className="mt-6">
          <Radio>
            {" "}
            Receive travel tips , suggestions and offers in city by email
          </Radio>
        </div>
        <div>
          {" "}
          with payment, you agree to the terms and conditions of Tickete & the
          activity provider
        </div>
        <Button>Confirm and pay</Button>
      </div>

      <div>
        sdfsdef
        {/* <Image> */}
      </div>
    </div>
  );
};

export default DetailForm;
