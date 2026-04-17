import { About } from './components/About'
import { Contact } from './components/Contact'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MembershipPlans } from './components/MembershipPlans'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Trainers } from './components/Trainers'
import { Transformations } from './components/Transformations'

function App() {
  return (
    <div className="min-h-svh bg-zinc-950 text-zinc-100 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <MembershipPlans />
        <Transformations />
        <Trainers />
        <Services />
        <About />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
