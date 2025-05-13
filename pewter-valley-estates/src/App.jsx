
import './App.css'
import ContactForm from './components/ContactForm'
import HomeValueForm from './components/HomeValueForm'

function App() {
  return (
    <div className="pv-container">
      {/* 1. Hero Section */}
      <section className="pv-hero">
        <div className="pv-hero-content">
          <div className="pv-hero-text">
            <h1>Welcome to Pewter Valley Estates</h1>
            <h2>Presented by <span className="pv-agent-name">Dr. Jan Duffy, REALTOR®</span></h2>
            <p>Your hyperlocal real estate expert with unmatched knowledge of Pewter Valley Estates.</p>
            <a href="#contact" className="pv-hero-cta">Get in Touch</a>
          </div>
          <div className="pv-hero-image">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800" alt="Pewter Valley Estates Luxury Home" className="pv-hero-main-img" />
          </div>
        </div>
      </section>

      {/* 2. About Agent Section */}
      <section className="pv-about">
        <div className="pv-about-content">
          <div className="pv-agent-photo">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Dr. Jan Duffy, REALTOR" className="pv-agent-img" />
          </div>
          <div className="pv-about-text">
            <h2>About Dr. Jan Duffy</h2>
            <p>With over 15 years of experience in Pewter Valley Estates real estate, I bring specialized knowledge and personalized service to every client.</p>
            <p>As both a resident and REALTOR® in this community, I understand the unique appeal of our neighborhood and can help you navigate the local market with confidence.</p>
            <div className="pv-credentials">
              <span className="pv-credential">Certified Luxury Home Specialist</span>
              <span className="pv-credential">Top 1% of REALTORS® Nationwide</span>
              <span className="pv-credential">Ph.D. in Real Estate Economics</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pain Point Section */}
      <section className="pv-pain-point">
        <h2>Finding Your Perfect Home Shouldn't Be Difficult</h2>
        <div className="pv-challenges">
          <div className="pv-challenge-card">
            <h3>Limited Inventory</h3>
            <p>Pewter Valley's exclusive homes are rarely listed publicly.</p>
          </div>
          <div className="pv-challenge-card">
            <h3>Pricing Complexity</h3>
            <p>Property values here follow unique patterns unknown to outsiders.</p>
          </div>
          <div className="pv-challenge-card">
            <h3>Competitive Market</h3>
            <p>The best properties receive multiple offers within days.</p>
          </div>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section className="pv-solution">
        <h2>My Hyperlocal Advantage</h2>
        <div className="pv-solutions-grid">
          <div className="pv-solution-card">
            <div className="pv-solution-icon">🔑</div>
            <h3>Exclusive Access</h3>
            <p>Preview homes before they hit the market through my extensive local network.</p>
          </div>
          <div className="pv-solution-card">
            <div className="pv-solution-icon">📊</div>
            <h3>Precise Valuation</h3>
            <p>Benefit from my street-by-street market analysis and pricing expertise.</p>
          </div>
          <div className="pv-solution-card">
            <div className="pv-solution-icon">🏠</div>
            <h3>Neighborhood Insight</h3>
            <p>Learn about schools, amenities, and community features from a true local.</p>
          </div>
          <div className="pv-solution-card">
            <div className="pv-solution-icon">📝</div>
            <h3>Negotiation Mastery</h3>
            <p>Secure the best possible terms with my proven negotiation strategies.</p>
          </div>
        </div>
      </section>

      {/* 5. Social Proof Section */}
      <section className="pv-social-proof">
        <h2>What My Clients Say</h2>
        <div className="pv-testimonials">
          <div className="pv-testimonial">
            <p>"Dr. Duffy's knowledge of Pewter Valley is extraordinary. She found us our dream home before it was even listed!"</p>
            <div className="pv-client">— Michael & Sarah Thompson</div>
          </div>
          <div className="pv-testimonial">
            <p>"We interviewed three agents before choosing Jan. Her hyperlocal expertise helped us sell for $45,000 above asking price."</p>
            <div className="pv-client">— Robert Chen</div>
          </div>
          <div className="pv-testimonial">
            <p>"As newcomers to the area, Jan's insights made all the difference. She knows every street, school, and shop in Pewter Valley."</p>
            <div className="pv-client">— The Williams Family</div>
          </div>
        </div>
      </section>

      {/* 6. Featured Listings Section */}
      <section className="pv-listings">
        <h2>Featured Properties</h2>
        <p className="pv-section-intro">Discover exceptional homes in Pewter Valley Estates</p>
        <div className="pv-listings-widget">
          {/* RealScout Office Listings Widget */}
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types="SFR,MF"
            price-min="500000"
            price-max="1500000"
          ></realscout-office-listings>
        </div>
      </section>

      {/* 7. Home Value Tool Section */}
      <section className="pv-value-tool">
        <h2>What's Your Home Worth?</h2>
        <p className="pv-section-intro">Get a personalized valuation based on hyperlocal market data</p>
        <HomeValueForm />
      </section>

      {/* 8. Neighborhood Guide Section */}
      <section className="pv-neighborhood">
        <h2>Pewter Valley Estates: Area Guide</h2>
        <div className="pv-neighborhood-grid">
          <div className="pv-neighborhood-card">
            <h3>Schools</h3>
            <p>Served by top-rated Pewter Valley Elementary (9/10), Hillcrest Middle (8/10), and Oakridge High School (9/10).</p>
          </div>
          <div className="pv-neighborhood-card">
            <h3>Parks & Recreation</h3>
            <p>Enjoy 5 community parks, 12 miles of hiking trails, and the exclusive Pewter Valley Country Club.</p>
          </div>
          <div className="pv-neighborhood-card">
            <h3>Shopping & Dining</h3>
            <p>Minutes from Pewter Valley Village with boutique shops and award-winning restaurants.</p>
          </div>
          <div className="pv-neighborhood-card">
            <h3>Commute</h3>
            <p>25 minutes to downtown, easy access to major highways, and near the Metro North station.</p>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section id="contact" className="pv-cta">
        <h2>Ready to Make Your Move?</h2>
        <p>Contact me for a personalized consultation about buying or selling in Pewter Valley Estates.</p>
        <div className="pv-contact-grid">
          <ContactForm />
          <div className="pv-contact-info">
            <div className="pv-contact-method">
              <h3>Email</h3>
              <p><a href="mailto:jan.duffy@example.com">jan.duffy@example.com</a></p>
            </div>
            <div className="pv-contact-method">
              <h3>Phone</h3>
              <p><a href="tel:5555551234">(555) 555-1234</a></p>
            </div>
            <div className="pv-contact-method">
              <h3>Office</h3>
              <p>123 Realty Way, Pewter Valley, CA 90210</p>
            </div>
            <div className="pv-social-links">
              <a href="#" className="pv-social-link">Facebook</a>
              <a href="#" className="pv-social-link">Instagram</a>
              <a href="#" className="pv-social-link">LinkedIn</a>
              <a href="#" className="pv-social-link">Zillow</a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="pv-footer">
        <div className="pv-footer-content">
          <div className="pv-footer-logo">
            <h3>Dr. Jan Duffy, REALTOR®</h3>
            <p>Your Pewter Valley Estates Specialist</p>
          </div>
          <div className="pv-footer-links">
            <a href="#">Home</a>
            <a href="#contact">Contact</a>
            <a href="#">Listings</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
          </div>
          <div className="pv-footer-legal">
            <p>© {new Date().getFullYear()} Dr. Jan Duffy Real Estate. All Rights Reserved.</p>
            <p>Each office independently owned and operated. Not intended as solicitation if your property is already listed by another broker.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
