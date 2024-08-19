import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { RiPlayCircleFill } from "@remixicon/react";
import { cn } from "@/libs/util";

function SmallMovieCard({ movie }: SmallMovieCardProps) {
  return (
    <div
      key={movie.image}
      className="group relative aspect-video h-28 shrink-0 overflow-hidden rounded-lg md:h-48 lg:h-52"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
        <Link
          href={"/"}
          className="flex h-11 translate-y-8 items-center gap-1 rounded-full bg-white px-5 text-sm font-semibold text-gray-800 transition duration-300 hover:opacity-80 group-hover:translate-y-0"
        >
          Stream now
          <RiPlayCircleFill className="size-5" />
        </Link>
      </div>
      <Image
        src={movie.image}
        alt="Move image"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

export function AutoCarousel({
  items,
  duration,
  className,
}: AutoCarouselProps) {
  const scope = useRef<HTMLDivElement | null>(null);
  const animation = useRef<any>();
  const { contextSafe } = useGSAP(
    () => {
      //@ts-ignore
      animation.current = gsap.to(".slider", {
        x: "-100%",
        ease: "none",
        repeat: -1,
        duration,
      });
    },
    { scope },
  );

  const onHover = contextSafe(() => {
    gsap.to(animation.current, { timeScale: duration * 0.003, ease: "none" });
  });

  const onLeave = contextSafe(() => {
    gsap.to(animation.current, { timeScale: 1, ease: "none" });
  });

  const slider = (
    <div className="slider flex gap-2 px-2.5 md:gap-5">
      {items.map((movie) => (
        <SmallMovieCard key={movie.image} movie={movie} />
      ))}
    </div>
  );

  return (
    <div
      ref={scope}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      className={cn("slide-wrapper flex gap-0 overflow-hidden", className)}
    >
      {slider}
      {slider}
    </div>
  );
}
