import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';

export const ContactList = ({ contactList, handleDelete }) => {
  return (
    <ul className={styles.contact__list}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={styles.contact__item} key={id}>
            {name} : {number}
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className={styles.contact__btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
