import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    title: "Experienced Team",
    text: "Our adventures are supported by experienced guides, chefs, and porters focused on professionalism, care, and memorable guest experiences.",
    icon: UserGroupIcon,
  },
  {
    title: "Local Knowledge",
    text: "We build journeys around real Tanzania insight, helping travelers experience landscapes, wildlife, and mountain routes with confidence.",
    icon: GlobeAltIcon,
  },
  {
    title: "Trusted Planning",
    text: "From first inquiry to the final day of travel, we aim to keep the journey clear, smooth, and thoughtfully organized.",
    icon: ShieldCheckIcon,
  },
];

const strengths = [
  "Kilimanjaro climbing packages",
  "Camping safari experiences",
  "Experienced mountain crews",
  "Authentic Tanzania adventures",
  "Clean and modern travel planning",
  "Comfort-focused guest support",
];

export default function About() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          About AIRO
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          A modern adventure company built around trust, clarity, and experience
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          AIRO Adventures &amp; Safaris specializes in Kilimanjaro climbing and
          Tanzania safari experiences, supported by experienced guides, chefs,
          and porters who help turn each journey into something memorable,
          beautiful, and well-structured.
        </p>
      </div>

      <section className="mt-14 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="relative h-[460px]">
            <Image
              src="/images/mountain.jpg"
              alt="Mount Kilimanjaro adventure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Adventures shaped by people who understand the journey
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We believe travel should feel inspiring, organized, and personal.
            That is why AIRO focuses on clear travel planning, authentic local
            support, and a calm premium approach that helps guests enjoy the
            destination without unnecessary complexity.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Whether you are preparing for a Kilimanjaro summit or a wildlife
            safari across northern Tanzania, our goal is to make the experience
            feel smooth from beginning to end.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
              >
                <CheckCircleIcon className="h-5 w-5 text-amber-700" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            What Defines Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A refined travel experience grounded in real expertise
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Our Focus
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Kilimanjaro climbs and safari journeys designed with intention
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            AIRO brings together two of Tanzania’s most powerful travel
            experiences: the ambition of climbing Mount Kilimanjaro and the
            beauty of wildlife safaris across iconic landscapes such as
            Serengeti, Ngorongoro, and Tarangire.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            By combining careful planning with local expertise, we create
            journeys that feel immersive, reliable, and rewarding for modern
            travelers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kilimanjaro"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-950"
            >
              Explore Kilimanjaro
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/safaris"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-amber-500 hover:text-blue-950"
            >
              View Safari Packages
            </Link>
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
                Our Motto
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Chase the Wild, Conquer the Sky
              </h3>
              <p className="mt-5 text-base leading-8 text-white/80">
                A brand line that reflects both the spirit of safari adventure
                and the ambition of reaching Africa’s highest summit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}