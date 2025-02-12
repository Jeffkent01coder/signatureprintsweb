import React, { useState } from "react";

function WhyUs() {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertEmail, setAlertEmail] = useState("");

  const openAlert = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const sendAlertMessage = () => {
    // Construct the message text using the email input
    const messageText = `Email: ${alertEmail}`;
    const encodedText = encodeURIComponent(messageText);
    // WhatsApp URL using your number (without the '+' sign)
    const whatsappUrl = `https://wa.me/254116098958?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    // Optionally, close the alert after sending
    setAlertVisible(false);
  };

  return (
    <>
      <section id="why-us" className="bg-black text-white px-8 py-16 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Column */}
          <div>
            <img
              src="/images/whypj.png"
              alt="Why Choose Us Image"
              className="w-[508px] lg:w-[1000px] h-[400px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="max-w-lg mr-8 space-y-6">
            {/* Title */}
            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-yellow-500"></div>
              <h2 className="text-4xl font-bold text-white">
                WHY <span className="text-yellow-500">CHOOSE</span> US
              </h2>
            </div>
            {/* Paragraph */}
            <p>
              At Signature Prints, we are committed to providing top-tier
              product branding, cloth branding, graphic design, and plain cloth
              delivery services across Kenya. Our team of experts ensures
              precision, creativity, and quality in every project, helping
              businesses and individuals establish a strong brand presence. With
              a focus on innovation and customer satisfaction, we guarantee that
              our services will not only meet but exceed your expectations.
              Partner with us today and let us bring your vision to life!
            </p>
            {/* Ordered List */}
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <span className="text-yellow-500">
                  <b>High-Quality Designs & Prints</b>
                </span>{" "}
                – We use top-notch materials and cutting-edge technology to
                ensure every design, print, or branded product meets the highest
                standards.
              </li>
              <li>
                <span className="text-yellow-500">
                  <b>Reliable & Timely Delivery</b>
                </span>{" "}
                – Whether it’s plain cloth, branded fabrics, or graphic designs,
                we guarantee prompt delivery across Kenya.
              </li>
              <li>
                <span className="text-yellow-500">
                  <b>Customized Solutions</b>
                </span>{" "}
                – We tailor our services to match your specific needs, ensuring
                your brand stands out with unique and personalized designs.
              </li>
              <li>
                <span className="text-yellow-500">
                  <b>Affordable & Competitive Pricing</b>
                </span>{" "}
                – We offer quality branding and design solutions at fair prices,
                making professional branding accessible to businesses of all
                sizes.
              </li>
            </ol>
            {/* Get Started Button */}
            <button
              id="get-started-btn"
              onClick={openAlert}
              className="border border-white px-6 py-2 rounded hover:bg-yellow-700 hover:text-yellow-500 transition"
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
                value={alertEmail}
                onChange={(e) => setAlertEmail(e.target.value)}
              />
            </div>
            <button
              onClick={sendAlertMessage}
              className="bg-black text-white px-4 py-2 rounded w-full hover:bg-yellow-500 hover:text-black transition"
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
