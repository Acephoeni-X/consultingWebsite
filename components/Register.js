import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const Register = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      let { name, email, image } = session.user;
      console.log(name, email, image);
    }
  }, [session]);
  return (
    <div class="container h-screen flex justify-center items-center w-full m-auto">
      <div class="p-8 bg-white rounded-lg max-w-6xl pb-10 shadow-md">
        <div class="flex justify-center mb-4">
          <img src="https://i.imgur.com/f6Tb5U1.png" width="70" />
        </div>
        <input
          type="text"
          class="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100"
          placeholder="Email"
        />
        <input
          type="text"
          class="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100"
          placeholder="Password"
        />

        <button class="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800">
          Register
        </button>
        <div class="flex justify-between items-center mt-3">
          <hr class="w-full" /> <span class="p-2 text-gray-400 mb-1" />
          OR
          <span />
          <hr class="w-full" />
        </div>
        <form>
          <input
            type="text"
            class="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100"
            placeholder="Phone Number"
            required
          />
          <button class="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900">
            <i class="fa fa-google mr-2"></i>Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
