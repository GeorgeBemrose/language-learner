"use client"
import Footer from "@/components/Footer";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [destinationLanguage, setDestinationLanguage] = useState("French");
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TextBox label="Detected Language"/>
        <TextBox label={destinationLanguage}/>
        <TextBox label="Phonetic Pronunciation"/>
      </main>
      <Footer/>
    </div>
  );
}
