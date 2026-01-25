import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Vanity Fur Pet Parlor - Book Pet Grooming in Cumming, GA",
  description: "Book your pet grooming appointment at Vanity Fur Pet Parlor in Cumming, GA. Call us or fill out our contact form. Open Mon-Sat 9:30 AM - 6:30 PM. Located at 2539 Pinetree Rd.",
  openGraph: {
    title: "Contact Vanity Fur Pet Parlor - Cumming, GA",
    description: "Book your pet grooming appointment today. Open Mon-Sat 9:30 AM - 6:30 PM.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
