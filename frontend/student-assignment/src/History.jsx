import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IoMdArrowRoundBack } from "react-icons/io"
import Button from './components/Button'

const History = () => {
  const navigate = useNavigate()
  const [history, sethistory] = useState([])

  useEffect(() => {
    const gethistory = async () => {
     const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/history`
)
      sethistory(response.data.history)
    }
    gethistory()
  }, [])

  const backToHome = () => {
    navigate("/")
  }

  const gotoai = () => {
    navigate("/ask")
  }

  return (
    <div className="min-h-screen pt-4 px-4 md:px-8">

      {/* TOP BUTTONS */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 ">
        <Button
          text={<IoMdArrowRoundBack />}
          className="bg-[#B7A3E3] w-full sm:w-auto"
          onClick={backToHome}
        />

        <Button
          text="Ask AI"
          className="bg-[#B7A3E3] w-full sm:w-auto"
          onClick={gotoai}
        />
      </div>

      <div className="max-w-7xl mx-auto pt-20">

        <h2 className="text-2xl md:text-3xl font-bold text-[#B7A3E3] mb-8">
          History
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT HISTORY LIST */}
          <div className="w-full lg:w-1/3 border-2 border-[#B7A3E3] rounded-2xl p-5">

            <h3 className="text-lg font-semibold text-[#B7A3E3] mb-4">
              Recent Topics
            </h3>

            <div className="flex flex-col gap-3">
              {history.map((item) => (
                <button
                  key={item._id}
                  onClick={() => navigate(`/history/${item._id}`)}
                  className="bg-[#B7A3E3] text-white px-4 py-3 rounded-xl text-left cursor-pointer"
                >
                  {item.title}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT CONTENT (STICKY) */}
          <div className="hidden lg:flex border-2 border-[#BBD5DA] rounded-2xl p-8 items-start justify-center sticky top-24 h-fit">

            <div className="max-w-lg">

              <h3 className="text-2xl font-bold text-[#B7A3E3] mb-4">
                View Your Previous Research
              </h3>

              <p className="text-gray-600 leading-7">
                All of your previously asked questions are stored in the
                history section. Select any topic from the left panel to
                view the complete question and its AI-generated answer.
              </p>

              <p className="mt-6 text-[#B7A3E3] font-medium">
                Click a topic to open its details.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default History