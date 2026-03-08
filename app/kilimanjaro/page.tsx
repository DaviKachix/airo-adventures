import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const mainRoutes = [
  {
    title: "Lemosho Route",
    image: "/images/mountain.jpg",
    tag: "Scenic Route",
    text: "A beautiful and well-loved route known for strong scenery, good acclimatization, and a more premium trekking feel.",
    options: [
      { duration: "7 Days", price: "$2500" },
      { duration: "8 Days", price: "$2800" },
    ],
  },
  {
    title: "Northern Circuit",
    image: "/images/landscape.jpg",
    tag: "Longest Route",
    text: "A longer route designed for travelers who want broader views, more time for acclimatization, and a distinct Kilimanjaro experience.",
    options: [{ duration: "8–9 Days", price: "$3200" }],
  },
  {
    title: "Machame Route",
    image: "/images/canyon.jpg",
    tag: "Popular Choice",
    text: "A classic route with dramatic scenery and strong popularity among climbers seeking an adventurous summit path.",
    options: [
      { duration: "6 Days", price: "$2000" },
      { duration: "7 Days", price: "$2350" },
    ],
  },
  {
    title: "Marangu Route",
    image: "/images/landscape.jpg",
    tag: "Classic Route",
    text: "A well-known route favored for its established path and accessible structure for many travelers.",
    options: [
      { duration: "5 Days", price: "$2000" },
      { duration: "6 Days", price: "$2250" },
    ],
  },
  {
    title: "Rongai Route",
    image: "/images/mountain.jpg",
    tag: "Quiet Side",
    text: "A route known for a different approach to the mountain and a calmer trekking atmosphere.",
    options: [
      { duration: "5 Days", price: "$2150" },
      { duration: "6 Days", price: "$2300" },
      { duration: "7 Days", price: "$2500" },
    ],
  },
  {
    title: "Umbwe Route",
    image: "/images/canyon.jpg",
    tag: "Steeper Adventure",
    text: "A strong choice for more adventurous trekkers looking for a bold and direct mountain experience.",
    options: [
      { duration: "5 Days", price: "$2100" },
      { duration: "6 Days", price: "$2250" },
      { duration: "7 Days", price: "$2320" },
    ],
  },
];

const dayTrips = [
  {
    title: "Lemosho Day Trip",
    duration: "1 Day",
    price: "$400",
  },
  {
    title: "Machame Day Trip",
    duration: "1 Day",
    price: "$350",
  },
  {
    title: "Marangu Day Trip",
    duration: "1 Day",
    price: "$400",
  },
  {
    title: "Marangu Day Trip",
    duration: "2 Days",
    price: "$800",
  },
];

const highlights = [
  {
    title: "Experienced Mountain Crew",
    text: "Guides, chefs, and porters who support the climb with care, structure, and professionalism.",
    icon: ClockIcon,
  },
  {
    title: "Clear Route Options",
    text: "Multiple route choices help travelers select the pace, duration, and style that best fits their goals.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Summit-Focused Experience",
    text: "From scenic trails to daily support, every route is shaped around a stronger overall climbing journey.",
    icon: FireIcon,
  },
];

export default function KilimanjaroPage() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          Kilimanjaro Routes
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Climb Africa’s highest peak through beautifully planned route options
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          Explore AIRO Adventures &amp; Safaris Kilimanjaro packages with clear
          route choices, premium presentation, and a calm structure built for
          modern trekkers looking for beauty, challenge, and confidence on the
          mountain.
        </p>
      </div>

      <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mainRoutes.map((route) => (
          <article
            key={route.title}
            className="group overflow-hidden rounded-[1.85rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
          >
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={route.image}
                alt={route.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/12 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                {route.tag}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-slate-950">
                {route.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {route.text}
              </p>

              <div className="mt-6 space-y-3">
                {route.options.map((option) => (
                  <div
                    key={`${route.title}-${option.duration}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {option.duration}
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                      {option.price}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-950"
              >
                Book This Route
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-8 shadow-[0_16px_45px_rgba(15,23,42,0.04)] sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Kilimanjaro Day Trips
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Short mountain experiences for lighter adventures
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Day trips provide a lighter way to experience Kilimanjaro’s natural
            beauty for travelers who want a shorter mountain journey.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dayTrips.map((trip) => (
            <div
              key={`${trip.title}-${trip.duration}`}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {trip.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{trip.duration}</p>
              <p className="mt-5 text-xl font-semibold text-amber-700">
                {trip.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Why Climb With AIRO
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A mountain experience designed with clarity and support
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Kilimanjaro is more than a trek. It is a journey of pace, support,
            preparation, and personal achievement. AIRO approaches the climb
            with a calm structure and a polished travel experience that helps
            guests focus on the mountain itself.
          </p>

          <div className="mt-8 grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-950"
            >
              Start Your Climb
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-amber-500 hover:text-blue-950"
            >
              Learn About AIRO
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
          <div className="relative h-full min-h-[420px]">
            <Image
              src="/images/mountain.jpg"
              alt="Mount Kilimanjaro"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/20" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                Kilimanjaro Experience
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Scenic routes, strong support, and summit ambition
              </h3>
              <p className="mt-5 text-base leading-8 text-white/80">
                Choose from short day experiences or full summit routes designed
                for travelers who want to experience Kilimanjaro with greater
                clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}