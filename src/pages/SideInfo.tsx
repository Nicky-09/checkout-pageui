import Image from "next/image";
import React from "react";

const SideInfo = () => {
  return (
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
      <p className="text-ellipsis ">
        Amsterdam opeg boat canal cruise <br />- Live Ggide - from Anne Frgnk
        House{" "}
      </p>
      <div className="mt-4 text-sm">
        <div className="flex gap-4 mb-2">
          {" "}
          <span>
            <Image alt="no details" src="/Ticket.png" height="20" width="20" />
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
            <Image alt="no details" src="/Clock.png" height="20" width="20" />
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
        <span className="hidden sm:block">Have a promo code ?</span>
        <div className="flex justify-between block sm:hidden">
          <span>`TICKETE10` applied</span>
          {/* <span className="sub-color underline">Remove</span> */}
        </div>
      </div>
      <hr className="mt-4 mb-4" />
      {/* total price */}
      <div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>{"<price>"}</span>
        </div>
        <span className="text-xs sub-color underline">
          You will pay in {"<currency>"}
        </span>
      </div>
      {/* free cancellation */}
      <div className="mt-4 mb-2 sm:mb-4 bg-radio p-4 rounded-md">
        <p>Free cancellation</p>
        <p className="text-sm sub-color">
          Cancel before {"<date>"} for a full refund
        </p>
      </div>
    </div>
  );
};

export default SideInfo;
