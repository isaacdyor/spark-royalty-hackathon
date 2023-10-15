"use client";

import { useState } from "react";
import type { NextPage } from "next/types";
import MoreInfo from "@/app/shared/components/moreInfo";
import TextArea from "@/app/shared/components/textArea";
import Link from "next/link";
import Navbar from "../components/navbar";

const NewInvestment: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow items-center justify-center  p-4">
        <div className="w-full max-w-xl rounded border border-border  p-6">
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Confirm Payout
          </h1>
          <hr className="my-4 border-t-2 border-border" />
          <p>You are paying Isaac $1,000</p>
          <Link href="/founder/payout/paid">
            <button className="mt-6 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewInvestment;
