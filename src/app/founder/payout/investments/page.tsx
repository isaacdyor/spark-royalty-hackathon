import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

const myPosts = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="mt-6 pb-8 max-w-2xl px-4 w-full border-2 rounded border-border">
          <h1 className="text-5xl pt-4">My Posts</h1>
          <hr className="my-4 border-t-2 border-border" />

          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Devlink</h2>
              <p>An AI blog maker for your github commits.</p>
              <p>Royalty Percentage: 10%</p>
              <p>Total Payout: $5,000</p>
            </div>
            <div>
              <Link href="/founder/payout">
                <button className="bg-primary p-2 rounded-full">
                  Pay out Investor
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Goal Share</h2>
              <p>A social media app for people to share their goals.</p>
              <p>Royalty Percentage: 5%</p>
              <p>Total Payout: $20,000</p>
            </div>
            <div>
              <button className="bg-primary p-2 rounded-full">
                View Applications
              </button>
            </div>
          </div>

          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Spark Royalty</h2>
              <p>A freelancing app powered by royalties.</p>
              <p>Royalty Percentage: 100%</p>
              <p>Total Payout: $5,000,000,000</p>
            </div>
            <div>
              <button className="bg-primary p-2 rounded-full">
                View Applications
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default myPosts;
