import React from "react";
import { Clock, Price, Quality, Map, Safe, Place } from "../Icons";
import styles from "./service.css";

export function Service() {
  return (
    <div className={styles.serviceContainer}>
      <h2 className={styles.serviceTitle}>Преимущества сервиса</h2>
      <div className={styles.serviceBox}>
        <div className={styles.service1}>
          <Quality />
          <div className={styles.serviceWrapper}>
            <h4 className={styles.serviceWrapperTitle}>Качество топлива</h4>
            <p className={styles.serviceWrapperText}>
              Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget
              sed et, adipiscing felis.
            </p>
          </div>
        </div>
        <div className={styles.service2}>
          <Clock />
          <div className={styles.serviceWrapper}>
            <h4 className={styles.serviceWrapperTitle}>Бережем ваше время и нервы</h4>
            <p className={styles.serviceWrapperText}>
              Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget
              sed et, adipiscing felis.
            </p>
          </div>
        </div>
        <div className={styles.service3}>
          <Price />
          <div className={styles.serviceWrapper}>
            <h4 className={styles.serviceWrapperTitle}>Цена</h4>
            <p className={styles.serviceWrapperText}>
              Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget
              sed et, adipiscing felis.
            </p>
          </div>
        </div>
        <div className={styles.service4}>
          <Map />
          <div className={styles.serviceWrapper}>
            <h4 className={styles.serviceWrapperTitle}>Ваш комфорт—наша забота</h4>
            <p className={styles.serviceWrapperText}>
              Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget
              sed et, adipiscing felis.
            </p>
          </div>
        </div>
        <div className={styles.service5}>
          <Safe />
          <div className={styles.serviceWrapper}>
            <h4 className={styles.serviceWrapperTitle}>Безопасность процесса</h4>
            <p className={styles.serviceWrapperText}>
              Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget
              sed et, adipiscing felis.
            </p>
          </div>
        </div>
        <div className={styles.service6}>
          <Place />
          <div className={styles.serviceWrapper}>
            <h4 className={styles.serviceWrapperTitle}>Несколько ТС в одном месте?</h4>
            <p className={styles.serviceWrapperText}>
              Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget
              sed et, adipiscing felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
