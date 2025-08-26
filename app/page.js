"use client";
import { useState } from "react";

import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";

export default function RecommendationsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://your-link.com/recommend");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex  bg-gray-300">
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
                <button className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-4 py-2 font-medium text-white hover:bg-yellow-500">
                  <MdEmail /> Email
                </button>
                <button className="flex items-center gap-2 rounded-2xl bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">
                  <FaWhatsapp /> WhatsApp
                </button>
                <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                  <FaFacebook /> Facebook
                </button>
                <button className="flex items-center gap-2 rounded-2xl bg-black px-4 py-2 font-medium text-white hover:bg-gray-800">
                  <FaTwitter /> X (Twitter)
                </button>
              </div>
            </div>

            <p className="font-semibold mt-6">Or</p>

            <div className="mt-6">
              <button
                onClick={handleCopy}
                className="rounded-2xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
