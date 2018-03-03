import React from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'

const OpenSearch = (props) => (
  <div className="open-search">
    <Link onClick={(event) => props.clearSearch()} to="/search">Search books</Link>
  </div>
);

export default OpenSearch;
