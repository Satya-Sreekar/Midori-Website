import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Defer so the target section is in the DOM after route transitions
      const t = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
          window.scrollTo({ top: 0, behavior: "auto" })
        }
      }, 0)
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname, hash])

  return null
}
