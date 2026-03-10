import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Reviews - 5-Star Pet Grooming | Vanity Fur Cumming GA",
  description: "Read verified 5-star reviews from dog and cat owners at Vanity Fur Pet Parlor in Cumming, GA. Noose-free dog grooming and no-sedation cat grooming in Forsyth County.",
  keywords: ["Vanity Fur reviews", "pet grooming reviews Cumming GA", "best pet groomer Forsyth County", "dog grooming reviews", "cat grooming reviews near me"],
  alternates: {
    canonical: 'https://vanityfur.us/reviews',
  },
  openGraph: {
    title: "Customer Reviews | Vanity Fur Pet Parlor Cumming GA",
    description: "Read what pet parents say about Vanity Fur. 5-star reviews for noose-free dog grooming and no-sedation cat grooming.",
    url: 'https://vanityfur.us/reviews',
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
