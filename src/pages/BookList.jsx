import React from 'react';
import { Link } from 'react-router-dom';

import BooksContainer from '../components/BooksContainer/BooksContainer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import './Pages.css'

function BookList() {

  return (
    <div className="BasePage">
      <NavigationBar title="My Books" link1="/stats" link2="/"/>
      <BooksContainer />
    </div>
  );
}

export default BookList;