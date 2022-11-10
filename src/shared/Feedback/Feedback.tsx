import React, { useState } from "react";
import styles from "./feedback.css";
import Slider from "react-slick";
import { Left, Right } from "../Icons";

export function Feedback() {
  const [slide, setSlide] = useState<any>();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    spaceBetween: 30,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };

  const next = () => {
    slide.slickNext();
  };
  const previous = () => {
    slide.slickPrev();
  };

  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.feedbackContainerTitle}>Отзывы</h2>
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
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapperInfo}>
              <h4 className={styles.cardWrapperTitle}>Гусев Вячеслав</h4>
              <p className={styles.cardWrapperParagraph}>Индивидуальный предприниматель</p>
              <p className={styles.cardWrapperText}>
                Velit, lectus sit urna tincidunt augue. Cursus vulputate pellentesque faucibus euismod. Diam
                pharetra, non, ut integer dui feugiat porttitor at. Non, dignissim enim viverra fringilla sit.
                Etiam justo a dignissim sociis vitae, nisi, justo, feugiat.
              </p>
            </div>
            <a className={styles.cardWrapperLink} href="#">
              Подробнее
            </a>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapperInfo}>
              <h4 className={styles.cardWrapperTitle}>Зеленов Евгений</h4>
              <p className={styles.cardWrapperParagraph}>Гененеральный директор трансопртной компании</p>
              <p className={styles.cardWrapperText}>
                Mi auctor sit habitasse sed mi cras ullamcorper massa sed. In augue fames sodales pretium, at
                scelerisque. Pulvinar a mattis pharetra mi, aliquet sem tristique lorem eleifend. Nisl,
                scelerisque ut libero, pellentesque. Tincidunt vestibulum volutpat lacus imperdiet morbi
                vulputate tristique facilisi.
              </p>
            </div>
            <a className={styles.cardWrapperLink} href="#">
              Подробнее
            </a>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapperInfo}>
              <h4 className={styles.cardWrapperTitle}>Гусев Вячеслав</h4>
              <p className={styles.cardWrapperParagraph}>Индивидуальный предприниматель</p>
              <p className={styles.cardWrapperText}>
                Velit, lectus sit urna tincidunt augue. Cursus vulputate pellentesque faucibus euismod. Diam
                pharetra, non, ut integer dui feugiat porttitor at. Non, dignissim enim viverra fringilla sit.
                Etiam justo a dignissim sociis vitae, nisi, justo, feugiat.
              </p>
            </div>
            <a className={styles.cardWrapperLink} href="#">
              Подробнее
            </a>
          </div>
        </Slider>
      </div>
      <div className={styles.feedbackBtn}>
        <button className={styles.btn}>Читать все отзывы</button>
      </div>
    </div>
  );
}
