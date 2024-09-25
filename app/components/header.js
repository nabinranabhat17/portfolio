import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full flex py-[24px] px-[60px] items-center justify-between">
        <p className="text-[#C7C7C7] text-[32px] font-normal">Nabin Ranabhat</p>
        <div className="flex items-center">
          <Link
            href="#work"
            className="text-[#C7C7C7] text-[16px] font-normal mr-[16px]"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-[#C7C7C7] text-[16px] font-normal mr-[16px]"
          >
            About
          </Link>
          <Link
            href="#foot"
            className="text-[#C7C7C7] text-[16px] font-normal mr-[16px]"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
