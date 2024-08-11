"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const scope = useRef<HTMLSelectElement | null>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        scope.current,
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: scope.current,
            toggleActions: "play none none reverse",
            scrub: 1,
            start: "-95 top",
            end: "top top",
          },
          opacity: 0,
        },
      );
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="flex min-h-[calc(100vh-theme(spacing.28))] flex-col justify-end gap-8 pb-5 pt-16 text-white"
    >
      <h1 className="text-8xl font-bold">
        All Apple Originals.
        <br />
        Only on Apple TV+.
      </h1>
      <Link
        className="flex h-14 items-center justify-center self-start rounded-full bg-white px-8 font-semibold text-zinc-900"
        href={"/"}
      >
        Stream now
      </Link>

      <div className="mt-36 flex items-center gap-1 text-lg font-bold">
        Watch on the
        <Image
          src="/assets/images/apple_tv_logo.png"
          alt="Apple TV"
          width={41}
          height={41}
        />
        app
      </div>
    </section>
  );
}
