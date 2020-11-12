import React, { useState, useEffect } from "react";
import Card from '../Card/Card';
import '../../css/Templates.css';
import { sortByNameAZ, sortByNameZA} from "./extra/sortByNameAndDate";
import Pagination from "../Pagination/Pagination";
import FilterTool from "../FilterTool/FilterTool";
import Loading from "../Loading/Loading";

require('es6-promise').polyfill();
require('isomorphic-fetch');

const API_URL = "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";
// "proxy": "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/",


function Templates() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(300);
  const [currCategory, setCategory] = useState("All");
  const [sortType, setSortType] = useState("A-Z");
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    async function filterData() {
      fetch(API_URL)
        .then(res => res.json())
        .then(
          result => {
            setIsLoaded(true);
            sortType === "A-Z" ? sortByNameAZ(result): sortByNameZA(result);
            setItems(
              currCategory === "All" 
                ? result
                : result.filter(o => o.category === currCategory)
            );
          },
          error => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
 
   filterData();
  }, [currCategory, sortType, query]);

  const chooseCategory = e => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleSort = e => {
    e.preventDefault();
    setSortType(e.target.value);
    console.log(e.target.value);
  };

  const handleDateSort = e => {
    e.preventDefault();
    setSortType(e.target.value);
    console.log(e.target.value);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="Templates">
      {!isLoaded && !error ? (
        <div className="Loading-screen">
          <h1 className="Loading-screen-text"> Hold on, this might take a little while :) </h1>
          <Loading />
        </div>
      ) : (
        <section className="container">
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">
              Search
            </button>
         </form>
          <FilterTool chooseCategory={chooseCategory} handleSort={handleSort} handleDateSort={handleDateSort} />
          <div className="Templates-info">
            {currentPosts.map(p => {
              return (
                <Card
                  key={p.name}
                  name={p.name}
                  category={p.category}
                  description={p.description}
                  link={p.link}
                  created={p.created}
                />
              );
            })}
          </div>
          <div className="Templates-pages">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={items.length}
              paginate={paginate}
              value={URL}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default Templates;