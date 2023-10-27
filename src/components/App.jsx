import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery"
import styles from '../components/styles.module.css';
export const App = () => {
  return (
    <div className={styles.App}>
      <Searchbar />
      <ImageGallery />
    </div>
  );
};
