"use client";

import { useEffect, useState } from "react";
import CircularCarousel from "./image-carousel.jsx";
import { ParallaxPhotoCard } from "./parallax-photo-card.jsx";

const images = [
  {
    src: "/assets/gallery/1.webp",
    alt: "Graduation photography",
    man: "Syarif",
    woman: "Amelia",
  },
  {
    src: "/assets/gallery/2.webp",
    alt: "Graduation photography",
    man: "Rudi",
    woman: "Annisa",
  },
  {
    src: "/assets/gallery/3.webp",
    alt: "Graduation photography",
    man: "Arif",
    woman: "Putri",
  },
  {
    src: "/assets/gallery/4.webp",
    alt: "Graduation photography",
    man: "Hadi",
    woman: "Mifta",
  },
  {
    src: "/assets/gallery/5.webp",
    alt: "Graduation photography",
    man: "Ryan",
    woman: "Sarah",
  },
  {
    src: "/assets/gallery/6.webp",
    alt: "Graduation photography",
    man: "Fikry",
    woman: "Keisha",
  },
];

export default function WeddingSection() {
  // State untuk mengontrol jumlah kartu & tinggi responsif
  const [visibleCount, setVisibleCount] = useState(4);
  const [frameHeight, setFrameHeight] = useState(450);
  const [photoExtraWidth, setPhotoExtraWidth] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Layar HP: Tampilkan 1.2 kartu agar ukurannya proporsional & gagah
        setVisibleCount(1.2);
        setFrameHeight(380);
        setPhotoExtraWidth(150);
      } else if (width < 1050) {
        // Layar Tablet: Tampilkan 3 kartu
        setVisibleCount(3);
        setFrameHeight(420);
        setPhotoExtraWidth(200);
      } else {
        // Layar Desktop
        setVisibleCount(3);
        setFrameHeight(600);
        setPhotoExtraWidth(240);
      }
    };

    handleResize(); // Jalankan sekali saat mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-[80dvh] w-full flex-col bg-primary gap-8 pt-28 overflow-hidden">
      <div className="flex h-fit shrink-0 items-center justify-center">
        <h2 className=" text-3xl md:text-5xl font-normal text-second text-center">
          Weddings We&apos;ve Created{" "}
        </h2>
      </div>

      <div className="flex flex-1 items-center px-4 md:px-8 overflow-hidden">
        <CircularCarousel
          items={images}
          visibleCount={visibleCount}
          gap={16}
          renderItem={(item, index, meta) => (
            <ParallaxPhotoCard
              photoSrc={item.src}
              index={index}
              man={item.man}
              woman={item.woman}
              meta={meta}
              frameHeight={frameHeight} // Passing tinggi dinamis
            />
          )}
        />
      </div>
    </div>
  );
}
