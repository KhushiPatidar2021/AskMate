import React from "react";
import Button from "./components/Button";
import { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Ask = () => {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const askAi = async () => {
    try {
      setloading(true);

      const response = await axios.post("http://localhost:3000/ask", {
        question,
      });

      setanswer(response.data.answer);
      setquestion("");
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  const goToHistory = () => {
    navigate("/history");
  };

  return (
    <div className="min-h-screen px-4 pt-4">
      {/* Top Buttons */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
        <Button
          text={<IoMdArrowRoundBack />}
          className="bg-[#B7A3E3] w-full sm:w-auto"
          onClick={backToHome}
        />

        <Button
          text="History"
          className="bg-[#B7A3E3] w-full sm:w-auto"
          onClick={goToHistory}
        />
      </div>

      {/* Centered Question & Answer Section */}
      <div className="flex justify-center items-center pt-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
          {/* Question Section */}
          <div className="flex-1 border-2 border-[#B7A3E3] rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#B7A3E3] mb-4">
              Ask a Question
            </h2>

            <label className="block mb-2 font-medium">Question</label>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Ask your question..."
                value={question}
                onChange={(e) => setquestion(e.target.value)}
                className="flex-1 px-4 py-2 border border-[#B7A3E3] rounded-lg outline-none focus:ring-2 focus:ring-[#B7A3E3]"
              />

              <Button
                text="Send"
                className="bg-[#B7A3E3]"
                onClick={askAi}
              />
            </div>
          </div>

          {/* Answer Section */}
          <div className="flex-1 border-2 border-[#BBD5DA] rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#BBD5DA] mb-4">
              Answer
            </h2>

            {loading ? (
              <div className="min-h-[250px] rounded-lg bg-gray-50 p-4">
                Thinking a little long for better answer....
              </div>
            ) : (
              <div className="min-h-[250px] rounded-lg bg-gray-50 p-4">
                {answer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;