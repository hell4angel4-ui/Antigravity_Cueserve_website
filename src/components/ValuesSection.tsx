"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeTab, setActiveTab] = useState<string>("mission");

  return (
    <section className="section values-section-container">
      <div className="container">
        <div className="mission-vh-wrap" style={{ height: "auto" }}>
          <div className="mission-sticky-wrap" style={{ position: "relative", top: 0 }}>
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

            {/* Interactive Grid & Animated Tabs */}
            <div className="mission-flex-wrap gap-6">
              {valuesData.map((item, index) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                    className={`single-mission-wrapper ${item.num} flex-1 cursor-pointer`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {/* Top Tab Pill Header */}
                    <div className={`mission-counter-wrap ${item.num}`}>
                      <div
                        className={`mission-name-wrap relative transition-all duration-300 ${
                          isActive ? "active-pill" : ""
                        }`}
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg, #2d8cff 0%, #0056b3 100%)"
                            : "var(--alice-blue, #edf3ff)",
                          color: isActive ? "#ffffff" : "#0e1422",
                          boxShadow: isActive ? "0 6px 18px rgba(45, 140, 255, 0.35)" : "none",
                        }}
                      >
                        <div
                          className={`mission-name ${item.num}`}
                          style={{ color: isActive ? "#ffffff" : "#0e1422", fontWeight: 600 }}
                        >
                          {item.label}
                        </div>
                      </div>
                      <div className="mission-border"></div>
                    </div>

                    {/* Mission Card Wrap */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`mission-card-wrap transition-all duration-300 ${
                        isActive ? "ring-2 ring-blue-500 shadow-xl" : "hover:shadow-md"
                      }`}
                      style={{
                        background: isActive ? "#ffffff" : "var(--alice-blue, #f4f7ff)",
                        border: isActive ? "1px solid #d0e1ff" : "1px solid transparent",
                        padding: "2rem",
                        borderRadius: "20px"
                      }}
                    >
                      <div className="mission-card-content-wrap">
                        {/* Circle Icon */}
                        <div className="mission-icon-wrap mb-6" style={{ width: "4.5rem", height: "4.5rem" }}>
                          <img src={item.icon} loading="lazy" alt={`${item.label} Icon`} className="mission-icon" style={{ width: "2.25rem", height: "2.25rem" }} />
                        </div>

                        {/* Contents Flex */}
                        <div className="mission-contents-flex flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="mission-details-wrap max-w-full">
                            <h3 className="mission-title text-xl font-semibold mb-2" style={{ color: "#0e1422" }}>
                              {item.title}
                            </h3>
                            <p className="mission-details text-sm leading-relaxed" style={{ color: "#505b70" }}>
                              {item.description}
                            </p>
                          </div>
                          <div className="mission-image-wrap shrink-0 rounded-xl overflow-hidden" style={{ width: "90px", height: "90px" }}>
                            <img src={item.image} loading="lazy" alt={`${item.label} Image`} className="mission-image w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
