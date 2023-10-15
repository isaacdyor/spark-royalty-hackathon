import React from 'react';
import Navbar from '../investor/components/navbar';
import { ImSearch } from 'react-icons/im';

const InvestorHome: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1>
            Find the Perfect Project for you
          </h1>
          <div className="bg-white p-[6px] rounded-md flex items-center w-full md:w-[60%] lg:w-[40%]">
            {/* Removed the SVG code from here */}
            <input type="text" placeholder="Search" className="bg-transparent outline-none flex-1 text-black" />
            <a href="/investorFindProjects" className="text-black hover:text-gray-600">
              <ImSearch size={24}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorHome;
