import carersImg from '../../images/about-us/carrers.png'
import docsImg from '../../images/about-us/docs.png'
import hqDubaiImg from '../../images/about-us/hqDubai.png'
import referral from '../../images/about-us/refferal.png'
import leftTopPolygon from '../../images/about-us/leftTopPoligon.png'
import leftBottomPolygon from '../../images/about-us/leftBottomPoligon.png'
import rightTopPolygon from '../../images/about-us/RightTopPoligon.png'
import AboutUsTextButton from '../../images/about-us/AboutUsButtonText.png';

import styles from "./index.module.css";

function AboutUs() {
  return (
    <>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.aboutUsContent}>
          <div className={styles.contentContainer}>
            <img src={hqDubaiImg} alt="company"/>
            <span className={styles.sectionName}>Company</span>
            <span className={styles.sectionText}>HQ Dubai</span>
          </div>

          <div className={styles.contentContainer}>
            <img src={referral} alt="Referral"/>
            <span className={styles.sectionName}>Referral</span>
            <span className={styles.sectionText}>Coming soon</span>
          </div>

          <div className={styles.contentContainer}>
            <img src={carersImg} alt="Careers"/>
            <span className={styles.sectionName}>Careers</span>
            <span className={styles.sectionText}>See the list of our open positions</span>
          </div>

          <div className={styles.contentContainer}>
            <img src={docsImg} alt="company"/>
            <span className={styles.sectionName}>Docs</span>
            <span className={styles.sectionText}>WhitePaper(coming soon), Litepaper(coming soon)</span>
          </div>
        </div>
        <div className={styles.aboutUsButtonContainer}>
          <img src={AboutUsTextButton} alt="button"/>
        </div>
        <img src={ leftTopPolygon }
             className={styles.left}
             height='206px'
             width='226px'
        />
        <img
          src={ leftBottomPolygon }
          className={styles.leftBottom}
          height='164px'
          width='172px'
        />
        <img
          src={ rightTopPolygon }
          className={styles.rightPolygon}
          height='180px'
          width='190px'
        />
      </div>
      <div className={styles.rectangleBlur}/>
    </>
  );
}

export default AboutUs;
