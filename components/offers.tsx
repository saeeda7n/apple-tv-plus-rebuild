"use client";
import Link from "next/link";
import { OFFERS } from "@/data/offers";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { easeTiming } from "@/libs/ease";

function OfferCard({ title, subtitle, body, actionButton }: OffersCardProps) {
  const scope = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".card",
        {
          duration: 0.6,
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: scope.current,
            start: "85% bottom",
            end: "85% bottom",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          ease: easeTiming,
          y: 0,
        },
      );
    },
    { scope },
  );
  return (
    <div ref={scope} className="flex flex-1">
      <div className="card flex flex-col gap-2">
        <span className="mb-1 text-2xl font-bold">{subtitle}</span>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mb-auto text-zinc-400">{body}</p>
        <Link
          href={"/"}
          className="mt-12 flex h-11 min-w-36 items-center justify-center self-start rounded-full bg-white px-6 text-sm font-bold text-gray-800 hover:bg-opacity-90"
        >
          {actionButton}
        </Link>
      </div>
    </div>
  );
}

export function Offers() {
  return (
    <section className="mt-32 grid grid-cols-3 gap-16 text-gray-50">
      {OFFERS.map((offer) => (
        <OfferCard {...offer} key={offer.title} />
      ))}
    </section>
  );
}
