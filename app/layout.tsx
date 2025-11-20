import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Mama's Luncheonette | San Francisco's Neighborhood Diner",
  description: 'Delicious breakfast, brunch, and wraps in the heart of San Francisco. Famous for our Chicken Caesar Wrap, Breakfast Burritos, and comfort food done right.',
  keywords: 'breakfast, brunch, wraps, halal, San Francisco, Marina, diner, luncheonette',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
