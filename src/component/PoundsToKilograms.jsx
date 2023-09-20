import React, { useState } from 'react'
import styles from './MetersToCentimeters.module.css'
function MetersToCentimeters() {
  const [amount, setAmount] = useState("1");
  const [disabled, setDisabled] = useState(false);
  const unit = 2.205
  function handleChange(e){
    setAmount(e.target.value)
  }
  function handleInverse() {
    setDisabled(prev => !prev); // 현재 상태 false를 prev라는 매개변수 제공 + Not!
  }
  function handleReset() {
    setAmount(1);
    setDisabled(false);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="column-a">
          <input type="text" id="meter" value={disabled ? amount / unit : amount} disabled={disabled} onChange={handleChange} />
          <label htmlFor="meter">파운드(p)</label>
        </div>
        <div className="column-b">
          <p>=</p>
        </div>
        <div className="column-c">
        <input type="text" id="centimeter" value={!disabled ? amount * unit : amount} disabled={!disabled} onChange={handleChange} />
          <label htmlFor="centimeter">킬로그램(kg)</label>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.inverse} onClick={handleInverse}>입력반전</button>
        <button className={styles.reset}onClick={handleReset}>초기화</button>
      </div>
    </div>
  )
}

export default MetersToCentimeters