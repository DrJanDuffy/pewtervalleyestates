import React, { useState } from 'react';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    quote: 'Dr. Duffy made our home sale seamless and stress-free!',
    author: 'The Smith Family',
  },
  {
    quote: 'Her local knowledge is unmatched. Highly recommend!',
    author: 'J. Lee',
  },
  {
    quote: "We found our dream home thanks to Jan's expertise.",
    author: 'A. Patel',
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="pv-testimonials-carousel">
      <blockquote>
        “{testimonials[index].quote}”
        <footer>- {testimonials[index].author}</footer>
      </blockquote>
      <div className="pv-carousel-controls">
        <button onClick={prev} aria-label="Previous testimonial">‹</button>
        <button onClick={next} aria-label="Next testimonial">›</button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel; 