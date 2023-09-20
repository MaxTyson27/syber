import cyberLogo from '../../images/main/cyberLogo.png';
import ring from '../../images/main/ring.png';
import slogan from '../../images/main/slogan.png';
import bigPolygon from '../../images/main/bigPolygon.png';
import smallPolygon from '../../images/main/middlePolygon.png';

import GetButton from './ButtonItem';

import styles from './index.module.css';

const Main = () => {
  console.log('Main');

  return(
    <div className={styles.mainWrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={cyberLogo} alt="cyberlogo"/>
        </div>
        <div className={styles.menuButtons}>
          <button>Log In</button>
          <button>Sign In</button>
        </div>
      </div>

      <GetButton />
      <div className={styles.ring}>
        <img src={ring} alt="ring"/>
      </div>
      <div className={styles.slogan}>
        <img src={slogan} alt="slogan"/>
      </div>
      <img src={bigPolygon} alt="polygon" className={styles.bigPolygon}/>
      <img src={smallPolygon} alt="polygon" className={styles.smallPolygon}/>
    </div>
  )
};

export default Main;
