 'use client'
import { useState } from "react";

export default function SignIn() {

  const [email, setEmail] = useState("");

  // shop button function
  const handleShopLogin = () => {
    alert("Shop login clicked");
    // yaha redirect bhi kar sakte hain
    // router.push("/shop")
  };

  // email login
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(!email){
      alert("Please enter email");
      return;
    }

    alert("Email submitted: " + email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        <h1 className="text-center text-xl sm:text-2xl font-semibold mb-6">
          Tulsava
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold">
          Sign in
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-1 mb-6">
          Sign in or create an account
        </p>

        {/* Continue with shop */}
        <button
          onClick={handleShopLogin}
          className="w-full py-3 rounded-xl text-white font-medium 
          bg-gradient-to-r from-purple-600 to-indigo-600 
          hover:opacity-90 transition"
        >
          Continue with shop
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
            font-medium hover:bg-blue-700 transition"
          >
            Continue
          </button>

        </form>

      </div>

    </div>
  );
}
