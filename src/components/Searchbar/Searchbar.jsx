import React, { Component } from 'react';
import styles from '../styles.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.query !== prevState.query &&
      this.state.query.trim() !== ''
    ) {
      this.props.onSubmit(this.state.query);
    }
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      query: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() !== '') {
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
