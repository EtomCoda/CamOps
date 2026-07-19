import { useEffect } from "react"
import { Toaster } from "@/components/ui/sonner"
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
// import { ClientStrip } from "@/components/ClientStrip"
import { Portfolio } from "@/components/Portfolio"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  // Global scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    )

    // Observe all animatable elements
    const observe = () => {
      document.querySelectorAll(".fade-up, .fade-in").forEach((el) => {
        observer.observe(el)
      })
    }

    observe()

    // Re-observe after a short delay to catch dynamically rendered elements
    const timer = setTimeout(observe, 300)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        {/* <ClientStrip /> */}
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="top-center"
        expand
        richColors
        toastOptions={{
          style: {
            background: "oklch(0.16 0 0)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
            borderLeft: "4px solid var(--brand)",
            padding: "16px 20px",
            fontSize: "15px",
            fontWeight: "600",
            maxWidth: "440px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
          },
        }}
      />
    </div>
  )
}

export default App
