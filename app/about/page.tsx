import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, CheckCircle, Star, Shield, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Vanity Fur Pet Parlor - Family-Owned Pet Grooming in Cumming, GA",
  description: "Meet the team at Vanity Fur Pet Parlor in Cumming, GA. Family-owned since 1985, our expert groomers Tracey and Sarah provide premium dog and cat grooming with genuine care.",
  openGraph: {
    title: "About Vanity Fur Pet Parlor - Cumming, GA Pet Grooming",
    description: "Family-owned since 1985. Meet our expert pet grooming team in Cumming, Georgia.",
  },
}

const values = [
  {
    icon: Heart,
    title: "Family-Owned Excellence",
    description: "What started as a dream in 1985 has grown into a legacy of exceptional pet care. We're not just a business—we're a family dedicated to treating your pets like our own."
  },
  {
    icon: CheckCircle,
    title: "Expert Craftsmanship",
    description: "Our team brings decades of combined experience, specialized training, and an artistic eye to every grooming session. We don't just groom—we create masterpieces."
  },
  {
    icon: Star,
    title: "Personalized Care",
    description: "Every pet is unique, and so is our approach. We take the time to understand your pet's personality, needs, and preferences to create a truly customized experience."
  },
  {
    icon: Shield,
    title: "Calm & Comfortable",
    description: "We've created a serene, stress-free environment where pets feel safe and relaxed. No rushing, no chaos—just patient, gentle care that puts your pet at ease."
  }
]

const team = [
  {
    name: "Tracey",
    role: "Owner & Operator",
    initials: "T",
    image: "/images/tracy.png",
    bio: "I grew up in Powder Springs on a small farm and have been passionate about my love for animals all of my life! I always dreamed of becoming a Vet and began working at an animal hospital at 18 and later as a Vet Tech. I discovered that to be a Vet was much too sad of a profession, surrounded by tragedy and death every day. I decided to follow my other passion, technical drawing and art as an Architect. But I did not find what I wanted at Southern Tech. I finally found my perfect fit when I met my mentor, Donna Haas, of Puppy Toes Grooming. I left college and began my apprenticeship with her in 1985. I have never looked back! This is truly my calling and I am so blessed to have a profession that I truly still enjoy and love, even after almost 35 years!"
  },
  {
    name: "Sarah",
    role: "Master Stylist / Manager",
    initials: "S",
    image: "/images/sarah.png",
    bio: "Sarah is an incredibly talented artist and animal lover! I have known her since she was 14, when fate brought our families together. I recognized her talent and began her training in 1997. She was the best student I have ever had! She moved on with her life with her military husband, grooming dogs all over the country. Fate has now brought her back to this area, after an unfortunate divorce. I feel so blessed to have this fabulous woman join me to work by my side. I have searched for so long to find someone with her unique set of skills to be able to meet my very high standards!"
  },
  {
    name: "Shawn",
    role: "Video Production",
    initials: "S",
    image: "/images/shawn.png",
    bio: "Shawn is my highly trained husband, in charge of IT, photography, upcoming video and content production for our website. He is also producing our YouTube and instructional videos. Keep checking back, maybe your pet will, with your permission, be featured and become a Youtube sensation or star in one of our videos!"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            About Vanity Fur
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Our Story & Passion
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For nearly 35 years, we&apos;ve been dedicated to providing premium pet grooming with genuine care and compassion. Every pet that walks through our doors becomes part of our family.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-background rounded-3xl p-8 border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-background" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Meet the Family
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The passionate people behind Vanity Fur Pet Parlor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-semibold text-background">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-background mb-6">
            Ready to Experience the Vanity Fur Difference?
          </h2>
          <p className="text-background/70 mb-10 max-w-xl mx-auto text-lg">
            Book an appointment today and let us pamper your beloved pet
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
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
              className="rounded-full px-8 h-14 text-base border-2 border-background/30 text-background hover:bg-background/10 bg-transparent transition-all duration-300"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
