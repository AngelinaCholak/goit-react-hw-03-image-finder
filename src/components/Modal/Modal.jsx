import React, { Component } from 'react';
import styles from '../styles.module.css';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyboardPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyboardPress);
  }

  keyboardPress = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

    clickOverlay = () => {
        this.props.closeModal();
        
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.Modal} onClick={this.clickOverlay}>
        <div>
          <img src={data} alt="The same img but large" />
        </div>
      </div>
    );
  }
}

export default Modal;
