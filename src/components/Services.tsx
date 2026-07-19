import { Camera, Film, Radio } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Camera,
    title: "Event Coverage",
    description:
      "Full photo and video capture for conferences, activations, and live moments. Planned, shot, and delivered without the back-and-forth.",
    features: ["Multi-camera setups", "Same-day delivery", "Photo + Video"],
    accent: "from-brand/20 to-transparent",
  },
  {
    icon: Film,
    title: "Video Editing & Highlight Reels",
    description:
      "Raw footage turned into sharp, shareable stories, cut fast and built to hold attention.",
    features: ["48h turnaround", "Social-ready cuts", "Color grading"],
    accent: "from-brand/30 to-transparent",
  },
  {
    icon: Radio,
    title: "Livestream Production",
    description:
      "End-to-end streaming setup and run of show, so your event reaches people who can't be in the room.",
    features: ["Multi-platform stream", "Run of show", "Tech rehearsal"],
    accent: "from-brand/20 to-transparent",
  },
]

export function Services() {
  const { ref } = useScrollAnimation()

  return (
    <section
      id="services"
      className="py-24 lg:py-32 clip-diagonal-reverse relative overflow-hidden"
      style={{ background: "oklch(0.12 0 0)" }}
    >
      {/* Background texture */}
            <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            oklch(0.75 0.19 55),
            oklch(0.75 0.19 55) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
        aria-hidden="true"
      >
        <img src="/Active_Control_room.jpg" alt="" />
      </div>

      {/* Large background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,15vw,200px)] font-black text-border/10 leading-none select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        SERVICES
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="mb-16 fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em]">What We Do</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            Creative Operations,{" "}
            <span className="text-brand italic">End to End.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Three core services, built to cover every stage of your event's content lifecycle.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`fade-up stagger-${i + 1} relative p-8 lg:p-10 border border-border lg:border-r-0 last:lg:border-r lg:first:rounded-l-none lg:last:rounded-r-none group hover:border-brand/40 transition-all duration-500`}
                style={{ background: "oklch(0.14 0 0)" }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-brand transition-colors duration-500 origin-left" />

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-brand/10 border border-brand/20 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
                  </div>
                  {/* Number */}
                  <span className="absolute -top-2 -right-2 text-5xl font-black text-border/30 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-brand rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 mt-8 text-sm font-bold text-muted-foreground hover:text-brand transition-colors duration-200 group/link"
                >
                  <span>Get a Quote</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* Bottom gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 p-6 lg:p-8 border border-dashed border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-foreground">Need something custom?</p>
            <p className="text-muted-foreground text-sm mt-0.5">We tailor every engagement to your event's specific needs.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-background font-bold text-sm flex-shrink-0 hover:bg-brand/90 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
