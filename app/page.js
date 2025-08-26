"use client";
import { useState } from "react";
import { FaFacebook, FaWhatsapp, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";

export default function RecommendationsPage() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("https://your-link.com/recommend");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenModal = (channel) => {
    setSelectedChannel(channel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessage("");
  };

  const handleSend = () => {
    console.log("Sending via:", selectedChannel, "Message:", message);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex bg-gray-300">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <Tabs />
          <div className="flex flex-col items-center py-20 px-10 bg-gray-50 rounded-2xl h-[700px] mt-8 mx-10">
            <h2 className="text-2xl font-semibold">Hey Champ!</h2>
            <p className="text-2xl font-semibold">
              It looks like you don’t have any
            </p>
            <p className="text-2xl font-semibold">recommendations yet</p>

            <p className="text-gray-500 text-sm text-center max-w-md">
              But don’t worry, you can always request for recommendations from
              your colleagues, friends and family.
            </p>

            <div className="mt-8 flex flex-col items-center border-2 border-dashed border-gray-200 rounded-xl p-6">
              <p className="mb-4 font-medium text-gray-700">
                Ask for recommendations via:
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                <button
                  onClick={() => handleOpenModal("email")}
                  className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-4 py-2 font-medium text-white hover:bg-yellow-500"
                >
                  <MdEmail /> Email
                </button>
                <button
                  onClick={() => handleOpenModal("whatsapp")}
                  className="flex items-center gap-2 rounded-2xl bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600"
                >
                  <FaWhatsapp /> WhatsApp
                </button>
                <button
                  onClick={() => handleOpenModal("facebook")}
                  className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                >
                  <FaFacebook /> Facebook
                </button>
                <button
                  onClick={() => handleOpenModal("twitter")}
                  className="flex items-center gap-2 rounded-2xl bg-black px-4 py-2 font-medium text-white hover:bg-gray-800"
                >
                  <FaXTwitter /> X (Twitter)
                </button>
              </div>
            </div>

            <p className="font-semibold mt-6">Or</p>

            <div className="mt-6 flex">
              <div className="py-2 w-[600px] border border-gray-300 bg-gray-200 flex rounded-2xl justify-between ">
                <div className="p-3">
                  <p>Link that can be copied</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="rounded-2xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>

          {showModal && (
  <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl relative">
      
  
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
      >
        ✕
      </button>

      <h3 className="text-md font-semibold mb-4">
        Get Recommendation via {selectedChannel.toUpperCase()}
      </h3>
      <div className="border-b border-gray-300"></div>

      
      <div className="mt-6 px-15">
        <p className="mt-10">
        Me across container skulls but, feature boils thats staircase managing
        across expiratory requirements next looking. Bells people third
        row-hanging incentivize banner 4-blocker whatever incentivization
        previous boy open best the support.
      </p>
       
      </div>

      <p className=" mt-10 px-15 ">Sample of customized message</p>

      <div className="relative w-full mt-4">
         <input
          type="text"
          placeholder={
            selectedChannel === "email"
              ? "input recipient email address"
              : selectedChannel === "twitter"
              ? "input recipient X (Twitter) handle"
              : selectedChannel === "facebook"
              ? "input recipient Facebook username"
              : "input recipient WhatsApp number"
          }
          className="w-full border border-gray-300 rounded-2xl p-3 text-sm outline-none"
        />
        
        <button
          onClick={handleSend}
          className="absolute bottom-0 right-0 px-4 py-2 mr-1 mb-1 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  </div>
)}


    
        </main>
      </div>
    </div>
  );
}
