import { useState } from "react";
import QRCode from "qrcode.react"; // Import QRCode component

export default function Form({ network, changeNetwork }) {
  const [address, setAddress] = useState(""); // State to store the selected address

  const btcAddress = "bc1qfp4drfj5aj6dtv4sywqskj6tuuf4tt677yjhqm"; // Replace with the actual BTC address
  const ethAddress = "0xbD613E9AF5d86A0566565B4bd7053Cf1969ECFAD"; // Replace with the actual ETH address
  const xrpAddress = "0xbD613E9AF5d86A0566565B4bd7053Cf1969ECFAD"; // Replace with the actual XRP address

  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const handleCopyClick = (e) => {
    e.preventDefault();

    const selectedAddress =
      network === "btc"
        ? btcAddress
        : network === "eth"
        ? ethAddress
        : network === "xrp"
        ? xrpAddress
        : "";

    copyToClipboard(selectedAddress);

    setAddress(selectedAddress);

    // Provide user feedback
    alert("Address copied to clipboard!");
  };

  return (
    <div className="bg-black">
      <h2>Crypto Address QR-code</h2>
      <form>
        <select className="bg-black" value={network} onChange={changeNetwork}>
          <option hidden disabled value="" className="bg-black">
            Select Crypto Address
          </option>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="xrp">Ripple (XRP)</option>
        </select>
        <input
          type="text"
          className="p-2 mt-2 text-white bg-black border-b border-white"
          value={
            network === "btc"
              ? btcAddress
              : network === "eth"
              ? ethAddress
              : network === "xrp"
              ? xrpAddress
              : "Wallet Address"
          }
          readOnly
          //   placeholder={
          //     network === "btc"
          //       ? "BTC_ADDRESS_HERE"
          //       : network === "eth"
          //       ? "ETH_ADDRESS_HERE"
          //       : network === "xrp"
          //       ? "XRP_ADDRESS_HERE"
          //       : "Wallet Address"
          //   }
        />
        <QRCode
          value={
            network === "btc"
              ? btcAddress
              : network === "eth"
              ? ethAddress
              : network === "xrp"
              ? xrpAddress
              : ""
          }
        />
        <button
          className="p-2 text-white bg-blue-500 rounded"
          onClick={handleCopyClick}
        >
          Copy Address
        </button>
      </form>
      {/* <div>
        {address && <p>Selected Address: {address}</p>}
      </div> */}
    </div>
  );
}
