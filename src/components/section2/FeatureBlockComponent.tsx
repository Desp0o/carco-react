import React, { useState } from 'react';
import * as section2styles from "./sectionSecond.module.css";

interface BlockCompProps {
  title?: string;
  mainCover?: string;
  hoverCover?: string;
}

const FeatureBlockComponent: React.FC<BlockCompProps> = ({ title, mainCover, hoverCover }) => {

  const [cover, setCover] = useState(mainCover)

  const mouseIn = () => {
    setCover(hoverCover)
  }

  const mouseLeave = () => {
    setCover(mainCover)
  }

  return (
    <div className={section2styles.block_component} onMouseEnter={mouseIn} onMouseLeave={mouseLeave}>
      <img src={cover} alt='feature block icon' className='' />
      <p>{title}</p>
    </div>
  );
};

export default FeatureBlockComponent;
