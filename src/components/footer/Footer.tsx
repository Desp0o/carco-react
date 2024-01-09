import React from 'react'
import * as footerStyle from "./footer.module.css"

import { footerArray } from './footerArray'
import { FooterBlock } from './FooterBlock'

export default function Footer() {
  return (
    <div className={footerStyle.footer}>
      {
        footerArray.map(item => {
          return(
            <FooterBlock title='' icon={item.icon} info={item.info}/>
          )
        })
      }
    </div>
  )
}
