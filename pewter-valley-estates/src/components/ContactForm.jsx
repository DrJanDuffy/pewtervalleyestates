
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend or email service
    // For demo purposes, we'll just simulate a successful submission
    
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: null
        });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="pv-contact-form">
      {formStatus.submitted ? (
        <div className="pv-form-success">
          <h3>Thank you for contacting me!</h3>
          <p>I'll be in touch with you shortly.</p>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="pv-form-group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="pv-form-group">
            <input 
              type="email" 
              id="contact-email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="pv-form-group">
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone" 
            />
          </div>
          <div className="pv-form-group">
            <select 
              id="interest" 
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">I'm interested in...</option>
              <option value="buying">Buying a home</option>
              <option value="selling">Selling my home</option>
              <option value="both">Both buying and selling</option>
              <option value="valuation">Home valuation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="pv-form-group full-width">
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="pv-submit-btn">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
