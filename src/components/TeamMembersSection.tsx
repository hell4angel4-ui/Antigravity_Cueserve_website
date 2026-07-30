"use client";

import { motion } from "framer-motion";

interface Member {
  id: string;
  name: string;
  designation: string;
  image: string;
  socials: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const teamMembers: Member[] = [
  {
    id: "devon-lane",
    name: "Devon Lane",
    designation: "Brand Identity Designer",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0ffb159d9941921ad2ce_Member-Image-1.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "james-anderson",
    name: "James Anderson",
    designation: "Creative Director",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0fc30b9e253f89ff04a8_Member-Image-2.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "dianne-russell",
    name: "Dianne Russell",
    designation: "Senior Web Developer",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0fb490ad3863d9959b46_Member-Image-3.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "annette-black",
    name: "Annette Black",
    designation: "UI/UX Strategist",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f9cc03a35f586dc7b54_Member-Image-4.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "floyd-miles",
    name: "Floyd Miles",
    designation: "Product Designer",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f867e29ec200271b37c_Member-Image-5.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "savannah-nguyen",
    name: "Savannah Nguyen",
    designation: "Digital Marketing Lead",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f6c1e45f5c5b63fdfc2_Member-Image-6.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "leslie-alexander",
    name: "Leslie Alexander",
    designation: "Content & Copy Specialist",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f506163f9b04d984bbc_Member-Image-7.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  },
  {
    id: "wade-warren",
    name: "Wade Warren",
    designation: "Social Media Manager",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0ef033baf106960c2a67_Member-Image-8.jpg",
    socials: { twitter: "https://x.com/", facebook: "https://facebook.com/", linkedin: "https://linkedin.com/" }
  }
];

export default function TeamMembersSection() {
  return (
    <section className="section members">
      <div className="container">
        {/* Section Title Reveal */}
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
                <div className="subtitle-text">Team Members</div>
              </div>
            </div>
          </div>
          <h2 className="section-title">
            Our Talented Team <span className="section-title-mark">Members.</span>
          </h2>
        </motion.div>

        {/* Member Grid with Staggered Entrance */}
        <div className="members-wrapper">
          <div className="member-grid-wrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 30, opacity: 0, filter: "blur(5px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="single-member-wrap"
              >
                <div className="member-contents-wrap">
                  <div className="member-image-wrap overflow-hidden">
                    <img
                      src={member.image}
                      loading="lazy"
                      alt={member.name}
                      className="member-image transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="member-details-wrapper">
                    <div className="member-details-contents">
                      <div className="member-name-wrap">
                        <span className="member-name">{member.name}</span>
                      </div>
                      <div className="member-designation">{member.designation}</div>
                      <div className="member-social-links-wrap">
                        {member.socials.twitter && (
                          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="single-member-social-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        )}
                        {member.socials.facebook && (
                          <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="single-member-social-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.433.961-2.433 2.45v1.516h3.614l-.478 3.667h-3.136v7.98c7.406-.826 12.879-7.07 12.879-14.545C24 4.093 18.627-1.28 12 -1.28S0 4.093 0 11.146c0 7.475 5.473 13.719 12.879 14.545z"/>
                            </svg>
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="single-member-social-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-border-top"></div>
    </section>
  );
}
