"use client";

import { motion } from "framer-motion";

export default function AboutHeroBanner() {
  const tickerItems = [
    {
      shape1: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d07a40ba87bac99f0b7_Service-Banner-Shape-1.png",
      img1: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d08c8e3fb09fce6078c_Service-Banner-Image-1.jpg",
      shape2: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d073128e3f19ab5a222_Service-Banner-Shape-3.png",
      img2: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0882b2236cd282fe37_Service-Banner-Image-2.jpg",
      shape3: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0788a52f5da2435d75_Service-Banner-Shape-4.png",
      img3: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d084673eda36d3786d4_Service-Banner-Image-3.jpg",
      shape4: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d079061c2bb210bd10d_Service-Banner-Shape-2.png"
    }
  ];

  return (
    <section className="inner-banner">
      <div className="container navbar-container">
        <div className="feature-banner-content-wrap">
          <div className="feature-banner-content-flex">
            {/* Left Title Fade & Slide */}
            <motion.div
              initial={{ x: -30, opacity: 0, filter: "blur(5px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="feature-banner-content-left"
            >
              <h1 className="inner-banner-title mb-0">
                Crafting The Future Of Digital <span className="inner-banner-title-mark">Brands.</span>
              </h1>
            </motion.div>

            {/* Right Sub-description Fade & Slide */}
            <motion.div
              initial={{ x: 30, opacity: 0, filter: "blur(5px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="feature-banner-content-right"
            >
              <p className="inner-banner-details">
                At Cueserve, we believe that great design goes beyond visuals — it’s about creating meaningful digital experiences that connect people and brands.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infinite Ticker Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="service-banner-ticker-wrap"
      >
        <div className="service-banner-ticker-flex">
          {[1, 2, 3].map((index) => (
            <div key={index} className="service-banner-ticker-item">
              <img src={tickerItems[0].shape1} loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src={tickerItems[0].img1} loading="lazy" alt="Service Image" className="service-banner-ticker-image about" />
              <img src={tickerItems[0].shape2} loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src={tickerItems[0].img2} loading="lazy" alt="Service Image" className="service-banner-ticker-image about" />
              <img src={tickerItems[0].shape3} loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
              <img src={tickerItems[0].img3} loading="lazy" alt="Service Image" className="service-banner-ticker-image about" />
              <img src={tickerItems[0].shape4} loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
