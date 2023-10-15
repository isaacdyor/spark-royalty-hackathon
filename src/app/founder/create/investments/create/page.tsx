"use client";

import { useState } from "react";
import type { NextPage } from "next/types";
import MoreInfo from "@/app/shared/components/moreInfo";
import TextArea from "@/app/shared/components/textArea";
import InvestmentSkill from "../../components/investmentSkill";
import Navbar from "../../components/navbar";
import Link from "next/link";

const NewInvestment: NextPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [workType, setWorkType] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [skills, setSkills] = useState<string[]>([""]);

  const [percent, setPercent] = useState("");
  const [totalPayout, setTotalPayout] = useState("");
  const [payoutFrequency, setPayoutFrequency] = useState("Monthly");

  return (
    <>
      <Navbar />
      <div className="flex flex-grow items-center justify-center  p-4">
        <div className="w-full max-w-xl rounded border border-border  p-6">
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Create New Investment
          </h1>
          <hr className="my-4 border-t-2 border-border" />
          <form>
            <>
              <h2 className="mb-4 text-xl font-semibold text-white">
                Investment Details
              </h2>
              <div className="mb-4">
                <label className="mb-2 block text-muted-foreground">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="input w-full rounded bg-secondary px-4 py-2 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <MoreInfo
                  label="Description"
                  infoText="Describe your company. Inlcude the problem you're solving, your solution, and how far along you are. Be detailed!"
                />
                <TextArea
                  text={description}
                  setText={setDescription}
                  placeHolder="Describe your company..."
                />
              </div>
              <div className="pb-4">
                <label className="mb-2 block text-muted-foreground">
                  Work Type
                </label>
                <input
                  type="text"
                  placeholder="What kind of work do you want "
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="input w-full rounded bg-secondary px-4 py-2 text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <MoreInfo
                  label="Work description"
                  infoText="Describe the service you need done. Include the scope of the work and the deliverables. Be detailed!"
                />
                <TextArea
                  text={workDescription}
                  setText={setWorkDescription}
                  placeHolder="Describe the service you are looking for..."
                />
              </div>
              <InvestmentSkill skills={skills} setSkills={setSkills} />
              <hr className="my-4 border-t-2 border-slate-600" />
              <h2 className="mb-4 text-xl font-semibold text-white">
                Payout Details
              </h2>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="w-1/2 pr-4">
                    <MoreInfo
                      label={`Royalty Percentage`}
                      infoText={`The percent of your revenue you will pay to the worker.`}
                    />
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={percent}
                        placeholder="0"
                        onChange={(e) => {
                          const inputValue = parseFloat(e.target.value);
                          setPercent(inputValue.toString());
                        }}
                        className="input grow rounded bg-secondary px-4 py-2 mr-0.5 text-white"
                        required
                      />
                      <p className="pl-1">%</p>
                    </div>
                  </div>
                  <div className="mb-4 w-1/2">
                    <MoreInfo
                      label="Payment Frequency"
                      infoText="How often payments will be sent. Along with each payment you will include a brief report of your revenue, progress, and plans for the future."
                    />
                    <select
                      className="w-full rounded bg-secondary py-2 pl-1 text-white focus:outline-none"
                      id="payout-frequency-dropdown"
                      onChange={(e) => {
                        setPayoutFrequency(e.target.value);
                      }}
                    >
                      <option
                        className="bg-gray-800 text-white"
                        value="MONTHLY"
                      >
                        Monthly
                      </option>
                      <option
                        className="bg-gray-800 text-white"
                        value="QUARTERLY"
                      >
                        Quarterly
                      </option>
                      <option
                        className="bg-gray-800 text-blue-500"
                        value="SEMI_ANNUALLY"
                      >
                        Semi-Annually
                      </option>
                      <option
                        className="bg-gray-800 text-blue-500"
                        value="ANNUALLY"
                      >
                        Annually
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full pb-4">
                    <MoreInfo
                      label="Total payout ($)"
                      infoText="The maximum amount you will pay the worker assuming everything goes perfectly. Once this value is met there are no more royalty payments."
                    />
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="0"
                        max="10000000"
                        value={totalPayout}
                        placeholder="0"
                        onChange={(e) => {
                          const inputValue = parseFloat(e.target.value);
                          setTotalPayout(inputValue.toString());
                        }}
                        className="input w-full rounded bg-secondary px-4 py-2 text-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-t-2 border-slate-600" />
            </>
            <Link href="/founder/create/investments">
              <button className="mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
                Create
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewInvestment;
