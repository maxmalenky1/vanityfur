"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  { id: 1, title: "Molly", subtitle: "Fluffy poodle perfection", tag: "Dog Grooming", image: "/images/gallery/molly.webp" },
  { id: 2, title: "Heart Bandana Cutie", subtitle: "Terrier mix styling", tag: "Dog Grooming", image: "/images/gallery/terrier.webp" },
  { id: 3, title: "Snow White", subtitle: "Bichon teddy bear cut", tag: "Dog Grooming", image: "/images/gallery/bichon.webp" },
  { id: 4, title: "Cally", subtitle: "Calico lion cut", tag: "Cat Grooming", image: "/images/gallery/cally.webp" },
  { id: 5, title: "White Shoes", subtitle: "Holiday sheepadoodle style", tag: "Dog Grooming", image: "/images/gallery/sheepadoodle.webp" },
  { id: 6, title: "Nestley", subtitle: "Cavalier King Charles charm", tag: "Dog Grooming", image: "/images/gallery/nestley.webp" },
  { id: 7, title: "Bear", subtitle: "Pomeranian precision cut", tag: "Dog Grooming", image: "/images/gallery/bear.webp" },
  { id: 8, title: "Fluffy Friend", subtitle: "Havanese full groom", tag: "Dog Grooming", image: "/images/gallery/havanese.webp" },
  { id: 9, title: "Silver Belle", subtitle: "Gray poodle elegance", tag: "Dog Grooming", image: "/images/gallery/poodle-gray.webp" },
  { id: 10, title: "Little Prince", subtitle: "Shih Tzu show cut", tag: "Dog Grooming", image: "/images/gallery/shih-tzu.webp" },
  { id: 11, title: "Happy Girl", subtitle: "Cocker spaniel spa day", tag: "Dog Grooming", image: "/images/gallery/cocker-spaniel.webp" },
  { id: 12, title: "Prince & Riley", subtitle: "Poodle duo after grooming", tag: "Dog Grooming", image: "/images/gallery/prince-riley.webp" },
  { id: 13, title: "Merle Beauty", subtitle: "Pomeranian multi-angle", tag: "Dog Grooming", image: "/images/gallery/merle-pom.webp" },
  { id: 14, title: "Butterfly Pom", subtitle: "Gray Pomeranian styling", tag: "Dog Grooming", image: "/images/gallery/butterfly-pom.webp" },
  { id: 15, title: "Pink Bandana Cutie", subtitle: "Havanese with style", tag: "Dog Grooming", image: "/images/gallery/havanese-pink.webp" },
  { id: 16, title: "Blue Bow Yorkie", subtitle: "Yorkie with sequin bow", tag: "Dog Grooming", image: "/images/gallery/yorkie-blue.webp" },
  { id: 17, title: "Flower Girl", subtitle: "Gray poodle with flower", tag: "Dog Grooming", image: "/images/gallery/poodle-flower.webp" },
  { id: 18, title: "Toby", subtitle: "Shih Tzu tropical style", tag: "Dog Grooming", image: "/images/gallery/toby.webp" },
  { id: 19, title: "Spooky Bichon", subtitle: "Bichon with Halloween bandana", tag: "Dog Grooming", image: "/images/gallery/bichon-blue.webp" },
  { id: 20, title: "Max", subtitle: "Shih Tzu puppy first groom", tag: "Dog Grooming", image: "/images/gallery/max.webp" },
  { id: 21, title: "Diva", subtitle: "Standard poodle with painted nails", tag: "Dog Grooming", image: "/images/gallery/diva.webp" },
  { id: 22, title: "Pinkalicious", subtitle: "Pink dyed ears perfection", tag: "Dog Grooming", image: "/images/gallery/pinkalicious.webp" },
  { id: 23, title: "Birthday Pup", subtitle: "Yorkie birthday celebration", tag: "Dog Grooming", image: "/images/gallery/birthday-yorkie.webp" },
  { id: 24, title: "Happy Smile", subtitle: "Schnoodle portrait session", tag: "Dog Grooming", image: "/images/gallery/schnoodle.webp" },
  { id: 25, title: "Sweet CJ", subtitle: "Biewer terrier puppy cut", tag: "Dog Grooming", image: "/images/gallery/sweet-cj.webp" },
  { id: 26, title: "Pink Lace Princess", subtitle: "Mini schnauzer relaxing", tag: "Dog Grooming", image: "/images/gallery/schnauzer-pink.webp" },
  { id: 27, title: "Bichon Relaxed", subtitle: "Full body groom showcase", tag: "Dog Grooming", image: "/images/gallery/bichon-laying.webp" },
  { id: 28, title: "Yorkie Butterfly", subtitle: "Long coat with butterfly clip", tag: "Dog Grooming", image: "/images/gallery/yorkie-butterfly.webp" },
]

const dogImages = galleryImages.filter(image => image.tag === "Dog Grooming");
const catImages = galleryImages.filter(image => image.tag === "Cat Grooming");

function Slideshow({ 
  images, 
  title, 
  icon 
}: { 
  images: { id: number; title: string; subtitle: string; tag: string; image: string }[]
  title: string
  icon: string 
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying, images.length])

  const goToPrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
        </div>
        <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
          {images.length} Photos
        </span>
      </div>

      {/* Slideshow */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-secondary h-[500px] md:h-[600px] lg:h-[700px] group">
        {/* Background Image */}
        <Image
          src={images[currentIndex].image || "/placeholder.svg"}
          alt={images[currentIndex].title}
          fill
          className="object-contain transition-opacity duration-500"
        />
        {/* Controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            {currentIndex + 1} / {images.length}
          </span>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-card transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-card transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
            {images[currentIndex].tag}
          </span>
          <h4 className="text-xl md:text-2xl font-semibold text-background">{images[currentIndex].title}</h4>
          <p className="text-background/80 text-sm mt-1">{images[currentIndex].subtitle}</p>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 flex-wrap">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPlaying(false)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Our Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Happy Pets, Beautiful Results
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Browse through our collection of pampered pups and gorgeous kitties. Each slideshow cycles through amazing transformations!
          </p>
        </div>
      </section>

      {/* Pampered Pups */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <Slideshow images={dogImages} title="Pampered Pups" icon="🐕" />
        </div>
      </section>

      {/* Pampered Kitties */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-6">
          <Slideshow images={catImages} title="Pampered Kitties" icon="🐱" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
