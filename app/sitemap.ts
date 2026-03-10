import type { MetadataRoute } from 'next'

const BASE_URL = 'https://vanityfur.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()
  
  // Core pages - only indexable public pages with consistent HTTPS URLs
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Static blog posts - clean URLs without trailing slashes
    {
      url: `${BASE_URL}/blog/what-is-noose-free-grooming`,
      lastModified: '2026-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/full-view-grooming-explained`,
      lastModified: '2026-01-08',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/cat-grooming-without-sedation`,
      lastModified: '2025-12-28',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/winter-coat-care-tips`,
      lastModified: '2025-12-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/how-often-should-you-groom`,
      lastModified: '2025-12-05',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/choosing-the-right-groomer`,
      lastModified: '2025-11-20',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Excluded from sitemap (not indexed):
  // - /admin/* (protected admin pages)
  // - /api/* (API routes)

  return staticPages
}
