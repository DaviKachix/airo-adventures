import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const whyItems = [
  {
    title: "Experienced Guides",
    text: "Travel with professional mountain and safari guides who understand the terrain, pace, and guest experience.",
  },
  {
    title: "Local Expertise",
    text: "Enjoy authentic Tanzania adventures shaped by local insight, cultural understanding, and destination knowledge.",
  },
  {
    title: "Safe Adventures",
    text: "Every trip is planned with care, from mountain support teams to smooth safari coordination and guest comfort.",
  },
];

const featuredTours = [
  {
    title: "Kilimanjaro Climbing",
    text: "Take on Africa’s highest peak through carefully selected routes with experienced guides, chefs, and porters.",
    href: "/kilimanjaro",
    image: "/images/canyon.jpg",
  },
  {
    title: "Camping Safaris",
    text: "Explore Serengeti, Ngorongoro, and Tarangire through immersive wildlife journeys designed for memorable encounters.",
    href: "/safaris",
    image: "/images/rhino.jpg",
  },
];

const destinationItems = [
  {
    title: "Mount Kilimanjaro",
    text: "A legendary summit experience with iconic trekking routes and dramatic scenery.",
    image: "/images/canyon.jpg",
  },
  {
    title: "Serengeti",
    text: "Vast plains, wildlife movement, and unforgettable safari moments in one of Africa’s most famous parks.",
    image: "/images/elephant-vertical.jpg",
  },
  {
    title: "Ngorongoro & Tarangire",
    text: "Beautiful crater views, baobab landscapes, and rewarding wildlife experiences across northern Tanzania.",
    image: "/images/rhino.jpg",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* WHY SECTION */}
      <section className="section py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Why Travel With AIRO
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Elegant Tanzania adventures built on trust, clarity, and experience
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            AIRO Adventures &amp; Safaris is designed for travelers seeking a
            calm, premium, and well-structured journey across Kilimanjaro and
            Tanzania’s top safari destinations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyItems.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
              style={{
                animation: `fadeUp 0.7s ease-out ${index * 0.12}s both`,
              }}
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-amber-500 to-blue-950" />
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="bg-slate-50/80 py-20 sm:py-24">
        <div className="section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
                Featured Journeys
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Explore the signature experiences behind the AIRO brand
              </h2>
            </div>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-950 transition hover:text-amber-700"
            >
              View all destinations
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredTours.map((tour, index) => (
              <div
                key={tour.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.09)]"
                style={{
                  animation: `fadeUp 0.8s ease-out ${index * 0.14}s both`,
                }}
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {tour.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {tour.text}
                  </p>

                  <Link
                    href={tour.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-950"
                  >
                    Explore More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT STORY SECTION */}
      <section className="section py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            style={{ animation: "fadeUp 0.8s ease-out both" }}
          >
            <div className="relative h-[460px]">
              <Image
                src="/images/elephant-vertical.jpg"
                alt="Tanzania safari"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
          </div>

          <div style={{ animation: "fadeUp 0.9s ease-out 0.1s both" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Crafted for Modern Travelers
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than a trip — a smooth and memorable travel experience
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              From the first inquiry to the final day of your adventure, AIRO
              focuses on creating a refined and seamless journey. Whether you
              are climbing Mount Kilimanjaro or heading into the wild plains of
              northern Tanzania, every detail is shaped to feel simple, clear,
              and unforgettable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-950">
                  Mountain Support
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Reliable crews including guides, chefs, and porters who help
                  create a safer and more comfortable climb.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-950">
                  Safari Comfort
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Carefully planned routes and destination experiences that let
                  guests focus on the beauty of Tanzania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS PREVIEW */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="section">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Destinations
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Discover the landscapes that define Tanzania
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              Explore mountain, savannah, and wildlife destinations with a clean
              travel style that feels premium and effortless.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {destinationItems.map((item, index) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{
                  animation: `fadeUp 0.8s ease-out ${index * 0.12}s both`,
                }}
              >
                <div className="relative h-[230px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-20 sm:py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-amber-50 via-white to-blue-50 px-8 py-12 shadow-[0_18px_55px_rgba(15,23,42,0.05)] sm:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Start Your Journey
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ready to plan your Kilimanjaro climb or Tanzania safari?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Let AIRO Adventures &amp; Safaris guide you into an experience
              that feels modern, beautiful, and confidently planned from start
              to finish.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-950"
              >
                Book Your Adventure
                <ArrowRightIcon className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-amber-500 hover:text-blue-950"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}