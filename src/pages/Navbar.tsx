import {
  QuestionCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-black text-xl font-bold">Ticket</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-4">
            {/* <QuestionCircleOutlined /> */}
            <a
              href="#"
              className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {/* <QuestionCircleFilled /> */}
              Help
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
