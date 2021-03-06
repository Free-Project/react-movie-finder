import React, { useState } from 'react';
import { SearchForm } from '../component/SearchForm'
import { MoviesList } from '../component/MoviesList'
import { NotFound } from '../component/NotFound'
import { Pagination } from '../component/Pagination'

export const Home = () => {

  const [usedSearch, setUsedSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [inputMovie, setInputMovie] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  const handleResults = data => {
    setResults(data.Search);
    setUsedSearch(data.isSearching);
    setInputMovie(data.inputMovie);
    setTotalResults(data.totalResults);
  }

  const renderResults = () => {
    return results && results.length === 0 ?
      <NotFound /> :
      <div>
        <MoviesList movies={results} totalResults={totalResults} inputMovie={inputMovie} isSearching={usedSearch} />
        <hr/>
        <Pagination totalResults={totalResults}/>
      </div> 
  }

  return (
    <div className="content__area1">
      <p className="content__title">Search Movie</p>
      <div className="search-box">
        <SearchForm onResults={handleResults} />
      </div>
      <div className="content__results">
        {
          usedSearch ? renderResults() : <div className="content__message">Use the search form find your movie</div>
        }
      </div>
    </div>
  );

}