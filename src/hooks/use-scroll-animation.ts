import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the ref element itself
            entry.target.classList.add("in-view")
            // Also animate all fade-up / fade-in children
            entry.target.querySelectorAll(".fade-up, .fade-in").forEach((el) => {
              el.classList.add("in-view")
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref }
}

// Standalone observer for elements that animate themselves
export function useInViewAnimation(selector: string = ".fade-up, .fade-in") {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector])
}
