import { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=900&q=80',
  'https://media.istockphoto.com/id/1667455686/photo/smiling-elementary-student-on-a-class-at-school.jpg?s=612x612&w=0&k=20&c=AWSbzBKv70FHZ9zdrAdP3AwQpRw1gSqiDp8HvIV5xO4=',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1659070953831-dd4fa16222fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGVkdWNhdGlvbnxlbnwwfDF8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1683535508433-a2ebcce718d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGVkdWNhdGlvbnxlbnwwfDF8MHx8fDA%3D',
  
]

function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section-block section-alt reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Gallery</div>
          <h2 className="section-title">Snapshots of joyful learning moments</h2>
        </div>
        <div className="gallery-grid mt-4">
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <div
                role="button"
                tabIndex={0}
                className="gallery-card"
                onClick={() => setSelected(src)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setSelected(src)
                  }
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  onError={(event) => {
                    event.currentTarget.src = 'https://via.placeholder.com/900x600?text=Gallery+image'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div className="lightbox-overlay" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close gallery preview">
              ×
            </button>
            <img src={selected} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
