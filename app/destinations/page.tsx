import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const destinations = [
  {
    title: "Serengeti National Park",
    image: "/images/two-cheetah.jpg",
    label: "Wildlife & Great Migration",
    text:
      "Serengeti is one of Africa’s most iconic safari destinations, known for its endless plains, rich predator sightings, and the world-famous Great Migration. The northern Serengeti is especially loved by many travelers for its dramatic migration scenes and unforgettable safari atmosphere.",
  },
  {
    title: "Ngorongoro Crater",
    image: "/images/crater_ngorongoro.jpg",
    label: "UNESCO World Heritage Site",
    text:
      "Often described as Africa’s Garden of Eden, Ngorongoro Crater is one of Tanzania’s most rewarding safari experiences. Its dramatic volcanic landscape, dense wildlife population, and strong chance of seeing the Big Five make it a destination that leaves a lasting impression.",
  },
  {
    title: "Tarangire National Park",
    image: "/images/elephant-mountain.jpg",
    label: "Elephants & Baobabs",
    text:
      "Tarangire is famous for giant elephant herds, ancient baobab trees, and peaceful safari scenery. During the dry season, many animals gather near the river, making the park especially beautiful for wildlife viewing and photography.",
  },
  {
    title: "Lake Manyara National Park",
    image: "/images/beautiful-giraffe.jpg",
    label: "Scenic & Diverse",
    text:
      "Lake Manyara offers a beautiful mix of forest, lake shore, open plains, and escarpment views. It is known for tree-climbing lions, flamingos, hippos, baboons, and a rich variety of birdlife that makes the park feel distinct and memorable.",
  },
  {
    title: "Mount Kilimanjaro",
    image: "/images/best-kilimanjaro.jpg",
    label: "Africa’s Highest Peak",
    text:
      "Rising to 5,895 meters above sea level, Mount Kilimanjaro is Africa’s highest mountain and one of the world’s most inspiring trekking destinations. Airo Adventures & Safaris offers scenic routes for both first-time climbers and experienced trekkers.",
  },
  {
    title: "Arusha",
    image: "/images/car_safari.jpg",
    label: "Safari Gateway",
    text:
      "Arusha is the starting point for many northern Tanzania adventures. It is the perfect gateway for safaris, Kilimanjaro climbs, and nearby excursions, and we help guests plan smooth transitions before and after their journeys.",
  },
];

const whyThesePlaces = [
  {
    title: "Wildlife Variety",
    text:
      "From lions, elephants, and giraffes to flamingos, hippos, zebras, wildebeest, and rhinos, these destinations give travelers access to Tanzania’s most celebrated wildlife.",
  },
  {
    title: "Beautiful Contrasts",
    text:
      "Each destination offers a different feeling, from open Serengeti plains and crater views to mountain slopes, baobab landscapes, and lakeside scenery.",
  },
  {
    title: "Easy to Combine",
    text:
      "These destinations work beautifully together in short and extended itineraries, making it easier to create a safari or trekking journey that fits time and budget.",
  },
];

export default function Destinations() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          Explore Tanzania
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Destinations shaped for unforgettable experiences across Tanzania
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          From legendary safari landscapes to the slopes of Mount Kilimanjaro,{" "}
          <span className="font-semibold text-slate-950">
            Airo Adventures & Safaris
          </span>{" "}
          brings together Tanzania’s most memorable destinations in a way that
          feels inspiring, clear, and easy to explore.
        </p>
      </div>

      <section className="mt-12 rounded-[2rem] border border-amber-100 bg-amber-50/70 p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Northern Tanzania Highlights
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Explore the destinations that make northern Tanzania one of the
              most rewarding travel regions in Africa.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
              <GlobeAltIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Rich Landscapes
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Discover open plains, crater floors, mountain trails, ancient
              baobabs, lakes, forests, and diverse natural scenery.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
              <ArrowRightIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Easy to Plan
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Whether guests want safari, trekking, or a mix of both, we help
              shape journeys that feel smooth, balanced, and memorable.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <MapPinIcon className="h-4 w-4" />
                Tanzania
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                  {item.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {item.title}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>

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

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Why These Destinations Stand Out
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Different places, different moods, one unforgettable journey
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Every destination with{" "}
            <span className="font-semibold text-slate-950">
              Airo Adventures & Safaris
            </span>{" "}
            offers its own character. Some are known for wildlife density, some
            for wide-open beauty, and others for high-altitude adventure.
            Together, they create a travel experience that feels rich, balanced,
            and deeply memorable.
          </p>

          <div className="mt-8 space-y-4">
            {whyThesePlaces.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
          <div className="relative h-full min-h-[440px]">
            <Image
              src="/images/crater_ngorongoro.jpg"
              alt="Ngorongoro Crater destination"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/15" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                Featured Destination
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Ngorongoro Crater remains one of Tanzania’s most compelling
                places to visit
              </h3>

              <p className="mt-5 text-base leading-8 text-white/80">
                With dramatic scenery, dense wildlife, and an atmosphere that
                feels both grand and intimate, Ngorongoro Crater is one of those
                places that often becomes a highlight of the entire journey.
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
                  href="/safaris"
                  className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  View Safari Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-8 py-12 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
            Custom Travel Planning
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Not sure which destination fits your journey best?
          </h2>
          <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
            We can help you choose the right destination, safari flow, or
            trekking route based on your travel time, comfort level, interests,
            and experience.
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