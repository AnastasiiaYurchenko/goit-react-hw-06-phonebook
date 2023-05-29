import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { FieldFind, LabelFind } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));
  // console.log(handleFilterChange());
  return (
    <LabelFind>
      Find contacts by name
      <FieldFind
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      ></FieldFind>
    </LabelFind>
  );
};
