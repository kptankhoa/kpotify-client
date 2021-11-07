import React from 'react';
import { Form } from 'react-bootstrap';
import { textColor } from 'common/Colors';

const SearchForm = ({ searchValue, setSearchValue }) => {

  return (
    <Form.Control
      type="search"
      placeholder="Search"
      style={{ backgroundColor: 'transparent', borderRadius: 0, color: textColor }}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchForm;
