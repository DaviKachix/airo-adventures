import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
          Contact AIRO
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Start planning your Kilimanjaro climb or Tanzania safari
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          Reach out for route guidance, safari planning, pricing details, and
          custom trip support. We designed this page to feel simple, clear, and
          easy to use for modern travelers.
        </p>
      </div>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.16)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Direct Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Let’s make your adventure clear from the beginning
            </h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              Contact AIRO Adventures &amp; Safaris for Kilimanjaro routes,
              safari planning, and personalized travel support across Tanzania.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/15 text-amber-300">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <p className="mt-1 text-sm leading-7 text-white/75">
                      Fast responses for new trip inquiries and planning
                      questions.
                    </p>
                    <Link
                      href="https://wa.me/255624947363"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-white"
                    >
                      Chat on WhatsApp
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/15 text-amber-300">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <p className="mt-1 text-sm leading-7 text-white/75">
                      Speak directly for route clarification, safari planning,
                      or quick booking support.
                    </p>
                    <a
                      href="tel:+255624947363"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-white"
                    >
                      +255 624 947 363
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/15 text-amber-300">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <p className="mt-1 text-sm leading-7 text-white/75">
                      Best for detailed travel requests and custom itinerary
                      planning.
                    </p>
                    <a
                      href="mailto:info@airoadventures.com"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-white"
                    >
                      info@airoadventures.com
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300/15 text-amber-300">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Location</p>
                    <p className="mt-1 text-sm leading-7 text-white/75">
                      Arusha, Tanzania — gateway to Kilimanjaro and northern
                      safari adventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Good to Include
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <CalendarDaysIcon className="h-5 w-5 text-amber-700" />
                  <span className="text-sm font-medium text-slate-800">
                    Preferred travel dates
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <UserGroupIcon className="h-5 w-5 text-amber-700" />
                  <span className="text-sm font-medium text-slate-800">
                    Number of travelers
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-amber-700" />
                  <span className="text-sm font-medium text-slate-800">
                    Route or destination
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-amber-700" />
                  <span className="text-sm font-medium text-slate-800">
                    Special requests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Booking Inquiry
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Send your travel request
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Fill in the details below and we will respond with the most suitable
            route, safari option, or next step for your trip.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+255..."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
                />
              </div>

              <div>
                <label
                  htmlFor="tripType"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Trip Type
                </label>
                <select
                  id="tripType"
                  name="tripType"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-900"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select trip type
                  </option>
                  <option>Kilimanjaro Climb</option>
                  <option>Safari Package</option>
                  <option>Custom Adventure</option>
                  <option>Day Trip</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="travelers"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Number of Travelers
                </label>
                <input
                  id="travelers"
                  name="travelers"
                  type="number"
                  min="1"
                  placeholder="2"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
                />
              </div>

              <div>
                <label
                  htmlFor="dates"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Preferred Dates
                </label>
                <input
                  id="dates"
                  name="dates"
                  type="text"
                  placeholder="Month / preferred dates"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="route"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Route or Destination
              </label>
              <input
                id="route"
                name="route"
                type="text"
                placeholder="Lemosho Route, Serengeti, Ngorongoro..."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your trip goals, timing, experience level, or any special requests."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-900"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-slate-500">
                Modern practice: keep the form short, ask only useful trip
                details, and offer quick direct contact options.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-950"
              >
                Send Inquiry
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}