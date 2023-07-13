import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { useState } from "react";

const { Panel } = Collapse;

const CollapseQuestions = () => {
  const [activeKey, setActiveKey] = useState(["1", "4"]);

  const handleCollapseChange = (key: any) => {
    setActiveKey(key);
  };

  const genExtra = (isActive: any) => {
    return isActive ? <MinusOutlined /> : <PlusOutlined />;
  };

  return (
    <Collapse
      activeKey={activeKey}
      // defaultActiveKey={["1", "4"]}
      onChange={handleCollapseChange}
      expandIconPosition="right"
      ghost
    >
      <Panel
        header="Are my tickets transferable?"
        key="1"
        showArrow={false}
        extra={genExtra(activeKey.includes("1"))}
      >
        <p className="sub-color text-sm">
          No. The tickets can only be used by the person(s) whose details are
          indicated on the voucher.
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="How long will it take to receive my ticket?"
        key="2"
        showArrow={false}
        extra={genExtra(activeKey.includes("2"))}
      >
        <p className="sub-color text-sm">
          The tickets will hit your inbox as soon as you complete making the
          payment.
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="Is my payment secure?"
        key="3"
        showArrow={false}
        extra={genExtra(activeKey.includes("3"))}
      >
        <p className="sub-color text-sm">
          We use a PCI compliant payment gateway that is internationally
          recognized and protects against fraud and unauthorized transactions.
          In short, your payment is a 100% secure and you have nothing to worry!
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="What type of payment options do you offer?"
        key="4"
        showArrow={false}
        extra={genExtra(activeKey.includes("4"))}
      >
        <p className="sub-color text-sm">
          We accept payments via all major international debit cards, credit
          cards, Google Pay and Apple Pay. Please note that Tickete being an
          online marketplace does not accept cash payments.
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="When will I be charged for my booking?"
        key="5"
        showArrow={false}
        extra={genExtra(activeKey.includes("5"))}
      >
        <p className="sub-color text-sm">
          Your account will be charged immediately upon booking. If the booking
          is cancelled from your end or by our local tour operator, we will
          refund the entire amount to your account at no extra cost.
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="Why am I being charged in USD?"
        key="6"
        showArrow={false}
        extra={genExtra(activeKey.includes("6"))}
      >
        <p className="sub-color text-sm">
          All payments on Tickete are charged in USD. Your accounted will be
          debited with the spot rate for the conversion rate from your local
          currency to USD. We understand this is less than ideal but, we’re
          working on accepting payments in currencies across the world.
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="Will I get a complete refund if I cancel this ticket?"
        key="7"
        showArrow={false}
        extra={genExtra(activeKey.includes("7"))}
      >
        <p className="sub-color text-sm">
          The cancellation and refund policy varies per ticket. While some can
          be canceled up to 24, 48, or 72 hours before they start, several
          others can’t be canceled once the reservation has been confirmed. For
          the ones that can cancelled within the permissible cancellation
          period, you will receive a full refund.
        </p>
      </Panel>
      <hr className="mt-3 mb-3" />
      <Panel
        header="How long does it take for a refund to reflect in my account?"
        key="8"
        showArrow={false}
        extra={genExtra(activeKey.includes("8"))}
      >
        <p className="sub-color text-sm">
          Depending on your bank, it typically takes anywhere between 2-7
          working days for the refunded amount to reflect in your account.
        </p>
      </Panel>
    </Collapse>
  );
};

export default CollapseQuestions;
