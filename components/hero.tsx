"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Search } from "./search";

export function Hero() {
  return (
    <div className="min-h-screen bg-no-repeat  bg-center bg-cover bg-hero pt-10 w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="relative">
        <div className="text-4xl  font-bold text-center text-white relative z-20">
          <Search />
        </div>
        <div className="inset-0 absolute">
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
}
