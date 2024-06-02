"use client"
import Image from "next/image";
import React from 'react'
import HeroTwo from "@/component/HeroTwo";
import AboutImage from "@/component/AboutImage";
import Admission from "@/component/Admission";
import Footer from "@/component/Footer";

function AdmissionPage() {
  return (
    <div>
       <HeroTwo />
       <Admission />
       <Footer />
    </div>
  )
}

export default AdmissionPage