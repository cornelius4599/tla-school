"use client"
import Image from "next/image";
import WithBackgroundImage from "@/component/WithBackgroundImage";
import SplitWithImage from "@/component/SplitWithImage";
import WithSpeechBubbles from "@/component/WithSpeechBubbles";
import Footer from "@/component/Footer";
import SplitImageSec from "@/component/SplitImageSec";
import SplitThirdImage from "@/component/SplitThirdImage";

export default function Home() {
  return (
   <>
    <WithBackgroundImage />
    <SplitWithImage />
    <SplitImageSec />
    <SplitThirdImage />
    <WithSpeechBubbles />
    <Footer />
   </>
  );
}
