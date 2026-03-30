function Hero() {
  return (
    <section id="home" className="hero-section position-relative overflow-hidden">
      <div className="hero-overlay"></div>
      <div className="container hero-inner text-white">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <span className="eyebrow-badge">Admissions Open for 2026</span>
            <h1 className="display-5 fw-bold hero-title">
              Where Little Minds Grow Big Dreams
            </h1>
            <p className="lead text-white-75 hero-copy">
              Create a safe, joyful, and inspiring early learning journey for your child at Saraswathi Vidya Nikethan.
            </p>
            <div className="hero-actions d-flex flex-wrap gap-3">
              <a href="#admissions" className="btn btn-lg btn-light btn-glow">
                Admissions Open
              </a>
              <a
                href="https://wa.me/917207231018?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Saraswathi%20Vidya%20Nikethan"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-outline-light"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6 col-xl-5 mx-auto mx-lg-0">
            <div className="hero-visual-card rounded-4 overflow-hidden shadow-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1683135222192-d9c14544d187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGVkdWNhdGlvbnxlbnwwfDF8MHx8fDA%3D"
                alt="Children in class"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
