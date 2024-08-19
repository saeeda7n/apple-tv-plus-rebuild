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
import { RiArrowRightSLine } from "@remixicon/react";

export default function Home() {
  const scope = useRef<HTMLDivElement | null>(null);
  const fadeScope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".video-banner",
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: ".top",
            toggleActions: "play none none reverse",
            start: "top top",
            end: "50% top",
            scrub: true,
          },
          opacity: 0,
        },
      );

      gsap.fromTo(
        ".devices-container .items",
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".devices-container",
            start: "bottom bottom",
          },
        },
      );
      gsap.fromTo(
        ".brands-container .items",
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".brands-container",
            start: "bottom bottom",
          },
        },
      );
    },
    { scope },
  );

  return (
    <main ref={scope} className="flex flex-col">
      <div className="top relative z-50 bg-black">
        <VideoBackground />
        <div className="container relative flex flex-col gap-5 pb-44">
          <Hero />
          <Features />
          <Offers />
        </div>
      </div>
      <div className="flex min-h-screen flex-col gap-2 bg-black pb-32 md:gap-5">
        <MainCarousel items={MAIN_CAROUSEL} />
        <AutoCarousel
          className="md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
          duration={125}
          items={RANDOM_MOVIE_SET}
        />
        <AutoCarousel duration={95} items={RANDOM_MOVIE_SET_2} />
      </div>
      <div className="flex min-h-screen flex-col py-32">
        <div className="container">
          <div className="space-y-6">
            <div className="mx-auto size-24 rounded-md bg-gray-200" />
            <h3 className="mx-auto max-w-5xl text-center text-3xl font-bold text-gray-800 md:text-6xl lg:text-7xl">
              Watch Apple TV+ anywhere on the Apple TV app.
            </h3>
            <p className="mx-auto max-w-sm text-center text-gray-700 md:max-w-[26rem]">
              Find the Apple TV app on your favorite Apple devices. Or watch
              Apple TV+ online at{" "}
              <a href="" className="text-blue-400">
                tv.apple.com.
              </a>
            </p>

            <div className="devices-container mx-auto !mt-24 grid max-w-xs grid-cols-2 items-center gap-10 md:max-w-xl md:grid-cols-3">
              {[...new Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="items aspect-square rounded-md bg-gray-200"
                />
              ))}
            </div>
          </div>

          <div className="mt-32 space-y-2">
            <h3 className="mx-auto max-w-md text-center text-4xl font-semibold text-gray-800">
              See it on your smart TV or streaming device.
            </h3>
            <div className="text-center">
              <a
                href=""
                className="inline-flex items-center gap-1 text-blue-400"
              >
                Set up your device
                <RiArrowRightSLine className="size-4" />
              </a>
            </div>
            <div className="brands-container mx-auto !mt-16 grid max-w-xs grid-cols-2 items-center gap-10 md:max-w-5xl md:grid-cols-5">
              {[...new Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="items aspect-video rounded-md bg-gray-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
