import { useState } from 'react';

function MortgageCalculator() {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('30');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const n = parseInt(years) * 12;
    if (!principal || !monthlyRate || !n) return;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    setResult(payment ? payment.toFixed(2) : null);
  };

  return (
    <div className="pv-mortgage-calc">
      <button onClick={() => setShow((s) => !s)} className="pv-calc-toggle">
        {show ? 'Hide Calculator' : 'Try the Mortgage Calculator'}
      </button>
      {show && (
        <form onSubmit={calculate} className="pv-calc-form">
          <label>
            Loan Amount
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
          </label>
          <label>
            Interest Rate (%)
            <input type="number" step="0.01" value={rate} onChange={e => setRate(e.target.value)} required />
          </label>
          <label>
            Years
            <input type="number" value={years} onChange={e => setYears(e.target.value)} required />
          </label>
          <button type="submit">Calculate</button>
          {result && <div className="pv-calc-result">Monthly Payment: <strong>${result}</strong></div>}
        </form>
      )}
    </div>
  );
}

function MicrolearningModule() {
  return (
    <div className="pv-microlearning" aria-label="Microlearning module" role="region">
      <h3>Learn: How Much Home Can I Afford?</h3>
      <div className="pv-microlearning-video">
        {/* Replace with real video embed */}
        <video controls width="100%" poster="/microlearning-poster.jpg">
          <source src="/microlearning-sample.mp4" type="video/mp4" />
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
      <MortgageCalculator />
    </div>
  );
}

export default MicrolearningModule; 