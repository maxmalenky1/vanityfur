"use client"

import Image from "next/image"
import { CheckCircle, Heart, DollarSign } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Grooming that's personal and tailored.",
    description: "No cookie-cutter services here. Every pet gets a boutique experience that's as unique as they are, with individual pampering in a welcoming, calm environment.",
    image: "/images/grooming.png",
    iconBg: "bg-primary"
  },
  {
    icon: Heart,
    title: "Genuine care, from our family to yours.",
    description: "At the heart of Vanity Fur Pet Parlor is a deep respect for animals. Every grooming session is guided by genuine care and compassion, treating each pet like one of our own.",
    image: "/images/care.png",
    iconBg: "bg-primary"
  },
  {
    icon: DollarSign,
    title: "Premium service, attainable prices",
    description: "Whether your pets need a quick bath or a full makeover, we provide VIP grooming that's gentle, attentive, and designed with your furry friends in mind - all at prices that make top-quality care accessible.",
    image: "/images/service.png",
    iconBg: "bg-primary"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            The pet grooming experience
            <span className="block">they&apos;ve been waiting for.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium care that makes tails wag and purrs rumble
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-background rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
