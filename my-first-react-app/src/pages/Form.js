import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../scss/_form.scss'
import './../scss/_service.scss'
import './../scss/_signin.scss'

function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};

  const [snils, setSnils] = useState('');
  const [inn, setInn] = useState('');
  const [passportSeries, setPassportSeries] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!snils.trim() || !inn.trim() || 
        !passportSeries.trim() || !passportNumber.trim()) {
      setError('Проверьте введённые данные');
      return;
    }

    const userData = {
      snils: snils,
      inn: inn,
      passportSeries: passportSeries,
      passportNumber: passportNumber
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));

    navigate('/request', { state: { service: service } });
  };

  const handleBack = () => {
    navigate('/service'); 
  };

  return (
    <div className="login-block">
      <title>ГосударьУслуги - Форма заявления</title>
        <h2>Форма подачи заявки на услугу: {service.title}</h2>
        {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-login">
            <input
              type="text"
              value={snils}
              placeholder=" "
              onChange={(e) => setSnils(e.target.value)}
            />
            <label>СНИЛС(XXX-XXX-XXX XX)</label>
          </div>

          <div className="input-login"> 
            <input
              type="text"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
              placeholder=" "
            />
            <label>ИНН</label>
          </div>

          <div className="input-login">
            <input
              type="text"
              value={passportSeries}
              onChange={(e) => setPassportSeries(e.target.value)}
              placeholder=" "
            />
            <label>Серия паспорта(XXXX)</label> 
          </div>
           
          <div className="input-login">
            <input
              type="text"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              placeholder=" "
            />
            <label>Номер паспорта(XXXXXX)</label>
          </div>

          <div className="service-actions">
            <button onClick={handleBack} className="btn-secondary">
              Назад
            </button>
            <button className="btn-secondary">
              Подать заявку
            </button>
          </div>
        </form>
    </div>
  );
}

export default Form;