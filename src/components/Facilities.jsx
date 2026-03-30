const facilities = [
  {
    title: 'Smart Classrooms',
    description: 'Interactive whiteboards, warm lighting and learning tools for focus and joy.',
    icon: '🧠'
  },
  {
    title: 'Playground',
    description: 'Safe outdoor space for games, movement and social play every day.',
    icon: '🌳'
  },
  {
    title: 'School Transport',
    description: 'Comfortable buses with trusted staff for secure travel to school.',
    icon: '🚌'
  },
  {
    title: 'Library',
    description: 'A cozy reading nook filled with storybooks, imagination and discovery.',
    icon: '📖'
  }
]

function Facilities() {
  return (
    <section id="facilities" className="section-block reveal">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-5">
            <div className="section-label">Facilities</div>
            <h2 className="section-title">A beautiful school built for learning, play and comfort.</h2>
            <p className="section-text">
              Every corner is designed to help children feel calm, engaged and supported.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {facilities.map((item) => (
                <div className="col-sm-6" key={item.title}>
                  <div className="facility-card card border-0 p-4 shadow-sm hover-float h-100">
                    <div className="facility-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
