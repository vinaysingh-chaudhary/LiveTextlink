import { useEffect, useState } from "react";
import {BsTwitter} from 'react-icons/bs'

function App() {
  let [string, setString] = useState("Twitter.com/Viisactive ");

  const stringHandler = () => {

    const interval = 800;

    setTimeout( ()=>{
      string = string[string.length - 1] + string.substring(0, string.length - 1);
      setString(string);
    }, interval);
  };

  useEffect(() => {
    stringHandler(() => {});
  });

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex  justify-center items-center gap-2 bg-gray-300">
        <a href="https://twitter.com/Viisactive" className=" w-[20%] text-2xl transition-all delay-70 duration-200 ease flex  justify-evenly items-center cursor-pointer hover:scale-[1.1] hover:text-[#1DA1F2] "> <span><BsTwitter className="text-4xl text-[#1DA1F2]"/></span>{string}</a>
      </div>
    </>
  );
}

export default App;
