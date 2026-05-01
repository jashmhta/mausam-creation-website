# Mausam Creation — Static Assets

This folder contains all visual assets used in the website.

## Structure

```
assets/
  hero/
    hero-video.mp4          — Cinematic hero video (AI-generated)
    hero-trophies.png       — Hero reference image
    hero-video-ref.png      — Video reference frame
  products-nobg/
    *.png                   — Background-removed product images (used on website)
  products-original/
    *.jpg / *.jpeg          — Original product images scraped from IndiaMart
  mausam-logo-nobg.png      — Logo with transparent background (used on website)
  mausam-logo-original.jpeg — Original logo from IndiaMart
  mausam-creation-logo.png  — Full resolution logo
```

## CDN URLs

All assets are served via the Manus CDN at `/manus-storage/` paths.
See `client/src/lib/products.ts` for the full mapping of asset filenames to CDN URLs.
