import { useState, useEffect } from "react";

const Progress = () => {
  const [raisedAmount, setRaisedAmount] = useState(0);
  const targetAmount = 100000; // $100,000

  useEffect(() => {
    const interval = setInterval(() => {
      setRaisedAmount((prevAmount) =>
        prevAmount < targetAmount ? prevAmount + 1000 : prevAmount
      );
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, []);

  const progress = (raisedAmount / targetAmount) * 100;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Fundraising Progress</h1>
      <div className="w-1/2 h-4 mb-4 bg-blue-500">
        <div
          className="h-full duration-500 ease-in-out bg-green-500 transition-width"
          style={{ width: `${progress}%` }}
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
