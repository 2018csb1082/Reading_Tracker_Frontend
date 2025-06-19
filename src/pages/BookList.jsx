import React from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import './Pages.css'

function BookList() {

  return (
    <div className="BasePage">
      <NavigationBar title="My Books" link1="/stats" link2="/"/>
      <div className="WorkSpace">Books</div>
    </div>
  );
}

export default BookList;