"use client"

import { useState } from "react"
import { ChevronDown, Scissors, Sparkles, Bath } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Dog & Cat Grooming",
    description: "From breed-specific and show cuts to custom styles, senior pets, and special-care grooming, we tailor every service to your pet's individual needs."
  },
  {
    icon: Sparkles,
    title: "Nail, Paw & Ear Care",
    description: "Essential care to keep your pet comfortable. Nail trimming or grinding, paw pad cleanup, and gentle ear cleaning performed with patience and care."
  },
  {
    icon: Bath,
    title: "Bath, Brush & Blowout",
    description: "Maintenance grooming for pets who need a refresh. Includes premium bathing, blow-dry, brushing, and light touch-ups to keep coats clean, soft, and healthy."
  }
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-card" id="services">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium care for your beloved companions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-b border-border last:border-0 transition-all duration-300 ${
                openIndex === index ? "bg-background" : ""
              }`}
            >
              <button
                type="button"
                className="w-full py-6 md:py-8 flex items-center justify-between gap-4 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-primary border-primary rotate-180" 
                    : "group-hover:border-primary/50"
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${
                    openIndex === index ? "text-primary-foreground" : "text-muted-foreground"
                  }`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 pb-6 md:pb-8" : "max-h-0"
              }`}>
                <p className="text-muted-foreground leading-relaxed pl-16 md:pl-20 pr-14">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
