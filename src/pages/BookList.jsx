import React from 'react';
import { Link } from 'react-router-dom';

import './Pages.css'

function BookList() {
  return (
    <div className="BasePage">
      <h1>Books</h1>
        <Link to="/stats">
          View Stats
        </Link>
    </div>
  );
}

export default BookList;