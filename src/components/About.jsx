function About() {
  return (
    <section id="about" className="section-block reveal">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="section-label">About Our School</div>
            <h2 className="section-title">A warm school community where every child feels known.</h2>
            <p className="section-text">
              Saraswathi Vidya Nikethan in Ipur blends joyful discovery with deep academic care. Our teachers nurture kindness, curiosity and confidence so every child can explore, play and grow in a safe environment.
            </p>
            <p className="section-text text-muted">
              From gentle learning routines to meaningful friendships, we design each day to support emotional wellbeing and academic confidence for early learners.
            </p>
            <div className="about-quote card p-4 shadow-sm mt-4">
              <strong>Principal’s Message</strong>
              <p className="mb-0 mt-2">
                "At Saraswathi Vidya Nikethan, every little dream is celebrated. We create space for young hearts to love learning and build a lifetime of trust."
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
                alt="Happy children in classroom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
