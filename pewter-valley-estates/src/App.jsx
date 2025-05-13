import './App.css'

function App() {
  return (
    <div className="pv-container">
      {/* 1. Hero Section */}
      <section className="pv-hero">
        <div className="pv-hero-content">
          <div className="pv-hero-image">
            <img src="/hero-placeholder.jpg" alt="Pewter Valley Estates" className="pv-hero-main-img" />
          </div>
          <div className="pv-hero-text">
            <h1>Welcome to Pewter Valley Estates</h1>
            <h2>Presented by <span className="pv-agent-name">Dr. Jan Duffy, REALTOR®</span></h2>
            <p>Your hyperlocal real estate expert for Pewter Valley Estates.</p>
            <div className="pv-agent-photo">
              <img src="/agent-placeholder.jpg" alt="Dr. Jan Duffy, REALTOR" className="pv-agent-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 1b. Why Pewter Valley Estates Section */}
      <section className="pv-why-pve">
        <h3>Why Pewter Valley Estates?</h3>
        <ul>
          <li>Beautiful parks and walking trails</li>
          <li>Top-rated local schools</li>
          <li>Vibrant community events</li>
          <li>Convenient access to shopping and dining</li>
        </ul>
      </section>

      {/* 2. Pain Point Section */}
      <section className="pv-pain-point">
        <h3>Struggling to find the perfect home or sell for top dollar?</h3>
        <p>Discover how local expertise makes all the difference in Pewter Valley Estates.</p>
      </section>

      {/* 3. Solution Section */}
      <section className="pv-solution">
        <h3>Why Work With Dr. Jan Duffy?</h3>
        <ul>
          <li>Deep local knowledge</li>
          <li>Personalized service</li>
          <li>Proven results in Pewter Valley Estates</li>
        </ul>
      </section>

      {/* 4. Social Proof Section */}
      <section className="pv-social-proof">
        <h3>What Clients Say</h3>
        <div className="pv-testimonials">
          <blockquote>
            "Jan made selling our home a breeze! Her local knowledge is unmatched."
            <footer>- The Smith Family</footer>
          </blockquote>
          <blockquote>
            "We found our dream home thanks to Jan's dedication and expertise."
            <footer>- Alex & Jamie</footer>
          </blockquote>
        </div>
      </section>

      {/* 5. Interactive Tool Section */}
      <section className="pv-interactive-tool">
        <h3>Explore Your Home Value or Search Listings</h3>
        <realscout-office-listings
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          sort-order="NEWEST"
          listing-status="For Sale"
          property-types="SFR,MF"
          price-min="500000"
          price-max="700000"
        ></realscout-office-listings>
      </section>

      {/* 6. Objection Handling Section */}
      <section className="pv-objection-handling">
        <h3>Have Questions?</h3>
        <ul>
          <li>How's the market?</li>
          <li>What's my home worth?</li>
          <li>How do I get started?</li>
        </ul>
      </section>

      {/* 7. Clear CTA Section */}
      <section className="pv-cta">
        <h3>Ready to take the next step?</h3>
        <button className="pv-contact-btn">Contact Dr. Jan Duffy</button>
      </section>

      {/* Sticky CTA for mobile */}
      <div className="pv-sticky-cta">
        <button className="pv-contact-btn">Contact Dr. Jan Duffy</button>
      </div>
    </div>
  )
}

export default App
