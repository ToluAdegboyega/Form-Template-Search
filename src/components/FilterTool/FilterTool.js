import React from "react";
import '../../css/FilterTool.css';

function FilterTool(props) {
  return (
    <div className="form-wrapper">
      <form className="FilterTool">
        <label>Choose Category </label>
        <select
          value={props.value}
          onChange={props.chooseCategory}
          title="select"
          className="form-select"
        >
          <option value="All">All</option>
          <option value="Education">Education</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Health">Health</option>
        </select>
      </form>
      <form className="FilterTool">
        <label>Sort Name Alphabetically </label>
        <select value={props.value} onChange={props.handleSort} title="select" className="filter-select">
          <option value="A-Z">Ascending - Descending </option>
          <option value="Z-A">Descending - Ascending</option>
        </select>
      </form>
      <form className="FilterTool">
        <label>Sort Date</label>
        <select value={props.value} onChange={props.handleDateSort} title="select" className="filter-select">
          <option value="A-Z">Ascending - Descending</option>
          <option value="Z-A">Descending - Ascending</option>
        </select>
      </form>
    </div>
  );
}

export default FilterTool;