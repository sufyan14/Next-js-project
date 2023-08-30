"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ecfccb]">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="font-sans text-2xl font-semibold mb-4 text-black">
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Type your name..."
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#a3e635] hover:bg-[#4d7c0f] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
