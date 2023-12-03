import { useState } from "react";
import QRCode from "qrcode.react"; // Import QRCode component

export default function Form({ network, changeNetwork }) {
  const [address, setAddress] = useState(""); // State to store the selected address

  const btcAddress = "bc1qfp4drfj5aj6dtv4sywqskj6tuuf4tt677yjhqm"; // Replace with the actual BTC address
  const ethAddress = "0xbD613E9AF5d86A0566565B4bd7053Cf1969ECFAD"; // Replace with the actual ETH address
  const usdtAddress = "0xbD613E9AF5d86A0566565B4bd7053Cf1969ECFAD"; // Replace with the actual USDT address

  const handleCopyClick = (e) => {
    e.preventDefault();

    const selectedAddress =
      network === "btc"
        ? btcAddress
        : network === "eth"
        ? ethAddress
        : network === "usdt" // Change from "xrp" to "usdt"
        ? usdtAddress
        : "";

    copyToClipboard(selectedAddress);

    setAddress(selectedAddress);

    // Provide user feedback
    alert("Address copied to clipboard!");
  };

  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="mb-4 text-xl font-semibold text-black">
        Crypto Address QR-code
      </h2>
      <form className="flex flex-col space-y-4">
        <select
          className="p-2 text-black border-b border-white"
          value={network}
          onChange={changeNetwork}
        >
          <option hidden disabled value="">
            Select Crypto Address
          </option>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="usdt">USDT (Erc20)</option>
        </select>

        <input
          type="text"
          className="p-2 text-white bg-black border-b border-white"
          value={
            network === "btc"
              ? btcAddress
              : network === "eth"
              ? ethAddress
              : network === "usdt"
              ? usdtAddress
              : "Wallet Address"
          }
          readOnly
        />
        <button
          className="p-1 text-white bg-blue-500 rounded"
          onClick={handleCopyClick}
        >
          Copy Address
        </button>
        <div className="flex items-center justify-center">
          {network && (
            <QRCode
              value={
                network === "btc"
                  ? btcAddress
                  : network === "eth"
                  ? ethAddress
                  : network === "usdt"
                  ? usdtAddress
                  : ""
              }
            />
          )}
        </div>
      </form>
    </div>
  );
}
