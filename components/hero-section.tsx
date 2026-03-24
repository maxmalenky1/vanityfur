import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Sparkles, Play } from "lucide-react"
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
              Full-View Grooming
              <span className="block text-primary">Dogs & Cats</span>
            </h1>
            
            <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Cumming, GA&apos;s premier pet salon. <strong className="text-foreground">Noose-free</strong> for dogs. <strong className="text-foreground">No sedation</strong> for cats — you sit with and comfort your cat throughout. 35+ years of grooming mastery.
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
          
          {/* Images - Two Circles */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Large Circle - Main Image */}
              <div className="absolute top-0 right-0 z-10 w-[65%] aspect-square">
                {/* Decorative ring for large circle */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-primary/20" />
                <div className="absolute inset-[-16px] rounded-full border border-primary/10" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tracey%20%282%29-2GpKQlCM02iW6HXuKYcXiL4XDB55jt.png"
                    alt="Professional noose-free dog grooming at Vanity Fur Pet Parlor in Cumming GA - happy dog being groomed"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                    sizes="(max-width: 768px) 60vw, 320px"
                  />
                </div>
              </div>

              {/* Small Circle - Second Face */}
              <div className="absolute bottom-[8%] left-0 z-20 w-[48%] aspect-square">
                {/* Decorative ring for small circle */}
                <div className="absolute inset-[-6px] rounded-full border-2 border-primary/20" />
                <div className="absolute inset-[-12px] rounded-full border border-primary/10" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sarah%20%282%29-jSzfk5HH7sk67Wl7MNAhz3543m4C5b.png"
                    alt="Full-view pet grooming in Forsyth County - beautifully groomed dog at Vanity Fur"
                    fill
                    className="object-cover object-[center_25%]"
                    sizes="(max-width: 768px) 45vw, 240px"
                  />
                </div>
              </div>
              
              {/* Floating badges - positioned outside circles */}
              <Link
                href="/gallery?tab=videos&pet=dogs"
                className="absolute -top-2 right-[20%] md:top-0 md:right-[5%] bg-card/90 backdrop-blur-md shadow-xl rounded-full px-3 py-2 animate-float z-30 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-amber-500/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Play className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white ml-0.5" />
                  </div>
                  <div className="pr-1">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground leading-tight">Full-View</p>
                    <p className="text-[9px] text-muted-foreground">Videos</p>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/gallery?tab=videos&pet=dogs"
                className="absolute bottom-0 left-[5%] md:bottom-2 md:left-0 bg-card/90 backdrop-blur-md shadow-xl rounded-full px-3 py-2 animate-float animation-delay-300 z-30 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-primary/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <Play className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-foreground fill-primary-foreground ml-0.5" />
                  </div>
                  <div className="pr-1">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground leading-tight">Noose-Free</p>
                    <p className="text-[9px] text-muted-foreground">Videos</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
