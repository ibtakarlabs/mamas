'use client'

import { useState } from 'react'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('wraps')

  const menuCategories = {
    wraps: [
      { name: 'Chopped Chicken Caesar Wrap', price: '$18' },
      { name: 'Chicken Tikka Masala Wrap', price: '$18' },
      { name: "Sonny's Wild Mushroom Wrap", price: '$16' },
      { name: 'Lamb Wrap', price: '$18' },
      { name: '12 HR Braised Lamb Pressed Flatbread', price: '$18' },
    ],
    breakfast: [
      { name: 'Union Street Burrito (Vegetarian)', price: '$14' },
      { name: 'Union Street Burrito w/ Turkey Bacon', price: '$17' },
      { name: 'Union Street Burrito w/ Smoked Brisket', price: '$17' },
      { name: "Mama's Breakfast Wrap", price: '$15' },
      { name: "Egg McLovin' Sandwich", price: '$12' },
      { name: 'Breakfast Sandwich', price: '$12' },
    ],
    sides: [
      { name: 'Smoked Paprika Chips', price: '$4' },
      { name: "Za'atar Fries", price: '$6' },
      { name: 'Scrambled Eggs (Side)', price: '$5' },
      { name: 'Turkey Bacon (Side)', price: '$4' },
      { name: 'Smoked Brisket (Side)', price: '$5' },
    ],
    drinks: [
      { name: 'Pistachio Matcha', price: '$6' },
      { name: 'Coffee', price: '$4' },
      { name: 'Fresh Juice', price: '$5' },
      { name: 'Bottled Water', price: '$2' },
    ],
  }

  return (
    <section id="menu" className="py-10 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-2 uppercase tracking-tight">
            Full Menu
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-1 w-12 bg-tomato-red"></div>
            <div className="h-1 w-8 bg-charcoal"></div>
            <div className="h-1 w-12 bg-tomato-red"></div>
          </div>
          <p className="text-sm text-charcoal/70 uppercase tracking-wide">Everything made fresh, nothing frozen</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 font-heading font-bold text-sm uppercase tracking-wide border-3 transition-all ${
                activeCategory === category
                  ? 'bg-tomato-red border-charcoal text-diner-white shadow-lg'
                  : 'bg-diner-white border-charcoal text-charcoal hover:bg-warm-cream shadow-md'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-diner-white border-4 border-charcoal p-6 shadow-xl">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-3 pb-3 border-b-3 border-charcoal uppercase tracking-tight">
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </h3>
            <div className="space-y-3">
              {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-2.5 border-b border-charcoal/20 last:border-0"
                >
                  <span className="font-body text-charcoal font-semibold flex-1 text-sm">{item.name}</span>
                  <span className="font-heading text-tomato-red font-bold text-lg ml-4 tracking-wide">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-charcoal text-diner-white py-3 px-4 text-center border-3 border-charcoal">
            <p className="text-xs uppercase tracking-wider mb-1">All wraps served with housemade chips</p>
            <p className="text-xs opacity-80">
              Halal • Limited vegetarian options • Dogs welcome at outdoor seating
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
