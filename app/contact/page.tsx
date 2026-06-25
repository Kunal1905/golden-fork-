'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Page Hero */}
        <section className="h-[307px] min-h-[250px] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="font-[var(--font-playfair-display)] text-[clamp(2.5rem,5vw,4rem)] text-surface-cream mb-4">
              Get in Touch
            </h1>
            <p className="font-[var(--font-inter)] text-lg text-on-surface-variant">
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-16">
          {/* 2-Column Contact Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Contact Form */}
            <div className="glass-panel p-8 md:p-12 rounded-xl">
              <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-accent-gold mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-3 text-on-surface input-glow focus:outline-none transition-all"
                      id="name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-3 text-on-surface input-glow focus:outline-none transition-all"
                      id="email"
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-3 text-on-surface input-glow focus:outline-none transition-all"
                    id="phone"
                    placeholder="(555) 123-4567"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-3 text-on-surface input-glow focus:outline-none transition-all appearance-none"
                    id="subject"
                  >
                    <option>General Inquiry</option>
                    <option>Private Dining</option>
                    <option>Feedback</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-surface-dim border border-outline-variant rounded-lg px-4 py-3 text-on-surface input-glow focus:outline-none transition-all resize-none"
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-accent-gold text-on-primary px-8 py-4 rounded-lg font-semibold text-xs tracking-[0.1em] uppercase hover:bg-primary transition-colors duration-300 focus:ring-2 focus:ring-primary focus:outline-none"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-between h-full lg:pl-12 space-y-12">
              <div>
                <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-surface-cream mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                    <div>
                      <h3 className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                        Address
                      </h3>
                      <p className="font-[var(--font-inter)] text-lg text-surface-cream">
                        123 Culinary Avenue<br />
                        Metropolis, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      call
                    </span>
                    <div>
                      <h3 className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                        Phone
                      </h3>
                      <p className="font-[var(--font-inter)] text-lg text-surface-cream">
                        (555) 867-5309
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      mail
                    </span>
                    <div>
                      <h3 className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                        Email
                      </h3>
                      <p className="font-[var(--font-inter)] text-lg text-surface-cream">
                        reservations@thegoldenfork.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent-gold mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      schedule
                    </span>
                    <div>
                      <h3 className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                        Hours
                      </h3>
                      <p className="font-[var(--font-inter)] text-lg text-surface-cream">
                        Tue - Thu: 5pm - 10pm<br />
                        Fri - Sat: 5pm - 11pm<br />
                        Sun: 4pm - 9pm<br />
                        <span className="text-on-surface-variant text-sm mt-1 block">
                          Closed Mondays
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-outline-variant">
                <h3 className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-accent-gold hover:border-accent-gold transition-colors">
                    <span className="material-symbols-outlined">
                      photo_camera
                    </span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-accent-gold hover:border-accent-gold transition-colors">
                    <span className="material-symbols-outlined">
                      share
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="rounded-xl overflow-hidden border border-outline-variant h-[400px] relative">
            <img
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
              alt="A highly detailed, stylized map interface displaying a city layout."
              data-location="New York"
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1600"
            />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(26,26,26,1)]"></div>
          </section>

          {/* Reservation CTA */}
          <section className="bg-surface-container-high rounded-xl p-12 text-center border border-outline-variant relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50"></div>
            <h2 className="font-[var(--font-playfair-display)] text-xl md:text-2xl text-surface-cream mb-4">
              Prefer to reserve directly?
            </h2>
            <p className="font-[var(--font-inter)] text-lg text-on-surface-variant mb-8 max-w-lg mx-auto">
              Call us or book online to secure your table for an unforgettable dining experience.
            </p>
            <button className="bg-cta-burgundy text-surface-cream px-8 py-4 rounded-lg font-semibold text-xs tracking-[0.1em] uppercase hover:bg-secondary-container transition-colors duration-300 focus:ring-2 focus:ring-accent-gold focus:outline-none inline-flex items-center gap-2">
              Book a Table
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
