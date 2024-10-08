import patternLeft from "../Utilities/images/pattern-divider-desktop.svg";
import dice from "../Utilities/images/icon-dice.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import load from "../src/assets/loading/load.gif";
const App = () => {
  const [quote, setQuote] = useState("");
  const [quoteId, setQuoteId] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    try {
      axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response.data.slip.advice);
        setQuote(response.data.slip.advice);
        setQuoteId(response.data.slip.id);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, [1000]);
  }, []);

  return (
    <div className="bg-black h-screen flex justify-center items-center px-2 overf">
      <div className="bg-[#17153B] w-[100%] h-[350px] text-white flex flex-col justify-center items-center py-8 text-center rounded-xl relative md:w-[60%] md:h-[300px]">
        {loading ? (
          <img src={load} />
        ) : (
          <>
            <h1 className="tracking-widest text-[#40F8FF] font-extrabold text-[1.1rem] mb-6">
              ADVICE #{quoteId}
            </h1>
            <div className="overflow-auto h-[100vh]">
              <p className="break-words font-bold w-[20rem] md:w-[100%] md:px-2 text-[2.3rem]  ">
                &quot;{quote}&quot;
                {/* &quot;{quote}&quot; */}
              </p>
            </div>

            <div
              onClick={fetchData}
              className="h-[80px] transform -translate-x-1/2 bottom-[-40px] left-[50%] w-[80px] absolute bg-[#40F8FF] flex justify-center items-center rounded-full z-[100]"
            >
              <img src={dice} className="bg-white w-[30px]" alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
