import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Searchbar.module.css';


export const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const userInput = e => {
      setQuery(e.currentTarget.value);
    };

    const userSubmit = e => {
        e.preventDefault();
        if (!query.trim()) {
            alert('enter valid search request');
            return;
        }
        onSubmit(query);
        setQuery(query);
    };


        return (
          <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={userSubmit}>
              <button type="submit" className={styles.SearchFormButton}>
                <span className={styles.ButtonLabel}>Search</span>
              </button>
              <input
                name="query"
                value={query}
                onChange={userInput}
                className={styles.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};