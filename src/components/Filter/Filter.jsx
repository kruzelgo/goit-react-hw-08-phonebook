import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/filterSlice';
import css from './Filter.module.css';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        className={css.filterInput}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
