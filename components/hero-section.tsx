"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Premium Pet Grooming
              </span>
            </div>
            
            <h1 className="animate-fade-up animation-delay-100 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Where paws are
              <span className="block text-primary">pampered with love.</span>
            </h1>
            
            <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Cumming, GA&apos;s premier pet grooming salon. Compassionate, full-view, and always <strong className="text-foreground">noose-free</strong> grooming for dogs and cats. Over 30 years of grooming mastery.
            </p>
            
            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-4 mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Book An Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base border-2 hover:bg-muted transition-all duration-300 bg-transparent"
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="animate-fade-up animation-delay-400 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 rating</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <span className="text-2xl font-semibold text-foreground">100+</span>
                <span className="text-sm text-muted-foreground ml-2">Happy Pets</span>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <span className="text-2xl font-semibold text-foreground">35+</span>
                <span className="text-sm text-muted-foreground ml-2">Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full animate-pulse-soft" />
              
              {/* Main Image */}
              <div className="relative z-10 aspect-square rounded-full overflow-hidden border-8 border-card shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tracy__1_-removebg-preview-OxOln6cgeP5OfMiIL7n2z9Fau1tpDZ.png"
                  alt="Professional pet groomer with a happy dog"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-4 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Noose-Free</p>
                    <p className="text-xs text-muted-foreground">Safe & Gentle</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl p-4 animate-float animation-delay-300 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Full-View Grooming</p>
                    <p className="text-xs text-muted-foreground">Open & Transparent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
