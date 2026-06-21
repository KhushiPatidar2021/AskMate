import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const HistoryDetails = () => {
const [historydetails, sethistorydetails] = useState([])
const {id} = useParams()
 
useEffect(()=>{
    const getdetails = async ()=>{
        const response = await axios.get(`http://localhost:3000/history/${id}`)
        sethistorydetails(response.data)
    }
    getdetails()
},[id])

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        <h1 className="text-2xl md:text-3xl font-bold text-[#B7A3E3]">
          Research Details
        </h1>

        {/* Question Card */}
        <div className="border-2 border-[#B7A3E3] rounded-2xl p-6">

          <h2 className="text-xl font-bold text-[#B7A3E3] mb-4">
            Question
          </h2>

          <p className="text-gray-700 leading-7">
           {historydetails.question}
          </p>

        </div>

        {/* Answer Card */}
        <div className="border-2 border-[#BBD5DA] rounded-2xl p-6">

          <h2 className="text-xl font-bold text-[#BBD5DA] mb-4">
            Answer
          </h2>

          <div className="text-gray-700 leading-8 space-y-4">

            <p>
             {historydetails.answer}
            </p>

           

          </div>

        </div>

      </div>
    </div>
  )
}

export default HistoryDetails