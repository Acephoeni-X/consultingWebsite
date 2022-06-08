import React from "react";

const HomePage = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-2 mx-auto">
        <div className="flex flex-wrap align-middle justify-start">
          <div className=" md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-2">
              Facing challenges in growing business beyond your local network
              feeling limited with opportunities?
            </h2>
            <p className="leading-relaxed mb-8">
              You are at the right place for a solution "AAKASH MARKET" is a
              global portal helping buyers & sellers shake hands.
              <br></br>
              We integrate different verticals of business namely :<br></br>
              <ul className="list-none">
                <li>- Agriculture</li>
                <li>- Industrial</li>
                <li>- Hospitality</li>
                <li>- Health & Wellness</li>
                <li>- Machinery</li>
                <li>- Construction</li>
                <li>- Apparrels</li>
                <li>- Chemicals</li>
                <li>- Automobile</li>
                <li>- Metals</li>
                <li>- Mining Equipment’s</li>
                <li>- Geological and Earth Science</li>
                <li>- Textiles</li>
                <li>- Cosmetics</li>
                <li>- Engineering Consulting</li>
                <li>- Telecom</li>
                <li>- Sports equipment’s</li>
              </ul>
            </p>
            <div>
              <b>What are you waiting for Contact Us and grow your business.</b>
            </div>
          </div>
          <div className=" md:w-1/2 flex flex-col items-start ">
            <img src="https://m.economictimes.com/thumb/msid-86632118,width-1599,height-1066,resizemode-4,imgsize-55278/jeff-bezos.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
