export default function HoursLocation() {
  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: 'Closed' },
    { day: 'Wednesday', time: '9:30 AM - 2:30 PM' },
    { day: 'Thursday', time: '9:30 AM - 2:30 PM' },
    { day: 'Friday', time: '9:00 AM - 2:30 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:30 PM' },
    { day: 'Sunday', time: '9:00 AM - 2:30 PM' },
  ]

  return (
    <section id="location" className="py-10 bg-tomato-red border-y-4 border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hours */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-diner-white mb-5 uppercase tracking-tight">
              Hours
            </h2>
            <div className="bg-diner-white border-4 border-charcoal p-5 shadow-xl">
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between pb-3 border-b border-charcoal/10 last:border-0 ${
                      item.time === 'Closed' ? 'opacity-50' : ''
                    }`}
                  >
                    <span className="font-body font-semibold text-charcoal text-sm">{item.day}</span>
                    <span className={`font-body text-sm ${item.time === 'Closed' ? 'text-charcoal/60' : 'text-charcoal'}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-diner-white mb-5 uppercase tracking-tight">
              Location
            </h2>
            <div className="bg-diner-white border-4 border-charcoal p-5 shadow-xl">
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-base font-bold text-charcoal mb-2 uppercase tracking-wide">Address</h3>
                  <p className="text-charcoal text-sm">
                    3006 Buchanan St<br />
                    San Francisco, CA 94123<br />
                    Marina/Cow Hollow
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-charcoal/20">
                  <h3 className="font-heading text-base font-bold text-charcoal mb-2 uppercase tracking-wide">Details</h3>
                  <ul className="text-charcoal space-y-1 text-xs">
                    <li>★ Outdoor seating available</li>
                    <li>★ Dogs welcome</li>
                    <li>★ Limited vegetarian options</li>
                    <li>★ Validated parking nearby</li>
                  </ul>
                </div>

                <div className="pt-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3006+Buchanan+St+San+Francisco+CA+94123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-charcoal border-2 border-charcoal text-diner-white px-5 py-2 font-bold text-sm hover:bg-diner-white hover:text-charcoal transition-all uppercase tracking-wide"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-diner-white border-4 border-charcoal p-6 max-w-xl mx-auto shadow-xl">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-2 uppercase tracking-tight">
              ★ Ready to Order? ★
            </h3>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-1 w-12 bg-tomato-red"></div>
              <div className="h-1 w-8 bg-charcoal"></div>
              <div className="h-1 w-12 bg-tomato-red"></div>
            </div>
            <p className="text-charcoal/70 mb-5 text-sm uppercase tracking-wide">
              Skip the line • Order ahead for pickup
            </p>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tomato-red border-3 border-charcoal text-diner-white px-8 py-3 font-bold text-lg hover:bg-charcoal transition-all shadow-lg uppercase tracking-wide"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
