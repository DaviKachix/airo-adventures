import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const safariPackages = [
  {
    title: "1 Day Safari",
    price: "From $1200",
    image: "/images/car_safari.jpg",
    parks: "Tarangire / Lake Manyara / Ngorongoro",
    text:
      "Perfect for travelers with limited time, this short safari begins with an early sunrise game drive and focuses on one carefully selected park. It is a rewarding way to experience Tanzania’s wildlife, scenery, and natural beauty before returning to Arusha in the evening.",
  },
  {
    title: "2 Day Safari",
    price: "From $1500",
    image: "/images/elephant-mountain.jpg",
    parks: "Tarangire / Lake Manyara / Ngorongoro",
    text:
      "A beautifully balanced safari experience with one park visited each day, giving guests enough time to enjoy wildlife sightings, scenic landscapes, and a relaxed overnight stay before returning to Arusha on the second day.",
  },
  {
    title: "3 Day Safari",
    price: "From $1900",
    image: "/images/two-cheetah.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire",
    text:
      "This is one of the most rewarding short safaris in northern Tanzania, combining rich wildlife experiences, beautiful transitions between destinations, and more time in the bush with overnight stays that deepen the journey.",
  },
  {
    title: "4 Day Safari",
    price: "From $2300",
    image: "/images/beautiful-giraffe.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire / Lake Manyara",
    text:
      "A more complete safari for travelers who want a fuller northern circuit experience. With more time on the road and in the parks, guests enjoy broader wildlife encounters, varied scenery, and a stronger sense of Tanzania’s wilderness.",
  },
  {
    title: "5 Day Safari",
    price: "From $2800",
    image: "/images/zebra_baby.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire / Lake Manyara",
    text:
      "A rich and immersive safari adventure designed for travelers who want more time for game drives, sunrise moments, wildlife photography, and deeper exploration across Tanzania’s iconic northern safari parks.",
  },
  {
    title: "Great Migration Safari",
    price: "From $2400",
    image: "/images/crater_ngorongoro.jpg",
    parks: "Northern Serengeti / Ngorongoro / Tarangire",
    text:
      "An unforgettable journey focused on Tanzania’s most celebrated safari experience. Explore the famous Serengeti ecosystem and, in season, witness the drama of migration in the north where vast herds move across the plains in search of fresh grazing.",
  },
];

const highlights = [
  {
    title: "Sunrise Game Drives",
    text:
      "Most safari days begin early in the morning when wildlife is more active, temperatures are cooler, and the golden light makes the experience even more beautiful.",
  },
  {
    title: "One Park, Better Experience",
    text:
      "Each safari day is planned around one main park so guests can enjoy a smoother journey, better wildlife viewing, and less rushed travel.",
  },
  {
    title: "Northern Tanzania Icons",
    text:
      "Explore Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara, each offering its own scenery, wildlife, and unforgettable atmosphere.",
  },
  {
    title: "Flexible Overnight Flow",
    text:
      "Depending on the number of days, guests can enjoy same-day return safaris or overnight stays before returning comfortably to Arusha.",
  },
];

const destinations = [
  {
    name: "Serengeti National Park",
    text:
      "Famous for endless plains, big cats, and the Great Migration, Serengeti offers one of the world’s most iconic safari landscapes.",
  },
  {
    name: "Ngorongoro Crater",
    text:
      "Often called Africa’s Garden of Eden, Ngorongoro Crater is one of Tanzania’s most rewarding safari destinations, known for dense wildlife, beautiful crater scenery, and a strong chance of spotting the Big Five.",
  },
  {
    name: "Tarangire National Park",
    text:
      "Known for giant baobab trees and large elephant herds, Tarangire is especially beautiful in the dry season when animals gather around the river.",
  },
  {
    name: "Lake Manyara National Park",
    text:
      "A scenic park known for tree-climbing lions, flamingos, forest landscapes, hippos, and one of the most visually diverse safari settings in northern Tanzania.",
  },
];

export default function Safaris() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          Airo Adventures & Safaris
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Discover northern Tanzania through beautifully planned safari journeys
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          Explore Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara
          through thoughtfully designed safari experiences by{" "}
          <span className="font-semibold text-slate-900">
            Airo Adventures & Safaris
          </span>
          . From sunrise game drives to rewarding wildlife encounters, each
          journey is designed to feel scenic, smooth, and unforgettable.
        </p>
      </div>

      <section className="mt-12 rounded-[2rem] border border-amber-100 bg-amber-50/70 p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
              <SunIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Best Time Starts Early
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Most safari days begin with a sunrise game drive, when animals are
              more active and the light across the plains is at its most
              beautiful.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
              <ClockIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Smooth Daily Flow
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              For the best guest experience, each day focuses on one main park,
              helping visitors enjoy more wildlife and less rushed movement.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Arusha Hotel Support
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Before and after safari, we can help guests find suitable hotels
              in Arusha. The guest chooses the hotel and pays directly.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {safariPackages.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[1.85rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
          >
            <div className="relative h-[255px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <ClockIcon className="h-4 w-4" />
                {item.title}
              </div>

              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-amber-700 backdrop-blur">
                {item.price}
              </div>
            </div>

            <div className="p-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">
                  {item.title}
                </h2>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                  <MapPinIcon className="h-4 w-4 text-amber-700" />
                  {item.parks}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {item.text}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-950"
              >
                Book This Safari
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Safari Flow
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Designed to feel smoother, clearer, and more rewarding
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            At <span className="font-semibold text-slate-900">Airo Adventures & Safaris</span>,
            safari days are structured in a way that helps guests enjoy the
            journey at a comfortable pace while still experiencing Tanzania’s
            most celebrated wildlife areas.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">1 Day Safari</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Early sunrise departure from Arusha, visit one park, enjoy a
                rewarding game drive, and return to Arusha in the evening.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">2 Day Safari</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Visit one park on the first day, spend one overnight stay, then
                continue the experience before returning to Arusha on the second
                day.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">3+ Day Safari</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ideal for guests who want to combine more destinations such as
                Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara with
                overnight stays that make the safari feel deeper and more
                immersive.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
          <div className="relative h-full min-h-[460px]">
            <Image
              src="/images/crater_ngorongoro.jpg"
              alt="Ngorongoro Crater safari view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/15" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                Featured Destination
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Ngorongoro Crater is one of the most compelling safari
                experiences in Tanzania
              </h3>

              <p className="mt-5 text-base leading-8 text-white/80">
                Often described as one of Africa’s most extraordinary wildlife
                settings, Ngorongoro Crater offers dramatic scenery, dense
                wildlife populations, and a powerful sense of wonder that makes
                it worth every moment of the journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-amber-100"
                >
                  Plan My Safari
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>

                <Link
                  href="/destinations"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Top Safari Destinations
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Four remarkable parks, each with its own character
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {destinations.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}