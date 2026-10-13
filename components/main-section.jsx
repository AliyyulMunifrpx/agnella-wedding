"use client";

import Image from "next/image";
import Link from "next/link";
import { information } from "../data/information.js";

export default function MainSection() {
  return (
    <div className="bg-primary h-[100dvh] w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-3 overflow-hidden">
      {/* 1. BACKGROUND IMAGE */}
      <div className="relative row-start-1 z-0 row-end-2 mt-16 md:mt-0 col-start-1 bg-white lg:col-span-full lg:row-span-full overflow-hidden">
        <Image
          alt="Background Image"
          src="/assets/main/background.webp"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. HEADLINE & SUBTITLE */}
      <div className="col-start-1 lg:col-end-4 my-auto z-10 row-start-2 px-4">
        <h2 className="text-3xl lg:text-7xl text-center text-second lg:text-white leading-tight">
          We Create Moments <br />
          <span className="italic">Worth Remembering.</span>
        </h2>
        <h1 className="font-sans text-center text-md mt-8 lg:mt-4 lg:text-2xl font-extralight text-black lg:text-white tracking-[0.3rem]">
          Event & Wedding Planner {information.city}
        </h1>
      </div>

      {/* 3. CTA BUTTON */}
      <div className="lg:col-start-2 lg:col-end-3 z-10 mx-auto my-auto lg:my-0 row-start-3 flex items-center justify-center">
        <Link
          className="text-md font-sans border border-black lg:border-white px-6 py-2.5 rounded-full text-black lg:text-white text-center hover:bg-second hover:text-primary transition-colors duration-300"
          href="#contact"
        >
          PLAN YOUR WEDDING
        </Link>
      </div>
    </div>
  );
}
