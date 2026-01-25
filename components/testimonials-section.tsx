"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    content: "I have a small troubled grumpy little man and Sarah is amazing with him! He loves her! I'm so grateful to have found her and the team at Vanity Fur!",
    name: "Dorothy",
    role: "Google Review",
    initials: "D"
  },
  {
    content: "Tracey was amazing with Pumpkin. He's a very large cat and his coat had multiple problem areas. She put me at ease as soon as I called her. The grooming process went beautifully!",
    name: "Pam Landreth",
    role: "Google Review",
    initials: "PL"
  },
  {
    content: "I took my cat to Tracy after years of getting my cat groomed at the vet with sedative. She was beyond amazing, patient and did an amazing job. Tracy is truly a saint with crazy cats!",
    name: "Jaimee Gatto",
    role: "Google Review",
    initials: "JG"
  },
  {
    content: "I've taken both of my cats to Tracey and can't say enough about how wonderful she is! Not only is Tracey's work top-notch, she is kind and comforting. Highly recommend!",
    name: "Jennifer Tyo",
    role: "Google Review",
    initials: "JT"
  },
  {
    content: "Sarah did an EXCELLENT job on my foot shy 6lb shih tzu. WAY better than Petco!!! She's very skilled at what she does. Very precise, even around my baby's face. A+",
    name: "Jeff Wylie",
    role: "Google Review",
    initials: "JW"
  },
  {
    content: "There is no other place I will take my dog! I absolutely love Vanity Fur. Sarah usually grooms our baby and does such a great job. They are all friendly and professional!",
    name: "Haleigh Michelle",
    role: "Google Review",
    initials: "HM"
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="reviews">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Happy Pets, Happy Owners
          </h2>
          <p className="text-muted-foreground">5-Star Experiences</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>
            
            {/* Card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-border/50 relative overflow-hidden">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-center text-foreground text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 font-light">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-xl mb-4 shadow-lg">
                  {testimonials[activeIndex].initials}
                </div>
                <p className="font-semibold text-foreground text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-xl transition-all duration-300 border border-border/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-xl transition-all duration-300 border border-border/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
