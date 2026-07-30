"use client";

import { useState } from "react";

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="section testimonials position-relative overflow-hidden">
      <div className="container">
        {/* Section Header Title */}
        <div className="section-title-wrapper margin-bottom">
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
        </div>

        {/* Main Testimonial Card Slider */}
        <div className="testimonial-slider-container position-relative mb-16">
          <div className="single-testimonial-wrap rounded-3xl p-8 md:p-12 transition-all duration-500 bg-white border border-gray-100 shadow-xl">
            <div className="testimonial-flex-wrap flex flex-col md:flex-row items-center gap-8">
              {/* Author Image */}
              <div className="testimonial-image-wrap shrink-0 rounded-2xl overflow-hidden shadow-lg" style={{ maxWidth: "420px", width: "100%" }}>
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="testimonial-image w-full h-80 object-cover"
                />
              </div>

              {/* Content Wrap */}
              <div className="testimonial-content-wrapper flex-1">
                <div className="testimonial-content-inner">
                  <div className="testimonial-content-top-wrap flex justify-between items-center mb-6">
                    <div className="testimonial-author-info-wrap flex items-center gap-4">
                      <img src={current.logo} alt="Client Logo" className="testimonial-logo h-8" />
                      <div>
                        <div className="testimonial-author-name text-lg font-bold text-gray-900">{current.name}</div>
                        <div className="text-sm text-gray-500 font-medium">{current.role}</div>
                      </div>
                    </div>
                    <div className="testimonial-quote-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb2fd8ce6cc23415e725_Testimonial-Quote.svg"
                        alt="Quote Icon"
                        className="testimonial-quote w-10 opacity-70"
                      />
                    </div>
                  </div>

                  <div className="testimonial-content-divider h-px bg-gray-100 mb-6"></div>

                  <div className="testimonial-details-wrap">
                    <p className="testimonial-details text-gray-700 text-lg leading-relaxed italic">
                      "{current.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="slider-controls-wrap flex items-center justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-gray-500 px-2">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Stats Counters */}
        <div className="testimonials-stats-wrapper py-8 border-t border-b border-gray-100">
          <div className="testimonials-stats-flex grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="single-testimonial-stat-wrap">
              <div className="testimonial-counter-wrap flex justify-center items-baseline gap-1 text-4xl font-extrabold text-gray-900 mb-2">
                <span>99</span>
                <span className="text-blue-600">%</span>
              </div>
              <div className="testimonial-stat-text text-sm font-medium text-gray-600">Client Satisfaction Rate</div>
            </div>

            <div className="single-testimonial-stat-wrap">
              <div className="testimonial-counter-wrap flex justify-center items-baseline gap-1 text-4xl font-extrabold text-gray-900 mb-2">
                <span>150</span>
                <span className="text-blue-600">+</span>
              </div>
              <div className="testimonial-stat-text text-sm font-medium text-gray-600">Global Brands Served Worldwide</div>
            </div>

            <div className="single-testimonial-stat-wrap">
              <div className="testimonial-counter-wrap flex justify-center items-baseline gap-1 text-4xl font-extrabold text-gray-900 mb-2">
                <span>5</span>
                <span className="text-blue-600">X</span>
              </div>
              <div className="testimonial-stat-text text-sm font-medium text-gray-600">Average Growth Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
