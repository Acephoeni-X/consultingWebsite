import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import GoogleLogin from "./GoogleLogin";

async function makeRequest(query) {
  console.log(query);
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  };
  const response = await fetch("/api/query/addquery", config);
  if (response.ok) {
    console.log(await response.json());
  }
}

const BookConsultant = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setphNo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setbody] = useState("");

  useEffect(() => {
    if (session) {
      var { name, email } = session.user;
      setName(name);
      setEmail(email);
    }
  }, [session]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let query = {
      name: name,
      email: email,
      phNo: phNo,
      subject: subject,
      body: body,
    };
    // console.log(query);
    makeRequest(query);
  };

  return (
    <div className="bg-gray-200 w-full h-screen">
      {name && (
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto flex align-middle justify-center flex-col md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md z-10 p-8">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Book A Consultant
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              You will recieve a mail/ call as soon as agent is reachable to you
              !!
            </p>
            <div className="relative mb-4">
              <label htmlFor="Name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="Name"
                id="Name"
                name="Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                defaultValue={name}
                readOnly
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                defaultValue={email}
                readOnly
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Phone Number"
                className="leading-7 text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="Number"
                id="Number"
                name="Number"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoFocus
                value={phNo}
                onChange={(e) => {
                  setphNo(() => e.target.value);
                }}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Subject"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="Subject"
                id="Subject"
                name="Subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="body" className="leading-7 text-sm text-gray-600">
                body
              </label>
              <textarea
                id="body"
                name="body"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => {
                  setbody(e.target.value);
                }}
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </form>
      )}
      {!name && <GoogleLogin />}
    </div>
  );
};

export default BookConsultant;
