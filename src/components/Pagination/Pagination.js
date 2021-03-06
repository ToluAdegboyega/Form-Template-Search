import React from "react";
import '../../css/Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pag">
      <ul className="pag-ul">
        {pageNumbers.map(number => (
          <li key={number} className="pag-li">
            <a
              onClick={e => {
                e.preventDefault();
                window.scrollTo(0, 0);
                paginate(number);
              }}
              href="!#"
              className="pag-a"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;