import './App.css';
import TestimonialsCarousel from './components/TestimonialsCarousel';

function App() {
  return (
    <div className="pv-app">
      {/* 1. Hero Section */}
      <section className="pv-hero">
        <div className="pv-hero-content">
          <div className="pv-hero-image">
            {/* TODO: Replace with a high-quality image of Pewter Valley Estates */}
            <img src="/hero-placeholder.jpg" alt="Pewter Valley Estates" className="pv-hero-main-img" />
          </div>
          <div className="pv-hero-text">
            <h1>Welcome to Pewter Valley Estates</h1>
            <h2>Presented by <span className="pv-agent-name">Dr. Jan Duffy, REALTOR®</span></h2>
            <p>Your hyperlocal real estate expert for Pewter Valley Estates.</p>
            <div className="pv-agent-photo">
              {/* TODO: Replace with Dr. Jan Duffy's professional photo */}
              <img src="/agent-placeholder.jpg" alt="Dr. Jan Duffy, REALTOR" className="pv-agent-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain Point Section */}
      <section className="pv-pain-point">
        <h2>Frustrated by generic real estate sites?</h2>
        <ul>
          <li>Missing out on off-market listings?</li>
          <li>Confused by conflicting home values?</li>
          <li>Want a true local expert?</li>
        </ul>
      </section>

      {/* 3. Solution Section */}
      <section className="pv-solution">
        <h2>Your Pewter Valley Specialist</h2>
        <div className="pv-solution-content">
          <div className="pv-solution-image">
            {/* Agent image would go here */}
          </div>
          <div className="pv-solution-text">
            <h3>Meet Dr. Jan Duffy, REALTOR®</h3>
            <ul>
              <li>20+ years of experience in Pewter Valley real estate</li>
              <li>Access to exclusive off-market properties</li>
              <li>PhD in Real Estate Economics</li>
              <li>Negotiated 500+ successful transactions</li>
              <li>Lifetime resident of Pewter Valley</li>
            </ul>
            <p>"I don't just sell homes in Pewter Valley - I help clients build their futures here."</p>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Section */}
      <section className="pv-social-proof">
        <h3>What Clients Say</h3>
        <TestimonialsCarousel />
      </section>

      {/* 5. Interactive Tool Section */}
      <section className="pv-interactive-tool">
        <h3>Explore Your Home Value or Search Listings</h3>
        {/* TODO: Integrate RealScout, Homebot, CloudCMA, Percy.ai widgets */}
        <div className="pv-widget-fallback">
          <h4>Curious about your home value?</h4>
          {/* <HomeValueForm /> */}
        </div>
      </section>

      {/* 6. Objection Handling Section */}
      <section className="pv-objection-handling">
        <h3>Have Questions?</h3>
        <ul>
          <li>How's the market?</li>
          <li>What's my home worth?</li>
          <li>How do I get started?</li>
        </ul>
        {/* TODO: Add FAQs and local market stats */}
      </section>

      {/* 7. Clear CTA Section */}
      <section className="pv-cta">
        <h3>Ready to take the next step?</h3>
        {/* <ContactForm /> */}
        <button className="pv-contact-btn">Contact Dr. Jan Duffy</button>
      </section>

      {/* Sticky CTA for mobile */}
      <div className="pv-sticky-cta">
        <button className="pv-contact-btn">Contact Dr. Jan Duffy</button>
      </div>
    </div>
  );
}

export default App;
