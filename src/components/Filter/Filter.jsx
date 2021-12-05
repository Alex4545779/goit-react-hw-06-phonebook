import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';

const Filter = ({ value, filterHandler }) => {
  return (
    <div>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={filterHandler}
      ></input>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterHandler: event => dispatch(changeFilter(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);