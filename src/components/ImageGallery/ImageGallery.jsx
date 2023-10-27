import React, { Component } from 'react';
import { apiKey } from '../config';
import styles from '../styles.module.css';

const perPage = 12;

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    const initialPage = 1;
    this.fetchImages('cat', initialPage);
  }

  fetchImages(query, page) {
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
        
        <ul className={styles.ImageGallery}>
          {this.state.images.map(image => (
            <li key={image.id} className={styles.ImageGalleryItemImage}>
              <img src={image.webformatURL} alt="" />
            </li>
          ))}
        </ul>
    );
  }
}
