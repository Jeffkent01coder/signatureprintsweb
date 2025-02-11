import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home";
import About from "@/components/about";
import ServicesAndRecents from "@/components/servicesandrecents";
import WhyUs from "@/components/whyus";
import ContactUs from "@/components/contactus";
import ClientCounter from "@/components/stats"

function Home() {
  return (
    <Layout>
      <main>
        <HeroSection/>
        <About/>
        <ServicesAndRecents/>
        <WhyUs/>
        <ContactUs/>
        <ClientCounter/>
      </main>
    </Layout>
  );
}

export default Home;
