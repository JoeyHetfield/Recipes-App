import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/meal-icon.svg';
import drinkIcon from '../images/drink-icon.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer" data-testid="footer">
      <Link to="/drinks">
        <img
          className="food-icon"
          src={ drinkIcon }
          alt="Drinks icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/meals">
        <img
          className="food-icon"
          src={ mealIcon }
          alt="Meals icon"
          data-testid="meals-bottom-btn"
        />
      </Link>
    </div>
  );
}

export default Footer;
