import React, { Component } from 'react'
import '../../../App.css'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  render() {
    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <BookShelf
              books={this.props.books.filter((b) => b.shelf === "currentlyReading")}
              shelf="Currently Reading"
              changeShelf={this.props.changeShelf}
            />
            <BookShelf
              books={this.props.books.filter((b) => b.shelf === "wantToRead")}
              shelf="Want to Read"
              changeShelf={this.props.changeShelf}
            />
            <BookShelf
              books={this.props.books.filter((b) => b.shelf === "read")}
              shelf="Read"
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>

      </div>
    )
  }
}


export default ListBooks;
