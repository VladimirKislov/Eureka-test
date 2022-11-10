import React, { useState } from "react";
import styles from "./form.css";
import InputMask from "react-input-mask";
import { Slider } from "primereact/slider";

export function Form() {
  const [value, setValue] = useState<any>(1000);
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Топливо с доставкой</h2>
      <div className={styles.formContent}>
        <form className={styles.formWrapper} action="#">
          <label className={styles.formWrapperLabel} htmlFor="#">
            Вид топлива
          </label>
          <input className={styles.formWrapperInput} type="text" />
          <label className={styles.formWrapperLabel} htmlFor="#">
            Объем топлива
          </label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.formWrapperInput}
            type="text"
          />
          <Slider className={styles.slide} min={1000} max={5000} value={value} onChange={(e) => setValue(e.value)} />
          <label className={styles.formWrapperLabel} htmlFor="#">
            Место доставки
          </label>
          <input className={styles.formWrapperInput} type="text" />
          <label className={styles.formWrapperLabel} htmlFor="#">
            Ваше имя
          </label>
          <input className={styles.formWrapperInput} type="text" />
          <label className={styles.formWrapperLabel} htmlFor="#">
            Номер телефона
          </label>
          <InputMask className={styles.formWrapperInput} mask="+7 (999) 999-99-99" />
        </form>
        <div className={styles.formInfo}>
          <h3 className={styles.formInfoTitle}>Итого</h3>
          <div className={styles.formInfoWrapper}>
            <p className={styles.formInfoWrapperTitle}>Стоимость топлива</p>
            <p className={styles.formInfoWrapperTitle}>77 350.00 ₽</p>
          </div>

          <div className={styles.formInfoWrapper}>
            <div>
              <p className={styles.formInfoWrapperTitle}>Цена за литр:</p>
              <p className={styles.formInfoWrapperText}>
                Цена и стоимость указаны ориентировочно. Точные цену и стоимость собщит наш менеджер при
                подтверждении заявки.
              </p>
            </div>
            <p className={styles.formInfoWrapperTitle}>45.50 ₽</p>
          </div>

          <div className={styles.formInfoWrapper}>
            <div>
              <p className={styles.formInfoWrapperTitle}>Выгода:</p>
              <p className={styles.formInfoWrapperText}>
                При цене на АЗС 49.59 ₽ за литр, цены актуальны на 23.11.2020 г.{" "}
              </p>
            </div>
            <p>6 953.00 ₽</p>
          </div>
          <button className={styles.formInfoBtn}>Заказать топливо</button>
        </div>
      </div>
    </div>
  );
}
