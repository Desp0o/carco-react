import { useEffect, useState } from "react";
import * as sliderStyle from "./slider.module.css";
import { sliderArr } from "./sliderArray";


export default function Slider() {
  const [index, setIndex] = useState<number>(0);
  const [isTrue, setisTrue] = useState<boolean>(false); //for adding text appear effect on page first load

  useEffect(() => {
    setisTrue(true);
  }, []);

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 6000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [index]);

  const nextSlide: () => void = () => {
    setIndex(index + 1);
    if (index === sliderArr.length - 1) {
      setIndex(0);
    }
  };

  const prevSlide: () => void = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(sliderArr.length - 1);
    }
  };

  return (
    <div className={sliderStyle.slider_containerr}>
      {sliderArr.map((slide) => {
        let sliderClass: string;
        sliderClass =
          index === slide.id
            ? sliderStyle.active_slider
            : sliderStyle.passive_slider;
        let sliderText: string = sliderStyle.slider_txt;
        if (isTrue) {
          sliderText =
            index === slide.id
              ? sliderStyle.slider_txt_active
              : sliderStyle.slider_txt;
        }

        return (
          <div className={sliderStyle.slider_container_inner} key={slide.id}>
            <img className={sliderClass} src={slide.image} alt="carco slide" />
            <h3
              className={sliderText}
              dangerouslySetInnerHTML={{ __html: slide.textGeo }}
            ></h3>
            <div className={sliderStyle.btn_left} onClick={prevSlide}> &gt;</div>
            <div className={sliderStyle.btn_right} onClick={nextSlide}> &gt; </div>
          </div>
        );
      })}
    </div>
  );
}
