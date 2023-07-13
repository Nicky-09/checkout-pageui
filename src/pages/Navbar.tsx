"use client";
import { QuestionCircleFilled } from "@ant-design/icons";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center h-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="text-black text-xl font-bold">tickete</span>
          </div>
        </div>
        <div className="">
          <div className="ml-4 flex items-center">
            <span className="text-color mr-1 rounded-md text-sm font-medium pb-1">
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
