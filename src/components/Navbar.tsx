'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', menuLabel: 'Home', count: '(01)' },
    { href: '/about-us', label: 'About Us', menuLabel: 'About', count: '(01)' },
    { href: '/services', label: 'Services', menuLabel: 'Services', count: '(04)' },
    { href: '/projects', label: 'Works', menuLabel: 'Works', count: '(05)' },
    { href: '/contact-us', label: 'Contact', menuLabel: 'Contact', count: '(02)' }
  ];

  const checkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div data-animation="default" data-collapse="all" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="container navbar-container">
        <div className="navbar-wrap">
          <div className="navbar-flex-wrap">
            <div className="nav-flex-left">
              <Link
                href="/"
                className={`main-logo-wrap w-nav-brand ${pathname === '/' ? 'w--current' : ''}`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                <img
                  src="/cueserve-logo.png"
                  loading="lazy"
                  alt="Cueserve Logo"
                  className="main-logo"
                  style={{ maxHeight: '40px', width: 'auto' }}
                />
              </Link>
              <div className="nav-links-wrapper">
                <div className="nav-links-flex">
                  {navItems.map((item) => {
                    const active = checkActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`single-nav-link w-inline-block ${active ? 'w--current' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div>{item.label}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="nav-flex-right">
              <div className="nav-right-flex">
                <div className="nav-button-wrap">
                  <Link
                    data-wf--primary-button--variant="blue"
                    href="/services"
                    className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
                  >
                    <div className="primary-button-flex">
                      <div className="primary-button-text-wrap">
                        <div className="primary-button-text w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                          View All Services
                        </div>
                        <div className="primary-button-text-hover w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                          View All Services
                        </div>
                      </div>
                      <div className="primary-button-arrow-wrapper w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                        <div className="primary-button-arrow-wrap">
                          <img
                            src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg"
                            loading="lazy"
                            alt="Arrow"
                            className="primary-button-arrow"
                          />
                          <img
                            src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg"
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
                <div className="navigations-wrapper">
                  <nav
                    role="navigation"
                    className={`navigation w-nav-menu ${isMenuOpen ? 'w--open' : ''}`}
                    style={{
                      display: isMenuOpen ? 'block' : undefined,
                      transform: isMenuOpen ? 'translate3d(0px, 0px, 0px)' : undefined
                    }}
                  >
                    <div className="container navigation-container">
                      <div className="hamburger-wrapper">
                        <div id="w-node-_603589df-a36e-3abb-1735-d40c05c2b1c9-b64688fb" className="navigation-content-wrap">
                          <div className="navigation-content-block">
                            <div className="navigation-content-wrapper">
                              <div className="navigation-contents">
                                <div className="navigation-links-flex">
                                  {navItems.map((item) => {
                                    const active = checkActive(item.href);
                                    return (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={`single-navigation-links w-inline-block ${active ? 'w--current' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <div className="navigation-inline-wrap">
                                          <div className="navigation-text-flex">
                                            <div className="navigation-link-text">{item.menuLabel}</div>
                                            <div className="navigation-link-count">{item.count}</div>
                                          </div>
                                        </div>
                                        <div className="navigation-link-border">
                                          <div className="navigation-link-border-inner"></div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                                <div className="navigation-button-wrapper">
                                  <Link
                                    href="/contact-us"
                                    className="navigation-button w-inline-block"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <div className="navigation-button-text-wrap">
                                      <div className="navigation-button-text">Get In Touch</div>
                                      <div className="navigation-button-text absolute">Get In Touch</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="navigation-bg-wrap">
                              <div className="navigation-bg-top"></div>
                              <div className="navigation-bg-bottom"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <div
                    data-w-id="9f5a7dc5-49e2-a9c4-07e5-2c6565c6e46e"
                    className={`hamburger-button w-nav-button ${isMenuOpen ? 'w--open' : ''}`}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle Menu"
                  >
                    <div className="hamburger-wrap">
                      <div className="hamburger-bars-wrap">
                        <div className="hamburger-bar _01"></div>
                        <div className="hamburger-bar _02"></div>
                        <div className="hamburger-bar _03"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
