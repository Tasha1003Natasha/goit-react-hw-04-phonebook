import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';

export const Filter = ({ filter, formSubmitFilter }) => {
  return (
    <label className={styles.label__input}>
      <p className={styles.filter__text}>Find contacts by name</p>
      <input
        type="text"
        name="name"
        value={filter}
        className={styles.filter__input}
        onChange={formSubmitFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  formSubmitFilter: PropTypes.func.isRequired,
};
