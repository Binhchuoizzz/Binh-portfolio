"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import FixedMenu from "@/components/FixedMenu";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </div>
  );
}
