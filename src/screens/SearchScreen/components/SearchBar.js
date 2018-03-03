import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../App.css'

class SearchBar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.props.searchBooks(query)
  }

  render() {
    return (
      <div className="search-books-bar">

        <Link to="/" className="close-search">Back</Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
