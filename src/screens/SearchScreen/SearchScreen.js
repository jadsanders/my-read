import React, { Component } from 'react'
import '../../App.css'

import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

class SearchScreen extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar
          searchBooks={this.props.searchBooks}
        />
        <SearchResults
          searchResults={this.props.searchResults}
          changeShelf={this.props.changeShelf}
        />
      </div>
    )
  }
}

export default SearchScreen;
