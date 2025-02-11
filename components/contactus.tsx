import React from 'react';

function ContactUs() {
  return (
    <section id="get-in-touch" className="bg-white px-8 py-16 lg:px-32">
      {/* Section Title */}
      <div className="text-left mb-12">
        <div className="flex items-center space-x-4">
          <div className="h-1 w-12 bg-gold"></div>
          <h2 className="text-4xl font-bold text-black">
            Get in <span className="text-gold">Touch</span>
          </h2>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-white border border-gold rounded-lg p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">Contact Us</h3>
          <form action="#" method="POST" className="space-y-4">
            {/* Name Field */}
            <div className="flex items-center border border-gold rounded px-3 py-2">
              <span className="material-icons text-gold">person</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="ml-2 w-full outline-none"
              />
            </div>
            {/* Email Field */}
            <div className="flex items-center border border-gold rounded px-3 py-2">
              <span className="material-icons text-gold">email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="ml-2 w-full outline-none"
              />
            </div>
            {/* Phone Field */}
            <div className="flex items-center border border-gold rounded px-3 py-2">
              <span className="material-icons text-gold">phone</span>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="ml-2 w-full outline-none"
              />
            </div>
            {/* Send Button */}
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
            >
              Send
            </button>
          </form>
          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone text-black text-2xl"></i>
              <div>
                <p className="text-black font-semibold">Phone</p>
                <p className="text-black">0712345678</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope text-black text-2xl"></i>
              <div>
                <p className="text-black font-semibold">Email</p>
                <p className="text-black">info@signature.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Map) */}
        <div className="bg-gold rounded-lg p-4">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.64306483078!2d36.70730641247678!3d-1.303205166967606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1739b091cb91%3A0x9efdb45aa89f666a!2sNairobi!5e0!3m2!1sen!2ske!4v1695481740124!5m2!1sen!2ske"
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
