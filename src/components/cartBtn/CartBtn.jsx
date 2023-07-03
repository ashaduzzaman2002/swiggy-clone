import React, { useState } from 'react'
import './cartBtn.css'

const CartBtn = () => {
    const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3700);
    }
  };

  return (
    <button className={`button ${isLoading ? 'loading' : ''}`} onClick={handleClick}>
      <span>Add to cart</span>
      <div className="cart">
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
          <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
      </div>
    </button>
  )
}

export default CartBtn