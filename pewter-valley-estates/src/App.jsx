import './App.css'

function App() {
  return (
    <div className="pv-container">
      {/* 1. Hero Section */}
      <section className="pv-hero">
        <h1>Welcome to Pewter Valley Estates — Test Deployment</h1>
        <h2>Presented by Dr. Jan Duffy, REALTOR®</h2>
        <p>Your hyperlocal real estate expert for Pewter Valley Estates.</p>
        {/* TODO: Add hero image and branding */}
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
        {/* TODO: Add testimonials, reviews, and recent sales */}
      </section>

      {/* 5. Interactive Tool Section */}
      <section className="pv-interactive-tool">
        <h3>Explore Your Home Value or Search Listings</h3>
        {/* TODO: Integrate Homebot, RealScout, CloudCMA, Percy.ai widgets */}
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
        <button className="pv-contact-btn">Contact Dr. Jan Duffy</button>
        {/* TODO: Add contact form or scheduling widget */}
      </section>
    </div>
  )
}

export default App
