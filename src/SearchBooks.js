import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Back</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            <li>I'm the first result</li>
            <li>I'm the second result</li>
            <li>I'm the third result</li>
          </ol>
        </div>
        
      </div>
    )
  }
}

export default SearchBooks;
