"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  // Newest images first
  { id: 1, title: "Calico Lion Cut", subtitle: "Beautiful lion cut styling", tag: "Cat Grooming", image: "/images/gallery/cat-lioncut.jpg" },
  { id: 2, title: "Jazzey", subtitle: "Christmas poodle perfection", tag: "Dog Grooming", image: "/images/gallery/jazzey-poodle.jpg" },
  { id: 3, title: "Midnight Shih Tzu", subtitle: "Elegant black styling", tag: "Dog Grooming", image: "/images/gallery/black-shih-tzu.jpg" },
  { id: 4, title: "Brown Havanese", subtitle: "Fluffy teddy bear cut", tag: "Dog Grooming", image: "/images/gallery/brown-havanese.jpg" },
  { id: 5, title: "Happy Cat Customer", subtitle: "Owner with groomed cat", tag: "Cat Grooming", image: "/images/gallery/owner-gray-cat.jpg" },
  { id: 6, title: "Pink Collar Cutie", subtitle: "Cavapoo puppy styling", tag: "Dog Grooming", image: "/images/gallery/pink-collar-cavapoo.jpg" },
  { id: 7, title: "Happy Cat Mom", subtitle: "Customer with calico", tag: "Cat Grooming", image: "/images/gallery/happy-customer-cat.jpg" },
  { id: 8, title: "Christmas Schnauzer", subtitle: "Holiday groom perfection", tag: "Dog Grooming", image: "/images/gallery/schnauzer-christmas.jpg" },
  // Previous new images
  { id: 9, title: "Yorkie Princess", subtitle: "Flower bow perfection", tag: "Dog Grooming", image: "/images/gallery/yorkie-flower.jpg" },
  { id: 10, title: "Happy Maltipoo", subtitle: "Gray and white teddy cut", tag: "Dog Grooming", image: "/images/gallery/maltipoo-blue.jpg" },
  { id: 11, title: "Dapper Shih Tzu", subtitle: "Yellow tie gentleman", tag: "Dog Grooming", image: "/images/gallery/shih-tzu-tie.jpg" },
  { id: 12, title: "Classic Schnauzer", subtitle: "Perfect show cut", tag: "Dog Grooming", image: "/images/gallery/schnauzer-blue.jpg" },
  { id: 13, title: "Ginger Tiger", subtitle: "Creative striped styling", tag: "Cat Grooming", image: "/images/gallery/cat-striped.jpg" },
  { id: 14, title: "Midnight Poodle", subtitle: "Black curly perfection", tag: "Dog Grooming", image: "/images/gallery/black-poodle.jpg" },
  { id: 15, title: "Best Friends", subtitle: "Chihuahua & Cocker duo", tag: "Dog Grooming", image: "/images/gallery/chihuahua-duo.jpg" },
  { id: 16, title: "Bruce & Charlie", subtitle: "Happy customer moment", tag: "Dog Grooming", image: "/images/gallery/bruce-charlie.jpg" },
  // Existing images
  { id: 17, title: "Molly", subtitle: "Fluffy poodle perfection", tag: "Dog Grooming", image: "/images/gallery/molly.webp" },
  { id: 10, title: "Heart Bandana Cutie", subtitle: "Terrier mix styling", tag: "Dog Grooming", image: "/images/gallery/terrier.webp" },
  { id: 11, title: "Snow White", subtitle: "Bichon teddy bear cut", tag: "Dog Grooming", image: "/images/gallery/bichon.webp" },
  { id: 12, title: "Cally", subtitle: "Calico lion cut", tag: "Cat Grooming", image: "/images/gallery/cally.webp" },
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

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToNext = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  // Show limited dots - group by 5s and show current group
  const dotsPerGroup = 7
  const currentGroup = Math.floor(currentIndex / dotsPerGroup)
  const totalGroups = Math.ceil(galleryImages.length / dotsPerGroup)
  const startDot = currentGroup * dotsPerGroup
  const endDot = Math.min(startDot + dotsPerGroup, galleryImages.length)
  const visibleDots = galleryImages.slice(startDot, endDot)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Our Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Dogs & Kittens Pampered
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Browse through our collection of beautifully groomed pets. Over 30 years of grooming mastery in Cumming, GA.
          </p>
        </div>
      </section>

      {/* Gallery Slideshow */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">Our Happy Clients</h2>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                {galleryImages.length} Photos
              </span>
            </div>

            {/* Slideshow */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-secondary h-[450px] md:h-[550px] lg:h-[650px] group">
              {/* Background Image */}
              <Image
                src={galleryImages[currentIndex].image || "/placeholder.svg"}
                alt={galleryImages[currentIndex].title}
                fill
                className="object-contain transition-opacity duration-500"
              />
              {/* Controls */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <span className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {currentIndex + 1} / {galleryImages.length}
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
                  {galleryImages[currentIndex].tag}
                </span>
                <h4 className="text-xl md:text-2xl font-semibold text-background">{galleryImages[currentIndex].title}</h4>
                <p className="text-background/80 text-sm mt-1">{galleryImages[currentIndex].subtitle}</p>
              </div>
            </div>

            {/* Limited Dot Navigation with Group Indicators */}
            <div className="flex flex-col items-center gap-3">
              {/* Current group dots */}
              <div className="flex justify-center gap-2">
                {visibleDots.map((_, idx) => {
                  const actualIndex = startDot + idx
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => {
                        setIsPlaying(false)
                        setCurrentIndex(actualIndex)
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        actualIndex === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"
                      }`}
                      aria-label={`Go to image ${actualIndex + 1}`}
                    />
                  )
                })}
              </div>
              
              {/* Group indicators */}
              {totalGroups > 1 && (
                <div className="flex gap-2 items-center">
                  {Array.from({ length: totalGroups }).map((_, groupIdx) => (
                    <button
                      key={groupIdx}
                      onClick={() => {
                        setIsPlaying(false)
                        setCurrentIndex(groupIdx * dotsPerGroup)
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        groupIdx === currentGroup ? "w-6 bg-primary/60" : "w-3 bg-border/50 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to group ${groupIdx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
