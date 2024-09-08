import React from "react";
import run from "../conf/gemini";
import { useState } from "react";
import { assets } from "../../assets/assets";
import Loader from "../Loader/Loader";
import { useDispatch } from 'react-redux';
import { addToHistory } from "../App/Slice";
import FormattedResponse from "../FormattedResponse/FormattedResponse";

function Main_com({ extended, input_prompt, setInput_prompt, display_info, setDisplay_info }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const sendPromptEvent = () => {
    async function getResponse(input_prompt) {
        setLoading(true);
        try {
            const data = await run(input_prompt);
            setDisplay_info(data);
            console.log('Dispatching:', { input_prompt, display_info: data });
            dispatch(addToHistory({ input_prompt, display_info: data }));
        } catch (error) {
            console.log("error at main ", error);
        } finally {
            setLoading(false);
        }
    }
    
    getResponse(input_prompt);
    setInput_prompt("");
  };

  return (
    <div className={`${
      extended ? "w-[calc(100%-14rem)]" : "w-[calc(100%-3.5rem)]"
    } transition-all duration-700 bg-gray-100`}>
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-gray-100 shadow-sm">
        <div className="text-lg font-semibold text-gray-800">Gemini</div>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      {display_info ? 
        <div className="h-[calc(100%-11rem)] p-5 flex flex-col ml-5 overflow-auto">
            <div className="flex gap-3 mb-5">
                <img className="w-8 rounded-full" src={assets.user_icon} /> 
                <div className="font-semibold">mihir.ai</div>
            </div>
            <p className="ml-7">{input_prompt}</p>
            {loading ? <Loader /> :  <FormattedResponse text={display_info} /> }
        </div>
        : 
        <div className="p-5 flex flex-col justify-center items-center ml-10 mt-20">
          <h1 className="text-4xl font-bold text-gray-700">
            Hello, <span className="text-blue-500">Dev</span>.
          </h1>
          <h2 className="text-2xl font-light text-gray-400 mt-2">
            How can I help you today?
          </h2>

          {/* Content buttons */}
          <div className="flex mt-8 gap-4 mb-52">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <p className="text-sm text-gray-600 text-center">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <span className="mt-2 text-gray-500">📝</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <p className="text-sm text-gray-600 text-center">
                Briefly summarize this concept: urban planning
              </p>
              <span className="mt-2 text-gray-500">💡</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <p className="text-sm text-gray-600 text-center">
                Brainstorm team bonding activities for our work retreat
              </p>
              <span className="mt-2 text-gray-500">💬</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <p className="text-sm text-gray-600 text-center">
                Improve the readability of the following code
              </p>
              <span className="mt-2 text-gray-500">📄</span>
            </div>
          </div>
        </div>
      }

      {/* Input section - positioned at the bottom */}
      <div className="bg-white flex items-center w-3/5 p-3 rounded-full shadow-md m-auto">
        <input
          value={input_prompt}
          onChange={(e) => setInput_prompt(e.target.value)}
          type="text"
          placeholder="Enter a prompt here"
          className="flex-1 bg-transparent outline-none text-gray-600"
        />
        <div className="flex gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <span role="img" aria-label="Emoji">😊</span>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <span role="img" aria-label="Microphone">🎤</span>
          </button>
          <button 
            onClick={sendPromptEvent}
            className="text-gray-500 hover:text-gray-700"
          >
            <span role="img" aria-label="Send">➤</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main_com;
