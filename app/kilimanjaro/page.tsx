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
    tag: "Scenic Camping Route",
    text:
      "The Lemosho Route is one of the most beautiful ways to climb Mount Kilimanjaro. It is highly loved for its outstanding scenery, quieter start, and strong acclimatization profile. This is a camping route, ideal for trekkers who want a more scenic and gradual journey across rainforest, moorland, and high alpine landscapes before pushing toward the summit.",
    stay:
      "Accommodation is in quality mountain tents with a dining tent for meals and rest.",
    meals:
      "Each climbing day includes breakfast in the morning, lunch during the day, and dinner in the evening, freshly prepared by the Airo Adventures & Safaris mountain crew.",
    options: [
      { duration: "7 Days", price: "$2500" },
      { duration: "8 Days", price: "$2800" },
    ],
  },
  {
    title: "Northern Circuit",
    image: "/images/landscape.jpg",
    tag: "Longest Camping Route",
    text:
      "The Northern Circuit is the longest standard route on Kilimanjaro and is ideal for travelers who want more time on the mountain, broader views, and stronger acclimatization. This camping route gives climbers a distinct and quieter experience with extended exposure to Kilimanjaro’s dramatic beauty.",
    stay:
      "Accommodation is in mountain camping tents supported by a full trekking crew.",
    meals:
      "Breakfast, lunch, and dinner are served daily to keep climbers energized throughout the journey.",
    options: [{ duration: "8–9 Days", price: "$3200" }],
  },
  {
    title: "Machame Route",
    image: "/images/canyon.jpg",
    tag: "Popular Camping Route",
    text:
      "The Machame Route is one of the most popular ways to climb Kilimanjaro and is famous for its dramatic scenery and adventurous mountain feel. This is a camping route that passes through beautiful ecological zones and gives climbers a rewarding summit journey with strong visual variety from forest to alpine desert.",
    stay:
      "Accommodation is in mountain tents, with a dining tent provided for meal service and comfort on the route.",
    meals:
      "Each day includes breakfast, lunch, and dinner prepared by the mountain cook to support your climb from start to summit.",
    options: [
      { duration: "6 Days", price: "$2065" },
      { duration: "7 Days", price: "$2350" },
    ],
  },
  {
    title: "Marangu Route",
    image: "/images/landscape.jpg",
    tag: "Classic Hut Route",
    text:
      "The Marangu Route is the easiest and smoothest route on Mount Kilimanjaro, making it a favorite for many first-time climbers. It is widely known as the Coca-Cola Route because of its more established path and comfortable structure. Unlike the camping routes, Marangu offers mountain huts for overnight stays, making the climb feel more accessible and comfortable.",
    stay:
      "Accommodation is in mountain huts with sleeping space and dining areas, rather than camping tents.",
    meals:
      "Each day includes breakfast in the morning, lunch during the climb, and dinner in the evening, served with the support of the Airo Adventures & Safaris crew.",
    options: [
      { duration: "5 Days", price: "$2000" },
      { duration: "6 Days", price: "$2250" },
    ],
  },
  {
    title: "Rongai Route",
    image: "/images/mountain.jpg",
    tag: "Quiet Camping Route",
    text:
      "The Rongai Route approaches Kilimanjaro from the northern side near the Kenyan border. It is known for its calmer trekking atmosphere, gradual profile, and distinctive mountain perspective. This is a camping route and a strong choice for travelers who prefer less crowding and a quieter climb.",
    stay:
      "Accommodation is in camping tents with full mountain crew support throughout the trek.",
    meals:
      "Breakfast, lunch, and dinner are provided every day to keep the team well fueled at altitude.",
    options: [
      { duration: "5 Days", price: "$2150" },
      { duration: "6 Days", price: "$2300" },
      { duration: "7 Days", price: "$2500" },
    ],
  },
  {
    title: "Umbwe Route",
    image: "/images/canyon.jpg",
    tag: "Steeper Camping Route",
    text:
      "The Umbwe Route is a steeper and more demanding option for adventurous trekkers who want a bold and direct mountain experience. This camping route is known for its tougher approach and is better suited to climbers looking for a more intense challenge on Kilimanjaro.",
    stay:
      "Accommodation is in mountain camping tents supported by guides, porters, and the cooking team.",
    meals:
      "Daily breakfast, lunch, and dinner are provided as part of the full mountain support experience.",
    options: [
      { duration: "5 Days", price: "$2100" },
      { duration: "6 Days", price: "$2250" },
      { duration: "7 Days", price: "$2320" },
    ],
  },
];

const dayTrips = [
  {
    title: "Lemosho / Shira Day Hike",
    duration: "1 Day",
    price: "$400",
    text:
      "A scenic short mountain experience for travelers who want to enjoy Kilimanjaro views and highland beauty without a summit climb.",
  },
  {
    title: "Machame Day Trip",
    duration: "1 Day",
    price: "$350",
    text:
      "A rewarding day hike that gives travelers a taste of Kilimanjaro’s forest scenery and mountain atmosphere in a lighter format.",
  },
  {
    title: "Marangu Day Hike",
    duration: "1 Day",
    price: "$400",
    text:
      "A popular one-day Kilimanjaro experience following the Marangu side, ideal for guests who want to feel the mountain without doing the full climb.",
  },
  {
    title: "Marangu Overnight Experience",
    duration: "2 Days",
    price: "$800",
    text:
      "A short overnight Kilimanjaro experience for travelers who want a deeper mountain feel with more time on the trail and a stronger sense of the climb.",
  },
];

const highlights = [
  {
    title: "Experienced Mountain Crew",
    text:
      "Our guides, cooks, and porters support every climb with professionalism, care, and practical mountain experience from the first day to the descent.",
    icon: ClockIcon,
  },
  {
    title: "Camping and Hut Options",
    text:
      "Travelers can choose between scenic camping routes such as Lemosho, Machame, Rongai, and Northern Circuit, or the hut-based comfort of Marangu Route.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Daily Meals on the Mountain",
    text:
      "Every full climb includes breakfast, lunch, and dinner each day, helping trekkers stay energized, comfortable, and well supported throughout the journey.",
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
          Explore <span className="font-semibold text-slate-900">Airo Adventures &amp; Safaris</span>{" "}
          Kilimanjaro packages with scenic route choices, full mountain support,
          daily meals, and a calm structure designed for travelers seeking beauty,
          confidence, and a memorable summit journey.
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

              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Accommodation</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {route.stay}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Meals on the Route</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {route.meals}
                </p>
              </div>

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
            Our day hikes offer a lighter way to experience Mount Kilimanjaro for
            travelers who want mountain scenery, fresh air, and a rewarding trail
            without committing to the full summit trek.
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
              <p className="mt-4 text-sm leading-7 text-slate-600">{trip.text}</p>
              <p className="mt-5 text-xl font-semibold text-amber-700">
                {trip.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">Helpful note:</span> For one-day hikes,
            guide tips are recommended at around <span className="font-semibold text-amber-700">$20</span>.
            On full climbs, tips are optional but commonly appreciated for good service.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Why Climb With Airo Adventures &amp; Safaris
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A mountain experience designed with clarity, comfort, and support
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Climbing Kilimanjaro is more than reaching the summit. It is a journey
            of pace, preparation, altitude, and encouragement.{" "}
            <span className="font-semibold text-slate-900">Airo Adventures &amp; Safaris</span>{" "}
            approaches every climb with structured support, quality mountain service,
            and a travel experience that helps guests stay focused on the mountain itself.
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

          <div className="mt-8 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-950">
              Recommended Mountain Crew Tips
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Tipping is optional, but for excellent service many guests choose to
              give tips directly in cash to the team.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Guide:</span> $20+
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Cook:</span> $15+
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Porter:</span> $10+
              </div>
            </div>
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
                Scenic routes, daily support, and a summit journey worth remembering
              </h3>
              <p className="mt-5 text-base leading-8 text-white/80">
                Whether you choose the comfort of Marangu huts or the beauty of
                Kilimanjaro’s camping routes, every climb is built around careful
                support, daily meals, and a stronger connection to the mountain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}