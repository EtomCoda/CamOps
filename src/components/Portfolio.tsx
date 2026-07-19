import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Calendar, MapPin, Play } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Category = "ceremonies" | "summits" | "lectures" | "conferences"

interface Event {
  id: string
  name: string
  date: string
  venue: string
  category: Category
  description: string
  tags: string[]
  videoId: string
}

const events: Event[] = [
  {
    id: "1",
    name: "PAU 12th Matriculation Ceremony",
    date: "January 17, 2026",
    venue: "PAU Main Campus, Ibeju-Lekki",
    category: "ceremonies",
    description: "Full live coverage of the 12th Matriculation Ceremony at Pan-Atlantic University, welcoming a new cohort of students to the PAU community.",
    tags: ["Livestream", "Video"],
    videoId: "xh8mw5chAPc",
  },
  {
    id: "2",
    name: "NUASA PAU Summit 2026",
    date: "March 27, 2026",
    venue: "Pan-Atlantic University",
    category: "summits",
    description: "\"Meet the Professionals: Accounting, Opportunities and Growth\" — a summit hosted by the Nigerian University Accounting Students Association at PAU.",
    tags: ["Livestream", "Video"],
    videoId: "uzPuCOYNmqM",
  },
  {
    id: "3",
    name: "PAU 22nd Inaugural Lecture",
    date: "April 10, 2026",
    venue: "Honeywell Auditorium, Lagos Business School",
    category: "lectures",
    description: "\"From Firms to Ecosystems: Rethinking Strategy and Value Creation in Africa's Digital Economies\" — delivered by Prof. Nkemdilim Iheanachor at the Lagos Business School.",
    tags: ["Livestream", "Video"],
    videoId: "ZuFWg7kAl8w",
  },
  {
    id: "4",
    name: "Media Reimagined Conference 2026",
    date: "April 25, 2026",
    venue: "Honeywell Auditorium, Lagos Business School",
    category: "conferences",
    description: "Organised by the Mass Communication Society, PAU. Featuring guest speaker Chude Jideonwo, the conference explored the evolving media landscape.",
    tags: ["Livestream", "Video"],
    videoId: "wDLlOgtKl9U",
  },
  {
    id: "5",
    name: "PAU Nostalgia 2026",
    date: "May 20, 2026",
    venue: "PAU Main Campus, Ibeju-Lekki",
    category: "ceremonies",
    description: "Live coverage of PAU Nostalgia 2026, a celebratory event bringing together the PAU community for an evening of culture, memory, and connection.",
    tags: ["Livestream", "Video"],
    videoId: "LjIgZi8yz1s",
  },
  {
    id: "6",
    name: "PAU 23rd Inaugural Lecture",
    date: "July 17, 2026",
    venue: "Pan-Atlantic University",
    category: "lectures",
    description: "\"The End of Development Economics\" — delivered by Prof. Alpheus Bongo Chimaeze Adi as part of PAU's inaugural lecture series.",
    tags: ["Livestream", "Video"],
    videoId: "IOvQbDBGX34",
  },
]

function VideoCard({ event, onClick }: { event: Event; onClick: () => void }) {
  const thumb = `https://img.youtube.com/vi/${event.videoId}/maxresdefault.jpg`

  return (
    <div
      className="group relative cursor-pointer overflow-hidden bg-card border border-border hover:border-brand/40 transition-all duration-500"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      aria-label={`Watch ${event.name}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumb}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 bg-brand text-background text-[10px] font-black uppercase tracking-wider">
            {event.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-sm text-foreground group-hover:text-brand transition-colors duration-300 leading-snug">
          {event.name}
        </h3>
        <div className="flex flex-col gap-1 mt-2">
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <MapPin className="w-3 h-3 shrink-0" />
            {event.venue}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar className="w-3 h-3 shrink-0" />
            {event.date}
          </span>
        </div>
      </div>

      {/* Accent bottom border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}

function VideoModal({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <DialogContent className="max-w-3xl p-0 bg-card border-border overflow-hidden">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:border-brand/50 hover:text-brand transition-colors rounded-sm"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      {/* YouTube embed */}
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${event.videoId}?autoplay=1`}
          title={event.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="text-xl font-black text-foreground leading-snug">{event.name}</h2>
          <span className="shrink-0 px-3 py-1 bg-brand text-background text-xs font-black uppercase tracking-wider">
            {event.category}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-brand shrink-0" />
            {event.venue}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 text-brand shrink-0" />
            {event.date}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm">{event.description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {event.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 border border-brand/30 text-brand text-xs font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand text-background font-bold text-sm hover:bg-brand/90 transition-colors"
          >
            Book Similar Coverage
          </a>
        </div>
      </div>
    </DialogContent>
  )
}

export function Portfolio() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const { ref } = useScrollAnimation()

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="mb-14 fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em]">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            Events We've Covered
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From intimate events to full-scale conferences — every moment captured, every story told.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {events.map((event, i) => (
            <div key={event.id} className={`fade-up stagger-${Math.min(i + 1, 5)}`}>
              <VideoCard event={event} onClick={() => setSelectedEvent(event)} />
            </div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        {selectedEvent && (
          <VideoModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </Dialog>
    </section>
  )
}
