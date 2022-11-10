import React from 'react';
import { Call, Click, Go, Oil } from '../Icons';
import styles from './work.css';

export function Work() {
  return (
    <div className={styles.workContainer}>
      <h2 className={styles.workTitle}>Как мы работаем</h2>
      <div className={styles.workCard}>
        <div className={styles.card1}>
          <div className={styles.cardWrapperImg}>
            <Click />
            <div className={styles.cardWrapperImgTime}>
              1-3 мин.
              <a href="#">
                <Go />
              </a>
            </div>
          </div>
          <h3 className={styles.cardWrapperTitle}>Оформление заявки</h3>
          <p className={styles.cardWrapperText}>
            Заполните заявку на сайте, укажите удобное для вас место приезда заправщика, сорт и количество
            топлива, которое хотите купить
          </p>
        </div>

        <div className={styles.card2}>
          <div className={styles.cardWrapperImg}>
            <Call />
            <div className={styles.cardWrapperImgTime}>
              1-3 мин.
              <a href="#">
                <Go />
              </a>
            </div>
          </div>
          <h3 className={styles.cardWrapperTitle}>Подтверждение заявки менеджером</h3>
          <p className={styles.cardWrapperText}>
            Дождитесь звонка нашего менеджера для уточнения условий заказа
          </p>
        </div>

        <div className={styles.card3}>
          <div className={styles.cardWrapperImg}>
            <Oil />
            <div className={styles.cardWrapperImgTime}>30-90 мин.</div>
          </div>
          <h3 className={styles.cardWrapperTitle}>Заправка вашего автомобиля</h3>
          <p className={styles.cardWrapperTextCard}>
            В назначенное время приедет заправщик и заправит автомобиль топливом.
          </p>
          <p className={styles.cardWrapperTextPs}>
            Если у заказчика есть действующий договор на топливные карты, то при оплате можно провести
            транзакцию через терминал. Переносное устройство есть у каждого заправщика
          </p>
        </div>
      </div>
    </div>
  );
}
