"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FFF8F0] text-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg space-y-6">
        <h1 className="text-5xl font-extrabold text-[#1f1301] drop-shadow-lg">
          Oops!
        </h1>
        <p className="text-lg text-[#6b4f1d]">
          Something went wrong. We couldn't find the page you were looking for.
        </p>
        <br />
        <Link href="/" passHref>
          <button className="bg-[#6b4f1d] text-white px-6 py-3 rounded-full hover:bg-[#845c1f] transition-transform transform hover:scale-105 shadow-md">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
