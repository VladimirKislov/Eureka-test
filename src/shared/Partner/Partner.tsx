import React from 'react';
import styles from './partner.css';
import Slider from "react-slick";

export function Partner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    customPaging: function (i: any) {
      return <div style={{ opacity: 0 }}>{i}</div>;
    },
    dotsClass: "slick-dots sli-dots",
  };
  
  return (
    <div className={styles.partnerContainer}>
      <h2 className={styles.partnerContainerTitle}>Наши партнеры</h2>
      <div className={styles.slider}>
        <Slider {...settings}>
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
            <div className={styles.img3} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
