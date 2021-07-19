import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({}) => {
  return (
    <label>
      Find contacts by name
      <input
        // value={name}
        // onChange={this.handleChange}
        type="text"
        name="name"
      />
    </label>
  );
};

Filter.propTypes = {};

export default Filter;
