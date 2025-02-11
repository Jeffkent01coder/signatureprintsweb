import React, { useState } from 'react';

function WhyUs() {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const openAlert = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <section id="why-us" className="bg-black text-white px-8 py-16 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Column */}
          <div>
            <img
              src="/images/why.png"
              alt="Why Choose Us Image"
              className="w-full lg:w-[508px] h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Right Column */}
          <div className="max-w-lg space-y-6">
            {/* Title */}
            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-gold"></div>
              <h2 className="text-4xl font-bold text-white">
                WHY <span className="text-gold">CHOOSE</span> US
              </h2>
            </div>
            {/* Paragraph */}
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
            {/* Ordered List */}
            <ol className="list-decimal space-y-4 pl-6">
              <li>High Quality Products</li>
              <li>High Quality Plain Clothes</li>
              <li>High Quality Products</li>
              <li>High Quality Products</li>
            </ol>
            {/* Get Started Button */}
            <button
              id="get-started-btn"
              onClick={openAlert}
              className="border border-white px-6 py-2 rounded hover:bg-gold hover:text-black transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* Alert Box (Shared Functionality) */}
      {isAlertVisible && (
        <div
          id="get-started-alert"
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-80 text-black">
            <button
              id="close-alert"
              onClick={closeAlert}
              className="self-end text-xl text-black float-right"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Get Started</h2>
            <div className="flex items-center border rounded px-3 py-2 mb-4">
              <span className="material-icons text-gray-400">email</span>
              <input
                type="email"
                placeholder="Enter email"
                className="ml-2 outline-none w-full"
              />
            </div>
            <button
              className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gold hover:text-black transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default WhyUs;
