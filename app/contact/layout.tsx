import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Book Pet Grooming Appointment | Vanity Fur Cumming GA",
  description: "Book a pet grooming appointment at Vanity Fur Pet Parlor in Cumming, GA. Call (770) 617-1374 or fill out our contact form. Noose-free dog grooming and no-sedation cat grooming in Forsyth County.",
  keywords: ["book pet grooming Cumming GA", "pet grooming appointment Forsyth County", "contact Vanity Fur", "dog grooming near me", "cat grooming appointment"],
  alternates: {
    canonical: 'https://vanityfur.us/contact',
  },
  openGraph: {
    title: "Contact Vanity Fur Pet Parlor - Book Grooming in Cumming GA",
    description: "Book a pet grooming appointment at Vanity Fur in Cumming, GA. Open Mon-Sat 9:30 AM - 6:30 PM. Noose-free and no-sedation grooming available.",
    url: 'https://vanityfur.us/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
