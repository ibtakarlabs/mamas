export default function Footer() {
  return (
    <footer className="bg-charcoal text-diner-white py-8 border-t-4 border-tomato-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About */}
          <div>
            <h3 className="font-heading text-base font-bold mb-2 uppercase tracking-wide">Mama's Luncheonette</h3>
            <div className="h-0.5 w-12 bg-tomato-red mb-3"></div>
            <p className="text-diner-white/80 text-xs leading-relaxed">
              Your neighborhood comfort food spot in San Francisco's Marina district.
              Serving breakfast, brunch, and wraps with love since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold mb-2 uppercase tracking-wide">Quick Links</h3>
            <div className="h-0.5 w-12 bg-tomato-red mb-3"></div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#menu" className="text-diner-white/80 hover:text-tomato-red transition-colors">
                  ★ Menu
                </a>
              </li>
              <li>
                <a href="#story" className="text-diner-white/80 hover:text-tomato-red transition-colors">
                  ★ Our Story
                </a>
              </li>
              <li>
                <a href="#location" className="text-diner-white/80 hover:text-tomato-red transition-colors">
                  ★ Location & Hours
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/mamas-luncheonette-san-francisco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-diner-white/80 hover:text-tomato-red transition-colors"
                >
                  ★ Yelp Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-bold mb-2 uppercase tracking-wide">Visit Us</h3>
            <div className="h-0.5 w-12 bg-tomato-red mb-3"></div>
            <div className="text-diner-white/80 text-xs space-y-2">
              <p>
                3006 Buchanan St<br />
                San Francisco, CA 94123
              </p>
              <p className="pt-3">
                <a
                  href="https://www.doordash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tomato-red border-2 border-diner-white text-diner-white px-4 py-1.5 font-bold text-xs hover:bg-diner-white hover:text-charcoal transition-all uppercase tracking-wide"
                >
                  Order Pickup
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with retro pattern */}
        <div className="border-t-2 border-tomato-red mt-6 pt-6 text-center text-xs text-diner-white/70">
          <p className="uppercase tracking-wider">&copy; {new Date().getFullYear()} Mama's Luncheonette • All rights reserved</p>
          <p className="mt-1">★ Halal • Breakfast & Brunch • Wraps • Sandwiches ★</p>
        </div>
      </div>
    </footer>
  )
}
