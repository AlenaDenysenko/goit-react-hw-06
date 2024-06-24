import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </PersistGate>
  </Provider>
);

export default App;

