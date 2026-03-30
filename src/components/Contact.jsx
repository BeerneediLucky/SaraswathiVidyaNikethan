import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }

    const message = `Hello, I want to inquire about admissions at Saraswathi Vidya Nikethan.\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/917207231018?text=${encoded}`

    window.open(url, '_blank')
    setSubmitted(true)
    setError('')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-block section-alt reveal">
      <div className="container">
        <div className="row gy-5 align-items-stretch">
          <div className="col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <div className="section-label">Contact</div>
              <h2 className="section-title">Visit or connect with us in Ipur</h2>
              <p className="section-text">
                Saraswathi Vidya Nikethan welcomes families to meet our caring teachers, ask questions, and feel the school’s warm atmosphere.
              </p>
              <div className="contact-details mt-4">
                <p><strong>Location:</strong> Ipur</p>
                <p><strong>Phone:</strong> +91 72072 31018</p>
                <p><strong>Email:</strong> info@saraswathividya.in</p>
              </div>
              <div className="map-wrapper rounded-4 overflow-hidden mt-4 shadow-sm">
                <iframe
                  title="Ipur Location"
                  src="https://maps.google.com/maps?q=Ipur%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card contact-card border-0 shadow-sm p-4">
              <h3>Send us a message</h3>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send via WhatsApp
                </button>
                {submitted && <p className="mt-3 text-success">WhatsApp chat opened successfully.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
