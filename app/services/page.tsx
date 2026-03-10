"use client"

import { useEffect, useRef, useState } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone, Cat, Dog, Shield, Heart, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Metadata is handled in layout.tsx for client components

const dogServices = [
  {
    title: "Full Grooming",
    description: "Complete grooming with bath, haircut, nail trim, ear cleaning, and styling. Always noose-free.",
    features: ["Bath & blow dry", "Breed-specific or custom cut", "Nail trimming", "Ear cleaning", "Cologne/perfume"],
  },
  {
    title: "Bath & Brush",
    description: "Refreshing bath with premium shampoo, blow dry, and thorough brushing.",
    features: ["Premium shampoo", "Blow dry & fluff", "Thorough brushing", "Nail trim", "Light trimming"],
  },
  {
    title: "Nail & Paw Care",
    description: "Professional nail trimming or grinding plus paw pad maintenance.",
    features: ["Nail trimming or grinding", "Paw pad cleanup", "Sanitary trim available"],
  },
]

const catServices = [
  {
    title: "Lion Cut",
    description: "Classic lion cut leaving a full mane, tail tuft, and leg furnishings. No sedation required.",
    features: ["Full body shave", "Mane left full", "Tail tuft styling", "Owner holds cat"],
  },
  {
    title: "Full Bath & Groom",
    description: "Complete cat grooming with bath, blow dry, nail trim, and mat removal.",
    features: ["Gentle bath", "Blow dry", "Nail trimming", "Mat removal", "Ear cleaning"],
  },
  {
    title: "Sanitary Trim",
    description: "Quick trim around the sanitary areas and belly for hygiene and comfort.",
    features: ["Sanitary area trim", "Belly trim", "Quick 15-20 minutes"],
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const { ref, isInView } = useInView()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

function ServiceCard({ service, index, variant = "light" }: { service: typeof dogServices[0], index: number, variant?: "light" | "dark" }) {
  const { ref, isInView } = useInView()
  const bgClass = variant === "light" ? "bg-card" : "bg-background"
  
  return (
    <div
      ref={ref}
      className={`${bgClass} rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transitionDelay: `${index * 150}ms`,
        transitionProperty: 'opacity, transform, box-shadow',
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li 
            key={i} 
            className="flex items-center gap-2 text-sm"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-10px)',
              transitionDelay: `${index * 150 + i * 50 + 200}ms`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '400ms'
            }}
          >
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div 
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'scale(1)' : 'scale(0.8)'
          }}
        />
        
        <div className="container relative mx-auto px-6 text-center">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 transition-all duration-500"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(-20px)'
            }}
          >
            Our Services
          </span>
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 max-w-4xl mx-auto leading-tight transition-all duration-700"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            Professional Pet Grooming Services in Cumming, GA
          </h1>
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            Noose-free dog grooming and no-sedation cat grooming. Full-view, compassionate care for your beloved pets since 1985.
          </p>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 p-5 bg-background rounded-2xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Noose-Free Dog Grooming</h3>
                  <p className="text-sm text-muted-foreground">We never restrain dogs by the neck — gentle, hands-on care only.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="flex items-center gap-4 p-5 bg-background rounded-2xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">No-Sedation Cat Grooming</h3>
                  <p className="text-sm text-muted-foreground">You hold your cat while we groom — no sedation ever needed.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dog Services */}
      <section className="py-20 md:py-28 bg-background" id="dog-services">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Dog className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">Dog Grooming</h2>
                <p className="text-muted-foreground">Always noose-free, always full-view</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {dogServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} variant="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Cat Services */}
      <section className="py-20 md:py-28 bg-card" id="cat-services">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Cat className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">Cat Grooming</h2>
                <p className="text-muted-foreground">No sedation — you hold your cat in our Cat Room</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {catServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} variant="dark" />
            ))}
          </div>

          <AnimatedSection delay={500} className="mt-8">
            <div className="p-6 bg-background rounded-2xl border border-border/50 max-w-2xl">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Cat grooming appointments must be booked by phone.</strong> Call us to discuss your cat&apos;s needs and schedule a time in our dedicated Cat Room.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="container relative mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-background mb-6">
              Ready to Book Your Pet&apos;s S&apos;Paw Day?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-background/70 mb-10 max-w-xl mx-auto text-lg">
              Call to schedule your appointment. Cat grooming appointments must be booked by phone.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <a href="tel:7706171374">
                  <Phone className="mr-2 w-5 h-5" />
                  Call to Book
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 border-2 border-background/30 text-background hover:bg-background/10 bg-transparent transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Request Online
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="mt-6 text-sm text-background/60">
              <span className="font-semibold text-background/90">(770) 617-1374</span> — Press 2 for cat appointments
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
