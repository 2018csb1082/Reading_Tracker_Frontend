import { useState, useEffect } from "react";
import { IoMdAdd  } from "react-icons/io";

import BookCard from "../BookCard/BookCard";
import './BooksContainer.css';

const BookList = ({data}) => {

  return (
    <div className="BookListContainer">
      <div className="AddBookContainer">
        <button className="AddBookButton">
          <span className="AddBookIcon"><IoMdAdd  /></span>
          <span className="AddBookSpan">Add book</span>
        </button>
      </div>
      <div className="BookList">
        {data.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;