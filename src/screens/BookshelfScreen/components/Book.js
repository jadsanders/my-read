import React from 'react'
import '../../../App.css'
import BookAction from './BookAction'

function Book (props) {
  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+props.cover+")" }}></div>
        <BookAction
          bookId={props.id}
          shelf={props.shelf}
          changeShelf={props.changeShelf}
        />
      </div>

      <div className="book-title">
        {props.title}
      </div>

      {props.authors.map((author) =>
        <div
          key={author}
          className="book-authors">
          {author}
        </div>
      )}
    </div>
  )
}

export default Book;
