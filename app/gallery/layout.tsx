import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dogs & Kittens Pampered | Vanity Fur Pet Parlor - Pet Grooming Gallery Cumming, GA",
  description: "Browse our gallery of pampered dogs and kittens at Vanity Fur Pet Parlor in Cumming, GA. Over 30 years of noose-free dog grooming and no-sedation cat grooming excellence.",
  keywords: ["pet grooming gallery Cumming GA", "dog grooming photos", "cat grooming photos", "no-noose dog grooming"],
  openGraph: {
    title: "Dogs & Kittens Pampered - Vanity Fur Pet Parlor Gallery",
    description: "See beautiful dog and cat grooming transformations from Cumming, GA's premier no-noose pet salon.",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
