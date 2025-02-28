import { React, useState } from "react";
import PaymentModal from "../compponents/PaymentModal";
import MakePayment from "./MakePayment";

export default function GotoPaymentPage() {
  const [showModal, setShowModal] = useState(false);
  const [active, isActive] = useState("");

  return (
    <>
      <div className={`popup ${active}`}>
        <MakePayment onClose={() => isActive("")} />
      </div>
      {/* <PaymentModal open={showModal} onClose={() => setShowModal(false)}>
        <div className=''>
          <MakePayment onClose={() => isActive("")} />
        </div>
      </PaymentModal> */}

      <div
        className='min-h-screen max-w-[22rem] mx-auto  flex
      justify-center items-center
  '>
        <div className='flex justify-center  '>
          <div
            className='
              '>
            <span
              onClick={() => {
                isActive("active");
              }}
              className=' bg-[#333] px-16 py-2 text-white
        font-semibold rounded-lg outline-none border-none cursor-default'>
              Make your Payment
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
