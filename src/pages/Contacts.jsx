import React from "react";
import ContactForm from "../Contacts/ContactForm";

function FollowUs() {
  return (
    <>
      <p className=" font-sofiaSans text-base leading-[30px]">Follow us on</p>
      <div className="flex gap-4 mt-2">
        <a
          href="https://discord.gg/bHSm9a7DpC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="static/Contacts/discord.svg" width={24} alt="" />
        </a>
        <a
          href="https://medium.com/sama-communications"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="static/Contacts/medium.svg" width={24} alt="" />
        </a>
      </div>
    </>
  );
}

export default function Contacts() {
  return (
    <div className="min-h-[700px] pb-[42px]">
      <img
        src="static/Contacts/contacts-bg.svg"
        className="absolute right-0 bottom-0 max-lg:hidden"
        alt=""
      />

      <div className="flex max-xl:flex-col max-xl:gap-8 z-10 relative justify-around items-center">
        <div className="flex flex-col gap-12 max-xl:gap-8">
          <h1 className=" font-oxanium sm:text-5xl xs:text-4xl text-2xl ">
            Contact SAMA team
          </h1>
          <img src="static/Contacts/julia_smth_wants.svg" alt="" />
          <div className="max-xl:hidden">
            <FollowUs />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
