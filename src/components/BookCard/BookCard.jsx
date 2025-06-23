import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="BookCard">
      <img src={book.image} alt={book.name} className="BookImage" />
      <div className="BookDetails">
        <h3 className="BookTitle">{book.name}</h3>
        <p className="BookAuthor">by {book.author}</p>
        <p className="BookGenre">{book.genre}</p>
      </div>
    </div>
  );
}

export default BookCard;