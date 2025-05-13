
import './App.css'
import { useState } from 'react'
import ContactForm from './components/ContactForm'
import HomeValueForm from './components/HomeValueForm'

function App() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <div className="pv-app">
      {/* 1. Hero Section */}
      <section className="pv-hero">
        <div className="pv-hero-content">
          <h1>Discover Your Dream Home in Pewter Valley Estates</h1>
          <p>Exclusive properties in a premier community with excellent schools, amenities, and natural beauty.</p>
          <div className="pv-hero-cta">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Dr. Jan Duffy
            </button>
          </div>
        </div>
      </section>

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

      {/* 4. Social Proof Section */}
      <section className="pv-proof">
        <h2>What My Clients Say</h2>
        <div className="pv-testimonials">
          <div className="pv-testimonial">
            <p>"Dr. Duffy found us our dream home before it even hit the market. Her connections saved us from a bidding war!"</p>
            <h4>- Michael & Sarah Johnson</h4>
          </div>
          <div className="pv-testimonial">
            <p>"When selling our home, Jan's marketing strategy brought in 7 offers in just 48 hours - all above asking price."</p>
            <h4>- The Martinez Family</h4>
          </div>
          <div className="pv-testimonial">
            <p>"As first-time buyers, we felt overwhelmed until working with Jan. Her guidance made the process smooth and stress-free."</p>
            <h4>- Taylor & Jordan Williams</h4>
          </div>
        </div>
      </section>

      {/* 5. Interactive Tool Section */}
      <section className="pv-tools">
        <h2>Exclusive Buyer & Seller Tools</h2>
        <div className="pv-tabs">
          <div className="pv-tab-buttons">
            <button 
              className={activeTab === 'buy' ? 'active' : ''} 
              onClick={() => setActiveTab('buy')}
            >
              For Buyers
            </button>
            <button 
              className={activeTab === 'sell' ? 'active' : ''} 
              onClick={() => setActiveTab('sell')}
            >
              For Sellers
            </button>
          </div>
          <div className="pv-tab-content">
            {activeTab === 'buy' ? (
              <div className="pv-buy-tools">
                <h3>Find Your Dream Home</h3>
                <p>Create your personalized property alert to see new homes before they hit the market.</p>
                <div className="pv-tool-frame">
                  {/* RealScout integration would go here */}
                </div>
              </div>
            ) : (
              <div className="pv-sell-tools">
                <h3>What's Your Home Worth?</h3>
                <p>Get an accurate valuation based on recent Pewter Valley sales.</p>
                <HomeValueForm />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Objection Handling Section */}
      <section className="pv-objections">
        <h2>Common Questions</h2>
        <div className="pv-faq">
          <div className="pv-faq-item">
            <h3>Is now a good time to buy in Pewter Valley?</h3>
            <p>Despite market fluctuations, Pewter Valley consistently outperforms the regional market in value retention and appreciation. With limited new development approved, supply remains constrained while demand continues to grow.</p>
          </div>
          <div className="pv-faq-item">
            <h3>Are there any new construction options?</h3>
            <p>Yes! I have exclusive access to upcoming phases in Pewter Ridge and Valleyview Estates before they're publicly listed. These opportunities typically sell out in pre-construction.</p>
          </div>
          <div className="pv-faq-item">
            <h3>How competitive is the Pewter Valley market?</h3>
            <p>Highly desirable properties often receive multiple offers within days. My clients gain advantage through pre-market access, strategic offer positioning, and my established relationships with local sellers.</p>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section id="contact" className="pv-cta">
        <h2>Ready to Find Your Pewter Valley Dream Home?</h2>
        <p>Contact Dr. Jan Duffy for a personalized consultation.</p>
        <ContactForm />
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
  );
}

export default App;
