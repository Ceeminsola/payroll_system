import React from 'react'
import PayrollDetails from '../components/PayrollDetails'

const Payroll = () => {
    return (
        <div className="flex flex-col justify-center font-sora items-center w-full min-h-screen">
          <div className="w-11/12 p-8 border border-gray-300 rounded-xl">
            <div className="w-full justify-between items-center flex ">
              <div className="flex justify-start gap-6 items-center">
                <h4 className="font-semibold text-[24px] font-sora text-gray-500">
                  Regular
                </h4>
                <div className="text-blue-500 bg-blue-100 font-medium px-6 py-2 rounded-full">
                  Due 02/01/2022
                </div>
              </div>
              <div className="flex justify-end gap-6 items-center">
                <h4 className=" text-[18px] text-blue-500 font-sora text-">
                  Things to do (12)
                </h4>
                <div className="flex justify-center items-center gap-4">
                  <button className="text-blue-500 bg-transparent border border-blue-500 font-medium px-6 py-2 rounded-xl text-[16px]">
                    Manage payroll
                  </button>
                  <button className="bg-blue-700 text-white font-medium px-6 py-2 rounded-xl text-[16px]">
                    Calculate payroll
                  </button>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-[20px] mt-3 font-sora text-gray-500">
              Bi-Weekly #5
            </h4>
            <PayrollDetails />
          </div>
        </div>
      )
    
}

export default Payroll
