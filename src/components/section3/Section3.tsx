import React, { useRef } from "react";
import * as sectionThreeStyle from "./section3.module.css";
import { SectionThreeSingleBlock } from "./SectionThreeSingleBlock";
import { thirdSectionArray } from "./sectionThirdArray";

export default function Section3() {
  const thirdSecTitleRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className={sectionThreeStyle.section_three}>
      <div className={sectionThreeStyle.section_three_inner}>
        <h2 ref={thirdSecTitleRef}>რატომ ჩვენ?</h2>

        <div className={sectionThreeStyle.third_blocks_div}>
          {thirdSectionArray.map((item) => {
            return (
              <SectionThreeSingleBlock title={item.title} icon={item.icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
