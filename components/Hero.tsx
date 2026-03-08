"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const imageVariants = {
  hidden: { opacity: 0, x: -50, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.14,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="section relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/canyon.jpg"
          alt="Adventure background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* darker image overlay so white text reads well */}
        <div className="absolute inset-0 bg-slate-950/45" />
        {/* soft gradient split for cleaner composition */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-slate-950/10 lg:from-white lg:via-white/72 lg:to-slate-950/20" />
        {/* premium tint accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(30,64,175,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.18),transparent_24%)]" />
      </div>

      {/* DECOR */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-300/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-300/70 bg-amber-100/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800 shadow-sm backdrop-blur-md">
            AIRO Adventures &amp; Safaris
          </div>

          {/* hero text stays dark */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
            Chase the Wild,
            <span className="mt-2 block text-blue-950">Conquer the Sky</span>
          </h1>

          {/* all other text white */}
          <p className="mt-6 max-w-xl text-base leading-8 text-white sm:text-lg">
            Discover premium Kilimanjaro trekking and unforgettable Tanzania
            safari journeys with a calm, elegant experience designed around
            nature, comfort, and authentic adventure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kilimanjaro"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_32px_rgba(15,23,42,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-950"
            >
              Kilimanjaro Routes
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/safaris"
              className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-amber-300 hover:bg-white/16"
            >
              Safari Packages
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-md">
              <p className="text-2xl font-semibold text-white">6+</p>
              <p className="mt-1 text-sm text-white/80">Routes</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-md">
              <p className="text-2xl font-semibold text-white">3</p>
              <p className="mt-1 text-sm text-white/80">Top Parks</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-md">
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p className="mt-1 text-sm text-white/80">Support</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <div className="relative z-10 h-[560px] w-full">
          {/* big main image */}
          <motion.div
            custom={0}
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="absolute right-0 top-0 w-[58%]"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="overflow-hidden rounded-[2.2rem] border border-white/25 bg-white/10 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur-md">
                <div className="relative h-[330px] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/images/canyon.jpg"
                    alt="Canyon landscape"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* left lower image */}
          <motion.div
            custom={1}
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="absolute left-0 top-16 w-[40%]"
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
                transition: {
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-2 shadow-[0_20px_55px_rgba(15,23,42,0.22)] backdrop-blur-md">
                <div className="relative h-[285px] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src="/images/elephant-vertical.jpg"
                    alt="Elephant safari"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* bottom image */}
          <motion.div
            custom={2}
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="absolute bottom-0 right-10 w-[46%]"
          >
            <motion.div
              animate={{
                y: [0, -7, 0],
                transition: {
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-2 shadow-[0_20px_55px_rgba(15,23,42,0.22)] backdrop-blur-md">
                <div className="relative h-[235px] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src="/images/rhino.jpg"
                    alt="Rhino safari"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* supporting accent card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-8 left-12 hidden rounded-2xl border border-amber-300/30 bg-slate-950/55 px-5 py-4 text-white shadow-[0_18px_45px_rgba(15,23,42,0.20)] backdrop-blur-md lg:block"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-amber-300">
              Signature Experience
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-white/90">
              Kilimanjaro climbs and wildlife safaris,
              <br />
              beautifully planned.
            </p>
          </motion.div>

          {/* satin gold accents */}
          <div className="absolute bottom-8 left-8 hidden h-28 w-28 rounded-full bg-amber-300/25 blur-3xl lg:block" />
          <div className="absolute right-8 top-12 hidden h-20 w-20 rounded-full border border-amber-300/30 bg-amber-200/10 backdrop-blur-md lg:block" />
        </div>
      </div>
    </section>
  );
}