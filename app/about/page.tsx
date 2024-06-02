"use client"
import Image from "next/image";
import React from 'react'
import Hero from "@/component/Hero";
import AboutImage from "@/component/AboutImage";
import Footer from "@/component/Footer";

function about() {
  return (
    <div>
       <Hero />
       <AboutImage />
       <Footer />
    </div>
  )
}

export default about