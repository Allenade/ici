import { useState, useEffect } from "react";

const Progress = () => {
  const targetAmount = 1000000000; // $2,000,000
  const intervalDuration = 7000; // 7000 milliseconds = 7 seconds
  const restartDelay = 5000; // 5000 milliseconds = 5 seconds

  const [raisedAmount, setRaisedAmount] = useState(() => {
    // Retrieve the value from local storage, or use 0 if not present
    const storedAmount = localStorage.getItem("raisedAmount");
    return storedAmount ? parseInt(storedAmount, 10) : 0;
  });

  useEffect(() => {
    const updateProgress = () => {
      setRaisedAmount((prevAmount) => {
        if (prevAmount < targetAmount) {
          return prevAmount + 100;
        } else {
          // Wait for the restart delay and then reset raisedAmount to 0
          setTimeout(() => {
            setRaisedAmount(0);
          }, restartDelay);
          return prevAmount;
        }
      });
    };

    const interval = setInterval(updateProgress, intervalDuration);

    return () => clearInterval(interval);
  }, [targetAmount, intervalDuration, restartDelay]);

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
