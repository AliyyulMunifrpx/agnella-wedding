"use client";

import { useState } from "react";
import { information } from "../data/information.js";

export default function ContactSection() {
  // STATE FORM TERPUSAT DALAM 1 OBJEK
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    weddingDate: "",
    guestCount: "",
    package: "",
    message: "",
  });

  // Handler Perubahan Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler Submit & Redirect WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const waText =
      `Halo ${information.instagram},\n\n` +
      `Saya ingin berkonsultasi mengenai layanan Wedding Organizer:\n\n` +
      `• *Nama:* ${formData.name}\n` +
      `• *No. WhatsApp:* ${formData.phone}\n` +
      `• *Rencana Tanggal:* ${formData.weddingDate || "-"}\n` +
      `• *Estimasi Tamu:* ${formData.guestCount || "-"}\n` +
      `• *Paket:* ${formData.package || "-"}\n` +
      `• *Catatan / Pesan:* ${formData.message || "-"}\n\n` +
      `Terima kasih!`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${information.phone}?text=${encodedText}`;

    window.open(waUrl, "_blank");
  };

  return (
    <section className="w-full bg-primary text-second2 px-4 md:px-8 lg:px-24 py-28 flex flex-col items-center gap-8">
      {/* JUDUL SECTION */}
      <h2 className="text-3xl md:text-5xl font-normal text-second text-center">
        Begin Your Journey
      </h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* === SISI KIRI: INFORMASI KONTAK & EDITORIAL === */}
        <div className="lg:col-span-5 flex flex-col gap-12 overflow-hidden">
          <p className="font-sans text-sm lg:text-base text-black/70 leading-relaxed">
            We invite you to share your vision with us. Fill out the form or
            reach out directly to schedule a private consultation with our lead
            event directors.
          </p>

          {/* DETAIL KONTAK */}
          <div className="flex flex-col gap-8 font-sans text-sm text-second2/80">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Direct Concierge
              </span>
              <p className="font-sans  text-black">
                {information.phoneDisplay}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Email Inquiry
              </span>
              <p className="font-sans  text-black">{information.email}</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Atelier Studio
              </span>
              <p className="text-black/80 leading-relaxed">
                {information.address}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Instagram
              </span>
              <p className="text-black/80">{information.instagram}</p>
            </div>
          </div>
        </div>

        {/* === SISI KANAN: FORM KONSULTASI (WHATSAPP REDIRECT) === */}
        <div className="lg:col-span-7 bg-second border border-second2/10 p-4 md:p-8 lg:p-12 relative overflow-hidden">
          {/* ACCENT LINE EMAS */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-second" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-2xl text-second2 font-normal">
                Private Consultation Form
              </h3>
              <p className="font-sans text-xs text-second2/60">
                Your details will be forwarded directly to our WhatsApp
                concierge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* NAMA LENGKAP */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Clarissa & Raditya"
                  className="w-full bg-primary border border-second2/10 px-4 py-4 text-sm text-black focus:outline-none focus:border-second transition-colors font-sans"
                />
              </div>

              {/* NO. WHATSAPP */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 08123456789"
                  className="w-full bg-primary border border-second2/10 px-4 py-4 text-sm text-black focus:outline-none focus:border-second transition-colors font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ESTIMASI TANGGAL */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second2">
                  Estimated Wedding Date
                </label>
                <input
                  type="date"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  placeholder="e.g. Q4 2026 / Oct 2026"
                  className="w-full bg-primary border border-second2/10 px-4 py-4 text-sm text-black focus:outline-none focus:border-second transition-colors font-sans"
                />
              </div>

              {/* ESTIMASI TAMU */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second2">
                  Estimated Guests
                </label>
                <input
                  type="text"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="e.g. 300 - 500 guests"
                  className="w-full bg-primary border border-second2/10 px-4 py-4 text-sm text-black focus:outline-none focus:border-second transition-colors font-sans"
                />
              </div>
            </div>

            {/* PILIH SERVICE */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs uppercase tracking-widest text-second2">
                Interested Packages
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-primary border font-sans border-second2/10 px-4 py-4 text-sm text-black focus:outline-none focus:border-second transition-colors cursor-pointer"
              >
                <option value="Full Wedding Planning">
                  THE INTIMATE AFFAIR{" "}
                </option>
                <option value="Wedding Day Management">
                  THE GRAND ELEGANCE
                </option>
                <option value="Intimate Wedding">THE ROYAL EXPERIENCE</option>
              </select>
            </div>

            {/* CATATAN / PESAN */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs uppercase tracking-widest text-second2">
                Vision & Notes
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your wedding concept, location, or any specific requests..."
                className="w-full bg-primary border font-sans border-second2/10 p-4 text-sm text-black focus:outline-none focus:border-second transition-colors resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-white text-second font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-primary hover:text-second transition-colors duration-300 cursor-pointer"
            >
              Send Inquiry via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
