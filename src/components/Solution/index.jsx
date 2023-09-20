import {useRef, useState} from "react";
import logo from '../../images/solutions/logo.png';
import leftRound from '../../images/solutions/substract-left.png';
import rightRound from '../../images/solutions/subtract-right.png';
import fullRing from '../../images/solutions/fullRing.png';

import styles from "./index.module.css";

function Solution() {
  const animatedContainerRef = useRef(null);

  const [animatedSolutionContainer, setAnim] = useState(styles['solution-container']);
  const [animatedRing, setAnimatedRing] = useState(false);
  const startRingAnimationOnClick = () => {
    console.log('cl');
    setAnim(styles.animatedSolutionContainer);
    setAnimatedRing(true);
  };

  const renderFullRing = () => {
    if(!animatedRing) return null;

    return(<img src={fullRing} className={styles.animatedFullRing}/>)
  }

  const handleClickAnimate = () => {

  }

  const ringButton = (number, alignFlex='flex-start') => (
    <div style={{ borderBottom:`1px solid black`, paddingBottom: '15px', display: 'flex', justifyContent: `${alignFlex}` }} >
      <div className={styles.ringButton} onClick={handleClickAnimate} >
        {number}
      </div>
    </div>
  )

  const contentToFirstRing = (x, y) => {
    if(!animatedRing) return null;

    return (
      <div className={styles.contentForFirstRing} style={{ top:`${x}`, left:`${y}` }} >
        <div className={styles.contentForRingHeader}>Cyber Will</div>
        <div className={styles.contentForRingText}>
          Creating a secure online data storage product can solve this problem by providing users with the convenience
          and security of storing their valuable data online.
        </div>
        <div styles={ styles.firstRing} style={{ position: "absolute", top: '85%', width:'100%'}}>
          {ringButton(1, 'flex-end')}
        </div>
      </div>
    )
  }
  const contentToSecondRing = (x, y) => {
    if (!animatedRing) return null;

    return (
      <div className={styles.contentForSecondRing} style={{ top:`${x}`, left:`${y}` }} >
        {ringButton(2)}
        <div className={styles.contentForRingHeader}>Cyber Will</div>
        <div className={styles.contentForRingText}>
          Creating a secure online data storage product can solve this problem by providing users
          with convenience and security of storing their valuable data online.
        </div>
      </div>
    )
  }

  return (
    <>
    <div className={styles.solutionWrapper}>
      <div className={ animatedSolutionContainer } onClick={ startRingAnimationOnClick } ref={ animatedContainerRef }>
        <div className={styles.logoContainer}>
          <img src={leftRound} className={styles.leftRound}/>
          <img src={logo} className={styles.logo}/>
          <img src={rightRound} className={styles.rightRound}/>
        </div>
        <div className={styles.textContainer}>
          Thanks to encrypt smart contracts,
          the Cyber Will platform will give access to information
          to the heirs when the conditions prescribed in the hereditary cell are reached.
        </div>
        {renderFullRing()}
      </div>
      <img className={styles.fullRingMobile} src={fullRing} />
      {contentToFirstRing('310px', '140px')}
      {contentToSecondRing('100px', '1000px')}
    </div>
      <div className={styles.whitBlock}></div>
    </>
  );
}

export default Solution;

