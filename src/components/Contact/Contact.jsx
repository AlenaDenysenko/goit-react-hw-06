import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <p>{name}: {number}</p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
