import React, { useEffect, useState } from "react";
import styles from "./certificate.css";
import Slider from "react-slick";
import { Left, Right } from "../Icons";

export function Certificate() {
  const [slide, setSlide] = useState<any>();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => {
    slide.slickNext();
  };
  const previous = () => {
    slide.slickPrev();
  };

  return (
    <div className={styles.certificateContainer}>
      <h2 className={styles.certificateContainerTitle}>Сертификаты качества топлива</h2>
      <div className={styles.slider}>
        <div className={styles.btnWrapper}>
          <button className={styles.btnPrev} onClick={() => previous()}>
            <Left />
          </button>
          <button className={styles.btnNext} onClick={() => next()}>
            <Right />
          </button>
        </div>
        <Slider ref={(ref) => setSlide(ref)} {...settings}>
          <div className={styles.imgWrapper}>
            <div className={styles.img1} />
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img2} />
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img3} />
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img4} />
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img1} />
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img2} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
