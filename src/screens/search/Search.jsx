import React, { useState } from 'react';
import './search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform your search logic here
    // For demonstration purposes, let's assume the search results are in an array
    const searchResultsArray = [
      'Result 1',
      'Result 2',
      'Result 3',
      'Result 3',
      'Result 3',
    ];

    if (query.length >= 3) {
      const filteredResults = searchResultsArray.filter((result) =>
        result.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{minHeight: '32vh'}}>
      <div className="row justify-content-center mt-5 w-100">
        <div className="col-md-10 col-12">
          <div className="input-group">
            <input
              type="search"
              className="form-control py-2 rounded-right search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary rounded-left search-button"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          {searchQuery.length >= 3 && (
            <div className="mt-2 search-results">
              {searchResults.length > 0 ? (
                <ul className="list-group">
                  {searchResults.map((result, index) => (
                    <li key={index} className="list-group-item">
                      {result}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="alert alert-info mt-3 no-results">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
