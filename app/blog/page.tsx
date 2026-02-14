import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog - Pet Grooming Tips & News",
  description: "Expert pet grooming tips, advice, and news from Vanity Fur Pet Parlor in Cumming, GA. Learn about noose-free grooming, cat grooming, seasonal coat care, and more.",
  openGraph: {
    title: "Blog - Pet Grooming Tips & News | Vanity Fur Pet Parlor",
    description: "Expert pet grooming tips, advice, and news from Vanity Fur Pet Parlor in Cumming, GA.",
  },
}

const blogPosts = [
  {
    id: "what-is-noose-free-grooming",
    title: "What Is Noose-Free Grooming & Why It Matters",
    excerpt: "Traditional grooming loops can cause stress and injury. Learn why Vanity Fur uses a completely noose-free approach to keep your pet safe and comfortable during every grooming session.",
    image: "/images/gallery/yorkie-flower.jpg",
    tag: "Safety",
    date: "January 15, 2026",
    readTime: "4 min read",
  },
  {
    id: "full-view-grooming-explained",
    title: "Full-View Grooming: See Your Pet the Entire Time",
    excerpt: "At Vanity Fur, our open grooming area means you can watch your pet being pampered from start to finish. Discover the benefits of full-view grooming and why pet parents love it.",
    image: "/images/gallery/schnauzer-blue.jpg",
    tag: "Transparency",
    date: "January 8, 2026",
    readTime: "3 min read",
  },
  {
    id: "cat-grooming-without-sedation",
    title: "Cat Grooming Without Sedation: Our Gentle Approach",
    excerpt: "Many groomers sedate cats, but at Vanity Fur we never do. Learn about our dedicated Cat Room and the gentle techniques we use to keep feline friends calm and happy.",
    image: "/images/tracey-white-cat.jpg",
    tag: "Cat Care",
    date: "December 28, 2025",
    readTime: "5 min read",
  },
  {
    id: "winter-coat-care-tips",
    title: "Winter Coat Care: Keeping Your Pet Cozy & Clean",
    excerpt: "Cold weather brings unique grooming challenges. From matting prevention to paw care, here are our top tips for maintaining your pet's coat through the winter months.",
    image: "/images/gallery/shih-tzu-tie.jpg",
    tag: "Seasonal Tips",
    date: "December 15, 2025",
    readTime: "4 min read",
  },
  {
    id: "how-often-should-you-groom",
    title: "How Often Should You Groom Your Dog? A Breed Guide",
    excerpt: "Grooming frequency depends on your dog's breed, coat type, and lifestyle. We break down the recommended schedules for common breeds to help you keep your pup looking their best.",
    image: "/images/gallery/maltipoo-blue.jpg",
    tag: "Dog Care",
    date: "December 5, 2025",
    readTime: "6 min read",
  },
  {
    id: "choosing-the-right-groomer",
    title: "5 Signs You've Found the Right Pet Groomer",
    excerpt: "Not all groomers are created equal. Learn what to look for in a professional groomer, from certifications and cleanliness to how they handle your pet during the process.",
    image: "/images/gallery/bruce-charlie.jpg",
    tag: "Advice",
    date: "November 20, 2025",
    readTime: "3 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Tag className="w-4 h-4" />
                Grooming Tips & News
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
                The Vanity Fur Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Expert advice on pet grooming, coat care, and keeping your furry friends healthy and happy.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Link
                href={`/blog/${blogPosts[0].id}`}
                className="group block bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                    <Image
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {blogPosts[0].tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                      <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16 pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10">
                All Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                          {post.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-card border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to Pamper Your Pet?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a grooming appointment and see our full-view, noose-free approach in person.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl"
              >
                <Link href="/contact">
                  Book An Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
