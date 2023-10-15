import React from 'react'
import Navbar from '../investor/components/navbar'
import Link from 'next/link'

const investorSubmittedApp = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className='text-3xl pt-40'>
            Application Submitted 
          </h1>
          <h1 className='text-3xl pt-10'>
            Return to home screen
          </h1>
          <Link href="/investorSubmittedApp">
                    <button className= " px-24 mt-6 rounded border-2 border-transparent bg-blue-500 py-2 font-semibold text-white hover:bg-blue-600">
                        Home
                    </button>
            </Link>
            
        </div>
      </div>
    </div>
  )
}

export default investorSubmittedApp