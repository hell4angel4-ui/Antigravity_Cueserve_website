# Cueserve Website

A homepage clone of the [Arooth Webflow template](https://arooth.webflow.io/), rebranded for **Cueserve**.

## Quick start

Open `index.html` directly in your browser, or run a local server:

```powershell
cd C:\Users\asus\Projects\cueserve-website
python -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Project structure

```
cueserve-website/
├── index.html          # Homepage (all sections from Arooth home)
├── assets/
│   ├── css/custom.css  # Cueserve brand overrides
│   └── images/         # Logo, favicon, and local images
```

## What's included

The homepage includes all sections from the original Arooth site:

- Hero banner with animated VISION letters
- About Us with stats counters
- Awards grid
- Services tabs
- Projects gallery
- Testimonials slider
- Blog articles
- FAQ accordion
- Footer with newsletter signup

## Branding changes

- **Logo**: Cueserve logo in navbar and footer
- **Favicon**: Cueserve icon
- **Company name**: Arooth references replaced with Cueserve
- **Local images**: Banner, about section, and testimonial images use your provided assets

## Customization

- Edit text content directly in `index.html`
- Adjust brand colors in `assets/css/custom.css`
- Replace images in `assets/images/`

Styles and animations are loaded from the original Webflow CDN to preserve the template's look and interactions.
