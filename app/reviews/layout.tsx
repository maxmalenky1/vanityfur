import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Reviews | Vanity Fur Pet Parlor - 5-Star Pet Grooming in Cumming, GA",
  description: "Read 5-star reviews from happy pet parents at Vanity Fur Pet Parlor in Cumming, GA. See why we're rated the best dog and cat grooming salon in Forsyth County.",
  openGraph: {
    title: "Customer Reviews - Vanity Fur Pet Parlor",
    description: "5-star reviews from happy pet parents in Cumming, GA. See why pets love us!",
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
