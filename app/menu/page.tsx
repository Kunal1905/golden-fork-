import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Menu() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[88px]">
        {/* Page Hero */}
        <section className="relative h-[409px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="bg-cover bg-center w-full h-full opacity-60"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600)'
              }}
            ></div>
            <div className="absolute inset-0 bg-background/70"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
            <h1 className="font-[var(--font-playfair-display)] text-[clamp(2.5rem,5vw,4rem)] text-surface-cream mb-4 drop-shadow-md">
              Our Menu
            </h1>
            <p className="font-[var(--font-inter)] text-lg text-accent-gold uppercase tracking-widest drop-shadow-sm">
              Fresh. Local. Seasonal.
            </p>
          </div>
        </section>

        {/* Category Tab Bar */}
        <nav className="sticky top-[88px] z-40 bg-background/95 backdrop-blur-md border-b border-outline-variant w-full overflow-x-auto whitespace-nowrap scrollbar-hide py-4 px-4 md:px-8 shadow-sm">
          <div className="max-w-[1200px] mx-auto flex gap-8 justify-start md:justify-center font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
            <a href="#starters" className="text-accent-gold border-b-2 border-accent-gold pb-1 px-2 hover:text-accent-gold transition-colors">
              Starters
            </a>
            <a href="#mains" className="px-2 hover:text-accent-gold transition-colors">
              Mains
            </a>
            <a href="#grills" className="px-2 hover:text-accent-gold transition-colors">
              Grills
            </a>
            <a href="#pasta" className="px-2 hover:text-accent-gold transition-colors">
              Pasta
            </a>
            <a href="#desserts" className="px-2 hover:text-accent-gold transition-colors">
              Desserts
            </a>
            <a href="#drinks" className="px-2 hover:text-accent-gold transition-colors">
              Drinks
            </a>
          </div>
        </nav>

        {/* Menu Content */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16">
          {/* Category: Starters */}
          <div className="mb-16 scroll-mt-32" id="starters">
            <h2 className="font-[var(--font-playfair-display)] text-2xl text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
              Starters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="A close-up shot of a delicate beef carpaccio plate, thinly sliced and arranged in a perfect circle on a stark white artisanal ceramic plate."
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Wagyu Beef Carpaccio
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $24
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Truffle aioli, shaved parmesan, crispy capers, wild baby arugula.
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <span className="bg-surface-variant/10 text-background-charcoal px-2 py-1 rounded font-semibold text-[10px] tracking-[0.1em] uppercase">
                      Chef's Pick
                    </span>
                  </div>
                </div>
              </article>
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="Heirloom tomato burrata salad on a plate."
                  src="https://images.unsplash.com/photo-1625944524528-b78df45fc869?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Heirloom Tomato Burrata
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $19
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Aged balsamic caviar, basil emulsion, toasted pine nuts, micro greens.
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <span className="bg-surface-variant/10 text-background-charcoal px-2 py-1 rounded font-semibold text-[10px] tracking-[0.1em] uppercase">
                      Vegetarian
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Category: Mains */}
          <div className="mb-16 scroll-mt-32" id="mains">
            <h2 className="font-[var(--font-playfair-display)] text-2xl text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
              Mains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="A perfectly pan-seared sea bass fillet with crispy skin, resting on a bed of bright green pea puree and accompanied by tender asparagus spears."
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Pan-Seared Sea Bass
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $42
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Saffron risotto, charred asparagus, lemon-caper beurre blanc.
                  </p>
                </div>
              </article>
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="Roasted duck breast with orange sauce on a plate."
                  src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Duck Breast à l'Orange
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $38
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Crispy skin, parsnip purée, wilted chard, grand marnier reduction.
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <span className="bg-surface-variant/10 text-background-charcoal px-2 py-1 rounded font-semibold text-[10px] tracking-[0.1em] uppercase">
                      Chef's Pick
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Category: Grills */}
          <div className="mb-16 scroll-mt-32" id="grills">
            <h2 className="font-[var(--font-playfair-display)] text-2xl text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
              Grills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="Grilled ribeye steak on a wooden board."
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Prime Ribeye Steak
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $68
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    12oz dry-aged, truffle butter, roasted garlic, seasonal vegetables.
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <span className="bg-surface-variant/10 text-background-charcoal px-2 py-1 rounded font-semibold text-[10px] tracking-[0.1em] uppercase">
                      Chef's Pick
                    </span>
                  </div>
                </div>
              </article>
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="Grilled lamb chops with fresh herbs and pomegranate seeds on a white plate."
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Herb-Crusted Lamb Chops
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $52
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Rosemary-thyme crust, minted pea puree, roasted cherry tomatoes.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Category: Pasta */}
          <div className="mb-16 scroll-mt-32" id="pasta">
            <h2 className="font-[var(--font-playfair-display)] text-2xl text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
              Pasta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="Creamy truffle tagliatelle pasta with parmesan."
                  src="https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Truffle Tagliatelle
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $36
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Fresh egg pasta, black truffle cream, parmesan, crispy pancetta.
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <span className="bg-surface-variant/10 text-background-charcoal px-2 py-1 rounded font-semibold text-[10px] tracking-[0.1em] uppercase">
                      Vegetarian
                    </span>
                  </div>
                </div>
              </article>
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="Lobster ravioli on a plate."
                  src="https://images.unsplash.com/photo-1625944524528-b78df45fc869?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Lobster Ravioli
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $45
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Handmade ravioli, lobster bisque, champagne cream, chives.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Category: Desserts */}
          <div className="mb-16 scroll-mt-32" id="desserts">
            <h2 className="font-[var(--font-playfair-display)] text-2xl text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
              Desserts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="A stunning chocolate dome dessert with gold leaf and fresh berries on a dark plate."
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Valrhona Chocolate Dome
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $22
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Hazelnut praline, raspberry coulis, gold leaf.
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <span className="bg-surface-variant/10 text-background-charcoal px-2 py-1 rounded font-semibold text-[10px] tracking-[0.1em] uppercase">
                      Chef's Pick
                    </span>
                  </div>
                </div>
              </article>
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="A classic crème brûlée with a perfectly caramelized sugar top and fresh mint."
                  src="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Vanilla Crème Brûlée
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $16
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Madagascar vanilla bean, caramelized sugar crust, fresh berries.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Category: Drinks */}
          <div className="mb-16 scroll-mt-32" id="drinks">
            <h2 className="font-[var(--font-playfair-display)] text-2xl text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
              Drinks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="A sophisticated Old Fashioned cocktail with a large ice cube and orange twist."
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      Golden Old Fashioned
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $18
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Bourban, demerara sugar, orange bitters, gold leaf garnish.
                  </p>
                </div>
              </article>
              <article className="bg-surface-cream text-background-charcoal rounded-xl flex overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  className="w-1/3 object-cover"
                  alt="A beautiful glass of red wine on a wooden table with soft lighting."
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
                />
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[var(--font-playfair-display)] text-xl leading-tight pr-4">
                      House Red Wine
                    </h3>
                    <span className="font-[var(--font-playfair-display)] text-xl text-accent-gold whitespace-nowrap">
                      $15 / glass
                    </span>
                  </div>
                  <p className="font-[var(--font-inter)] text-sm text-background-charcoal/80 mb-3">
                    Cabernet Sauvignon, Napa Valley, notes of blackberry and oak.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Dietary Note */}
          <div className="mt-16 pt-8 border-t border-outline-variant/30 text-center">
            <p className="font-[var(--font-inter)] text-base text-on-surface-variant italic">
              Please inform our staff of any dietary requirements or allergies prior to ordering.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
