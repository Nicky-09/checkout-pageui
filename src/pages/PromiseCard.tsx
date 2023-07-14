import Image from "next/image";
import React from "react";

const PromiseCard = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row gap-4">
      <div className="small-card sm:promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
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
      <div className="small-card sm:promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
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
      <div className="small-card sm:promise-card  flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
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

      <div className="small-card sm:promise-card flex flex-row border-0 sm:border  sm:flex-col border-solid border-gray-300 gap-6">
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
  );
};

export default PromiseCard;
