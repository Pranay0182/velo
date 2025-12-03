import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

export default function AboutVelotech() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Full-page wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero / Header (full width feel) */}
        <header className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1">
            <div className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              <Title text1={"ABOUT"} text2={"VELOTECH"} />
            </div>

            <p className="mt-5 text-gray-700 text-base lg:text-lg leading-relaxed max-w-3xl">
              Velotech Innovations delivers energy-efficient motor technology, smart controllers and industrial-grade
              wiring. We help factories and households cut energy consumption without sacrificing performance — retrofit
              existing motors or choose one of our efficient motor+controller solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-md bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700 transition">
                Get a retrofit quote
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-3 rounded-md border border-green-600 px-6 py-3 text-green-700 hover:bg-green-50 transition">
                Browse motors &amp; wires
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Stat label="Energy Savings" value="Up to 60%" />
              <Stat label="Retrofit" value="Plug & Play" />
              <Stat label="Warranty" value="2 Years" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative overflow-hidden rounded-none shadow-[0_18px_40px_rgba(2,6,23,0.45)] border border-green-100 bg-green-50 transition-shadow duration-300">
              <img
                src={assets.about_img}
                alt="Velotech motors"
                className="w-full h-64 md:h-[380px] object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute left-4 bottom-4 bg-white/90 border border-green-100 rounded p-3 text-sm">
                <strong className="text-green-700">Velotech Innovations</strong>
                <div className="text-gray-700">Energy-efficient motor solutions</div>
              </div>
            </div>
          </div>
        </header>

        {/* Mission & What we do - full width card */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-green-700">Our Mission</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To make motors and electrical systems dramatically more efficient, affordable and easy to adopt. We
              design bipolar induction motor controllers that reduce wattage draw while maintaining torque — meaning
              faster payback and lower bills for both industry and consumers.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature title="Research-backed" desc="Engineering-first approach; tested in labs & field." />
              <Feature title="Retrofit-friendly" desc="Install our controller on existing motors — no full replacement." />
              <Feature title="Scale-ready" desc="Solutions for households, workshops and large factories." />
            </div>

            <div className="mt-8">
              <h4 className="text-green-700 font-medium">How the retrofit works</h4>
              <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
                <li>We assess your motor &amp; load profile.</li>
                <li>Select the correct Velotech controller for your motor size.</li>
                <li>Plug-and-play installation by a certified technician.</li>
                <li>Measure savings and offer support &amp; warranty.</li>
              </ol>
            </div>
          </div>

          <aside className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-green-700">Quick Facts</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✔️ India-wide support &amp; installation</li>
              <li>✔️ ISO-tested motor controllers</li>
              <li>✔️ Dedicated enterprise onboarding</li>
            </ul>

            <div className="mt-4">
              <h5 className="text-sm text-gray-800 font-medium">Need a bulk quote?</h5>
              <a href="#contact" className="mt-3 inline-block px-4 py-2 rounded bg-green-700 text-white font-semibold">Request Quote</a>
            </div>
          </aside>
        </section>

        {/* Team / Testimonials */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800">Trusted by</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <TrustCard name="A. Industries" note="Reduced energy bills by 42%" />
            <TrustCard name="GreenPack Pvt. Ltd." note="Easy retrofit on 50 motors" />
            <TrustCard name="Homeowner" note="Quieter & cheaper to run" />
          </div>
        </section>

        {/* Footer CTA & Newsletter - full width */}
        

      </div>
    </div>
  )
}

/* ---------- Small subcomponents used inside AboutVelotech ---------- */

function Stat({ label, value }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
      <div className="text-xs text-gray-600">{label}</div>
      <div className="mt-1 text-xl font-semibold text-gray-900">{value}</div>
    </div>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
      <div className="font-medium text-green-700">{title}</div>
      <div className="mt-1 text-sm text-gray-700">{desc}</div>
    </div>
  )
}

function TrustCard({ name, note }) {
  return (
    <div className="rounded-lg p-4 border border-gray-100 bg-white shadow-sm">
      <div className="text-sm font-semibold text-gray-900">{name}</div>
      <div className="mt-1 text-sm text-gray-700">{note}</div>
    </div>
  )
}
