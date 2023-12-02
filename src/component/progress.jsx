import { useState, useEffect } from "react";

const Progress = () => {
  const targetAmount = 2000000; // $100,000
  const [raisedAmount, setRaisedAmount] = useState(() => {
    // Retrieve the value from local storage, or use 0 if not present
    const storedAmount = localStorage.getItem("raisedAmount");
    return storedAmount ? parseInt(storedAmount, 10) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRaisedAmount((prevAmount) =>
        prevAmount < targetAmount ? prevAmount + 10000 : prevAmount
      );
    }, 7000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, [targetAmount]);

  useEffect(() => {
    // Save the raisedAmount to local storage whenever it changes
    localStorage.setItem("raisedAmount", raisedAmount.toString());
  }, [raisedAmount]);

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
