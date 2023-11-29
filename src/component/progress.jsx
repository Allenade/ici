// App.js

// App.js

import { useState, useEffect } from "react";

const Progress = () => {
  const [raisedAmount, setRaisedAmount] = useState(0);
  const targetAmount = 100000000; // $100 million

  useEffect(() => {
    const interval = setInterval(() => {
      setRaisedAmount((prevAmount) =>
        prevAmount < targetAmount ? prevAmount + 100000 : prevAmount
      );
    }, 6000); // 600000 milliseconds = 10 minutes

    return () => clearInterval(interval);
  }, []);

  const progress = (raisedAmount / targetAmount) * 100;

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold ">Fundraising Progress</h1>
      <div className="w-1/2 h-4 mb-4 bg-blue-500">
        <div
          className={`bg-green-500 h-full transition-width duration-500 ease-in-out w-${progress}`}
        ></div>
      </div>
      <p>
        Raised: ${raisedAmount.toLocaleString()} | Target: $
        {targetAmount.toLocaleString()}
      </p>
    </div>
  );
};

export default Progress;
