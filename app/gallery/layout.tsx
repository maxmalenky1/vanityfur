import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pet Grooming Gallery | Vanity Fur Pet Parlor - Cumming, GA Dog & Cat Grooming Photos",
  description: "Browse our pet grooming gallery showcasing beautiful dog and cat grooming transformations at Vanity Fur Pet Parlor in Cumming, GA. See our expert styling work!",
  openGraph: {
    title: "Pet Grooming Gallery - Vanity Fur Pet Parlor",
    description: "See beautiful dog and cat grooming transformations from Cumming, GA's premier pet salon.",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
