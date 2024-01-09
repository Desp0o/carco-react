import React, { useState } from 'react'
import * as footerStyle from "./footer.module.css"

interface footerProps {
    title: string,
    info: string,
    icon: string
}

export const  FooterBlock: React.FC<footerProps> = ({icon, title, info}) => {
  return (
    <div className={footerStyle.footer_block}>
        <img src={icon} alt='footer icons' className={footerStyle.footer_icons} />

        <div className={footerStyle.footer_texts}>
            <p>{title}</p>
            <p>{info}</p>
        </div>
    </div>
  )
}
