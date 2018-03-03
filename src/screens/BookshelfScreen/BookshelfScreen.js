import React from 'react'
import ListBooks from './components/ListBooks'
import OpenSearch from './components/OpenSearch'

const BookshelfScreen = (props) => (
  <div>
    <ListBooks books={props.books} changeShelf={props.changeShelf}/>
    <OpenSearch clearSearch={props.clearSearch}/>
  </div>
)

export default BookshelfScreen;
