export default function FeaturedSpecials() {
  const specials = [
    {
      name: 'Chicken Caesar Wrap',
      description: 'Lemon pepper crusted chicken, crisp romaine, parmesan, della fattoria croutons, housemade Caesar dressing',
      price: '$18',
      tag: 'Fan Favorite',
    },
    {
      name: 'Chicken Tikka Masala Wrap',
      description: 'Tender chicken tikka in creamy masala sauce, pickles, fresh herbs, wrapped to perfection',
      price: '$18',
      tag: 'Must Try',
    },
    {
      name: '12 HR Braised Lamb Flatbread',
      description: 'Slow-braised lamb, muhammara, sumac onions, oaxaca cheese, barberries, arugula, herbed tahini',
      price: '$18',
      tag: 'Signature',
    },
    {
      name: 'Breakfast Burrito',
      description: 'Fluffy scrambled eggs, crispy tater tots, avocado, cheese, housemade salsa. Add meat for extra flavor',
      price: '$14',
      tag: 'Classic',
    },
  ]

  return (
    <section className="py-10 bg-diner-white border-y-4 border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-2 uppercase tracking-tight">
            ★ Fan Favorites ★
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-1 w-12 bg-tomato-red"></div>
            <div className="h-1 w-8 bg-charcoal"></div>
            <div className="h-1 w-12 bg-tomato-red"></div>
          </div>
          <p className="text-lg text-charcoal/70 uppercase tracking-wide">Our most-loved dishes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {specials.map((special, index) => (
            <div
              key={index}
              className="bg-warm-cream border-3 border-charcoal p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-charcoal flex-1 uppercase">
                  {special.name}
                </h3>
                <span className="bg-tomato-red text-diner-white px-3 py-1 text-base font-bold ml-3 uppercase border-2 border-charcoal">
                  {special.tag}
                </span>
              </div>
              <div className="h-0.5 w-full bg-charcoal/20 mb-3"></div>
              <p className="text-charcoal/80 mb-3 text-base md:text-lg leading-relaxed">{special.description}</p>
              <p className="font-heading text-2xl font-bold text-tomato-red">{special.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 bg-charcoal text-diner-white py-2 px-4">
          <p className="text-base uppercase tracking-wider">
            Substitute chips for fries • Gluten-free options available
          </p>
        </div>
      </div>
    </section>
  )
}
