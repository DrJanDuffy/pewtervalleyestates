import { useState } from 'react';

const testimonials = [
  {
    quote: "Jan made buying our first home in Pewter Valley a breeze. Her local knowledge is unmatched!",
    name: "Sarah & Mike T.",
    photo: "/testimonial1.jpg"
  },
  {
    quote: "We sold above asking thanks to Jan's strategy and network. Highly recommend!",
    name: "Carlos R.",
    photo: "/testimonial2.jpg"
  },
  {
    quote: "Jan guided us through every step. We felt confident and cared for.",
    name: "Priya S.",
    photo: "/testimonial3.jpg"
  }
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <div className="pv-testimonials" aria-label="Client testimonials" role="region">
      <blockquote>
        <p>“{t.quote}”</p>
        <footer>
          <img src={t.photo} alt={t.name} className="pv-testimonial-photo" style={{width:32,height:32,borderRadius:'50%',marginRight:8,verticalAlign:'middle'}} />
          <span>{t.name}</span>
        </footer>
      </blockquote>
      <div className="pv-carousel-controls" aria-label="Testimonial navigation">
        <button onClick={prev} aria-label="Previous testimonial">‹</button>
        <span>{index + 1} / {testimonials.length}</span>
        <button onClick={next} aria-label="Next testimonial">›</button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel; 