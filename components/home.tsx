import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogEmail, setDialogEmail] = useState("");

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const sendDialogMessage = () => {
    // Construct the message text using the email input
    const messageText = `Email: ${dialogEmail}`;
    const encodedText = encodeURIComponent(messageText);
    // Construct the WhatsApp URL (without the '+' sign)
    const whatsappUrl = `https://wa.me/254116098958?text=${encodedText}`;
    // Open the WhatsApp URL in a new tab or window
    window.open(whatsappUrl, "_blank");
    // Optionally close the dialog after sending
    setShowDialog(false);
  };

  return (
    <>
      <section
        id="home"
        className="h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-8 py-16 lg:px-32"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Column */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-black font-bold text-4xl md:text-6xl">
              Signature Prints <br />
              Your Partner in Exceptional Branding
            </h1>
            <p className="text-black mt-4 text-lg">
              From cloth customization to stunning graphic designs, we bring your
              ideas to life with quality and precision.
            </p>
            <button
              onClick={openDialog}
              className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              Get Started
            </button>
          </div>
          {/* Right Column */}
          <div>
            <img
              src="/images/landing.png"
              alt="Branding Items"
              className="w-full lg:w-[1450px] h-auto max-w-full fade-bounce"
            />
          </div>
        </div>
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slowBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .fade-bounce {
            /* First, run fadeInUp over 0.5s, then start slowBounce after a 0.5s delay */
            animation: fadeInUp 0.5s ease forwards, slowBounce 3s ease-in-out 0.5s infinite;
          }
        `}</style>
      </section>

      {/* Get Started Dialog */}
      {showDialog && (
        <div
          id="get-started-alert"
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-black relative transition transform duration-300">
            <button
              onClick={closeDialog}
              className="absolute top-2 right-2 text-xl text-black hover:text-gray-600 transition"
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
                value={dialogEmail}
                onChange={(e) => setDialogEmail(e.target.value)}
              />
            </div>
            <button
              onClick={sendDialogMessage}
              className="bg-black text-white px-4 py-2 rounded w-full hover:bg-yellow-400 hover:text-black transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
