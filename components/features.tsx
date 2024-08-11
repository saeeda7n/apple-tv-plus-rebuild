"use client";
import { PropsWithChildren, useRef } from "react";
import { FEATURES } from "@/data/features";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Feature({ children }: PropsWithChildren) {
  const scope = useRef<HTMLLIElement | null>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        "span",
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: scope.current,
            start: "bottom bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
        },
      );
    },
    { scope },
  );
  return (
    <li ref={scope} className="leading-tight">
      <span className="block">{children}</span>
    </li>
  );
}

export function Features() {
  return (
    <section className="mt-8 flex pb-5 text-6xl font-bold text-white">
      <ul className="space-y-12">
        {FEATURES.map((feature, key) => (
          <Feature key={key}>{feature}</Feature>
        ))}
      </ul>
    </section>
  );
}
