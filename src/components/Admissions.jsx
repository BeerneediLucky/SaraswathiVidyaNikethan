function Admissions() {
  return (
    <section id="admissions" className="section-block reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Admissions</div>
          <h2 className="section-title">A simple three-step admission journey</h2>
          <p className="section-text mx-auto" style={{ maxWidth: '620px' }}>
            Start with a friendly inquiry, visit our warm campus, and join a nurturing learning family.
          </p>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="admission-step card border-0 shadow-sm p-4 h-100">
              <div className="step-badge">1</div>
              <h3>Apply</h3>
              <p>Reach out with your child’s details so we can craft the right onboarding plan.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="admission-step card border-0 shadow-sm p-4 h-100">
              <div className="step-badge">2</div>
              <h3>Visit</h3>
              <p>Experience our classrooms, playgrounds and the caring teachers who support every child.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="admission-step card border-0 shadow-sm p-4 h-100">
              <div className="step-badge">3</div>
              <h3>Join</h3>
              <p>Begin a joyful school journey in an environment designed for early discovery.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-primary btn-lg"
            href="https://wa.me/917207231018?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Saraswathi%20Vidya%20Nikethan"
            target="_blank"
            rel="noreferrer"
          >
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Admissions
