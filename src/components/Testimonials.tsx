import { Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote:
      "CamOps showed up with a full crew, had everything planned to the minute, and delivered our highlight reel the next morning. I've worked with a dozen crews — this is how it should work.",
    name: "Marcus Chen",
    role: "Head of Events",
    company: "Summit Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&face",
    event: "Summit Global 2024",
  },
  {
    quote:
      "Our brand activation was fast-paced and chaotic. CamOps didn't miss a beat. Same-day social cuts that actually matched our brand guidelines — that never happens. Booked again immediately.",
    name: "Jasmine Torres",
    role: "Creative Director",
    company: "NovaCon",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&face",
    event: "NovaCon Activation",
  },
  {
    quote:
      "The livestream ran flawlessly across three platforms simultaneously. 6,000 concurrent viewers and not a single dropped frame. These guys know their craft.",
    name: "Derek Walsh",
    role: "VP of Marketing",
    company: "Elevate Media",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop&face",
    event: "Elevate Media Summit",
  },
]

export function Testimonials() {
  const { ref } = useScrollAnimation()

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.12 0 0)" }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute -top-8 left-8 text-[20rem] font-black text-border/5 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="mb-14 fade-up text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em]">Client Stories</span>
            <span className="w-8 h-px bg-brand" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            What They're Saying
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up stagger-${i + 1} relative p-8 border border-border hover:border-brand/30 transition-all duration-500 group`}
              style={{ background: "oklch(0.14 0 0)" }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand/40 mb-6 group-hover:text-brand/60 transition-colors duration-300" strokeWidth={1} />

              {/* Quote text */}
              <blockquote className="text-foreground/80 text-sm leading-relaxed mb-8 relative">
                <span className="absolute -left-1 top-0 text-brand/60 text-xl font-black leading-none">"</span>
                <span className="pl-4">{t.quote}</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand/20">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-foreground truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand/60 border border-brand/20 px-2 py-0.5 whitespace-nowrap">
                    {t.event}
                  </span>
                </div>
              </div>

              {/* Accent bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
