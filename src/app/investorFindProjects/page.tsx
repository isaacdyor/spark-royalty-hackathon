import React from 'react'
import Navbar from '../investor/components/navbar'
import {AiOutlineHeart} from 'react-icons/ai'
import Link from 'next/link'

const investorFindProjects = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="mt-6 pb-8 max-w-2xl px-4 w-full border-2 rounded border-border">
        <h1 className="text-3xl pt-4">Jobs you might like</h1>
          <div className='flex pt-5'>
            <div className='relative font-bold cursor-pointer'>
              <h1>Best Matches</h1>
              {/* Underline component */}
              <span className='underline active'></span>
            </div>
            <h1 className='pl-5'>Most Recent</h1>
            <h1 className='pl-5'>Saved Jobs</h1>
            <h1 className='pl-5'>U.S. Only</h1>
          </div>
          <hr className="my-4 border-t-2 border-border" />
            <h1 className=' pb-5'>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</h1>
          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
                <div className='flex items-center'>
                    <h2 className="text-2xl font-semibold pr-[350px]">Devlink</h2>
                </div>
                <div className='flex'>
                    <p>An AI blog maker for your github commits.</p>
                </div>
                <p className='pt-3'>We're looking for a full stack developer with experience </p>
                <p>with the OpenAI and Github Api's.</p>
                
                <div className='flex pt-3'>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">Web Development</p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Typescript
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  OpenAI
                </p>
                </div>
                
                
              <p className='pt-3'>Royalty Percentage: 10%</p>
              <p>Total Payout: $5,000</p>
            </div>
            <div>
            <Link href='/investorMyApplications'>
              <button className="bg-primary p-2 rounded-full">
                Apply Now
              </button>
              </Link>
            </div>
          </div>

          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
                <div className='flex items-center'>
                    <h2 className="text-2xl font-semibold pr-[350px]">VitaVise</h2>
                </div>
                <div className='flex'>
                    <p>An AI based platform to connect individuals with nutritionists.</p>
                </div>
                <p className='pt-3'>We're looking for an individual who is passionate about</p>
                <p> nutrition, who also has experience as a data analyst.</p>

                <div className='flex pt-3'>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">Python</p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  R
                </p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Data Analysis
                </p>
                </div>
                
                
              <p className='pt-3'>Royalty Percentage: 5%</p>
              <p>Total Payout: $15,000</p>
            </div>
            <div>
                <button className="bg-primary p-2 rounded-full">
                    Apply Now
                </button> 
            </div>
          </div>

          <div className="bg-secondary rounded p-4 flex justify-between items-center mb-4">
            <div className="flex flex-col">
                <div className='flex items-center'>
                    <h2 className="text-2xl font-semibold pr-[350px]">Fin.AI</h2>
                </div>
                <div className='flex'>
                    <p>A platform that utilizes AI to help users manage their finances.</p>
                </div>
                <p className='pt-3'>We're looking for a Software Developer with 10+ years</p>
                <p>of industry experience.</p>
                
                <div className='flex pt-3'>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">Deep Learning</p>
                <p className="p-1 px-2 rounded-full bg-slate-600 mr-1">
                  Python
                </p>
                </div>
                
                
              <p className='pt-3'>Royalty Percentage: 20%</p>
              <p>Total Payout: $150,000</p>
            </div>
            <div>
              <button className="bg-primary p-2 rounded-full">
                Apply Now
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default investorFindProjects

