"use client";

import { useState } from "react";
import type { NextPage } from "next/types";
import MoreInfo from "@/app/shared/components/moreInfo";
import TextArea from "@/app/shared/components/textArea";

import Link from "next/link";
import Navbar from "./components/navbar";

const NewInvestment: NextPage = () => {
  const [revenue, setRevenue] = useState("");
  const [report, setReport] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-grow items-center justify-center  p-4">
        <div className="w-full max-w-xl rounded border border-border  p-6">
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Payout Investor
          </h1>
          <hr className="my-4 border-t-2 border-border" />
          <form>
            <>
              <div className="mb-4">
                <MoreInfo
                  label="Report"
                  infoText="Report what has gone on since the last report"
                />
                <TextArea
                  text={report}
                  setText={setReport}
                  placeHolder="Report what has gone on since the last report..."
                />
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <div className="w-full">
                    <MoreInfo
                      label="Revenue Since Last Report ($)"
                      infoText={`The percent of your revenue you will pay to the worker.`}
                    />
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={revenue}
                        placeholder="0"
                        onChange={(e) => {
                          const inputValue = parseFloat(e.target.value);
                          setRevenue(inputValue.toString());
                        }}
                        className="input grow rounded bg-secondary px-4 py-2 mr-0.5 text-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
            <Link href="/founder/payout/confirm">
              <button className="mt-6 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
                Send
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewInvestment;
