import React from 'react'

const PayrollDetails = () => {
    return (
        <div className="w-11/12 p-6 mt-8 bg-gray-200 grid grid-cols-4 rounded-xl mx-auto">
          <div>
            <h4 className=" text-[16px] font-sora text-gray-400">
              Pay Date/Period
            </h4>
            <h4 className="font-bold text-[20px] mt-2 font-sora text-gray-500">
              02/04/2022
            </h4>
            <h4 className=" text-[16px] font-sora mt-2 text-gray-400">
              01/17 - 01/30
            </h4>
          </div>
          <div>
            <h4 className=" text-[16px] font-sora text-gray-400">
              Total Additional Earnings
            </h4>
            <h4 className="font-bold text-[20px] mt-2 font-sora text-gray-500">
              $150.00
            </h4>
          </div>
          <div>
            <h4 className=" text-[16px] font-sora text-gray-400">
              Total Additional Hours
            </h4>
            <h4 className="font-bold text-[20px] mt-2 font-sora text-gray-400">
              600
            </h4>
          </div>
          <div></div>
        </div>
      );}

export default PayrollDetails
