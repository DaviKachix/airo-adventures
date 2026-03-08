import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Kilimanjaro", href: "/kilimanjaro" },
  { name: "Safaris", href: "/safaris" },
  { name: "Destinations", href: "/destinations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-white">
      <div className="section py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold tracking-wide text-slate-950">
                AA
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.18em]">
                  AIRO ADVENTURES
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-amber-300">
                  Chase the Wild, Conquer the Sky
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Premium Kilimanjaro climbs and Tanzania safari experiences crafted
              with clarity, local knowledge, and a calm modern travel style.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <span>Arusha, Tanzania</span>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <a
                  href="tel:+255624947363"
                  className="transition hover:text-white"
                >
                  +255 624 947 363
                </a>
              </div>

              <div className="flex items-start gap-3">
                <EnvelopeIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <a
                  href="mailto:info@airoadventures.com"
                  className="transition hover:text-white"
                >
                  info@airoadventures.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AIRO Adventures & Safaris.</p>
          <p>Modern Tanzania adventures with a refined, clean experience.</p>
        </div>
      </div>
    </footer>
  );
}