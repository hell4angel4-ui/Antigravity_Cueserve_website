"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface ValueItem {
  id: string;
  num: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

const valuesData: ValueItem[] = [
  {
    id: "mission",
    num: "_01",
    label: "Mission",
    icon: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb589d47768656dc4903_Mission-Icon-1.svg",
    title: "Focused On Impact",
    description: "Our mission is creating experiences that inspire, deliver results, and change how individuals interact with your brand.",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
  },
  {
    id: "vision",
    num: "_02",
    label: "Vision",
    icon: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58248258afdc90491e_Mission-Icon-2.svg",
    title: "Digital Innovation",
    description: "Our vision is to shape the future of digital innovation through meaningful design, strategic clarity, and technical mastery.",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
  },
  {
    id: "goals",
    num: "_03",
    label: "Goals",
    icon: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58c89775bca22ccba5_Mission-Icon-3.svg",
    title: "Inspire Growth",
    description: "Our goal is to continuously push boundaries & help ambitious businesses unlock sustainable growth in global markets.",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
  }
];

export default function ValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isManualSelection, setIsManualSelection] = useState<boolean>(false);

  // Hook into scroll progress over the 250vh sticky scroll area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (isManualSelection) return;
      if (latest < 0.33) {
        setActiveTab(0);
      } else if (latest < 0.66) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isManualSelection]);

  const handleTabClick = (index: number) => {
    setIsManualSelection(true);
    setActiveTab(index);
    // Reset manual flag after user stops clicking
    setTimeout(() => setIsManualSelection(false), 2000);
  };

  return (
    <section className="section values-section-container" style={{ padding: 0 }}>
      {/* Scroll Track Area (250vh height on desktop for sticky scroll effect) */}
      <div ref={containerRef} className="mission-vh-wrap" style={{ height: "220vh", position: "relative" }}>
        {/* Sticky Viewport Container */}
        <div
          className="mission-sticky-wrap"
          style={{
            position: "sticky",
            top: "6rem",
            paddingTop: "2rem",
            paddingBottom: "4rem"
          }}
        >
          <div className="container">
            {/* Header Title Row */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="section-title-wrapper flex mission mb-8"
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

            {/* Tab Nav Header Row */}
            <div className="mission-tabs-header flex items-center justify-between gap-4 mb-6 border-b border-gray-200/60 pb-4">
              {valuesData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className="flex-1 flex items-center justify-center py-3 px-6 rounded-full transition-all duration-300 relative cursor-pointer outline-none border-none"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #2d8cff 0%, #0056b3 100%)"
                        : "var(--alice-blue, #edf3ff)",
                      boxShadow: isActive ? "0 8px 24px rgba(45, 140, 255, 0.35)" : "none"
                    }}
                  >
                    <span
                      className="text-base font-semibold tracking-tight"
                      style={{ color: isActive ? "#ffffff" : "#0e1422" }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Focused Cards Area with Smooth Animated Entrance */}
            <div className="mission-cards-display position-relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 25, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1.0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -25, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="single-mission-card-active rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl"
                  style={{ background: "#ffffff" }}
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      {/* Circle Icon */}
                      <div
                        className="mission-icon-wrap mb-6 flex items-center justify-center rounded-full shadow-md"
                        style={{
                          width: "5.5rem",
                          height: "5.5rem",
                          background: "linear-gradient(135deg, #6199ff 0%, #c0d7ff 100%)"
                        }}
                      >
                        <img
                          src={valuesData[activeTab].icon}
                          loading="lazy"
                          alt="Mission Icon"
                          style={{ width: "2.75rem", height: "2.75rem" }}
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {valuesData[activeTab].title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        {valuesData[activeTab].description}
                      </p>
                    </div>

                    {/* Featured Right Image */}
                    <div
                      className="mission-image-wrap shrink-0 rounded-2xl overflow-hidden shadow-lg"
                      style={{ width: "260px", height: "200px" }}
                    >
                      <img
                        src={valuesData[activeTab].image}
                        loading="lazy"
                        alt={valuesData[activeTab].title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
