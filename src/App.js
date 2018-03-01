import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import SearchScreen from './screens/SearchScreen/SearchScreen'
import BookshelfScreen from './screens/BookshelfScreen/BookshelfScreen'


class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (bookId, newShelf) => {
    this.setState((state) => ({

    }))
    console.log(bookId, newShelf)
  }


  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <div>
            <BookshelfScreen books={this.state.books} changeShelf={this.changeShelf}/>
          </div>
        )}/>

        <Route path="/search" render={() => (
          <div>
            <SearchScreen />
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp;
