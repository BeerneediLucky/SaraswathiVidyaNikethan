function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section reveal">
      <div className="container footer-container">
        <div className="row gy-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-card">
              <h4 className="footer-heading">Saraswathi Vidya Nikethan</h4>
              <p className="footer-tagline">Where Little Minds Grow Big Dreams</p>
              <p className="footer-description">
                A warm and nurturing school in Ipur that inspires curiosity, confidence, and lifelong learning for every child.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-card">
              <h5 className="footer-heading">Quick Links</h5>
              <div className="footer-quick-links">
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#classes" className="footer-link">Classes</a>
                <a href="#facilities" className="footer-link">Facilities</a>
                <a href="#gallery" className="footer-link">Gallery</a>
                <a href="#admissions" className="footer-link">Admissions</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-card">
              <h5 className="footer-heading">Contact Details</h5>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" fill="currentColor" />
                  </svg>
                  <div>
                    <strong>Address</strong>
                    <p className="mb-0">Ipur, Andhra Pradesh</p>
                    <a href="https://www.google.com/maps/search/Ipur+Andhra+Pradesh" target="_blank" rel="noreferrer" className="footer-link small-link">
                      View on Google Maps
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.56.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.67 21 3 14.33 3 6c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.23.24 2.44.69 3.56.12.27.07.58-.21.79l-2.36 2.44z" fill="currentColor" />
                  </svg>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+917207231018" className="footer-link">+91 72072 31018</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@saraswathividyanikethan.in" className="footer-link">info@saraswathividyanikethan.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-card footer-cta-card">
              <h5 className="footer-heading">Admissions</h5>
              <p className="footer-description mb-3">
                Admissions are open now. Start your child's journey with a caring team, modern classrooms, and a joyful learning environment.
              </p>
              <div className="footer-cta">
                <a
                  href="#admissions"
                  className="btn btn-primary btn-lg"
                >
                  Admissions Open
                </a>
                <a
                  href="https://wa.me/917207231018?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Saraswathi%20Vidya%20Nikethan%2C%20Ipur"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary btn-lg"
                >
                  Chat on WhatsApp
                </a>
              </div>
               {/* INSTAGRAM */}
              <div className="footer-social mt-4">
                 <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon facebook">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z"/>
                    </svg>
                  </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5z"/>
                    <path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.9-2.4a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="social-icon youtube">
                  <svg viewBox="0 0 24 24">
                    {/* <!-- Outer shape --> */}
                    <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.7 4.8 12 4.8 12 4.8s-3.7 0-6.9.3c-.4 0-1.4.1-2.1.9-.6.6-.8 2-.8 2S2 9.7 2 11.5v1c0 1.8.2 3.5.2 3.5s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.1 7.3.3 7.3.3s3.7 0 6.9-.3c.4 0 1.4-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.7.2-3.5v-1c0-1.8-.2-3.5-.2-3.5z"/>
                    
                    {/* <!-- Centered Play Icon --> */}
                    <path d="M9.5 15.5V8.5L15.5 12L9.5 15.5Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="mb-0">© 2026 Saraswathi Vidya Nikethan, Ipur. All Rights Reserved.</p>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <span>Designed with care for parents and families</span>
            <button type="button" className="scroll-top-btn" onClick={scrollToTop}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" fill="currentColor" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
