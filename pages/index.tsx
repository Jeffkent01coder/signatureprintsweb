import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home";
import About from "@/components/about";
import ServicesAndRecents from "@/components/servicesandrecents";

function Home() {
  return (
    <Layout>
      <main>
        <HeroSection/>
        <About/>
        <ServicesAndRecents/>
      </main>
    </Layout>
  );
}

export default Home;
