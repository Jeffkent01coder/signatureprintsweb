import React from "react";

const About: React.FC = () => {
  return (
    <section id="aboutus" className="bg-black text-white px-8 py-16 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Column */}
        <div className="fade-in-up">
          <img
            src="/images/about.png"
            alt="About Us Image"
            className="w-full lg:w-[700px] h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Right Column */}
        <div className="text-center lg:text-left max-w-lg space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-1 w-12 bg-yellow-500"></div>
            <h2 className="text-4xl text-yellow-500 font-bold">About Us</h2>
          </div>
          <p className="text-white">
            Welcome to Signature Prints, where creativity meets precision to
            bring your branding dreams to life. Established with a passion for
            delivering top-notch branding solutions, we pride ourselves on
            exceeding customer expectations and setting industry standards.
          </p>
          <h3 className="text-yellow-500 text-2xl text-yellow-500 font-semibold mt-4">WHAT WE DO</h3>
          <p>
          <span className="text-yellow-500">Cloth Branding:</span> We transform plain textiles into striking,
            customized pieces that reflect your brand&apos;s identity or
            personal style.
          </p>
          <p>
          <span className="text-yellow-500">Plain Cloth Delivery:</span> Need plain, high-quality fabrics? We&apos;ve
            got you covered with a wide selection of textiles suitable for
            diverse needs.
          </p>
          <p>
          <span className="text-yellow-500">Product Branding:</span> Elevate your products with unique, eye-catching
            designs tailored to your audience.
          </p>
          <p>
          <span className="text-yellow-500"> Graphic Design:</span> Our team of talented designers crafts visually
            compelling graphics that tell your story.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className="bg-[#FDDF76] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="/images/commit.png"
            alt="Card Image 1"
            className="w-full lg:w-[100px] h-auto mx-auto"
          />
          <p className="text-center mt-4 text-black">
            We are dedicated to offering exceptional service, timely delivery,
            and unmatched quality in every project we undertake. At Signature
            Prints, we prioritize customer satisfaction, ensuring that every
            design, print, and delivery exceeds expectations. Your brand’s
            success is our commitment!
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#CAF4D9] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="/images/mission.png"
            alt="Card Image 2"
            className="w-full lg:w-[100px] h-auto mx-auto"
          />
          <p className="text-center mt-4 text-black">
            At Signature Prints, our mission is to provide high-quality
            branding, design, and printing solutions that help businesses and
            individuals create a strong and lasting impression. We are committed
            to delivering innovative, customized, and reliable services,
            ensuring that every product reflects excellence and creativity
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#CDE0F2] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="/images/vision.png"
            alt="Card Image 3"
            className="w-full lg:w-[100px] h-auto mx-auto"
          />
          <p className="text-center mt-4 text-black">
            Our vision is to be Kenya’s leading provider of product branding,
            cloth branding, graphic design, and plain cloth delivery services.
            We aim to set the standard for quality, innovation, and customer
            satisfaction, empowering businesses and individuals to enhance their
            brand identity and market presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
