import React from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  return (
    <div className="p-4">
      <h1>Books</h1>
        <Link to="/stats">
          View Stats
        </Link>
    </div>
  );
}

export default BookList;