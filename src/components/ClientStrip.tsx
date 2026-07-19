interface Client {
  name: string
  logo: string | null
  logoAlt?: string
}

const clients: Client[] = [
  {
    name: "Lagos Business School",
    logo: "/Lagos-Business-School-logo-650x225.png",
    logoAlt: "Lagos Business School logo",
  },
  {
    name: "Pan-Atlantic University",
    logo: "/Pan-Atlantic-University-School-Fees-o3schools.png",
    logoAlt: "Pan-Atlantic University logo",
  },
]

function ClientItem({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <div
        className="flex items-center justify-center px-10 shrink-0 group"
        title={client.name}
      >
        <img
          src={client.logo}
          alt={client.logoAlt ?? client.name}
          className="h-10 w-auto object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-500"
          style={{ mixBlendMode: "screen", filter: "grayscale(30%)" }}
          draggable={false}
        />
      </div>
    )
  }

  // Fallback — text only (for future clients without a logo)
  return (
    <span className="px-10 shrink-0 text-muted-foreground/40 font-black text-sm uppercase tracking-widest hover:text-muted-foreground/70 transition-colors duration-300 cursor-default select-none">
      {client.name}
    </span>
  )
}

export function ClientStrip() {
  // Duplicate the array so the marquee loops seamlessly
  const track = [...clients, ...clients]

  return (
    <section className="relative py-12 border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8 font-medium px-6">
        Trusted by:
      </p>

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div className="animate-marquee items-center">
          {track.map((client, i) => (
            <ClientItem key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        aria-hidden="true"
      />
    </section>
  )
}
