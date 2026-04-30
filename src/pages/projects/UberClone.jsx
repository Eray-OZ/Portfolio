import React from 'react'
import { Link } from 'react-router-dom'

// Import all showcase images
import imgRequestUber from '../../assets/UberClone/requestUber.png'
import imgSelectPass from '../../assets/UberClone/selectPass.png'
import imgPassRoute from '../../assets/UberClone/passRoute.png'
import imgDestiniationRoute from '../../assets/UberClone/destiniationRoute.png'

const features = [
  {
    title: "Request a Ride",
    description: "Passengers can select their destination and send a ride request. The interface provides a seamless experience for setting pick-up and drop-off points.",
    image: imgRequestUber,
    alt: "Passenger requesting an Uber"
  },
  {
    title: "Driver Selection",
    description: "Drivers receive incoming requests and can choose to accept them. This view allows drivers to manage their availability and respond to ride demands.",
    image: imgSelectPass,
    alt: "Driver selecting a passenger request"
  },
  {
    title: "Pick-up Route",
    description: "Once a request is accepted, a real-time route is generated to guide the driver to the passenger's location.",
    image: imgPassRoute,
    alt: "Route to pick up the passenger"
  },
  {
    title: "Destination Route",
    description: "After the passenger is picked up, the application dynamically updates the route to the final destination.",
    image: imgDestiniationRoute,
    alt: "Route to the final destination"
  }
];

function UberClone() {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen pt-20 flex flex-col">
      <header className="bg-surface/90 backdrop-blur-md font-manrope text-sm font-medium tracking-tight fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-8 h-20 max-w-[1120px] mx-auto w-full">
          <Link to="/" className="text-lg font-bold tracking-tighter text-on-surface">Portfolio</Link>
          <nav className="flex gap-6 items-center">
            <Link to="/" className="text-outline hover:text-on-surface transition-colors active:scale-95 duration-200">Back to Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-8 py-section-padding mt-10">
        <div className="max-w-3xl mb-16">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">MOBILE APP</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">Uber Clone</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            A native Android ride-sharing application built with Kotlin and Jetpack Compose. It features a dual-user interface for passengers and drivers, real-time location tracking, and dynamic route generation using Google Maps API. The app manages the entire ride lifecycle from request to completion with seamless state synchronization.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Kotlin</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Jetpack Compose</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Google Maps API</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Firebase</span>
          </div>
        </div>

        {/* Features Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {features.map((feature, index) => (
            <section key={index} className="flex flex-col h-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.1)] transition-shadow duration-300 border border-surface-variant/50">
              <div className="p-8 pb-4 flex-grow">
                <h3 className="font-h3 text-h3 text-primary mb-3">{feature.title}</h3>
                <p className="font-body-md text-on-surface-variant">{feature.description}</p>
              </div>
              <div className="p-8 pt-4 pb-8 flex justify-center items-center mt-4 bg-gradient-to-t from-surface-container-low/50 to-transparent">
                <img 
                  src={feature.image} 
                  alt={feature.alt} 
                  className="rounded-xl max-h-[400px] object-contain shadow-lg drop-shadow-sm border border-outline-variant/30"
                />
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default UberClone
