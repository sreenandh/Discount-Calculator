// App.jsx
import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const [amountSaved, setAmountSaved] = useState(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountAmount = (price * discount) / 100;
      const finalAmount = price - discountAmount;
      setFinalPrice(finalAmount.toFixed(2));
      setAmountSaved(discountAmount.toFixed(2));
    } else {
      setFinalPrice(null);
      setAmountSaved(null);
    }
  };

  return (
    <div className="card-container">
      <Typography className="header">Discount Calculator</Typography>

      <Form.Group controlId="calculationType">
        <Form.Label className="input-label">Calculation Type</Form.Label>
        <Form.Select aria-label="Calculation Type" disabled>
          <option>Percentage Amount</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="discountPercentage" className="mt-3">
        <Form.Label className="input-label">Discount Applied %</Form.Label>
        <FormControl
          type="number"
          placeholder="Enter discount percentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="originalPrice" className="mt-3">
        <Form.Label className="input-label">Amount</Form.Label>
        <FormControl
          type="number"
          placeholder="Enter original price"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
      </Form.Group>

      <Button className="mt-3 w-100" onClick={calculateDiscount} variant="primary">
        Calculate
      </Button>

      {finalPrice !== null && (
        <div className="result-card">
          <div className="result-header">Amount Paid</div>
          <div className="result-value">₹ {finalPrice}</div>
          <div className="sub-result">
            <div>
              <div>Amount Saved</div>
              <div>₹ {amountSaved}</div>
            </div>
            <div>
              <div>Price Difference</div>
              <div>₹ {amountSaved}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
