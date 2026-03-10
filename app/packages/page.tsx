"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mountain,
  Palmtree,
  Tent,
  Compass,
  MapPinned,
  BadgeDollarSign,
  CheckCircle2,
} from "lucide-react";

const categories = [
  { key: "all", label: "All Packages" },
  { key: "safari", label: "Safari" },
  { key: "kilimanjaro", label: "Kilimanjaro" },
  { key: "zanzibar", label: "Zanzibar" },
  { key: "daytrip", label: "Day Trips" },
];

const packages = [
  {
    slug: "great-migration-safari-8-days",
    category: "safari",
    title: "Great Migration Safari",
    duration: "8 Days",
    price: 2400,
    badge: "Popular",
    icon: Compass,
    image: "/images/beautiful-giraffe.jpg",
    summary:
      "Witness Tanzania’s iconic wildlife migration with guided game drives, lodge stays, and unforgettable landscapes.",
    highlights: [
      "National park fees included",
      "4x4 Land Cruiser safari",
      "Professional guide",
      "Meals and lodge stays",
    ],
  },
  {
    slug: "luxury-lodge-safari-6-days",
    category: "safari",
    title: "Luxury Lodge Safari",
    duration: "6 Days",
    price: 1960,
    badge: "Luxury",
    icon: Tent,
    image: "/images/crater_ngorongoro.jpg",
    summary:
      "A premium safari experience with elegant lodges, excellent service, and guided wildlife adventures.",
    highlights: [
      "Luxury lodges",
      "Park fees included",
      "English-speaking driver guide",
      "Airport transfers",
    ],
  },
  {
    slug: "camping-safari-5-days",
    category: "safari",
    title: "Camping Safari",
    duration: "5 Days",
    price: 1500,
    badge: "Affordable",
    icon: Tent,
    image: "/images/yelow_tents.jpg",
    summary:
      "An affordable guided safari in Tanzania with authentic outdoor experiences and close-to-nature adventure.",
    highlights: [
      "Camping accommodation",
      "Daily meals",
      "Game drives",
      "Professional guide",
    ],
  },
  {
    slug: "five-night-safari-tour",
    category: "safari",
    title: "5-Night Safari Tour",
    duration: "5 Nights",
    price: 1560,
    badge: "Best Value",
    icon: MapPinned,
    image: "/images/car_safari.jpg",
    summary:
      "A balanced Tanzania safari package with comfortable stays, wildlife viewing, and smooth travel logistics.",
    highlights: [
      "Accommodation included",
      "Park entry fees",
      "Transfers included",
      "Government taxes included",
    ],
  },
  {
    slug: "six-night-safari-tour",
    category: "safari",
    title: "6-Night Safari Tour",
    duration: "6 Nights",
    price: 1690,
    badge: "Extended Stay",
    icon: MapPinned,
    image: "/images/elephant+mountain.jpg",
    summary:
      "Enjoy more time exploring Tanzania’s parks with a longer safari package designed for a richer experience.",
    highlights: [
      "Extended itinerary",
      "4x4 safari vehicle",
      "Meals as per plan",
      "Professional guiding",
    ],
  },
  {
    slug: "serengeti-lodge-safari-6-days",
    category: "safari",
    title: "Serengeti Lodge Safari",
    duration: "6 Days",
    price: 1950,
    badge: "Top Pick",
    icon: Compass,
    image: "/images/two-cheetah.jpg",
    summary:
      "A classic Serengeti-focused safari with lodge accommodation, thrilling game drives, and scenic comfort.",
    highlights: [
      "Serengeti experience",
      "Lodge accommodation",
      "Driver allowances included",
      "Bottled water during safari",
    ],
  },
  {
    slug: "marangu-route-6-days",
    category: "kilimanjaro",
    title: "Marangu Route Climb",
    duration: "6 Days",
    price: 1790,
    badge: "Classic Route",
    icon: Mountain,
    image: "/images/best-kilimanjaro.jpg",
    summary:
      "Climb Kilimanjaro via the well-known Marangu Route with experienced guides, meals, and full support.",
    highlights: [
      "Park fees included",
      "Mountain crew support",
      "Accommodation before and after climb",
      "First aid kit and oximeter",
    ],
  },
  {
    slug: "machame-route-7-days",
    category: "kilimanjaro",
    title: "Machame Route Climb",
    duration: "7 Days",
    price: 1940,
    badge: "Scenic Route",
    icon: Mountain,
    image: "/images/best-kilimanjaro.jpg",
    summary:
      "A scenic Kilimanjaro climb with strong acclimatization profile, guided support, and full camping logistics.",
    highlights: [
      "Tents and dining tents",
      "Professional mountain guide",
      "Rescue fees included",
      "Government taxes included",
    ],
  },
  {
    slug: "rongai-route-6-days",
    category: "kilimanjaro",
    title: "Rongai Route Climb",
    duration: "6 Days",
    price: 1820,
    badge: "Quiet Route",
    icon: Mountain,
    image: "/images/best-kilimanjaro.jpg",
    summary:
      "A quieter Kilimanjaro route offering a beautiful trekking experience with expert crew and mountain support.",
    highlights: [
      "Camping support",
      "Porters and guides",
      "Transport to and from the mountain",
      "Three meals daily on climb",
    ],
  },
  {
    slug: "lemosho-route-10-days",
    category: "kilimanjaro",
    title: "Lemosho Route Climb",
    duration: "10 Days",
    price: 3190,
    badge: "Premium Trek",
    icon: Mountain,
    image: "/images/best-kilimanjaro.jpg",
    summary:
      "A longer, scenic Kilimanjaro route ideal for acclimatization and a premium summit experience.",
    highlights: [
      "Excellent acclimatization",
      "Camping gear included",
      "Experienced mountain team",
      "Transfers included",
    ],
  },
  {
    slug: "zanzibar-4-nights",
    category: "zanzibar",
    title: "Zanzibar Beach Holiday",
    duration: "4 Nights",
    price: 960,
    badge: "Beach Escape",
    icon: Palmtree,
    image: "/images/woman.jpg",
    summary:
      "Relax in Zanzibar with beachside stays, island transfers, guided activities, and a refreshing coastal atmosphere.",
    highlights: [
      "Accommodation included",
      "Transfers in Zanzibar",
      "Activities as shown",
      "Taxes and administrative costs",
    ],
  },
  {
    slug: "marangu-day-hike",
    category: "daytrip",
    title: "Marangu Day Hike",
    duration: "1 Day",
    price: 300,
    badge: "Day Adventure",
    icon: Mountain,
    image: "/images/best-kilimanjaro.jpg",
    summary:
      "A one-day Kilimanjaro hiking experience perfect for travelers who want the mountain feel without a summit trek.",
    highlights: [
      "Transfer from Arusha or Moshi",
      "Professional guide",
      "Lunch box included",
      "Water and soft drinks",
    ],
  },
  {
    slug: "lemosho-shira-day-hike",
    category: "daytrip",
    title: "Lemosho / Shira Plateau Day Hike",
    duration: "1 Day",
    price: 350,
    badge: "Scenic Day Trip",
    icon: Mountain,
    image: "/images/best-kilimanjaro.jpg",
    summary:
      "Enjoy a scenic one-day Kilimanjaro experience via the Lemosho side to the beautiful Shira Plateau.",
    highlights: [
      "Beautiful mountain views",
      "Guide included",
      "Great for short stays",
      "Flexible group pricing",
    ],
  },
  {
    slug: "chemka-hot-springs",
    category: "daytrip",
    title: "Chemka Hot Springs",
    duration: "1 Day",
    price: 80,
    badge: "Relaxing Escape",
    icon: Palmtree,
    image: "/images/lake-batur-bali.jpg",
    summary:
      "A refreshing day trip to the natural turquoise waters of Chemka Hot Springs near Moshi.",
    highlights: [
      "Ideal for couples and groups",
      "Natural spring experience",
      "Great add-on excursion",
      "Affordable pricing",
    ],
  },
];

function getCategoryColor(category) {
  switch (category) {
    case "safari":
      return "bg-red-50 text-red-700 border-red-200";
    case "kilimanjaro":
      return "bg-slate-100 text-slate-700 border-slate-200";
    case "zanzibar":
      return "bg-sky-50 text-sky-700 border-sky-200";
    case "daytrip":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute right-0 top-20 h-52 w-52 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
              Airo Adventures & Safaris
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Explore Tanzania with unforgettable travel packages
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Discover wildlife safaris, Kilimanjaro trekking adventures,
              Zanzibar escapes, and short day trips tailored for solo travelers,
              couples, families, and groups.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Plan My Trip
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Why Travel With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { label: "Packages", value: "14+" },
            { label: "Categories", value: "4" },
            { label: "Destinations", value: "Tanzania" },
            { label: "Style", value: "Private & Group" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
            >
              <div className="text-2xl font-bold text-slate-900">{item.value}</div>
              <div className="mt-1 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category.key}
              href={`#${category.key}`}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-500 hover:text-red-600"
            >
              {category.label}
            </a>
          ))}
        </div>

        <div id="all" className="scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              All Packages
            </h2>
            <p className="mt-2 text-slate-600">
              Browse our safari, mountain, beach, and day trip experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-slate-900 shadow">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm font-medium text-white/85">{item.duration}</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1 text-sm font-semibold text-red-600">
                      <BadgeDollarSign className="h-4 w-4" />
                      <span>From ${item.price} per person</span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {item.summary}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex gap-3">
                      <Link
                        href={`/packages/${item.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                      >
                        View Package
                      </Link>
                      <Link
                        href={`/contact?package=${item.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-600"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {["safari", "kilimanjaro", "zanzibar", "daytrip"].map((sectionKey) => {
        const sectionItems = packages.filter((item) => item.category === sectionKey);

        return (
          <section
            key={sectionKey}
            id={sectionKey}
            className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
          >
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold capitalize text-slate-900 sm:text-3xl">
                  {sectionKey === "daytrip" ? "Day Trips" : `${sectionKey} Packages`}
                </h2>
                <p className="mt-2 max-w-2xl text-slate-600">
                  Carefully prepared experiences tailored for different travel
                  styles, budgets, and adventure levels.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sectionItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.slug}
                      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                    >
                      <div className="relative h-56">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-red-700 shadow">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-sm text-white/85">
                              {item.duration} • From ${item.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-sm leading-6 text-slate-600">
                          {item.summary}
                        </p>

                        <div className="mt-5">
                          <Link
                            href={`/packages/${item.slug}`}
                            className="text-sm font-semibold text-red-600 transition hover:text-red-700"
                          >
                            Explore package →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to plan your Tanzania adventure?
              </h2>
              <p className="mt-3 text-white/75">
                Let Airo Adventures & Safaris help you choose the right safari,
                Kilimanjaro climb, beach holiday, or day trip for your dates and budget.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link
                href="/contact"
                className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Request a Quote
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}