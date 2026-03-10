"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="section relative overflow-hidden py-14 sm:py-18 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/canyon.jpg"
          alt="Adventure background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* base darkening */}
        <div className="absolute inset-0 bg-slate-950/60" />

        {/* premium deep blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061226]/95 via-[#0b1f3a]/82 to-[#0a1630]/88" />

        {/* soft readable left-side glow */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,34,0.88)_0%,rgba(7,22,46,0.78)_34%,rgba(10,22,48,0.56)_58%,rgba(2,8,23,0.30)_100%)]" />

        {/* gold + blue atmospheric accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_24%),radial-gradient(circle_at_78%_20%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.10),transparent_22%)]" />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.28)_100%)]" />
      </div>

      {/* Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-amber-300/18 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-400/12 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-52 w-52 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200 shadow-sm backdrop-blur-md">
            Airo Adventures &amp; Safaris
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Chase the Wild,
            <span className="mt-2 block text-amber-300">Conquer the Sky</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Discover premium Kilimanjaro trekking and unforgettable Tanzania
            safari journeys with a calm, elegant experience shaped around
            adventure, comfort, and the beauty of the wild.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kilimanjaro"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_14px_32px_rgba(251,191,36,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Kilimanjaro Routes
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/safaris"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-amber-300/60 hover:bg-white/15"
            >
              Safari Packages
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 shadow-[0_10px_30px_rgba(2,6,23,0.18)] backdrop-blur-md">
              <p className="text-2xl font-semibold text-white">6+</p>
              <p className="mt-1 text-sm text-white/70">Routes</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 shadow-[0_10px_30px_rgba(2,6,23,0.18)] backdrop-blur-md">
              <p className="text-2xl font-semibold text-white">4</p>
              <p className="mt-1 text-sm text-white/70">Top Parks</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 shadow-[0_10px_30px_rgba(2,6,23,0.18)] backdrop-blur-md">
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p className="mt-1 text-sm text-white/70">Support</p>
            </div>
          </div>
        </motion.div>

        {/* Right visual desktop */}
        <div className="relative z-10 hidden h-[560px] w-full lg:block">
          <motion.div
            custom={0}
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="absolute right-0 top-0 w-[58%]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/8 p-2 shadow-[0_24px_70px_rgba(2,6,23,0.30)] backdrop-blur-md">
                <div className="relative h-[330px] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/images/canyon.jpg"
                    alt="Canyon landscape"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            custom={1}
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="absolute left-0 top-16 w-[40%]"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 p-2 shadow-[0_20px_55px_rgba(2,6,23,0.28)] backdrop-blur-md">
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

          <motion.div
            custom={2}
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="absolute bottom-0 right-10 w-[46%]"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 p-2 shadow-[0_20px_55px_rgba(2,6,23,0.28)] backdrop-blur-md">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="absolute bottom-8 left-12 rounded-2xl border border-amber-300/25 bg-slate-950/45 px-5 py-4 text-white shadow-[0_18px_45px_rgba(2,6,23,0.24)] backdrop-blur-md"
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

          <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full bg-amber-300/18 blur-3xl" />
          <div className="absolute right-8 top-12 h-20 w-20 rounded-full border border-amber-300/20 bg-amber-200/8 backdrop-blur-md" />
        </div>

        {/* Mobile visual */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="relative z-10 lg:hidden"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 p-2 shadow-[0_20px_55px_rgba(2,6,23,0.24)] backdrop-blur-md">
            <div className="relative h-[320px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/elephant-vertical.jpg"
                alt="Safari experience"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}