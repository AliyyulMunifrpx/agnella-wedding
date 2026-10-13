"use client";

import Link from "next/link";

export default function PackagesSection() {
  const packages = [
    {
      name: "THE INTIMATE AFFAIR",
      tier: "Essential Tier",
      subtitle:
        "Curated coordination for close-knit celebrations with up to 150 guests.",
      isPopular: false,
      features: [
        "10 Dedicated Wedding Coordinator Team",
        "Final technical briefing & vendor alignment (1 month prior)",
        "Master rundown creation & timekeeping control",
        "Personal assistant for Bride & Groom",
        "Guest flow management & reception desk coordination",
      ],
    },
    {
      name: "THE GRAND ELEGANCE",
      tier: "Signature Tier",
      subtitle:
        "Comprehensive full planning designed for grand weddings up to 500 guests.",
      isPopular: true,
      features: [
        "15 Dedicated Wedding Coordinator Team",
        "End-to-end event conceptualization & mood board creation",
        "Vendor curation, negotiation & budget allocation",
        "Unlimited planning consultations & site visits",
        "Holy Matrimony & Grand Reception execution",
        "Dedicated VIP & family hospitality manager",
      ],
    },
    {
      name: "THE ROYAL EXPERIENCE",
      tier: "Bespoke Tier",
      subtitle:
        "Uncompromising luxury for high-profile or multi-day celebrations.",
      isPopular: false,
      features: [
        "20+ Dedicated Team including Lead Event Director",
        "Multi-day coverage (Tea Ceremony, Rehearsal, After-party)",
        "Bespoke spatial design & architectural lighting planning",
        "VIP & international guest concierge services",
        "Exclusive access to premier luxury artisans",
        "Priority contingency & emergency logistics management",
      ],
    },
  ];

  return (
    <div className="w-full bg-primary text-second2 px-4 md:px-8 pt-28 flex flex-col gap-16">
      {/* HEADER SECTION */}
      <h2 className="text-3xl md:text-5xl font-normal text-second text-center">
        Curated Packages
      </h2>

      {/* PACKAGES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between p-4 md:p-8 lg:p-12 bg-second border transition-all duration-500 gap-8 overflow-hidden ${
              pkg.isPopular
                ? "border-second shadow-2xl lg:-translate-y-4"
                : "border-second2/10 hover:border-second/50"
            }`}
          >
            {/* TAG HIGHLIGHT UNTUK PAKET FAVORIT */}
            {pkg.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-second2 text-black font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 z-10">
                Most Preferred
              </div>
            )}

            {/* KONTEN ATAS */}
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-xs text-second uppercase tracking-[0.2em]">
                  {pkg.tier}
                </span>
                <h3 className="font-serif text-2xl text-seondc2 font-normal tracking-wide">
                  {pkg.name}
                </h3>
              </div>

              <p className="font-sans text-sm text-second2/70 leading-relaxed min-h-[48px]">
                {pkg.subtitle}
              </p>

              <div className="w-full h-[1px] bg-second2/10" />

              {/* FITUR PAKET */}
              <ul className="flex flex-col gap-4 font-sans text-xs lg:text-sm text-second2/80">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <span className="text-second2 mt-1 text-xs">✦</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TOMBOL INQUIRE / CTA */}
            <Link
              href="#contact"
              className={`w-full py-4 text-center font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 block ${
                pkg.isPopular
                  ? "bg-second2 text-second font-semibold hover:bg-black"
                  : "border border-second2/20 text-second2 hover:border-second2 hover:text-second2"
              }`}
            >
              Inquire Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
