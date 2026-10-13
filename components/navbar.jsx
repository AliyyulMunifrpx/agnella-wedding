"use client";

import { useState } from "react";
import Link from "next/link";
import { information } from "../data/information.js";
import Image from "next/image.js";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-primary font-sans font-extralight text-black px-4 lg:px-16 py-4">
      <div className="w-full flex items-center justify-between">
        {/* === KIRI: LOGO === */}
        <div className="flex items-center font-bold text-xl">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/logo.webp"
              alt={information.name}
              width={600}
              height={600}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* === KANAN: MENU DESKTOP (Langsung di-expand) === */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16">
          <Link
            href="#weddings"
            className="hover:text-second transition-colors"
          >
            Weddings
          </Link>
          <Link
            href="#packages"
            className="hover:text-second transition-colors"
          >
            Packages
          </Link>
          <Link href="#contact" className="hover:text-second transition-colors">
            Contact
          </Link>
        </nav>

        {/* === TOMBOL HAMBURGER MOBILE === */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* === MENU MOBILE FULL SCREEN OVERLAY === */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-primary z-50 md:hidden flex flex-col p-4 justify-between overflow-y-auto">
          {/* Header Mobile Fullscreen (Logo & Tombol Close) */}
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.webp"
                alt={information.name}
                width={600}
                height={600}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Daftar Navigasi Mobile */}
          <nav className="flex flex-col gap-8 my-auto pt-8 pb-8">
            <Link
              href="#weddings"
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              Weddings
            </Link>
            <Link
              href="#packages"
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              Packages
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Spacer Bawah */}
          <div className="h-4"></div>
        </div>
      )}
    </header>
  );
}
