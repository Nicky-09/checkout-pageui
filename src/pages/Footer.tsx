"use client";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="mb-8 footer-tickete">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xl text-white mt-2 mb-8">tickete</div>
        <hr className="mt-4 mb-4" />
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="footer-link text-sm flex justify-between gap-4 mb-4">
            <span>Tickete</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cancellation policy</span>
          </div>
          <div className="footer-icon flex gap-3 mb-4">
            <span>
              <InstagramFilled />
            </span>
            <span>
              <FacebookFilled />
            </span>
            <span>
              <TwitterOutlined />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
