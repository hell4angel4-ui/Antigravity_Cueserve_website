'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#fff' }}>
          <div
            data-wf--subtitle--variant="borders"
            className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
            style={{ marginBottom: '20px' }}
          >
            <div className="subtitle-flex-wrap">
              <img
                src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                alt="Subtitle Icon"
                className="subtitle-icon"
              />
              <div className="subtitle-text">Get In Touch</div>
            </div>
          </div>

          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Let’s Build Something{' '}
            <span style={{ color: '#2d8cff' }}>Extraordinary.</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '50px',
            }}
          >
            Have a project in mind or want to explore working together? Drop us a
            line below and we’ll get back to you within 24 hours.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Interested Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '10px',
                    background: '#0a2540',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                >
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="UI/UX Strategy">UI/UX Strategy</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Product Design">Product Design</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Project Details
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your project goals, timelines, and scope..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <button
                type="submit"
                className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
                style={{ cursor: 'pointer', alignSelf: 'flex-start' }}
              >
                <div className="primary-button-flex">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Send Message</div>
                  </div>
                </div>
              </button>
            </form>
          ) : (
            <div
              style={{
                background: 'rgba(45, 140, 255, 0.1)',
                border: '1px solid #2d8cff',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Thank you, {formData.name}!
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
                Your message has been received. Our team will contact you shortly
                at <strong>{formData.email}</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
