import React, { Component } from 'react'
import '../../../App.css'

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <li>I'm the first result</li>
          <li>I'm the second result</li>
          <li>I'm the third result</li>
        </ol>
      </div>
    )
  }
}

export default SearchResults;
