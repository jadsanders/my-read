import React, { Component } from 'react'
import '../../../App.css'
import Book from '../../BookshelfScreen/components/Book'

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.searchResults.map((result) =>
            <li key={result.id}>
              <Book
                id={result.id}
                title={result.title}
                authors={result.authors}
                cover={result.imageLinks.thumbnail}
                changeShelf={this.props.changeShelf}
                shelf="none"
              />
            </li>
          )}
        </ol>
      </div>
    )
  }
}

export default SearchResults;
