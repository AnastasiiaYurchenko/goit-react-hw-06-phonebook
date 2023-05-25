// import { useDispatch, useSelector } from 'react-redux';
import { FieldFind, LabelFind } from './Filter.styled';
// import { setFilter } from 'redux/actions';

export const Filter = ({ value, onChange }) => {
  // const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);
  // console.log(filter);
  console.log(value);

  // const handleFilterChange = value => dispatch(setFilter(value));
  // console.log(handleFilterChange(value));
  return (
    <LabelFind>
      Find contacts by name
      <FieldFind type="text" value={value} onChange={onChange}></FieldFind>
    </LabelFind>
  );
};
