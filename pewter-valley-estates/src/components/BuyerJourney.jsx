import { useState, useEffect } from 'react';

const STAGES = [
  'Discovery',
  'Pre-Approval',
  'Home Search',
  'Offer & Negotiation',
  'Closing'
];
const STORAGE_KEY = 'pv-buyer-journey';
const EXPIRY_DAYS = 30;

function getInitialStage() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data && data.stage >= 0 && Date.now() < data.expiry) {
      return data.stage;
    }
  } catch {
    // Ignore JSON parse errors or missing data
  }
  return 0;
}

function BuyerJourney() {
  const [stage, setStage] = useState(getInitialStage());

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ stage, expiry: Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000 })
    );
  }, [stage]);

  return (
    <div className="pv-buyer-journey" aria-label="Buyer journey progress" role="region">
      <h3>Your Home Buying Journey</h3>
      <ol className="pv-journey-bar">
        {STAGES.map((label, i) => (
          <li key={label} className={i <= stage ? 'active' : ''}>
            <span>{label}</span>
            {i < STAGES.length - 1 && <span className="pv-journey-arrow">→</span>}
          </li>
        ))}
      </ol>
      <div className="pv-journey-controls">
        <button onClick={() => setStage(Math.max(0, stage - 1))} disabled={stage === 0}>Back</button>
        <button onClick={() => setStage(Math.min(STAGES.length - 1, stage + 1))} disabled={stage === STAGES.length - 1}>Next</button>
      </div>
      <p className="pv-journey-reentry">You can resume your journey anytime—progress is saved for 30 days.</p>
    </div>
  );
}

export default BuyerJourney; 