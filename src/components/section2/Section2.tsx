import React, { useContext, useEffect, useState } from "react";
import * as section2styles from "./sectionSecond.module.css";
import checkMarkIcon from "../../utils/images/mark.png"

import { featuresArray } from "./featureListsArray";
import { ProviderPass } from "../Provider";
import FeatureBlockComponent from "./featureBlockComponent";

export default function Section2() {
  const contextValue = useContext(ProviderPass);
  if (!contextValue) {
    return null;
  }

  const { language } = contextValue;

  useEffect(() => {
    if (language === "geo") {
      setMapSlug("geo");
    }
    if (language === "eng") {
      setMapSlug("eng");
    } else if (language === "rus") {
      setMapSlug("rus");
    }
  }, [language]);

  const [mapSlug, setMapSlug] = useState<string>("geo");

  return (
    <div className={section2styles.section2main}>

      <div className={section2styles.section_inner_left}>
        <h2>ქარკო ავტოიმპორტი</h2>

        <div className={section2styles.blocks_div}>
            <FeatureBlockComponent title='' />
            <FeatureBlockComponent />
            <FeatureBlockComponent />
            <FeatureBlockComponent />
        </div>
      </div>

      <div className={section2styles.section_inner_right}>
        <h2>რაში გეხმარებით?</h2>

        <div className={section2styles.features_list}>
          {featuresArray[0][mapSlug].map((item) => {
            return (
                <div className={section2styles.singleItemFeature}>
                    <img src={checkMarkIcon} alt="check mark" className={section2styles.check_Mark_Icon} />
                    <p>{item}</p>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
