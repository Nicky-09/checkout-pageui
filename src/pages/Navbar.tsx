"use client";
import { QuestionCircleFilled } from "@ant-design/icons";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-black text-xl font-bold">tickete</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-4">
            {/* <QuestionCircleOutlined /> */}

            <span className="text-color mr-2 rounded-md text-sm font-medium">
              <QuestionCircleFilled />
            </span>
            <span className="text-color rounded-md text-sm font-medium">
              Help
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
