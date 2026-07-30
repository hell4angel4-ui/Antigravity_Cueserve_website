"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  logo: string;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "CEO at TechNova",
    company: "TechNova Inc",
    avatar: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaedad24e443801fc6e0_Testimonial-Image-1.jpg",
    logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg",
    quote: "Working with Cueserve was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations."
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder at Orbit Digital",
    company: "Orbit Digital",
    avatar: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaee30cffad6d75f74b4_Testimonial-Image-2.jpg",
    logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg",
    quote: "Cueserve delivered exactly what we were looking for—clean design, clear structure, and a strong brand presence. Their attention to detail and creative approach made the entire process effortless."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Product Director at Vertex",
    company: "Vertex Studio",
    avatar: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeeb6faec471807e4a4_Testimonial-Image-3.jpg",
    logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg",
    quote: "The team at Cueserve transformed our ideas into a polished and professional digital experience. Communication was smooth, timelines were met, and the final outcome was exceptional."
  },
  {
    id: 4,
    name: "David Miller",
    role: "Marketing Lead at Apex",
    company: "Apex Brands",
    avatar: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeef6f6713e50ba3c26_Testimonial-Image-4.jpg",
    logo: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg",
    quote: "From concept to execution, Cueserve handled everything with precision and creativity. The final design perfectly reflects our brand and has received great feedback from our clients."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }
    })
  };

  return (
    <section className="section testimonials">
      <div className="container">
        {/* Section Header Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title-wrapper margin-bottom"
        >
          <div className="section-subtile-wrap">
            <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
              <div className="subtitle-flex-wrap">
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                  loading="lazy"
                  alt="Subtitle Icon"
                  className="subtitle-icon"
                />
                <div className="subtitle-text">Our Testimonials</div>
              </div>
            </div>
          </div>
          <h3 className="testimonial-title">
            Our success is measured by the satisfaction of our clients. We{" "}
            <span className="testimonial-title-mark">take pride in building long partnerships.</span>
          </h3>
        </motion.div>

        {/* Main Testimonial Card Slider */}
        <div className="testimonials-wrapper" style={{ marginBottom: '3rem' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="single-testimonial-wrap"
            >
              <div className="testimonial-flex-wrap">
                {/* Author Image */}
                <div className="testimonial-image-wrap">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="testimonial-image"
                  />
                </div>

                {/* Content Wrap */}
                <div className="testimonial-content-wrapper">
                  <div className="testimonial-content-inner">
                    <div className="testimonial-content-top-wrap">
                      <div className="testimonial-author-info-wrap">
                        <img src={current.logo} alt="Client Logo" className="testimonial-logo" />
                        <div>
                          <div className="testimonial-author-name">{current.name}</div>
                          <div className="testimonial-author-role">{current.role}</div>
                        </div>
                      </div>
                      <div className="testimonial-quote-wrap">
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb2fd8ce6cc23415e725_Testimonial-Quote.svg"
                          alt="Quote Icon"
                          className="testimonial-quote"
                        />
                      </div>
                    </div>

                    <div className="testimonial-content-divider"></div>

                    <div className="testimonial-details-wrap">
                      <p className="testimonial-details">
                        "{current.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="slider-controls-wrap flex items-center justify-start gap-3 mt-6" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#64748b' }}>
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Clean Webflow Stats Counters Row */}
        <div className="testimonials-stats-wrapper" style={{ paddingTop: '2.5rem', borderTop: '1px solid #edf2f7' }}>
          <div className="testimonials-stats-flex" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {/* Stat 1: 99% */}
            <div className="single-testimonial-stat-wrap">
              <div className="testimonial-counter-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h2 className="single-number" style={{ fontSize: '3rem', fontWeight: 800, color: '#0e1422', margin: 0, lineHeight: 1 }}>99%</h2>
              </div>
              <div className="testimonial-stat-text" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#525b68', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                CLIENT SATISFACTION RATE
              </div>
            </div>

            {/* Stat 2: 150+ */}
            <div className="single-testimonial-stat-wrap">
              <div className="testimonial-counter-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h2 className="single-number" style={{ fontSize: '3rem', fontWeight: 800, color: '#0e1422', margin: 0, lineHeight: 1 }}>150+</h2>
              </div>
              <div className="testimonial-stat-text" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#525b68', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                GLOBAL BRANDS SERVED WORLDWIDE
              </div>
            </div>

            {/* Stat 3: 5X */}
            <div className="single-testimonial-stat-wrap">
              <div className="testimonial-counter-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h2 className="single-number" style={{ fontSize: '3rem', fontWeight: 800, color: '#0e1422', margin: 0, lineHeight: 1 }}>5X</h2>
              </div>
              <div className="testimonial-stat-text" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#525b68', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                AVERAGE GROWTH ACHIEVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
