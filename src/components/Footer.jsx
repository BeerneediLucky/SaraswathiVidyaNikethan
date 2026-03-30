function Footer() {
  return (
    <footer className="footer-section py-3">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-md-6">
            <h5>Saraswathi Vidya Nikethan</h5>
            <p className="mb-0 text-muted">Ipur | A caring and premium foundation for little learners.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#home" className="footer-link me-3">Home</a>
            <a href="#contact" className="footer-link me-3">Contact</a>
            <a
              href="https://wa.me/917207231018?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Saraswathi%20Vidya%20Nikethan"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
