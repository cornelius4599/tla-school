"use client"
import Image from "next/image";
import React from 'react'
import HeroOne from "@/component/HeroOne";
import AboutImage from "@/component/AboutImage";
import Academics from "@/component/Academics";
import Footer from "@/component/Footer";

function AcademicsPage() {
  return (
    <div>
       <HeroOne />
       <Academics />
       <Footer />
    </div>
  )
}

export default AcademicsPage