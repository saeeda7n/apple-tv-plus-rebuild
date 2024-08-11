"use client";
import { MAIN_CAROUSEL } from "@/data/carousel";
import Image from "next/image";
import { useRef } from "react";

export function MainCarousel({ items }: { items: Movie[] }) {
  return (
    <div className="flex gap-5 overflow-clip">
      {MAIN_CAROUSEL.map((value) => (
        <div key={value.image}>
          <div className="relative aspect-video h-[30rem] shrink-0 overflow-hidden rounded-2xl">
            <Image
              className="object-cover object-center"
              src={value.image}
              alt={value.shortDesc!}
              fill
            />
          </div>
        </div>
      ))}
    </div>
  );
}
