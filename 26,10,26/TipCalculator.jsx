import { useState } from 'react';
import './styles.css';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(10);

  const numericBill = Number(bill);
  const hasValidBill = Number.isFinite(numericBill) && numericBill > 0;
  const tipAmount = (numericBill * tipPercent) / 100;
  const total = numericBill + tipAmount;

  const resetCalculator = () => {
    setBill('');
    setTipPercent(10);
  };

  return (
    <section className="tip-calculator">
      <h1>Калькулятор чаевых</h1>

      <label htmlFor="bill">Сумма счёта, ₽</label>
      <input
        id="bill"
        type="number"
        min="0"
        value={bill}
        onChange={(event) => setBill(event.target.value)}
        placeholder="Введите сумму"
      />

      <p>Выберите размер чаевых:</p>
      <div className="tip-buttons">
        {[10, 15, 20].map((percent) => (
          <button
            key={percent}
            type="button"
            className={tipPercent === percent ? 'tip-button tip-button_selected' : 'tip-button'}
            disabled={tipPercent === percent}
            onClick={() => setTipPercent(percent)}
          >
            {percent}%
          </button>
        ))}
      </div>

      {hasValidBill && (
        <div className="result">
          <p>Чаевые: {tipAmount.toFixed(2)} ₽</p>
          <p>Итого к оплате: {total.toFixed(2)} ₽</p>
          {numericBill > 10000 && <p className="warning">Сумма большая — проверьте, нет ли ошибки в счёте 👀</p>}
        </div>
      )}

      <button type="button" className="reset-button" onClick={resetCalculator}>
        Сбросить
      </button>
    </section>
  );
}
