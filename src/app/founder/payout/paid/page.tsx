"use client";
import type { NextPage } from "next/types";

import Link from "next/link";
import Navbar from "../components/navbar";

const NewInvestment: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow items-center justify-center  p-4">
        <div className="w-full max-w-xl rounded border border-border  p-6">
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Payout status
          </h1>
          <hr className="my-4 border-t-2 border-border" />
          <div className="flex">
            <div className="flex mr-2 h-5 border-2 bg-secondary border-border  rounded-full w-full">
              <div className="bg-primary h-full w-1/5 rounded-l-full" />
            </div>
            <p>$1,000/$5,000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewInvestment;
