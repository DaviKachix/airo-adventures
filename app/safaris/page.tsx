import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const safariPackages = [
  {
    title: "2 Day Safari",
    price: "$1500",
    image: "/images/elephants.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire",
    text: "A short but rewarding safari experience ideal for travelers who want a compact wildlife adventure with beautiful scenery and memorable sightings.",
  },
  {
    title: "3 Day Safari",
    price: "$1900",
    image: "/images/lions.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire",
    text: "Enjoy more time in the wild with an extended safari journey that balances exploration, comfort, and immersive game viewing.",
  },
  {
    title: "4 Day Safari",
    price: "$2300",
    image: "/images/giraffe.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire",
    text: "A more complete safari option with greater flexibility, deeper destination experience, and more chances to enjoy Tanzania’s iconic landscapes.",
  },
  {
    title: "5 Day Safari",
    price: "$2800",
    image: "/images/zebras.jpg",
    parks: "Serengeti / Ngorongoro / Tarangire",
    text: "A full safari experience for travelers seeking richer wildlife encounters, scenic transitions, and a more relaxed travel pace.",
  },
];

export default function Safaris() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          Safari Packages
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Discover Tanzania through beautifully planned safari journeys
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          Explore Serengeti, Ngorongoro, and Tarangire through cleanly designed
          camping safari packages that combine wildlife, scenery, and authentic
          adventure in a calm, premium travel experience.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <ClockIcon className="h-4 w-4" />
                {item.title}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                    <MapPinIcon className="h-4 w-4 text-amber-700" />
                    {item.parks}
                  </div>
                </div>

                <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                  {item.price}
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
            What Makes These Safaris Special
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Wildlife, scenery, and a smoother travel experience
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Our safari packages are designed to help travelers enjoy northern
            Tanzania’s most famous parks with a clear structure, elegant
            presentation, and enough flexibility to make the journey feel both
            memorable and comfortable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">Top Parks</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Explore Serengeti, Ngorongoro, and Tarangire in a way that feels
                focused, scenic, and rewarding.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-950">Clear Pricing</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Simple duration-based safari options help visitors understand
                packages quickly and choose confidently.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
          <div className="relative h-full min-h-[420px]">
            <Image
              src="/images/landscape.jpg"
              alt="Tanzania safari landscape"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/20" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                Safari Experience
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                See Tanzania in a way that feels close, calm, and unforgettable
              </h3>
              <p className="mt-5 text-base leading-8 text-white/80">
                From wildlife sightings to sweeping landscapes, every day brings
                a stronger connection to the beauty of the destination.
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
    </main>
  );
}