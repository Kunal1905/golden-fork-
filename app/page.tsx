import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10"></div>
            <img
              className="w-full h-full object-cover"
              alt="A breathtaking, cinematic shot of a beautifully plated haute cuisine dish in a dimly lit, luxurious fine dining restaurant."
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
            <h1 className="font-[var(--font-playfair-display)] text-[clamp(2.5rem,5vw,4rem)] text-surface-cream mb-6 drop-shadow-lg">
              Where Every Meal Becomes a Memory
            </h1>
            <p className="font-[var(--font-inter)] text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Fresh ingredients. Timeless recipes. Unforgettable evenings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="bg-accent-gold text-background font-semibold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded hover:bg-primary-fixed transition-colors shadow-sm active:scale-95">
                View Menu
              </Link>
              <Link href="/contact" className="bg-transparent border border-accent-gold text-accent-gold font-semibold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded hover:bg-accent-gold/10 transition-colors active:scale-95">
                Book a Table
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights Bar */}
        <section className="py-12 bg-background-charcoal border-b border-surface-variant">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-surface-variant">
              <div className="flex flex-col items-center p-4">
                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 0" }}>
                  restaurant
                </span>
                <h3 className="font-[var(--font-playfair-display)] text-xl text-surface-cream mb-2">
                  Curated Menu
                </h3>
                <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                  Seasonal ingredients crafted to perfection.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <h3 className="font-[var(--font-playfair-display)] text-xl text-surface-cream mb-2">
                  Award Winning
                </h3>
                <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                  Recognized for culinary excellence.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 0" }}>
                  location_on
                </span>
                <h3 className="font-[var(--font-playfair-display)] text-xl text-surface-cream mb-2">
                  Prime Location
                </h3>
                <p className="font-[var(--font-inter)] text-base text-on-surface-variant">
                  Heart of the city, soul of the cuisine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-16 px-4 md:px-8 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent-gold/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                className="rounded-xl object-cover w-full h-[500px] shadow-lg relative z-10"
                alt="A black and white or deeply desaturated portrait of a master chef in a pristine white coat, intensely focused while delicately plating a dish."
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-surface-cream mb-6">
                A Passion for Food, A Heart for Hospitality
              </h2>
              <p className="font-[var(--font-inter)] text-lg text-on-surface-variant mb-6">
                At The Golden Fork, we believe dining is an art form. Every dish tells a story of heritage, sourced from the finest local purveyors and elevated through modern techniques. Our commitment extends beyond the plate to the warmth of our service, ensuring every visit is a celebration.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent-gold font-semibold text-xs tracking-[0.1em] uppercase hover:text-primary-fixed transition-colors border-b border-accent-gold/30 pb-1 self-start">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16 bg-background-charcoal px-4 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl text-surface-cream">
                Chef's Specials This Season
              </h2>
              <div className="h-1 w-16 bg-accent-gold mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Dish Card 1 */}
              <div className="bg-surface-cream rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Pan-seared scallops on a plate."
                    src="https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?auto=format&fit=crop&q=80&w=800"
                  />
                </div>
                <div className="p-6 bg-surface-cream flex flex-col h-full">
                  <h3 className="font-[var(--font-playfair-display)] text-xl text-background mb-2">
                    Pan-Seared Scallops
                  </h3>
                  <p className="font-[var(--font-inter)] text-base text-background-charcoal mb-4 flex-grow">
                    Cauliflower silk, black truffle, micro herbs.
                  </p>
                  <span className="font-[var(--font-playfair-display)] text-2xl text-accent-gold">
                    $34
                  </span>
                </div>
              </div>
              {/* Dish Card 2 */}
              <div className="bg-surface-cream rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="A close-up, dramatic shot of a perfectly cooked medium-rare filet mignon."
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
                  />
                </div>
                <div className="p-6 bg-surface-cream flex flex-col h-full">
                  <h3 className="font-[var(--font-playfair-display)] text-xl text-background mb-2">
                    Wagyu Filet Mignon
                  </h3>
                  <p className="font-[var(--font-inter)] text-base text-background-charcoal mb-4 flex-grow">
                    Pommes purée, wild mushrooms, bordelaise.
                  </p>
                  <span className="font-[var(--font-playfair-display)] text-2xl text-accent-gold">
                    $85
                  </span>
                </div>
              </div>
              {/* Dish Card 3 */}
              <div className="bg-surface-cream rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="A chocolate dessert with gold decoration."
                    src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800"
                  />
                </div>
                <div className="p-6 bg-surface-cream flex flex-col h-full">
                  <h3 className="font-[var(--font-playfair-display)] text-xl text-background mb-2">
                    Valrhona Chocolate Dome
                  </h3>
                  <p className="font-[var(--font-inter)] text-base text-background-charcoal mb-4 flex-grow">
                    Hazelnut praline, raspberry coulis, gold leaf.
                  </p>
                  <span className="font-[var(--font-playfair-display)] text-2xl text-accent-gold">
                    $22
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-background-charcoal z-0">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="font-[var(--font-playfair-display)] text-[clamp(2rem,4vw,3.5rem)] text-accent-gold mb-8">
              Ready for an Unforgettable Evening?
            </h2>
            <Link href="/contact" className="bg-cta-burgundy text-surface-cream font-semibold text-xs tracking-[0.1em] uppercase px-10 py-4 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-cta-burgundy/20 active:scale-95 text-lg inline-flex items-center">
              Reserve Your Table
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

