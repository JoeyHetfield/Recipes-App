import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/BtnBack.css';

function BtnBack() {
  const history = useHistory();
  const pageId = history.location.pathname.replace(/[^0-9]/g, '');

  const backPage = () => {
    if (history.location.pathname.includes('/recipes-app/meals')) {
      if (history.location.pathname === `/recipes-app/meals/${pageId}/in-progress`) {
        history.push(`/recipes-app/meals/${pageId}`);
      } else {
        history.push('/recipes-app/meals');
      }
    }
    if (history.location.pathname.includes('/recipes-app/drinks')) {
      if (history.location.pathname === `/recipes-app/drinks/${pageId}/in-progress`) {
        history.push(`/recipes-app/drinks/${pageId}`);
      } else {
        history.push('/recipes-app/drinks');
      }
    }
  };
  return (
    <button
      type="button"
      className="back-btn"
      onClick={ backPage }
    >
      <img src="https://cdn-icons-png.flaticon.com/512/892/892662.png" alt="back.icon" />
    </button>
  );
}

BtnBack.propTypes = {}.isRequired;

export default BtnBack;
