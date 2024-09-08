import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Main_com from "../Main_com/Main_com"; // Import Main_com component
import { useSelector } from "react-redux";

function Sidebar() {
  const [extended, setExtended] = useState(true);
  const [input_prompt, setInput_prompt] = useState(""); // State for input prompt
  const [display_info, setDisplay_info] = useState(""); // State for display info
  const [display_prompt, setdisplay_prompt] = useState("")

  // Toggle sidebar extension
  const handleClick = () => {
    setExtended(!extended);
  };

  // Clear input and display info for new chat
  const handleNewChatEvent = () => {
    setDisplay_info("");
    setInput_prompt("");
  };

  // Select history from Redux store
  const history = useSelector(state => state.history.history); // Access history state correctly
  console.log(history);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`${extended ? 'w-56' : 'w-14'} transition-all duration-500 min-h-screen flex flex-col bg-gray-200`}>
        <div className="m-3" onClick={handleClick}>
          <img className="w-7" src={assets.menu_icon} alt="Menu Icon" />
        </div>

        <div onClick={handleNewChatEvent} className="flex text-center rounded-3xl h-9 shadow-md ml-2 space-x-3">
          <img className="w-6 ml-2" src={assets.plus_icon} alt="Plus Icon" />
          {extended && <div className="text-sm flex items-center">New Chat</div>}
        </div>

        {/* Other sidebar content */}
        <div className="grid grid-rows-10 mt-5">
          <div className="flex flex-col row-span-8 w-auto">
            {extended ? <div className="mb-2 ml-2 font-semibold text-lg">Recent</div> : <img className="w-10 ml-2 mb-3" src={assets.message_icon} alt="Message Icon" />}
            {extended && (
              <div>
                {history.map((eachSearch, index) => (
                  <div 
                  onClick={(e)=>(
                    setDisplay_info(eachSearch.response) , 
                    setdisplay_prompt(eachSearch.prompt)
                  )}
                  key={index} 
                  className={`truncate overflow-hidden whitespace-nowrap text-ellipsis pl-5 pt-2 pb-2  w-56 rounded-lg ${index % 2 == 0 ? 'bg-gray-100' : null }`}>{eachSearch.prompt}</div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col row-span-2">
            {/* Help, Activity, and Setting */}
            <div className="hover:bg-blue-100 ml-3 flex text-center h-10 w-auto place-items-center space-x-9 text-sm rounded-3xl">
              <img className="w-5 ml-2" src={assets.question_icon} alt="Help Icon" />
              {extended && <div className="w-11">Help</div>}
            </div>

            <div className="hover:bg-blue-100 ml-3 flex text-center h-10 w-auto place-items-center space-x-9 text-sm rounded-3xl">
              <img className="w-5 ml-2" src={assets.history_icon} alt="Activity Icon" />
              {extended && <div className="w-11">Activity</div>}
            </div>

            <div className="hover:bg-blue-100 ml-3 flex text-center h-10 w-auto place-items-center space-x-9 text-sm rounded-3xl">
              <img className="w-5 ml-2" src={assets.setting_icon} alt="Setting Icon" />
              {extended && <div className="w-11">Setting</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Main_com 
        extended={extended}
        input_prompt={input_prompt} 
        setInput_prompt={setInput_prompt} 
        display_info={display_info} 
        setDisplay_info={setDisplay_info}
        display_prompt={display_prompt}
        setdisplay_prompt={setdisplay_prompt}
      />
    </div>
  );
}

export default Sidebar;
