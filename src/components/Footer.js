import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <br/>
    <SelectField
      floatingLabelText="Filter"

    >
      <MenuItem value={1} primaryText="All" />
      <MenuItem value={2} primaryText="Active" />
      <MenuItem value={3} primaryText="Completed" />
    </SelectField>
  </div>
)

export default Footer
