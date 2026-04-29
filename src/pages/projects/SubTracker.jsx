import React from 'react'
import { Link } from 'react-router-dom'

// Import all showcase images
import imgDashboardFull from '../../assets/SubImages/DashboardFull.jpeg'
import imgDashboardCards from '../../assets/SubImages/DashboardCards.jpeg'
import imgTotalCard from '../../assets/SubImages/TotalCard.jpeg'
import imgAddCardPrew from '../../assets/SubImages/AddCardPrew.jpeg'
import imgAddCardTime from '../../assets/SubImages/AddCardTime.jpeg'
import imgCalendar from '../../assets/SubImages/Calendar.jpeg'
import imgPaymentHistory from '../../assets/SubImages/PaymentHistory.jpeg'
import imgWidget from '../../assets/SubImages/Widget.jpeg'

const features = [
  {
    title: "Comprehensive Dashboard",
    description: "A centralized hub to monitor all your active subscriptions and recurring expenses. Instantly see your total monthly spend and upcoming renewals at a glance.",
    image: imgDashboardFull,
    alt: "Full dashboard view of the Sub-Tracker application"
  },
  {
    title: "Detailed Subscription Cards",
    description: "Every subscription is neatly organized into customizable cards, displaying critical details such as the billing cycle, payment method, and exact cost.",
    image: imgDashboardCards,
    alt: "Subscription detail cards"
  },
  {
    title: "Expense Summaries",
    description: "Easily track your overall financial commitment across different categories with the total expense summary, helping you maintain a healthy budget.",
    image: imgTotalCard,
    alt: "Total expense summary card"
  },
  {
    title: "Interactive Calendar View",
    description: "Visualize your upcoming payments on a clean, interactive monthly calendar to better anticipate your cash flow requirements.",
    image: imgCalendar,
    alt: "Calendar interface showing payment dates"
  },
  {
    title: "Intuitive Subscription Creation",
    description: "Preview exactly how your subscription card will look while inputting the necessary service details.",
    image: imgAddCardPrew,
    alt: "Add new subscription preview"
  },
  {
    title: "Precise Billing Timelines",
    description: "Set exact billing cycles, start dates, and reminder intervals to ensure you never miss a payment or forget to cancel an unwanted trial.",
    image: imgAddCardTime,
    alt: "Time and date selection for subscriptions"
  },
  {
    title: "Payment History Log",
    description: "Keep a meticulous record of your past transactions. Review your payment history to analyze your long-term spending habits.",
    image: imgPaymentHistory,
    alt: "Payment history log"
  },
  {
    title: "Home Screen Widgets",
    description: "Stay informed without even opening the app. Native iOS/Android home screen widgets provide real-time updates on your most pressing upcoming payments.",
    image: imgWidget,
    alt: "iOS/Android home screen widget"
  }
];

function SubTracker() {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen pt-20 flex flex-col">
      <header className="bg-surface/90 backdrop-blur-md font-manrope text-sm font-medium tracking-tight fixed top-0 left-0 w-full flex justify-between items-center px-8 h-20 max-w-[1120px] mx-auto z-50">
        <Link to="/" className="text-lg font-bold tracking-tighter text-on-surface">Portfolio</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-outline hover:text-on-surface transition-colors active:scale-95 duration-200">Back to Home</Link>
        </nav>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-8 py-section-padding mt-10">
        <div className="max-w-3xl mb-16">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">MOBILE APP</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">Sub-Tracker</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Developed with React Native and Expo, this offline-first mobile application allows users to easily track subscriptions and recurring payments in one place. By integrating a notification infrastructure and iOS/Android widgets, it enables real-time monitoring of upcoming transactions directly from the home screen, significantly enhancing payment visibility and user experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">React Native</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Expo</span>
          </div>
        </div>

        {/* Features Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <section key={index} className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.1)] transition-shadow duration-300 border border-surface-variant/50">
              <div className="p-8 pb-4 flex-grow">
                <h3 className="font-h3 text-h3 text-primary mb-3">{feature.title}</h3>
                <p className="font-body-md text-on-surface-variant">{feature.description}</p>
              </div>
              <div className={`p-8 pt-4 pb-8 flex justify-center ${index === features.length - 1 ? 'items-start -mt-8' : 'items-center mt-4'} bg-gradient-to-t from-surface-container-low/50 to-transparent`}>
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

export default SubTracker
