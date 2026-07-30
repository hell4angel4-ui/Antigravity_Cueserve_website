"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ValueItem {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

const valuesData: ValueItem[] = [
  {
    id: "mission",
    label: "Mission",
    icon: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb589d47768656dc4903_Mission-Icon-1.svg",
    title: "Focused On Impact",
    description: "Our mission is creating experiences that inspire, deliver results, and change how individuals interact with your brand.",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
  },
  {
    id: "vision",
    label: "Vision",
    icon: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58248258afdc90491e_Mission-Icon-2.svg",
    title: "Digital Innovation",
    description: "Our vision is to shape the future of digital innovation through meaningful design, strategic clarity, and technical mastery.",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
  },
  {
    id: "goals",
    label: "Goals",
    icon: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58c89775bca22ccba5_Mission-Icon-3.svg",
    title: "Inspire Growth",
    description: "Our goal is to continuously push boundaries & help ambitious businesses unlock sustainable growth in global markets.",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
  }
];

export default function ValuesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = valuesData[activeTab];

  return (
    <section className="section mission">
      <div className="container">
        {/* Header Title Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title-wrapper flex mission"
        >
          <div className="section-title-left-wrap mission">
            <div className="section-subtile-wrap">
              <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                <div className="subtitle-flex-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                    loading="lazy"
                    alt="Subtitle Icon"
                    className="subtitle-icon"
                  />
                  <div className="subtitle-text">Our Values</div>
                </div>
              </div>
            </div>
            <h2 className="section-title">
              Values Shapes <span className="section-title-mark">Everything.</span>
            </h2>
          </div>
          <div className="section-title-right-wrap mission-button-wrap">
            <Link
              data-wf--primary-button--variant="alice-blue"
              href="/projects"
              className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
            >
              <div className="primary-button-flex">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">View All Projects</div>
                  <div className="primary-button-text-hover">View All Projects</div>
                </div>
                <div className="primary-button-arrow-wrapper">
                  <div className="primary-button-arrow-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg"
                      loading="lazy"
                      alt="Arrow"
                      className="primary-button-arrow"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg"
                      loading="lazy"
                      alt="Arrow"
                      className="primary-button-arrow-hover"
                    />
                  </div>
                </div>
              </div>
              <div className="primary-button-hover-bg"></div>
            </Link>
          </div>
        </motion.div>

        {/* Tab Nav Buttons Row */}
        <div className="mission-tabs-wrap" style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {valuesData.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  background: isActive ? '#2d8cff' : '#edf3ff',
                  color: isActive ? '#ffffff' : '#0e1422',
                  boxShadow: isActive ? '0 8px 20px rgba(45, 140, 255, 0.3)' : 'none'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Card Display Area */}
        <div className="mission-cards-container" style={{ position: 'relative', minHeight: '320px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
              style={{
                background: '#ffffff',
                borderRadius: '2rem',
                padding: '3rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
              }}
            >
              <div
                className="mission-flex-wrap"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2.5rem'
                }}
              >
                <div className="mission-content-wrap" style={{ flex: '1 1 480px', maxWidth: '640px' }}>
                  <div
                    className="mission-icon-wrap"
                    style={{
                      width: '4.5rem',
                      height: '4.5rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #2d8cff 0%, #0056b3 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <img src={current.icon} alt="Mission Icon" style={{ width: '2.25rem', height: '2.25rem' }} />
                  </div>
                  <h3 className="single-mission-title" style={{ fontSize: '2rem', fontWeight: 700, color: '#0e1422', marginBottom: '1rem' }}>
                    {current.title}
                  </h3>
                  <p className="single-mission-details" style={{ fontSize: '1.125rem', color: '#525b68', lineHeight: 1.6 }}>
                    {current.description}
                  </p>
                </div>
                <div
                  className="mission-image-wrap"
                  style={{
                    flex: '0 0 auto',
                    width: '380px',
                    height: '260px',
                    borderRadius: '1.5rem',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
