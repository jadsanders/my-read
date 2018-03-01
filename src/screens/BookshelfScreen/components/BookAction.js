import React, { Component } from 'react'
import '../../../App.css'

class BookAction extends Component {

  render () {
    return(
      <div className="book-shelf-changer">
        <select
          defaultValue={this.props.shelf}
          onChange={() => this.props.changeShelf(this.props.bookId)}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
};

export default BookAction;
