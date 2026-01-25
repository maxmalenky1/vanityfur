import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, PawPrint, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-0 overflow-visible">
      {/* Kitten peeking over the top - positioned in the CTA/Footer gap */}
      <div className="absolute -top-20 right-8 md:right-20 lg:right-32 w-24 h-28 md:w-28 md:h-32 z-50 pointer-events-none">
        <Image
          src="/images/kitten-20hanging.png"
          alt="Cute kitten peeking"
          fill
          className="object-contain"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <PawPrint className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-semibold text-background">
                Vanity Fur
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium pet grooming with genuine care and compassion. Family-owned and operated since 1985.
            </p>
            <div className="space-y-3">
              <a href="mailto:tracey@vanityfur.us" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                tracey@vanityfur.us
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>2539 Pinetree Rd,<br />Cumming, GA 30041</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/#services", label: "Services" },
                { href: "/about#team", label: "Our Groomers" },
                { href: "/contact", label: "Book an Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Bath, Brush & Blowout",
                "Nail, Paw & Ear Care",
                "Specialty & Custom Grooming",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-background/70">
                  <PawPrint className="w-3 h-3 text-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-background mb-6">Hours</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-background">Monday - Friday</span>
                <span className="block text-background/70">9:30 AM - 6:30 PM</span>
              </li>
              <li>
                <span className="text-primary">Saturday</span>
                <span className="block text-background/70">9:30 AM - 6:30 PM</span>
              </li>
              <li>
                <span className="text-primary">Sunday</span>
                <span className="block text-background/70">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Vanity Fur Pet Parlor. All rights reserved.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for pets and their families.
          </p>
        </div>
      </div>
      
      {/* Dogs at the very bottom - flush right */}
      <div className="relative w-full flex justify-end">
        <div className="relative w-[350px] md:w-[450px] lg:w-[550px] h-24 md:h-32 lg:h-40">
          <Image
            src="/images/doggies-20on-20buttom.png"
            alt="Happy dogs and cat"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </footer>
  )
}
