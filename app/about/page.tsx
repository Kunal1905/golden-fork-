import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[88px]">
        {/* Page Hero */}
        <section className="relative h-[512px] flex items-center justify-center overflow-hidden bg-background-charcoal">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600)'
              }}
            ></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h1 className="font-[var(--font-playfair-display)] text-[clamp(2.5rem,5vw,4rem)] text-surface-cream mb-4 drop-shadow-lg tracking-tight">
              Our Story
            </h1>
            <p className="font-[var(--font-inter)] text-lg text-on-surface-variant max-w-xl mx-auto">
              Born from a love of food and family.
            </p>
          </div>
        </section>

        {/* Story Sections */}
        <section className="py-16 px-8 max-w-[1200px] mx-auto space-y-[120px]">
          {/* Block 1: Image Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  alt="A vintage photograph style image of an old recipe book open on a rustic wooden table, softly illuminated by natural light from a nearby window."
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  src="https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?auto=format&fit=crop&q=80&w=1000"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-accent-gold">
                How It All Began
              </h2>
              <p className="font-[var(--font-inter)] text-lg text-on-surface-variant leading-relaxed">
                Decades ago, in a small coastal kitchen, the foundation of The Golden Fork was laid not with grand ambitions, but with a simple desire: to share the comforting flavors of home. What started as a modest family endeavor quickly blossomed, fueled by an uncompromising dedication to sourcing the finest local ingredients and an innate understanding of culinary harmony.
              </p>
              <p className="font-[var(--font-inter)] text-base text-on-surface-variant leading-relaxed">
                Our founders believed that every meal should be an occasion, a moment to pause and connect. That philosophy remains the beating heart of our kitchen today.
              </p>
            </div>
          </div>
          {/* Block 2: Text Left */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  alt="A striking close-up of a chef's hands delicately placing a micro-green garnish on an exquisite, minimalist plated dish."
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-accent-gold">
                Our Philosophy
              </h2>
              <p className="font-[var(--font-inter)] text-lg text-on-surface-variant leading-relaxed">
                We approach fine dining as an art form stripped of pretense. True luxury is found in the meticulous attention to detail, the rhythm of service, and the purity of flavor.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent-gold mr-3 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    restaurant
                  </span>
                  <span className="font-[var(--font-inter)] text-base text-on-surface-variant">
                    Respect for the ingredient above all else.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent-gold mr-3 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    eco
                  </span>
                  <span className="font-[var(--font-inter)] text-base text-on-surface-variant">
                    Sustainable sourcing from local artisans.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent-gold mr-3 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    volunteer_activism
                  </span>
                  <span className="font-[var(--font-inter)] text-base text-on-surface-variant">
                    Service crafted with genuine warmth.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Block 3: Image Left with Quote */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-5/12">
              <div className="relative aspect-[3/4] rounded-t-[100px] rounded-b-xl overflow-hidden border border-outline-variant/30">
                <img
                  alt="A dramatic black and white portrait of a confident head chef standing in a modern, stainless-steel commercial kitchen."
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 space-y-8">
              <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-accent-gold">
                Meet Our Head Chef
              </h2>
              <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                With over two decades of culinary mastery honed in Michelin-starred kitchens across Europe, Chef Laurent brings a visionary approach to The Golden Fork. His plates are a dialogue between classical technique and modern innovation.
              </p>
              <blockquote className="relative p-8 bg-surface-container-high rounded-xl border-l-4 border-accent-gold mt-8">
                <span className="material-symbols-outlined absolute top-4 left-4 text-outline-variant opacity-20 text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  format_quote
                </span>
                <p className="font-[var(--font-playfair-display)] text-xl text-surface-cream italic relative z-10">
                  "A great dish doesn't shout. It whispers its secrets to the palate, revealing layers of memory and intention with every bite."
                </p>
                <footer className="mt-4 font-semibold text-xs tracking-[0.1em] uppercase text-accent-gold">
                  — Chef Laurent, Executive Chef
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="bg-background-charcoal py-16 border-y border-outline-variant">
          <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="font-[var(--font-playfair-display)] text-[clamp(2rem,4vw,3rem)] text-accent-gold">
                12+
              </div>
              <div className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
                Years of Excellence
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-[var(--font-playfair-display)] text-[clamp(2rem,4vw,3rem)] text-accent-gold">
                200+
              </div>
              <div className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
                Menu Iterations
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-[var(--font-playfair-display)] text-[clamp(2rem,4vw,3rem)] text-accent-gold">
                50k+
              </div>
              <div className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
                Happy Guests
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-[var(--font-playfair-display)] text-[clamp(2rem,4vw,3rem)] text-accent-gold">
                8
              </div>
              <div className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
                Culinary Awards
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-8 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-accent-gold mb-4">
              Our Core Values
            </h2>
            <p className="font-[var(--font-inter)] text-base text-on-surface-variant max-w-2xl mx-auto">
              The principles that guide every slice, simmer, and serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 hover:border-accent-gold/50 transition-colors duration-300 text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-charcoal flex items-center justify-center mb-6 group-hover:bg-surface-dim transition-colors">
                <span className="material-symbols-outlined text-3xl text-accent-gold" style={{ fontVariationSettings: "'FILL' 0" }}>
                  eco
                </span>
              </div>
              <h3 className="font-[var(--font-playfair-display)] text-xl text-surface-cream mb-4">
                Sustainability
              </h3>
              <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                We partner with ethical farms and prioritize zero-waste initiatives to ensure our footprint is as light as our soufflés.
              </p>
            </div>
            <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 hover:border-accent-gold/50 transition-colors duration-300 text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-charcoal flex items-center justify-center mb-6 group-hover:bg-surface-dim transition-colors">
                <span className="material-symbols-outlined text-3xl text-accent-gold" style={{ fontVariationSettings: "'FILL' 0" }}>
                  groups
                </span>
              </div>
              <h3 className="font-[var(--font-playfair-display)] text-xl text-surface-cream mb-4">
                Community
              </h3>
              <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                Our restaurant is a nexus for the neighborhood. We foster connections through food and actively support local charities.
              </p>
            </div>
            <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 hover:border-accent-gold/50 transition-colors duration-300 text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-background-charcoal flex items-center justify-center mb-6 group-hover:bg-surface-dim transition-colors">
                <span className="material-symbols-outlined text-3xl text-accent-gold" style={{ fontVariationSettings: "'FILL' 0" }}>
                  handyman
                </span>
              </div>
              <h3 className="font-[var(--font-playfair-display)] text-xl text-surface-cream mb-4">
                Craftsmanship
              </h3>
              <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                From house-made pastas to perfectly tempered chocolate, we embrace the rigorous discipline of culinary craft.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
