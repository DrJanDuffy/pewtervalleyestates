import './App.css'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import BuyerJourney from './components/BuyerJourney'
import MicrolearningModule from './components/MicrolearningModule'
import NeighborhoodGeofence from './components/NeighborhoodGeofence'
import ContactForm from './components/ContactForm'
import HomeValueForm from './components/HomeValueForm'
import KcmBlogFeed from './components/KcmBlogFeed'

function App() {
  // Analytics & A/B test stubs
  // TODO: Replace with real analytics/event hooks
  // window.analytics.track('page_view', { cd1: 'buyer', cd2: 'homepage' });
  // window.abTest.assign('hero-cta-variant');

  return (
    <div className="pv-app">
      {/* 1. Hero Section */}
      <section className="pv-hero">
        <div className="pv-hero-content">
          {/* Hero Image Placeholder */}
          <div className="pv-hero-image">
            {/* TODO: Replace with a high-quality image of Pewter Valley Estates */}
            <img src="/hero-placeholder.jpg" alt="Pewter Valley Estates" className="pv-hero-main-img" />
          </div>
          <div className="pv-hero-text">
            <h1>Welcome to Pewter Valley Estates</h1>
            <h2>Presented by <span className="pv-agent-name">Dr. Jan Duffy, REALTOR®</span></h2>
            <p>Your hyperlocal real estate expert for Pewter Valley Estates.</p>
            {/* Dr. Jan Duffy's Photo Placeholder */}
            <div className="pv-agent-photo">
              {/* TODO: Replace with Dr. Jan Duffy's professional photo */}
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

      {/* Neighborhood Geofencing Callout */}
      <NeighborhoodGeofence />

      {/* 2. Pain Point Section */}
      <section className="pv-pain-point">
        <h2>Finding Your Perfect Home Shouldn't Be Stressful</h2>
        <div className="pv-pain-grid">
          <div className="pv-pain-card">
            <h3>Limited Inventory</h3>
            <p>Most buyers struggle to find available homes in Pewter Valley's competitive market.</p>
          </div>
          <div className="pv-pain-card">
            <h3>Bidding Wars</h3>
            <p>Without insider knowledge, you might overpay or miss out on your dream home.</p>
          </div>
          <div className="pv-pain-card">
            <h3>Hidden Issues</h3>
            <p>Unexpected property problems can cost thousands after purchase.</p>
          </div>
        </div>
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

      {/* Buyer Journey Progress Bar */}
      <BuyerJourney />

      {/* Microlearning Module */}
      <MicrolearningModule />

      {/* 4. Social Proof Section */}
      <section className="pv-social-proof">
        <h3>What Clients Say</h3>
        <TestimonialsCarousel />
      </section>

      {/* KCM Blog Feed Section */}
      <KcmBlogFeed />

      {/* 5. Interactive Tool Section */}
      <section className="pv-interactive-tool">
        <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF" price-min="500000" price-max="700000"></realscout-office-listings>
        {/* TODO: Integrate Homebot valuation widget in Shadow DOM container here */}
        {/* TODO: Integrate CloudCMA React wrapper with lazy loading here */}
        {/* TODO: Integrate Percy.ai HVS-Autocomplete here */}
        <div className="pv-widget-fallback">
          <h4>Curious about your home value?</h4>
          <HomeValueForm />
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
        <ContactForm />
      </section>

      {/* Sticky CTA for mobile */}
      <div className="pv-sticky-cta">
        <button className="pv-contact-btn">Contact Dr. Jan Duffy</button>
      </div>
    </div>
  );
}

export default App;
