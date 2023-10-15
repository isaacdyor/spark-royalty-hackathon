import type { GetStaticProps, NextPage } from "next";
import Navbar from "../components/navbar";

const DetailPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-4 px-10">
        <div className="flex w-full items-center justify-center rounded border-2 border-border text-white">
          <div className="flex w-full flex-col">
            <div className="flex flex-col border border-transparent border-b-border border-r-border  p-6">
              <div className="flex items-center pb-6">
                <h2 className="pr-4 text-2xl font-bold text-white ">Devlink</h2>
                <p className="rounded-full bg-blue-400 px-3  text-center text-white">
                  Payout
                </p>
              </div>
              <p className="">Web Development</p>
            </div>
            <div className="flex flex-col border border-transparent border-b-border border-r-border p-6">
              <h2 className="pb-2 font-bold text-white">
                Company Description:
              </h2>
              <p className="text-white">
                An AI blog maker for your github commits.
              </p>
            </div>
            <div className="flex flex-col border border-transparent border-b-border border-r-border p-6">
              <h2 className="pb-2 font-bold text-white">Payout Status:</h2>
              <div className="flex">
                <div className="flex mr-2 h-5 border-2 bg-secondary border-border  rounded-full w-1/2">
                  <div className="bg-primary h-full w-1/5 rounded-l-full" />
                </div>
                <p>$1,000/$5,000</p>
              </div>
            </div>

            <div className="flex flex-col border border-transparent border-b-border border-r-border p-6">
              <h2 className="pb-2 font-bold text-white">Services Needed:</h2>
              <p className="text-white">
                I am looking for someone to make me a website
              </p>
            </div>
            <div className="flex flex-col border border-transparent border-r-border p-6">
              <div className="w-1/2">
                <h2 className="pb-2 font-bold text-white">
                  Recommended Skills:
                </h2>
                <div className="mt-2 flex flex-wrap ">
                  <p className="mb-1 mr-1 rounded-2xl border border-gray-600 bg-neutral-700 p-1 px-2">
                    React
                  </p>
                  <p className="mb-1 mr-1 rounded-2xl border border-gray-600 bg-neutral-700 p-1 px-2">
                    Typescript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
