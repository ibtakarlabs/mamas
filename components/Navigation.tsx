'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-warm-cream border-b-2 border-charcoal sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/mama-logo.png"
              alt="Mama's Luncheonette"
              width={200}
              height={60}
              className="h-10 w-auto"
              quality={90}
              priority
              sizes="200px"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-charcoal hover:text-tomato-red font-medium transition-colors">
              Menu
            </a>
            <a href="#story" className="text-charcoal hover:text-tomato-red font-medium transition-colors">
              Our Story
            </a>
            <a href="#location" className="text-charcoal hover:text-tomato-red font-medium transition-colors">
              Location
            </a>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-cream border-2 border-charcoal text-charcoal px-6 py-2 rounded-md font-medium hover:bg-tomato-red hover:text-warm-cream transition-all"
            >
              Order Pickup
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#menu" className="block text-charcoal hover:text-tomato-red font-medium">
              Menu
            </a>
            <a href="#story" className="block text-charcoal hover:text-tomato-red font-medium">
              Our Story
            </a>
            <a href="#location" className="block text-charcoal hover:text-tomato-red font-medium">
              Location
            </a>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-warm-cream border-2 border-charcoal text-charcoal px-6 py-2 rounded-md font-medium text-center hover:bg-tomato-red hover:text-warm-cream transition-all"
            >
              Order Pickup
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
