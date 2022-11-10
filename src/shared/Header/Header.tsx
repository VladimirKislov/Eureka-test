import React, { useEffect, useRef, useState } from "react";
import { Phone, User } from "../Icons";
import { Menu } from "../Icons/Menu";
import styles from "./header.css";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !refBtn.current?.contains(event.target) &&
        !ref.current?.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("click", handelClick);
    return () => {
      document.removeEventListener("click", handelClick);
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <a className={styles.headerLogo} href="#">
          <div className={styles.headerImg}></div>
        </a>
        <div className={styles.headerWrapper}>
          <div className={styles.menuContainer}>
            <div ref={refBtn} className={styles.menuBox} onClick={() => onClick()}>
              <Menu />
            </div>
            {isDropdownOpen && (
              <div className={styles.menuWrapper} ref={ref}>
                <ul className={styles.headerNavList}>
                  <li className={styles.headerNavItem}>Доставка топлива</li>
                  <li className={styles.headerNavItem}>Топливные карты</li>
                  <li className={styles.headerNavItem}>АЗС</li>
                  <li className={styles.headerNavItem}>Цены на топливо</li>
                  <li className={styles.headerNavItem}>О компании</li>
                  <li className={styles.headerNavItem}>Контакты</li>
                  <li className={`${styles.headerNavItem}, ${styles.active}`}>Напишите нам</li>
                  <li className={`${styles.headerNavItem}, ${styles.active}`}>Личный кабинет</li>
                </ul>
              </div>
            )}
          </div>

          <button className={styles.headerPhone}>
            <span className={styles.headerIcon}>
              <Phone />
            </span>
            8 (495) 127-82-80
          </button>
          <div className={styles.buttonContainer}>
            <button className={styles.headerWriteUs}>Напишите нам</button>
            <button className={styles.headerUser}>
              <span className={styles.headerIcon}>
                <User />
              </span>
              Личный кабинет
            </button>
          </div>
        </div>
      </div>

      <div className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavItem}>Доставка топлива</li>
          <li className={styles.headerNavItem}>Топливные карты</li>
          <li className={styles.headerNavItem}>АЗС</li>
          <li className={styles.headerNavItem}>Цены на топливо</li>
          <li className={styles.headerNavItem}>О компании</li>
          <li className={styles.headerNavItem}>Контакты</li>
        </ul>
      </div>
    </div>
  );
}
