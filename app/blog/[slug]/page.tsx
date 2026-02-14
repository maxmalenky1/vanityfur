import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const blogPosts: Record<string, {
  title: string
  excerpt: string
  image: string
  tag: string
  date: string
  readTime: string
  content: string[]
}> = {
  "what-is-noose-free-grooming": {
    title: "What Is Noose-Free Grooming & Why It Matters",
    excerpt: "Traditional grooming loops can cause stress and injury. Learn why Vanity Fur uses a completely noose-free approach.",
    image: "/images/gallery/yorkie-flower.jpg",
    tag: "Safety",
    date: "January 15, 2026",
    readTime: "4 min read",
    content: [
      "Traditional pet grooming often relies on grooming loops, also known as nooses, to keep pets still on the grooming table. While these loops are standard in the industry, they can cause significant stress, anxiety, and even physical injury to your pet.",
      "At Vanity Fur Pet Parlor, we made the decision decades ago to eliminate grooming nooses entirely from our practice. Instead, we rely on patience, gentle handling techniques, and building trust with each animal that comes through our doors.",
      "Noose-free grooming means your pet is never restrained by the neck during their grooming session. This approach requires more skill and experience from the groomer, but the results speak for themselves: calmer pets, fewer injuries, and a grooming experience your pet won't dread.",
      "Our groomers use calm, reassuring voices and gentle physical support to keep pets positioned correctly. We take breaks when needed and never rush through a session. This approach has been central to our philosophy since we opened in 1985.",
      "The benefits of noose-free grooming extend beyond just physical safety. Pets who are groomed without restraints tend to be less anxious during future visits, making each session easier and more enjoyable for everyone involved.",
      "If your pet has ever come home from a grooming session stressed or with marks on their neck, it may be time to switch to a noose-free groomer. Your pet deserves a grooming experience that prioritizes their comfort and well-being.",
    ],
  },
  "full-view-grooming-explained": {
    title: "Full-View Grooming: See Your Pet the Entire Time",
    excerpt: "At Vanity Fur, our open grooming area means you can watch your pet being pampered from start to finish.",
    image: "/images/gallery/schnauzer-blue.jpg",
    tag: "Transparency",
    date: "January 8, 2026",
    readTime: "3 min read",
    content: [
      "Have you ever dropped your pet off at a groomer and wondered what was happening behind closed doors? At Vanity Fur Pet Parlor, we believe transparency is key to building trust with pet parents.",
      "Our full-view grooming setup means you can see your pet throughout the entire grooming process. There are no hidden rooms or closed doors. Every bath, brush, and trim happens in plain sight.",
      "Full-view grooming isn't just about transparency, it's about accountability. When groomers know they're being observed, it creates a natural incentive to maintain the highest standards of care and professionalism.",
      "Many pet parents tell us that watching their pet's grooming session for the first time was a revelation. They could see firsthand the gentle techniques we use and how comfortable their pets were throughout the process.",
      "If your current groomer takes your pet behind closed doors and you're not sure what happens during the grooming process, consider visiting Vanity Fur. We're proud to show you exactly how we treat your beloved family members.",
    ],
  },
  "cat-grooming-without-sedation": {
    title: "Cat Grooming Without Sedation: Our Gentle Approach",
    excerpt: "Many groomers sedate cats, but at Vanity Fur we never do.",
    image: "/images/tracey-white-cat.jpg",
    tag: "Cat Care",
    date: "December 28, 2025",
    readTime: "5 min read",
    content: [
      "Cat grooming is a specialized skill that many groomers avoid altogether. Those who do offer it often rely on sedation to manage feline behavior. At Vanity Fur, we take a completely different approach.",
      "Our dedicated Cat Room is designed specifically for feline grooming. The environment is calm, quiet, and separate from the dog grooming area. This separation is crucial because cats are sensitive to the sounds and scents of dogs.",
      "With over 35 years of experience in cat grooming, our team has developed gentle handling techniques that keep cats calm without any sedation. We understand feline body language and know when to push forward and when to pause.",
      "Sedation carries real risks for cats, including adverse reactions, respiratory issues, and prolonged recovery times. By avoiding sedation entirely, we eliminate these risks while still achieving beautiful grooming results.",
      "Our cat grooming services include lion cuts, sanitary trims, full baths, nail trimming, and ear cleaning. Each service is performed with patience and care, ensuring your cat has the most comfortable experience possible.",
      "If you've been told your cat needs sedation for grooming, we encourage you to give Vanity Fur a try. You might be surprised at how well your cat responds to our gentle, sedation-free approach.",
    ],
  },
  "winter-coat-care-tips": {
    title: "Winter Coat Care: Keeping Your Pet Cozy & Clean",
    excerpt: "Cold weather brings unique grooming challenges for your pet.",
    image: "/images/gallery/shih-tzu-tie.jpg",
    tag: "Seasonal Tips",
    date: "December 15, 2025",
    readTime: "4 min read",
    content: [
      "As temperatures drop, many pet parents assume their dogs and cats need less grooming during winter. In reality, cold weather grooming is just as important as warm weather care, if not more so.",
      "Winter coats tend to be thicker and denser, which means they're more prone to matting. Matted fur doesn't insulate as well and can trap moisture against the skin, leading to irritation and even infection.",
      "Regular brushing is essential during winter months. Aim for at least every other day for long-haired breeds and twice a week for short-haired breeds. This keeps the coat healthy and free of tangles.",
      "Paw care is especially important in winter. Salt and chemical de-icers can irritate your pet's paw pads. Wipe your pet's paws after every outdoor walk and consider using a pet-safe paw balm for protection.",
      "Don't skip regular grooming appointments in winter. A professional groomer can properly maintain your pet's coat, trim overgrown fur around the paws (which can collect ice balls), and check for any skin issues hidden under thick winter fur.",
      "At Vanity Fur, we adjust our grooming approach seasonally to ensure your pet's coat is properly maintained year-round. Schedule a winter grooming session to keep your pet comfortable and healthy through the cold months.",
    ],
  },
  "how-often-should-you-groom": {
    title: "How Often Should You Groom Your Dog? A Breed Guide",
    excerpt: "Grooming frequency depends on your dog's breed, coat type, and lifestyle.",
    image: "/images/gallery/maltipoo-blue.jpg",
    tag: "Dog Care",
    date: "December 5, 2025",
    readTime: "6 min read",
    content: [
      "One of the most common questions we get at Vanity Fur is how often a dog should be professionally groomed. The answer depends on several factors, with breed and coat type being the most important.",
      "Short-haired breeds like Beagles and Labrador Retrievers typically need professional grooming every 8 to 12 weeks. While their coats are low-maintenance, regular baths, nail trims, and ear cleanings are still important for overall health.",
      "Medium-coated breeds like Golden Retrievers and Cocker Spaniels should visit the groomer every 6 to 8 weeks. Their coats can mat if neglected, and regular trimming helps manage shedding.",
      "Long-haired and curly-coated breeds like Poodles, Shih Tzus, and Maltipoos need the most frequent grooming, every 4 to 6 weeks. These coats grow continuously and can quickly become matted and uncomfortable without regular maintenance.",
      "Beyond breed considerations, your dog's lifestyle matters too. Dogs that spend a lot of time outdoors, swim frequently, or roll in the dirt may need more frequent grooming. Senior dogs may also benefit from more frequent visits as their coat texture changes with age.",
      "At Vanity Fur, we're happy to create a customized grooming schedule for your specific dog. Contact us to discuss the best grooming frequency for your furry family member.",
    ],
  },
  "choosing-the-right-groomer": {
    title: "5 Signs You've Found the Right Pet Groomer",
    excerpt: "Not all groomers are created equal. Learn what to look for.",
    image: "/images/gallery/bruce-charlie.jpg",
    tag: "Advice",
    date: "November 20, 2025",
    readTime: "3 min read",
    content: [
      "Finding the right groomer for your pet is one of the most important decisions you'll make as a pet parent. Here are five signs that indicate you've found a great groomer.",
      "First, transparency is key. A good groomer should welcome questions and be open about their process. If you can watch the grooming session, even better. At Vanity Fur, our full-view grooming means you can always see what's happening.",
      "Second, look for gentle handling techniques. Watch how the groomer interacts with your pet. Do they use patience and calm energy? A great groomer never rushes or forces a pet into uncomfortable positions.",
      "Third, check for proper certifications and experience. Professional groomers invest in their education and stay current with best practices. Ask about their training background and how long they've been grooming.",
      "Fourth, cleanliness matters. The grooming facility should be well-maintained, organized, and hygienic. Equipment should be properly sanitized between pets, and the space should feel welcoming.",
      "Fifth, happy return visits. The ultimate test of a great groomer is how your pet reacts when returning. If your pet seems excited or at least relaxed when arriving for their appointment, that's a strong sign you've found the right fit.",
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) {
    return { title: "Post Not Found" }
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Vanity Fur Pet Parlor`,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-40 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
            <Button asChild className="rounded-full">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const allSlugs = Object.keys(blogPosts)
  const currentIndex = allSlugs.indexOf(slug)
  const nextSlug = allSlugs[currentIndex + 1]
  const nextPost = nextSlug ? { slug: nextSlug, ...blogPosts[nextSlug] } : null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Header */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
                {post.title}
              </h1>
              <p className="text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-12 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-6 text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </article>

              {/* CTA */}
              <div className="mt-12 p-8 bg-card rounded-2xl border border-border/50 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Ready to Experience the Vanity Fur Difference?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a grooming appointment and see our full-view, noose-free approach in person.
                </p>
                <Button
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
                >
                  <Link href="/contact">
                    Book An Appointment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Next Post */}
              {nextPost && (
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">Next Article</p>
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex items-center justify-between gap-4"
                  >
                    <h4 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h4>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
