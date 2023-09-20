import React from 'react'
import styles from './Figure.module.sass'

const Figure = ({ width, height, coords, cn }) => {
  const stylesRoot = {
    width,
    height,
    ...coords,
  }

  return (
    <div className={ `${styles.root} ${cn}` } style={ stylesRoot }> 
      <div className={styles.figure}></div>
      <div className={styles.light}></div>
    </div>
  )
}

export default Figure
