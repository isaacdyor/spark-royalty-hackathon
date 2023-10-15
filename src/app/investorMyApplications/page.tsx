import React from 'react'
import Navbar from '../investor/components/navbar'
import Link from 'next/link'
const investorMyApplications = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="mt-6 pb-8 max-w-2xl px-4 w-full border-2 rounded border-border min-h-full">
        <h1 className="text-3xl pt-4">My Applications</h1>
          <div className='flex pt-5'>
            <div className='relative font-bold cursor-pointer'>
              <h1>Current Applications</h1>
              {/* Underline component */}
              <span className='underline active'></span>
            </div>
            <h1 className='pl-5'>Past Applications</h1>
       
          </div>
          <hr className="my-4 border-t-2 border-border" />
            
          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
                <div className='flex items-center'>
                    <h2 className="text-2xl font-semibold pr-[350px]">Devlink</h2>
                </div>
               
            </div>
            <div>
            <Link href='/investorWhyProject'>
              <button className="bg-primary p-2 rounded-full">
                Application Pending
              </button>
              </Link>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  )
}

export default investorMyApplications