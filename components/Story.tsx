export default function Story() {
  return (
    <section id="story" className="py-10 bg-warm-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Diner menu board style */}
        <div className="bg-diner-white border-4 border-charcoal shadow-xl p-6 md:p-8">
          <div className="border-2 border-charcoal/20 p-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-1 uppercase tracking-tight">
              Our Story
            </h2>

            {/* Classic diner divider */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-1 w-16 bg-tomato-red"></div>
              <div className="h-1 w-8 bg-charcoal"></div>
            </div>

            <div className="space-y-3 text-sm md:text-base text-charcoal leading-relaxed">
              <p>
                Welcome to Mama's Luncheonette, where comfort meets community in the heart of San Francisco's Marina district.
              </p>

              <p>
                We're a small neighborhood spot with big flavors, serving up wraps, breakfast burritos, and halal eats that keep locals coming back day after day.
              </p>

              <p>
                From our viral Chicken Caesar Wrap to our 12-hour Braised Lamb Flatbread, everything we make is crafted with care and quality ingredients. No fuss, no frills—just honest, delicious food that feels like home.
              </p>

              <p className="font-bold text-tomato-red text-base md:text-lg pt-3 uppercase tracking-wide">
                ★ Come hungry. Leave happy. ★
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
