import React from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'

const OpenSearch = () => (
  <div className="open-search">
    <Link to="/search">Search books</Link>
  </div>
);

export default OpenSearch;
