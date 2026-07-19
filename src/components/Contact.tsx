import { useEffect, useRef, useState } from "react"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  isCompany: z.boolean().default(false),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
}).superRefine((data, ctx) => {
  if (data.isCompany && (!data.company || data.company.trim() === "")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Company name is required",
      path: ["company"],
    })
  }
})

type FormValues = z.infer<typeof formSchema>

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

export function Contact() {
  const { ref } = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const calendlyRef = useRef<HTMLDivElement>(null)

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", isCompany: false, company: "", service: "", message: "" },
  })

  const isCompany = watch("isCompany")

  // Load Calendly inline widget script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true)
    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          ...(data.isCompany ? { company: data.company } : {}),
          service: data.service,
          message: data.message,
        }),
      })

      if (!res.ok) throw new Error(`Server responded ${res.status}`)

      reset()
      toast.success("Message received!", {
        description: "We'll be in touch within 24 hours.",
        duration: 6000,
      })
    } catch (err) {
      console.error("Form submit error:", err)
      toast.error("Couldn't send your message.", {
        description: "Please email us directly at camopstudio@gmail.com",
        duration: 8000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative bg glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "var(--brand)", filter: "blur(120px)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="mb-16 fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand" />
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em]">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground max-w-3xl">
            Let's Create an Experience{" "}
            <span className="text-brand italic">Worth Watching.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact form */}
          <div className="fade-up stagger-1">
            <h3 className="text-lg font-bold text-foreground mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className="bg-card border-border focus-visible:border-brand focus-visible:ring-brand/20 text-foreground placeholder:text-muted-foreground/50"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email — full width */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={isCompany ? "you@company.com" : "your@email.com"}
                  aria-invalid={!!errors.email}
                  className="bg-card border-border focus-visible:border-brand focus-visible:ring-brand/20 text-foreground placeholder:text-muted-foreground/50"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Company toggle */}
              <div>
                <label
                  htmlFor="isCompany"
                  className={`flex items-center gap-3 cursor-pointer select-none group w-fit py-2 transition-all duration-200 ${
                    isCompany
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Custom checkbox */}
                  <div
                    className={`w-4 h-4 shrink-0 border flex items-center justify-center transition-all duration-200 ${
                      isCompany ? "border-brand bg-brand" : "border-muted-foreground/40 bg-transparent"
                    }`}
                  >
                    {isCompany && (
                      <svg className="w-2.5 h-2.5 text-background" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <Controller
                    name="isCompany"
                    control={control}
                    render={({ field }) => (
                      <input
                        id="isCompany"
                        type="checkbox"
                        className="sr-only"
                        checked={field.value}
                        onChange={(e) => {
                          field.onChange(e)
                          if (!e.target.checked) {
                            setValue("company", "")
                          }
                        }}
                      />
                    )}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Are you a company?
                  </span>
                </label>

                {/* Company name field — slides in when checked */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isCompany ? "100px" : "0px", opacity: isCompany ? 1 : 0 }}
                >
                  <div className="pt-3 space-y-1.5">
                    <Input
                      id="company"
                      placeholder="Company Name"
                      aria-invalid={!!errors.company}
                      className="bg-card border-border focus-visible:border-brand focus-visible:ring-brand/20 text-foreground placeholder:text-muted-foreground/50"
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="text-xs text-destructive">{errors.company.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Service select */}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  What Are You Looking For? *
                </Label>
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        aria-invalid={!!errors.service}
                        className="w-full bg-card border-border focus:ring-brand/20 focus:border-brand text-foreground data-[placeholder]:text-muted-foreground/50"
                      >
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="event-coverage" className="text-foreground focus:bg-brand/10 focus:text-brand">
                          Event Coverage
                        </SelectItem>
                        <SelectItem value="video-editing" className="text-foreground focus:bg-brand/10 focus:text-brand">
                          Video Editing
                        </SelectItem>
                        <SelectItem value="livestream" className="text-foreground focus:bg-brand/10 focus:text-brand">
                          Livestream Production
                        </SelectItem>
                        <SelectItem value="other" className="text-foreground focus:bg-brand/10 focus:text-brand">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service && (
                  <p className="text-xs text-destructive">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your event — dates, scale, what you need..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  className="bg-card border-border focus-visible:border-brand focus-visible:ring-brand/20 text-foreground placeholder:text-muted-foreground/50 resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand text-background font-black text-sm uppercase tracking-wider hover:bg-brand/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="w-4 h-4 text-background" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-border space-y-3">
              <a
                href="mailto:camopstudio@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-brand transition-colors duration-200 group"
              >
                <div className="w-8 h-8 border border-border group-hover:border-brand/40 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">camopstudio@gmail.com</span>
              </a>
              <a
                href="tel:+2348135596890"
                className="flex items-center gap-3 text-muted-foreground hover:text-brand transition-colors duration-200 group"
              >
                <div className="w-8 h-8 border border-border group-hover:border-brand/40 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+234 813 559 6890</span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: InstagramIcon, href: "https://www.instagram.com/camopsstudio/", label: "Instagram" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/camopsstudio/", label: "LinkedIn" },
                  { icon: TikTokIcon, href: "https://www.tiktok.com/@camopsstudio", label: "TikTok" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-border hover:border-brand/50 hover:text-brand flex items-center justify-center text-muted-foreground transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Calendly embed */}
          <div className="fade-up stagger-2">
            <h3 className="text-lg font-bold text-foreground mb-6">Book a Meeting</h3>
            <div className="border border-border overflow-hidden" ref={calendlyRef}>
              {/*
                CALENDLY EMBED — replace data-url with your real Calendly link
                e.g. data-url="https://calendly.com/your-camops-username/30min"
              */}
              <div
                id="calendly-embed"
                className="calendly-inline-widget"
                data-url="https://calendly.com/camopsstudio/book-a-meeting-with-camops?hide_gdpr_banner=1" 
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Prefer to email us directly?{" "}
              <a href="mailto:camopstudio@gmail.com" className="text-brand hover:underline">
                Send us an email
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
