import React from "react";
import styles from "./shortorder.css";
import InputMask from "react-input-mask";

export function ShortOrder() {
  return (
    <div className={styles.ShortOrderContainer}>
      <h1 className={styles.ShortOrderTitle}>Доставка топлива</h1>
      <form className={styles.ShortOrderForm} action="#">
        <h2 className={styles.ShortOrderFormTitle}>
          Быстрый <span className={styles.ShortOrderFormTitleSpan}>заказ топлива</span>
        </h2>

        <div className={styles.ShortOrderFormWrapper}>
          <div className={styles.ShortOrderFormWrapperInput}>
            <label className={styles.ShortOrderFormWrapperLabel} htmlFor="">
              Ваше имя
            </label>
            <input className={styles.ShortOrderFormWrapperText} type="text" name="name" />
          </div>
          <div className={styles.ShortOrderFormWrapperInput}>
            <label className={styles.ShortOrderFormWrapperLabel} htmlFor="">
              Номер телефона
            </label>
            <InputMask className={styles.ShortOrderFormWrapperText} mask="+7 (999) 999-99-99" />
          </div>
          <button className={styles.ShortOrderFormBtn}>Заказать топливо</button>
        </div>

        <label className={styles.ShortOrderFormCheckbox} htmlFor="#">
          <input className={styles.ShortOrderFormCheckboxInput} type="checkbox" name="checkbox" />Я согласен с
          условиями обработки данных
        </label>
      </form>
    </div>
  );
}
