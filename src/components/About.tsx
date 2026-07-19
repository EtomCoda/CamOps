import { Zap, CheckCircle2, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const values = [
  {
    icon: Zap,
    title: "On-Brand, Every Time",
    description:
      "We learn your brand before we touch the camera. Every shot, cut, and frame is built to match your visual identity.",
  },
  {
    icon: CheckCircle2,
    title: "Done-For-You",
    description:
"From pre-production planning to final deliverable. You show up, we handle the rest.",
  },
  {
    icon: Users,
    title: "A Real Team on the Ground",
    description:
      "Not a solo freelancer with a camera bag. CamOps deploys a coordinated crew, built for the scale of your event.",
  },
]

export function About() {
  const { ref } = useScrollAnimation()

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image collage */}
          <div className="flex flex-col gap-3">

            {/* Top row: tall main + inset side-by-side */}
            <div className="relative flex gap-3">

              {/* Main image — Active Control Room */}
              <div className="relative overflow-hidden flex-1" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/interview.jpg"
                  alt="CamOps active control room during a live event"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "35% center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <div className="absolute inset-0 bg-brand/5" />
              </div>

              {/* Right inset — Active Shot */}
              <div className="relative overflow-hidden flex-1 w-40 shrink-0" style={{ height: "200%", aspectRatio: "3/4" }}>
                <img
                  src="/shot_studio.jpg"
                  alt="Camera operator capturing a live performance"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-brand/15" />
              </div>

              {/* Accent corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-brand/30 pointer-events-none" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-12 h-12 bg-brand/20 pointer-events-none" aria-hidden="true" />
            </div>

            {/* Bottom row: wide conference shot spans full width */}
            <div className="relative overflow-hidden w-full" style={{ height: "160px" }}>
              <img
                src="/Active_Control_room.jpg"
                alt="CamOps covering a live conference at Pan-Atlantic University"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 40%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
              <div className="absolute inset-0 bg-brand/5" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand/50" />
            </div>

          </div>

          {/* Right: Content */}
          <div ref={ref} className="fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand" />
              <span className="text-brand text-xs font-bold uppercase tracking-[0.2em]">Why CamOps</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6">
              We Don't Just Show Up.<br />
              <span className="text-brand italic">We Execute.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              CamOps Studios was built because most event coverage fails at the follow through.
              Great footage goes uncut. The livestream drops out at the worst moment. We built a
              team and a process that doesn't let that happen.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.title}
                    className={`fade-up stagger-${i + 1} group`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center border border-brand/30 bg-brand/10 group-hover:bg-brand/20 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-brand" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">{v.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-11">
                      {v.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand text-background font-bold text-sm hover:bg-brand/90 transition-colors"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
