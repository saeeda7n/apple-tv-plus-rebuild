import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";

export const OFFERS: OffersCardProps[] = [
  {
    title: "3 months free.",
    subtitle: "Buy an Apple device",
    body: (
      <>
        Apple TV+ is included for 3 months when you purchase an Apple device and
        redeem the offer within 90 days.
        <sup className="text-[0.55rem]">2</sup>
      </>
    ),
    actionButton: "Check eligibility",
  },
  {
    title: "$9.99/mo.",
    subtitle: "Free 7-day trial",
    body: (
      <>
        A monthly subscription is just $9.99 per month after a free 7-day trial.
        <sup className="text-[0.55rem]">3</sup> Share Apple TV+ with your
        family.
        <sup className="text-[0.55rem]">4</sup>
      </>
    ),
    actionButton: "Try it free",
  },
  {
    title: "Apple One",
    subtitle: "Free 1‑month trial",
    body: (
      <>
        Bundle Apple TV+ with up to five other great services for one low
        monthly price. And enjoy more for less.
        <Link href="/" className="ms-1 inline-flex items-center text-blue-500">
          Learn more <RiArrowRightSLine className="mt-0.5 size-5" />
        </Link>
      </>
    ),
    actionButton: (
      <>
        Try Apple One free<sup className="text-[0.55rem]">5</sup>
      </>
    ),
  },
];
