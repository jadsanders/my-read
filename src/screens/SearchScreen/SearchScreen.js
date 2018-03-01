import React, { Component } from 'react'
import '../../App.css'

import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

class SearchScreen extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default SearchScreen;
