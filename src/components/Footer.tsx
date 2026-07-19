import { ArrowUp } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.82a8.2 8.2 0 0 0 4.79 1.53V7.9a4.85 4.85 0 0 1-1.02-.21z"/>
    </svg>
  )
}

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border" style={{ background: "oklch(0.08 0 0)" }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Wordmark + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 bg-brand flex items-center justify-center text-background font-black text-sm rounded-sm">
                CO
              </span>
              <span className="font-black text-xl tracking-tight text-foreground">
                CamOps<span className="text-brand">.</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Your Events, Our Lens, Your Terms.
              <br />
              Creative operations team specializing in event coverage and content production.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { icon: TikTokIcon, href: "#", label: "TikTok" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 border border-border hover:border-brand/50 hover:text-brand flex items-center justify-center text-muted-foreground transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border relative">
        {/* Scroll to top button positioned on the divider line */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 bg-card border border-border hover:border-brand/50 hover:text-brand flex items-center justify-center text-muted-foreground transition-all duration-200 group rounded-full shadow-md"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-end">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CamOps Studios. All rights reserved.
          </p>
        </div>
      </div>
      
    </footer>
  )
}
