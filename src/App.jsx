import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home      from './pages/Home'
import About     from './pages/About'
import Impact    from './pages/Impact'
import SupportUs from './pages/SupportUs'
import Stories   from './pages/Stories'
import Contact   from './pages/Contact'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/impact"     element={<Impact />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/stories"    element={<Stories />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
