export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden clip-diagonal"
    >
      {/* Background image with duotone overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Active_Shot.jpg"
          alt=""
          className="w-half h-full object-cover"
          aria-hidden="true"
        />
        {/* Layered overlays for cinematic duotone effect */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        {/* Brand color tint */}
        <div className="absolute inset-0 bg-brand/5 mix-blend-overlay" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Accent line decoration */}
      <div className="absolute top-0 left-0 w-1 h-64 bg-gradient-to-b from-brand to-transparent z-10" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-1 h-48 bg-gradient-to-t from-brand to-transparent z-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32 lg:pb-40">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em]">
              Creative Operations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            <span className="block text-foreground">Your Events,</span>
            <span className="block text-foreground">Our Lens,</span>
            <span className="block text-brand italic">Your Terms.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            CamOps Studios is a creative operations team covering events and producing content
            that performs from capture to the final cut.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-background font-bold text-base rounded-sm hover:bg-brand/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/25"
            >
              Book a Meeting
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-bold text-base border border-border hover:border-brand/50 hover:text-brand transition-all duration-200 rounded-sm"
            >
              See Our Work
            </a>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium"></span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  )
}
