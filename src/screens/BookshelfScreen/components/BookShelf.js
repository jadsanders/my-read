import React, { Component } from 'react'
import '../../../App.css'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books.map((b) =>
              <li key={b.id}>
                <Book
                  id={b.id}
                  title={b.title}
                  authors={b.authors}
                  cover={b.imageLinks.thumbnail}
                  shelf={b.shelf}
                  changeShelf={this.props.changeShelf}
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
