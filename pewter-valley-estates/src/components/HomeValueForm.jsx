
import { useState } from 'react';

function HomeValueForm() {
  const [valueData, setValueData] = useState({
    address: '',
    email: ''
  });
  
  const [requestStatus, setRequestStatus] = useState({
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Value request submitted:', valueData);
    
    // Simulate API call
    setTimeout(() => {
      setRequestStatus({
        submitted: true,
        error: null
      });
      
      // Reset form
      setValueData({
        address: '',
        email: ''
      });
    }, 1000);
  };

  return (
    <div className="pv-value-form">
      {requestStatus.submitted ? (
        <div className="pv-form-success">
          <h3>Thank you for your request!</h3>
          <p>I'll prepare a detailed valuation report for your property and send it to your email shortly.</p>
        </div>
      ) : (
        <form id="home-value-form" onSubmit={handleSubmit}>
          <div className="pv-form-row">
            <div className="pv-form-group">
              <label htmlFor="address">Property Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={valueData.address}
                onChange={handleChange}
                placeholder="123 Pewter Valley Dr" 
                required 
              />
            </div>
            <div className="pv-form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={valueData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                required 
              />
            </div>
          </div>
          <button type="submit" className="pv-submit-btn">Get My Home Value</button>
        </form>
      )}
    </div>
  );
}

export default HomeValueForm;
