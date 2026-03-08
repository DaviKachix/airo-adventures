import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";

const destinations = [
  {
    title: "Serengeti",
    image: "/images/elephants.jpg",
    text: "Experience vast plains, rich wildlife, and unforgettable safari moments in one of Africa’s most iconic national parks.",
  },
  {
    title: "Ngorongoro",
    image: "/images/rhino.jpg",
    text: "Discover the beauty of the crater, dramatic landscapes, and rewarding game viewing in a world-famous conservation area.",
  },
  {
    title: "Tarangire",
    image: "/images/giraffe.jpg",
    text: "Explore giant baobabs, elephant herds, and a quieter safari atmosphere filled with natural beauty and photographic charm.",
  },
  {
    title: "Kilimanjaro",
    image: "/images/canyon.jpg",
    text: "Climb Africa’s highest peak through scenic trekking routes with breathtaking views, altitude adventure, and summit ambition.",
  },
];

export default function Destinations() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          Explore Tanzania
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Destinations crafted for unforgettable adventures
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          From legendary safari landscapes to the summit routes of Mount
          Kilimanjaro, AIRO Adventures &amp; Safaris brings together Tanzania’s
          most memorable destinations in a clean, modern, and inspiring way.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {destinations.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
          >
            <div className="relative h-[260px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <MapPinIcon className="h-4 w-4" />
                Tanzania
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.text}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-700 transition hover:text-blue-950"
              >
                Plan this destination
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-8 py-12 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
            Custom Travel Planning
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            We can help you choose the right destination, route, and travel
            style based on your time, goals, and experience level.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-amber-100"
            >
              Start Planning
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/kilimanjaro"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Kilimanjaro Routes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}