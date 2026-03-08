"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Kilimanjaro", href: "/kilimanjaro" },
  { name: "Safaris", href: "/safaris" },
  { name: "Destinations", href: "/destinations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="section">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold tracking-wide text-white shadow-sm transition group-hover:bg-blue-950">
              AA
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-[0.18em] text-slate-950">
                AIRO ADVENTURES
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-amber-700">
                Chase the Wild, Conquer the Sky
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/255620517139"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-500 hover:text-blue-950"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-950"
            >
              Book Now
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <nav className="grid gap-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-slate-950 text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3">
                <a
                  href="https://wa.me/255620517139"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-amber-500 hover:text-blue-950"
                >
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-950"
                >
                  Book Now
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}