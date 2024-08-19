"use client";
import Image from "next/image";
import { createContext, useContext, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn, useScreen } from "@/libs/util";
import { RiCircleFill, RiPlayCircleFill } from "@remixicon/react";
import Link from "next/link";

const carouselContext = createContext<CarouselContextProps | null>(null);
const useCarouselContext = () => useContext(carouselContext)!;

export function MainCarousel({ items }: { items: Movie[] }) {
  const { width, height } = useScreen();
  const mScale = useMemo(() => {
    const windowsRation = height / width;
    const xScale = 1.66666;
    const yScale = xScale * (16 / 9) * windowsRation;
    return Math.max(xScale, yScale);
  }, [width, height]);
  const scope = useRef<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLDivElement | null>(null);
  const { length } = items;
  const [center, setCenter] = useState(Math.floor(items.length / 2));
  useGSAP(
    () => {
      gsap.fromTo(
        ".active .desc",
        { y: 30, opacity: 0 },
        {
          y: 0,
          ease: "none",
          opacity: 1,
          scrollTrigger: {
            trigger: trigger.current,
            start: "bottom bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger.current,
            scrub: true,
            start: "top bottom",
            end: "bottom bottom",
          },
        })
        .fromTo(
          ".active",
          { scale: mScale * 1.2 },
          { scale: mScale, duration: 2 },
        )
        .to(".active", { scale: 1, duration: 1 })
        .fromTo(
          ".active .image",
          { borderRadius: 0 },
          { borderRadius: 16 },
          "-=1",
        )
        .fromTo(".next", { opacity: 0 }, { opacity: 0.5 }, 2.5)
        .fromTo(".previous", { opacity: 0 }, { opacity: 0.5 }, 2.5);
    },
    { scope, dependencies: [mScale, width, height] },
  );

  return (
    <div ref={trigger} className="mt-[-100vh] h-[300vh]">
      <carouselContext.Provider value={{ length, center, setCenter }}>
        <div
          ref={scope}
          className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
        >
          {items.map((value, index) => (
            <CarouselCard movie={value} index={index} key={value.shortDesc} />
          ))}
        </div>
      </carouselContext.Provider>
    </div>
  );
}

function CarouselCard({ movie, index }: CarouselCardProps) {
  const { width, height } = useScreen();

  let { center } = useCarouselContext();
  const scope = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const { width } = scope.current!.getBoundingClientRect();
      let x = width * (center - index);
      gsap.to(scope.current, {
        x: x,
      });
    },
    { scope, dependencies: [center, width, height] },
  );
  return (
    <div
      ref={scope}
      className={cn(
        "absolute px-1 opacity-50 will-change-transform lg:px-2.5",
        {
          previous: center === index - 1,
          "active z-40 opacity-100": center === index,
          next: center === index + 1,
        },
      )}
    >
      <div className="image relative aspect-video w-[60vw] shrink-0 select-none overflow-hidden rounded-2xl">
        <Image
          draggable={false}
          className="object-cover object-center"
          src={movie.image}
          alt={movie.shortDesc!}
          loading="eager"
          fill
        />
        <div className="absolute inset-0 z-10 flex items-end p-10 text-gray-50">
          <div className="desc hidden w-full flex-wrap items-center gap-2 text-xl opacity-0 md:inline-flex">
            <strong>{movie.genre}</strong>
            <RiCircleFill className="mt-1 size-2" />
            <p>{movie.shortDesc}</p>

            <Link
              href={"/"}
              className="ms-auto flex h-11 min-w-36 items-center justify-center gap-1 self-start rounded-full bg-white px-6 text-sm font-bold text-gray-800 hover:bg-opacity-90"
            >
              Stream now
              <RiPlayCircleFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
