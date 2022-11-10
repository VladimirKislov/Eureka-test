import React from 'react';
import styles from './table.css';

export function Table() {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableContainerTitle}>Стоимость топлива</h2>

      <div className={styles.table}>
        <div className={styles.tableTitle}>
          <div className={styles.tableTitleItem}>Сорт топлива</div>
          <div className={styles.tableTitleItem}>Экологический класс</div>
          <div className={styles.tableTitleItem}>Производитель</div>
          <div className={styles.tableTitleItem}>Наличный расчет</div>
          <div className={styles.tableTitleItem}>Безналичный расчет</div>
        </div>

        <div className={styles.tableOilDt}>
          <div className={styles.tableOilDtTitle}>ДТ</div>
          <div className={styles.tableOilDtTitleName}>
            <div className={styles.tableOilDtTitleNameE5}>ЕВРО-5</div>
            <div className={styles.tableOilDtTitleNameE4}>ЕВРО-4</div>
          </div>
          <div className={styles.tableOilDtTitleDesc}>
            <div className={styles.tableOilDtTitleDescInfo}>
              <div className={styles.tableOilDtTitleDescInfoText}>Газпромнефть</div>
              <div className={styles.tableOilDtTitleDescInfoText}>45.43 р.</div>
              <div className={styles.tableOilDtTitleDescInfoText}>44.43 р.</div>
            </div>
            <div className={styles.tableOilDtTitleDescInfo}>
              <div className={styles.tableOilDtTitleDescInfoText}>Лукойл</div>
              <div className={styles.tableOilDtTitleDescInfoText}>45.16 р.</div>
              <div className={styles.tableOilDtTitleDescInfoText}>43.98 р.</div>
            </div>
            <div className={styles.tableOilDtTitleDescInfo}>
              <div className={styles.tableOilDtTitleDescInfoText}>Роснефть</div>
              <div className={styles.tableOilDtTitleDescInfoText}>42.34 р.</div>
              <div className={styles.tableOilDtTitleDescInfoText}>41.64 р.</div>
            </div>
            <div className={styles.tableOilDtTitleDescInfo}>
              <div className={styles.tableOilDtTitleDescInfoText}>Газпромнефть</div>
              <div className={styles.tableOilDtTitleDescInfoText}>-</div>
              <div className={styles.tableOilDtTitleDescInfoText}>-</div>
            </div>
            <div className={styles.tableOilDtTitleDescInfo}>
              <div className={styles.tableOilDtTitleDescInfoText}>Лукойл</div>
              <div className={styles.tableOilDtTitleDescInfoText}>41.16 р.</div>
              <div className={styles.tableOilDtTitleDescInfoText}>40.67 р.</div>
            </div>
          </div>
        </div>

        <div className={styles.tableOilAi}>
          <div className={styles.tableOilAiTitle}>АИ-95</div>
          <div className={styles.tableOilAiStandard}>
            <div className={styles.tableOilAiStandardE5}>ЕВРО-5</div>
            <div className={styles.tableOilAiStandardE4}>ЕВРО-4</div>
            <div className={styles.tableOilAiStandardE3}>ЕВРО-3</div>
          </div>
          <div className={styles.tableOilAiDesc}>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Газпромнефть</div>
              <div className={styles.tableOilAiDescInfoText}>45.43 р.</div>
              <div className={styles.tableOilAiDescInfoText}>44.43 р.</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Роснефть</div>
              <div className={styles.tableOilAiDescInfoText}>42.34 р.</div>
              <div className={styles.tableOilAiDescInfoText}>41.64 р.</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Лукойл</div>
              <div className={styles.tableOilAiDescInfoText}>45.16 р.</div>
              <div className={styles.tableOilAiDescInfoText}>43.98 р.</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Лукойл</div>
              <div className={styles.tableOilAiDescInfoText}>41.16 р.</div>
              <div className={styles.tableOilAiDescInfoText}>40.67 р.</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Газпромнефть</div>
              <div className={styles.tableOilAiDescInfoText}>-</div>
              <div className={styles.tableOilAiDescInfoText}>-</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Роснефть</div>
              <div className={styles.tableOilAiDescInfoText}>42.34 р.</div>
              <div className={styles.tableOilAiDescInfoText}>41.64 р.</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Газпромнефть</div>
              <div className={styles.tableOilAiDescInfoText}>-</div>
              <div className={styles.tableOilAiDescInfoText}>-</div>
            </div>
            <div className={styles.tableOilAiDescInfo}>
              <div className={styles.tableOilAiDescInfoText}>Лукойл</div>
              <div className={styles.tableOilAiDescInfoText}>45.16 р.</div>
              <div className={styles.tableOilAiDescInfoText}>43.98 р.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
