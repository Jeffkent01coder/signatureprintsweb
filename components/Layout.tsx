import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the "Back to Top" button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <noscript>
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            Please enable JavaScript to ensure the best experience.
          </div>
        </noscript>
        {children}
      </main>
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Layout;
