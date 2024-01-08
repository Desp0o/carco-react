import React from 'react';
import * as section2styles from "./sectionSecond.module.css";

interface BlockCompProps {
  title?: string;
}

const FeatureBlockComponent: React.FC<BlockCompProps> = ({ title }) => {
  return (
    <div className={section2styles.block_component}>
      <p>{title}</p>
    </div>
  );
};

export default FeatureBlockComponent;
