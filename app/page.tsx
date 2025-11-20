import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedSpecials from '@/components/FeaturedSpecials'
import Menu from '@/components/Menu'
import Story from '@/components/Story'
import HoursLocation from '@/components/HoursLocation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <FeaturedSpecials />
      <Menu />
      <HoursLocation />
      <Footer />
    </main>
  )
}
