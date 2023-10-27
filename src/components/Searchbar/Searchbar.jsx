import React, { Component } from 'react';
import styles from '../styles.module.css';
export default class Searchbar extends Component {
  render() {
    return (
      <header className={styles.searchbar}>
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
