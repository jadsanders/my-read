import React, { Component } from 'react'
import '../../../App.css'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.status}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books.map((b) =>
              <li key={b.title}>
                <Book
                  title={b.title}
                  author={b.author}
                  cover={b.cover}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
