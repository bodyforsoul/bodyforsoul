import React from 'react';
import './privacypolicy.css'; 

import locationIcon from '../../assets/home.svg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';



const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Политика конфиденциальности</h1>
      <p><strong>Дата вступления в силу:</strong> 20.04.2025</p>

      <section>
        <h2>• Какие данные мы собираем</h2>
        <ul>
          <li>Имя, адрес электронной почты, номер телефона</li>
          <li>Информация о вашем устройстве (IP-адрес, браузер и т.д.)</li>
          <li>Cookies и другие технологии отслеживания</li>
          <li>Данные об использовании сайта</li>
        </ul>
      </section>

      <section>
        <h2>• Как мы используем данные</h2>
        <ul>
          <li>Для предоставления и улучшения наших услуг</li>
          <li>Для связи с вами по вашему запросу</li>
          <li>Для аналитики и улучшения пользовательского опыта</li>
          <li>Для обеспечения безопасности сайта</li>
        </ul>
      </section>

      <section>
        <h2>• Cookies</h2>
        <p>Мы используем cookies для улучшения работы сайта. Вы можете отключить их в настройках браузера.</p>
      </section>

      <section>
        <h2>• Передача данных третьим лицам</h2>
        <p>Мы не передаём ваши данные третьим лицам, за исключением:</p>
        <ul>
          <li>По закону</li>
          <li>Через надёжных партнёров (например, хостинг, аналитика)</li>
        </ul>
      </section>

      <section>
        <h2>• Защита данных</h2>
        <p>Мы применяем меры для защиты вашей информации от несанкционированного доступа и утечки.</p>
      </section>

      <section>
        <h2>• Ваши права</h2>
        <ul>
          <li>Получать доступ к своим данным</li>
          <li>Редактировать или удалять свои данные</li>
          <li>Отозвать согласие на обработку</li>
          <li>Подать жалобу в надзорный орган</li>
        </ul>
      </section>

      <section>
        <h2>• Контактная информация</h2>
        <div className="contact-item">
          <img src={locationIcon} alt="Адрес" className="icon" />
          <span>г. Москва, ул. Примерная, д. 1</span>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Телефон" className="icon" />
          <a href="tel:+79991234567">+7 (999) 123-45-67</a>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email" className="icon" />
          <a href="mailto:example@domain.com">example@domain.com</a>
        </div>
      </section>

      <section>
        <h2>• Изменения политики</h2>
        <p>Мы можем обновлять данную Политику. Актуальная версия всегда доступна на этой странице.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
