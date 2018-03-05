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
        this.setState((state) => ({
          books: [...this.state.books, book]
        }))
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
        if (results.error) {
          this.setState({
            searchResults: []
          })
        } else {

          let filteredResults = results.filter((result) =>
                                  result.imageLinks !== undefined
                                  && result.authors !== undefined)

          //here goes the logic for the shelf of search results

          const updatedResults = filteredResults.map((result) => {
            result.shelf = "none"
            this.state.books.map((book) => {
              if (result.id === book.id) {
                result.shelf = book.shelf
              }
              return result
            })
            return result
          })

          //here goes the logic for the shelf of search results


          this.setState({
            searchResults: updatedResults
          })
        }
      })
    } else {
      this.setState({
        searchResults: []
      })
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
