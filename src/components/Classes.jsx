const classItems = [
  {
    title: 'LKG - Nursery',
    icon: '🌈',
    description: 'Gentle first steps toward joyful learning with play-based discovery.',
    features: ['Play-based language', 'Mini creative groups', 'Daily story rituals']
  },
  {
    title: 'UKG - Kindergarten',
    icon: '✏️',
    description: 'Creative language, early numeracy, and emotional connection every day.',
    features: ['Activity corners', 'Friendship games', 'Confidence routines']
  },
  {
    title: '1st - 2nd Grade',
    icon: '📚',
    description: 'Confidence-building lessons with storytelling and hands-on projects.',
    features: ['Interactive learning', 'Team challenges', 'Hands-on reading']
  },
  {
    title: '3rd - 4th Grade',
    icon: '🌿',
    description: 'Growing curiosity, strong foundations, and supportive classroom routines.',
    features: ['Circle discussions', 'Nature projects', 'Math with stories']
  },
  {
    title: '5th Grade',
    icon: '🏅',
    description: 'Independent learners sharpen skills and explore creative expression.',
    features: ['Leadership labs', 'Project-based tasks', 'Creative showcases']
  }
]

function Classes() {
  return (
    <section id="classes" className="section-block section-alt">
      <div className="container">
        <div className="section-header text-center reveal">
          <div className="section-label">Our Classes</div>
          <h2 className="section-title">Warm class environments for every early learner</h2>
          <p className="section-text mx-auto mb-0" style={{ maxWidth: '580px' }}>
            From LKG to 5th grade, we guide children with nurturing teams, bright classroom routines and joyful activities.
          </p>
        </div>
        <div className="row gy-4 mt-4">
          {classItems.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.title}>
              <div className="class-card card border-0 h-100 shadow-sm hover-float">
                <div className="class-card-deco"></div>
                <div className="class-card-head d-flex align-items-center justify-content-between mb-4">
                  <div className="class-icon">{item.icon}</div>
                  <span className="class-pill">Best Fit</span>
                </div>
                <h3 className="class-title">{item.title}</h3>
                <p className="class-copy">{item.description}</p>
                <ul className="class-features list-unstyled mt-4 mb-0">
                  {item.features.map((feature) => (
                    <li key={feature} className="class-feature-item">
                      <span>•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
