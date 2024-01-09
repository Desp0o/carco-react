import React from 'react'
import * as sectionThreeStyle from "./section3.module.css"

interface thirdBlockProps {
    title: string,
    icon: string
}

export const SectionThreeSingleBlock: React.FC<thirdBlockProps> = ({title, icon}) => {
  return (
    <div className={sectionThreeStyle.SectionThreeSingleBlock}>
        <img src={icon} alt='section third block icon' className={sectionThreeStyle.icon_style} />
        <p>{title}</p>
    </div>
  )
}
