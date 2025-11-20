import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-diner-white overflow-hidden border-b-4 border-charcoal">
      <div className="relative">
        {/* Hero Grid - Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Left Image */}
          <div className="relative h-[250px] md:h-[500px] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-charcoal">
            <Image
              src="/images/alt-photo.png"
              alt="Mama's Wraps"
              fill
              className="object-cover"
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Center Image - Main */}
          <div className="relative h-[250px] md:h-[500px] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-charcoal">
            <Image
              src="/images/hori-pic.jpeg"
              alt="Mama's Food"
              fill
              className="object-cover"
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Right Image */}
          <div className="relative h-[250px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/food.png"
              alt="Mama's Takeout"
              fill
              className="object-cover"
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Overlay Content - Centered */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/70 flex flex-col items-center justify-center">
          <div className="text-center px-4 max-w-4xl mb-auto mt-auto">
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Mama's Luncheonette"
                width={600}
                height={180}
                className="mx-auto w-full max-w-md md:max-w-2xl drop-shadow-2xl"
                quality={90}
                priority
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>

            <p className="font-body text-xl md:text-2xl text-diner-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Fresh wraps, breakfast burritos & halal comfort food
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                className="bg-tomato-red border-3 border-charcoal text-diner-white px-8 py-3 rounded font-bold text-xl hover:bg-diner-white hover:text-tomato-red transition-all shadow-xl uppercase tracking-wide"
              >
                View Menu
              </a>
              <a
                href="#location"
                className="bg-diner-white border-3 border-charcoal text-charcoal px-8 py-3 rounded font-bold text-xl hover:bg-tomato-red hover:text-diner-white hover:border-diner-white transition-all shadow-xl uppercase tracking-wide"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Red stripe accent */}
      <div className="h-3 bg-tomato-red"></div>
    </section>
  )
}
