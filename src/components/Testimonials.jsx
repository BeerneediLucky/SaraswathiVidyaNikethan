function Testimonials() {
  return (
    <section id="testimonials" className="section-block section-alt reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">Parent stories that build trust and warmth.</h2>
        </div>
        <div id="testimonialCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-card card border-0 shadow-sm p-4 reveal fade-right delay-1">
                <div className="testimonial-meta d-flex align-items-center gap-3 mb-3">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Parent 1" className="rounded-circle" />
                  <div>
                    <h5 className="mb-0">Mrs. Anjali Patel</h5>
                    <p className="mb-0 text-muted">Mother of Aarav</p>
                  </div>
                </div>
                <p>
                  “The team here makes every morning feel calm and bright. My child loves the music, stories and kind teachers.”
                </p>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-card card border-0 shadow-sm p-4 reveal fade-left delay-2">
                <div className="testimonial-meta d-flex align-items-center gap-3 mb-3">
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" alt="Parent 2" className="rounded-circle" />
                  <div>
                    <h5 className="mb-0">Mr. Rohit Kumar</h5>
                    <p className="mb-0 text-muted">Father of Meera</p>
                  </div>
                </div>
                <p>
                  “Saraswathi Vidya Nikethan has created a loving space for our daughter to play, learn and make friends with confidence.”
                </p>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-card card border-0 shadow-sm p-4 reveal fade-right delay-3">
                <div className="testimonial-meta d-flex align-items-center gap-3 mb-3">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Parent 3" className="rounded-circle" />
                  <div>
                    <h5 className="mb-0">Mrs. Neha Joshi</h5>
                    <p className="mb-0 text-muted">Mother of Kabir</p>
                  </div>
                </div>
                <p>
                  “The school feels secure and nurturing. Every teacher knows my child’s name and celebrates their small wins.”
                </p>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
