import React, { Component } from 'react';
import { apiKey } from '../config';
import styles from '../styles.module.css';

const perPage = 12;

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: 'cat',
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImages();
    }
  }

  fetchImages() {
    const { query, page } = this.state;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then(data => {
        const newImages = data.hits.map(
          ({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          })
        );
        this.setState({
          images: newImages,
        });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  render() {
    return (
      <div>
        <ul className={styles.ImageGallery}>
          {this.state.images.map(image => (
            <li key={image.id} className={styles.ImageGalleryItemImage}>
              <img src={image.webformatURL} alt="" />
            </li>
          ))}
        </ul>
        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}
