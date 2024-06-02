"use client"
import Image from "next/image";
import React from 'react'
import HeroThree from "@/component/HeroThree";
import AboutImage from "@/component/AboutImage";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

function ContactPage() {
  return (
    <div>
       <HeroThree />
       <Contact />
       <Footer />
    </div>
  )
}

export default ContactPage