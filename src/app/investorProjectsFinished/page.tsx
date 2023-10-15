import React from 'react'
import Navbar from '../investor/components/navbar'
import Link from 'next/link'
import {AiOutlineCheck} from 'react-icons/ai'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="mt-6 pb-8 max-w-2xl px-4 w-full border-2 rounded border-border">
        <h1 className="text-3xl pt-4">My Projects</h1>
          <div className='flex pt-5'>
            <div className='relative font-bold cursor-pointer'>
              <h1>Current Projects</h1>
              {/* Underline component */}
              <span className='underline active'></span>
            </div>
            <h1 className='pl-5'>Past Projects</h1>
          </div>
          <hr className="my-4 border-t-2 border-border" />
          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
                <div className='flex items-center'>
                    <h2 className="text-2xl font-semibold pr-[250px]">Devlink</h2>
                </div>
                <div className='flex'>
                    <p>An AI blog maker for your github commits.</p>
                </div>
              
                
                
              <p className='pt-3'>Royalty Percentage: 10%</p>
              <p>Total Payout: $5,000</p>
            </div>
            <div className='flex flex-col items-end space-y-4 '>
            <Link href='/investorProjectsFinished'>
              <button className="flex items-center bg-green-600 px-[24px] p-2 rounded-full">
                Completed 
                <div className='mr-1'>
                </div>
                <AiOutlineCheck size={20}/>
              </button>
              </Link>
      
              
            </div>
          </div>


          
        </div>
      </div>
    </div>
  )
}

export default page