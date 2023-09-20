import Dots from '../../../images/main/dots.png';
import styles from './index.module.css';

const GetButton = () => {
  return(
    <div className={styles.buttonContainer }>
      <div className={styles.getButton}>
        <div className={styles.relativeContainer}>
          <div className={styles.text}>Get It</div>
          <div className={styles.dotsContainer}>
            <img src={Dots} className={ styles.dots1 } />
            <img src={Dots} className={ styles.dots2 } />
            <img src={Dots} className={ styles.dots3 } />
            <img src={Dots} className={ styles.dots4 } />
            <img src={Dots} className={ styles.dots5 } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetButton;
