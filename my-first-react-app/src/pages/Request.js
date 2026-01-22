import { useState, useEffect } from 'react';
import './../scss/_request.scss'
import { useLocation, useNavigate } from 'react-router-dom';

function Request() {
  const location = useLocation();
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let savedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    
    if (location.state?.service) {
      const exists = savedRequests.some(req => req.title === location.state.service.title);

      if (!exists) {
        const statuses = ['в обработке', 'выполнено', 'отклонено'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        const newRequest = {
          id: Date.now(),
          number: savedRequests.length + 1,
          title: location.state.service.title,
          status: randomStatus,
        };

        const updatedRequests = [...savedRequests, newRequest];
        setRequests(updatedRequests);
        localStorage.setItem('requests', JSON.stringify(updatedRequests));
        navigate('.', { replace: true, state: null });
      } else {
        setRequests(savedRequests);
        navigate('.', { replace: true, state: null });
      }
    } else {
      setRequests(savedRequests);
    }
  }, [location.state]);

  const handleDelete = (idToDelete) => {
    const updated = requests.filter(req => req.id !== idToDelete);
    const renumbered = updated.map((req, i) => ({ ...req, number: i + 1 }));
    setRequests(renumbered);
    localStorage.setItem('requests', JSON.stringify(renumbered));
  };

   return (
     <div className= "request">
      <title>ГосударьУслуги - Заявления</title>
        <h1>Мои заявления</h1>
        <div className='content-request'>
          <ul>
            {requests.length > 0 ? (
              requests.map((req) => (
                <li key={req.id}>
                  <p>Заявление №{req.number}: {req.title}</p>
                  <div className='status-request'>
                    <p>
                      Статус: {req.status}
                    </p>
                    <button onClick={() => handleDelete(req.id)}>
                      Удалить
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className='null-text'>Нет заявлений.</p>
            )}
          </ul>
        </div>
     </div>
   )
 }

 export default Request;