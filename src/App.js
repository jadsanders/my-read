import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import SearchScreen from './screens/SearchScreen/SearchScreen'
import BookshelfScreen from './screens/BookshelfScreen/BookshelfScreen'


class BooksApp extends Component {

  state = {
    books: [],
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  changeShelf = (bookId, oldShelf, newShelf) => {
    if (oldShelf === "none") {
      BooksAPI.get(bookId).then((book) => {
        book.shelf = newShelf
        this.setState({
          books: [...this.state.books, book]
        })
        BooksAPI.update(book, newShelf)
      })
    } else {
      this.state.books.map((book) => {
        if (book.id === bookId) {
          book.shelf = newShelf
          BooksAPI.update(book, newShelf)
        }
        return this.state.books;
      })
      this.setState((state) => ({
        books: state.books.filter((b) => b.shelf !== "none")
      }))
    }
  }

  searchBooks = (query) => {
    if (query) {

      BooksAPI.search(query).then((results) => {

        const alreadyInSelf = this.state.books.map((book) => book.id)

        const filteredUndefined = results.filter((result) =>
              result.imageLinks !== undefined
              && result.authors !== undefined
              && result.id !== alreadyInSelf)


              console.log(alreadyInSelf)





              //here needs to go the filter for already in shelf books


        this.setState({
          searchResults: filteredUndefined
        })
      })

    } else {
      this.setState({
        searchResults: []
      })
      console.log("no user input")
    }
  }

  clearSearch = () => {
    this.setState({
      searchResults: []
    })
  }


  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <div>
            <BookshelfScreen
              books={this.state.books}
              changeShelf={this.changeShelf}
              clearSearch={this.clearSearch}
            />
          </div>
        )}/>

        <Route path="/search" render={() => (
          <div>
            <SearchScreen
              searchBooks={this.searchBooks}
              searchResults={this.state.searchResults}
              changeShelf={this.changeShelf}
            />
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp;
