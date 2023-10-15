import React from 'react'
import Navbar from '../investor/components/navbar'
import Link from 'next/link'


const investorWhyProject = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-grow items-center justify-center  p-4">
        <div className="w-full max-w-xl rounded border border-border  p-6">
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Apply 
          </h1>
          <hr className="my-4 border-t-2 border-border" />
          <form>
            <>
              <div className="mb-4">
                Why do you want to work on this project?
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <div className="w-full">
                 
                    <div className="flex">
                      <textarea

                        placeholder='Type Here'
                        
                        className=" h-48 input grow rounded bg-secondary px-4 py-2 mr-0.5 text-white"
                        required
                      />
                      
                    </div>
                    <div className="mb-4 pt-16">
                        What specific skills will help you to complete this project?
                    </div>
                    <div className='flex w-full'>
                    <textarea
                        placeholder='Type Here'
                        
                        className="h-48 input grow rounded bg-secondary px-4 py-2 mr-0.5 text-white"
                        required
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </>
            <div className=' pl-3 flex space-x-10'>
                <Link href="/investorMyApplications">
                    <button className= " px-24 mt-6 rounded border-2 border-transparent bg-blue-500 py-2 font-semibold text-white hover:bg-blue-600">
                        Send
                    </button>
                </Link>
                <button className=" mt-6 rounded border-2 border-border px-20 py-2 font-semibold text-white">
                    Save Job
                </button>
            </div>
            
          </form>
        </div>
      </div>

    </div>
  )
}

export default investorWhyProject