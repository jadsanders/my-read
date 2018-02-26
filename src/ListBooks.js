import React, { Component } from 'react'
import './App.css'
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
            <BookShelf books={this.props.books.filter((b) => b.status === "currentlyReading")} status="Currently Reading"/>
            <BookShelf books={this.props.books.filter((b) => b.status === "wantToRead")} status="Want to Read"/>
            <BookShelf books={this.props.books.filter((b) => b.status === "read")} status="Read"/>
          </div>
        </div>

      </div>
    )
  }
}


export default ListBooks;
