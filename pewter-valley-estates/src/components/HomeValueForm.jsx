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
    <div className="home-value-form">
      {requestStatus.submitted ? (
        <div className="value-success">
          <h3>Thank you!</h3>
          <p>Your home value report is being prepared and will be sent to your email shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="address">Property Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={valueData.address}
              onChange={handleChange}
              placeholder="Enter your property address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={valueData.email}
              onChange={handleChange}
              placeholder="Where should we send the report?"
              required
            />
          </div>

          <button type="submit" className="submit-button">Get My Home Value</button>
        </form>
      )}
    </div>
  );
}

export default HomeValueForm;