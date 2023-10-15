import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

const myPosts = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="mt-6 pb-8 max-w-2xl px-4 w-full border-2 rounded border-border">
          <h1 className="text-5xl pt-4">Applications for Devlink</h1>
          <hr className="my-4 border-t-2 border-border" />

          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Isaac Dyor</h2>
              <p>Web developer</p>
              <p> Hi I am Isaac and I am a CS major at UW.</p>
              <div className="flex pt-2">
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">React</p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Javascript
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Tailwind
                </p>
              </div>
            </div>
            <div>
              <Link href="/founder/pending/investments">
                <button className="bg-primary p-2 rounded-full">
                  Accept Application
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Max Druckman</h2>
              <p>Businessman</p>
              <p> Hi I am Max and I am a business major at UT.</p>
              <div className="flex pt-2">
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Tensorflow
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Python
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Django
                </p>
              </div>
            </div>
            <div>
              <Link href="/founder/payout/investments">
                <button className="bg-primary p-2 rounded-full">
                  Accept Application
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Pavan Venkatikrishnan</h2>
              <p>Politician</p>
              <p> Hi I am Pavan and I am a polisci major at GW.</p>
              <div className="flex pt-2">
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Next.js
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  PostgreSQL
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Prisma
                </p>
              </div>
            </div>
            <div>
              <Link href="/founder/create/applications">
                <button className="bg-primary p-2 rounded-full">
                  Accept Application
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default myPosts;
