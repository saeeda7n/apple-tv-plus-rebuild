"use client";
import gsap from "gsap";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Offers } from "@/components/offers";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { VideoBackground } from "@/components/videoBackground";
import {
  MAIN_CAROUSEL,
  RANDOM_MOVIE_SET,
  RANDOM_MOVIE_SET_2,
} from "@/data/carousel";
import { AutoCarousel } from "@/components/autoCarousel";
import { MainCarousel } from "@/components/mainCarousel";

export default function Home() {
  const scope = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".video-banner",
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: scope.current,
            toggleActions: "play none none reverse",
            start: "top top",
            end: "50% top",
            scrub: true,
          },
          opacity: 0,
        },
      );
    },
    { scope },
  );
  return (
    <main className="flex flex-col">
      <div ref={scope} className="relative bg-black">
        <VideoBackground />
        <div className="container relative flex flex-col gap-5 pb-44">
          <Hero />
          <Features />
          <Offers />
        </div>
      </div>
      <div className="flex min-h-screen flex-col gap-5 bg-black">
        <MainCarousel items={MAIN_CAROUSEL} />
        <AutoCarousel duration={95} items={RANDOM_MOVIE_SET} />
        <AutoCarousel duration={125} items={RANDOM_MOVIE_SET_2} />
      </div>
    </main>
  );
}
