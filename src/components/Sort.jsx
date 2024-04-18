// Sort.jsx
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const sortOptions = {
  NAME_ASC: { value: 'NAME_ASC', label: 'Name (A-Z)' },
  NAME_DESC: { value: 'NAME_DESC', label: 'Name (Z-A)' },
  PRICE_ASC: { value: 'PRICE_ASC', label: 'Price (Low to High)' },
  PRICE_DESC: { value: 'PRICE_DESC', label: 'Price (High to Low)' },
  BRAND_ASC: { value: 'BRAND_ASC', label: 'Brand (A-Z)' },
};

export default function Sort({ onSortChange }) {
  const [sort, setSort] = React.useState('');

  const handleSortChange = (event) => {
    setSort(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard"
      sx={{ m: 1, 
        minWidth: 120,
        boxShadow: 'none',
        }}>
        <InputLabel id="sort-select-label">Sort By</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sort}
          onChange={handleSortChange}
          label="Sort By"
          MenuProps={{
            PaperProps: {
              elevation: 0 
            }
          }}
         
        >
          {Object.values(sortOptions).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}