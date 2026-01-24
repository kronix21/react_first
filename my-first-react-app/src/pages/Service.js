import React, { useState, useMemo } from 'react';
import './../scss/_service.scss'
import Modal from './../components/modal';
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './../components/card';
import { useAuth } from '../context/AuthContext';

function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([
    'health', 'transport', 'education', 'pension', 'taxes', 'registration'
  ]);

  const categories = useMemo(() => [
    {
      id: 'health',
      title: 'Здоровье',
      services: [
        {
          id: 'health-1',
          title: 'Запись к врачу',
          description: 'Запись на прием к специалисту в поликлинику',
          fullDescription: 'Электронная запись на прием к врачу в государственные медицинские учреждения. Вы можете выбрать специалиста, удобное время и получить талон.',
          steps: [
            'Авторизация через Госуслуги',
            'Выбор поликлиники и специалиста',
            'Выбор даты и времени приема',
            'Получение электронного талона'
          ],
        },
        {
          id: 'health-2',
          title: 'Полис ОМС',
          description: 'Получение и замена полиса обязательного медицинского страхования',
          fullDescription: 'Оформление полиса ОМС через портал Госуслуги. Можно получить полис в электронном виде или заказать бумажный вариант.',
          steps: [
            'Подача заявления онлайн',
            'Выбор страховой компании',
            'Получение полиса в выбранном формате'
          ],
        }
      ]
    },
    {
      id: 'transport',
      title: 'Транспорт',
      services: [
        {
          id: 'transport-1',
          title: 'Замена водительских прав',
          description: 'Получение новых прав по истечении срока действия',
          fullDescription: 'Замена водительского удостоверения при истечении срока действия, утере или изменении персональных данных.',
          steps: [
            'Заполнение заявления онлайн',
            'Оплата госпошлины со скидкой 30%',
            'Запись в ГИБДД на удобное время',
            'Получение прав в отделении'
          ],
        },
        {
          id: 'transport-2',
          title: 'Регистрация автомобиля',
          description: 'Постановка автомобиля на учет в ГИБДД',
          fullDescription: 'Электронная регистрация транспортного средства при покупке или изменении данных.',
          steps: [
            'Подача электронного заявления',
            'Оплата госпошлины',
            'Запись на осмотр в ГИБДД',
            'Получение СТС и номеров'
          ],
        }
      ]
    },
    {
      id: 'education',
      title: 'Образование',
      services: [
        {
          id: 'education-1',
          title: 'Запись в детский сад',
          description: 'Электронная очередь в дошкольные учреждения',
          fullDescription: 'Постановка ребенка в очередь в детский сад через портал Госуслуги. Можно отслеживать продвижение очереди онлайн.',
          steps: [
            'Заполнение заявления',
            'Загрузка документов',
            'Получение номера в очереди',
            'Подтверждение места при поступлении'
          ],
        },
        {
          id: 'education-2',
          title: 'Запись в школу',
          description: 'Запись ребенка в первый класс',
          fullDescription: 'Электронная запись в общеобразовательные школы. Услуга доступна для детей, достигших школьного возраста.',
          steps: [
            'Выбор школы из доступных',
            'Подача заявления в электронной форме',
            'Ожидание решения о зачислении'
          ],
        }
      ]
    },
    {
      id: 'pension',
      title: 'Пенсия',
      services: [
        {
          id: 'pension-1',
          title: 'Назначение пенсии',
          description: 'Оформление страховой пенсии по старости',
          fullDescription: 'Подача заявления на назначение страховой пенсии по старости. Можно выбрать способ доставки пенсии.',
          steps: [
            'Заполнение электронного заявления',
            'Проверка данных в ПФР',
            'Получение уведомления о назначении',
            'Выбор способа получения пенсии'
          ],
        },
        {
          id: 'pension-2',
          title: 'Сертификат на маткапитал',
          description: 'Получение сертификата на материнский капитал',
          fullDescription: 'Оформление сертификата на материнский семейный капитал при рождении второго и последующих детей.',
          steps: [
            'Подача заявления',
            'Автоматическая проверка данных',
            'Получение электронного сертификата'
          ],
        }
      ]
    },
    {
      id: 'taxes',
      title: 'Налоги',
      services: [
        {
          id: 'taxes-1',
          title: 'Налоговая декларация 3-НДФЛ',
          description: 'Подача декларации о доходах',
          fullDescription: 'Заполнение и отправка налоговой декларации по форме 3-НДФЛ для получения налоговых вычетов.',
          steps: [
            'Заполнение декларации онлайн',
            'Проверка автоматическим сервисом',
            'Отправка в налоговую',
            'Отслеживание статуса проверки'
          ],
        },
        {
          id: 'taxes-2',
          title: 'Уплата налогов',
          description: 'Оплата имущественных налогов',
          fullDescription: 'Просмотр и оплата налогов на имущество, землю и транспорт. Получение уведомлений о начисленных налогах.',
          steps: [
            'Просмотр начисленных налогов',
            'Выбор налогов для оплаты',
            'Оплата онлайн банковской картой',
            'Получение квитанции'
          ],
        },
        {
          id: 'taxes-3',
          title: 'Уплата налогов',
          description: 'Оплата имущественных налогов',
          fullDescription: 'Просмотр и оплата налогов на имущество, землю и транспорт. Получение уведомлений о начисленных налогах.',
          steps: [
            'Просмотр начисленных налогов',
            'Выбор налогов для оплаты',
            'Оплата онлайн банковской картой',
            'Получение квитанции'
          ],
        }
      ]
    },
    {
      id: 'registration',
      title: 'Регистрация',
      services: [
        {
          id: 'registration-1',
          title: 'Регистрация по месту жительства',
          description: 'Прописка по месту постоянного проживания',
          fullDescription: 'Регистрация граждан по месту жительства. Услуга доступна для собственников жилья и членов их семей.',
          steps: [
            'Заполнение заявления онлайн',
            'Проверка документов',
            'Получение свидетельства о регистрации'
          ],
        },
        {
          id: 'registration-2',
          title: 'Получение загранпаспорта',
          description: 'Оформление загранпаспорта нового образца',
          fullDescription: 'Оформление заграничного паспорта нового поколения (биометрического) сроком на 10 лет.',
          steps: [
            'Заполнение анкеты онлайн',
            'Загрузка фотографии',
            'Оплата госпошлины',
            'Запись в МВД для сдачи биометрии',
            'Получение готового паспорта'
          ],
        }
      ]
    }
  ], []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleSelectAll = () => {
    setSearch('');
    if (selectedCategories.length === 0) {
      setSelectedCategories(categories.map(category => category.id));
    }
  };

  const filteredCategories = useMemo(() => {
    if (!search.trim() && selectedCategories.length === 0) {
      return categories;
    }

    if (!search.trim()) {
      return categories.filter(category => 
        selectedCategories.includes(category.id)
      );
    }
    
    const searchFiltered = categories
      .map(category => {
        if (!search) return categories;

        const lowerSearch = search.toLowerCase();
        const filteredServices = category.services.filter(service => {
          return service.title.toLowerCase().includes(lowerSearch) ||
                 service.description.toLowerCase().includes(lowerSearch);
        });
        
        if (filteredServices.length > 0) {
          return {
            ...category,
            services: filteredServices
          };
        }
        return null;
      })
      .filter(category => category !== null);

    return searchFiltered.filter(category => 
      selectedCategories.includes(category.id)
    );
  }, [search, selectedCategories, categories]);



  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  return (
    <div className="service">
      <title>ГосударьУслуги - Услуги</title>
      <main className="service-main">
        <div className='search-filter'>
          <h2>Фильтр</h2>
          <input type="text" placeholder="Поиск по названию" value={search} onChange={(e) => setSearch(e.target.value)} /> 
          <div className='checkboxes'>
            {categories.map((category) => (
            <div key={category.id} className="checkbox-item">
              <Checkbox
                className="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              >
                {category.title}
              </Checkbox>
              <span className="services-count">
                ({category.services.length})
              </span>
            </div>
          ))}
            
          </div> 
          
        </div>
        <div className="services-section">
          <h2 className="section-title">Государственные услуги</h2>
          {filteredCategories.length === 0 ? (
            <div className='error-notfound'>
              <p>Ничего не найдено по запросу "{search}"</p>
              <button onClick={handleSelectAll}>
                Показать все
              </button>
            </div>
          ) : (
          <div className="services-grid">
            {filteredCategories.map((category) => (
              <div key={category.id} className="category-group">
                <h3 className="category-group-title">
                  {category.title}
                  <span>
                      ({category.services.length})
                    </span>
                </h3>
                <div className="category-services">
                  {category.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      onClick={() => handleServiceClick(service)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedService && (
          <div className="service-modal-content">
            <div className="service-modal-header">
              <h2>{selectedService.title}</h2>
            </div>
            <div className="service-modal-body">
              <p className="service-description">{selectedService.fullDescription}</p>
              <div className="service-steps">
                <h3>Порядок получения услуги:</h3>
                <ol className="steps-list">
                  {selectedService.steps.map((step, index) => (
                    <li key={index} className="step-item">
                      <span className="step-number">{index + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="service-actions">
                <button onClick={closeModal} className="btn-secondary">
                  Вернуться к списку
                </button>
                {isAuthenticated ? (
                <button onClick={() => {
                        if (selectedService) {
                          navigate('/form', { state: { service: selectedService } });
                        }
                          closeModal();
                        }} className="btn-secondary">
                  Подать заявку на услугу
                </button>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Service;