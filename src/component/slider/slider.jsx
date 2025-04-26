import React, { useRef, useEffect } from 'react';
import './slider.css';

import chlorImg from '../../assets/chlor-Photoroom.png';
import rosmarinImg from '../../assets/rosmarin-Photoroom.png';
import Ozon from '../../assets/ozon.svg'
import Wb from '../../assets/wildberries.svg'



const items = [
  {
    img: chlorImg,
    topic: 'Хлорофил',
    intro: 'Хлорофилл жидкий шпинатный – это простой и удобный инструмент ежедневной поддержки красоты и здоровья организма! Это внутренний дезодорант для организма.',
    detail: 'Жидкий хлорофилл представляет собой зеленый пигмент, содержащийся в растениях, а соответственно восполняет дефицит зелени в рационе питания в течении дня. Активно используется как вспомогательное вещество от раковых новообразований, а также для очищения организма. Его рекомендуют пить в реабилитационный период, в том числе после перенесенных инфекционных заболеваний. Хлорофилл укрепляет иммунитет, снижает воспаления, что важно в период орви и простудных заболеваний. Используется для лечения и профилактики заболеваний суставов, артрите, а также при мышечных болях. ',
    ozonlink: 'https://www.ozon.ru/product/hlorofill-zhidkiy-1740811511/?_bctx=CAQQ7MOTAQ&at=Y7tjVlvYQI0LmWmmij0rJkDHX1Pj3ztNlm7REsADWWD3&hs=1',
    wblink: 'https://www.wildberries.ru/catalog/274437798/detail.aspx',
  },
  {
    img: chlorImg,
    topic: 'Хлорофил',
    intro: 'Хлорофилл жидкий шпинатный – это простой и удобный инструмент ежедневной поддержки красоты и здоровья организма! Это внутренний дезодорант для организма.',
    detail: 'Жидкий хлорофилл представляет собой зеленый пигмент, содержащийся в растениях, а соответственно восполняет дефицит зелени в рационе питания в течении дня. Активно используется как вспомогательное вещество от раковых новообразований, а также для очищения организма. Его рекомендуют пить в реабилитационный период, в том числе после перенесенных инфекционных заболеваний. Хлорофилл укрепляет иммунитет, снижает воспаления, что важно в период орви и простудных заболеваний. Используется для лечения и профилактики заболеваний суставов, артрите, а также при мышечных болях. Chlorofill BodyForSoul создает детокс эффект, а соответственно очищает кишечник и весь организм от патогенов, уменьшает тягу к сладкому, а за счет нормализации пищеварения снижается вес и аппетит. Дренажный напиток уменьшает отеки,  повышает уровень кислорода в крови, происходит антиоксидантное действие на клеточном уровне, за счет чего организм замедляется старение, происходит нормализация работы сердечно-сосудистой системы. ',
    ozonlink: 'https://www.ozon.ru/product/hlorofill-zhidkiy-1740811511/?_bctx=CAQQ7MOTAQ&at=Y7tjVlvYQI0LmWmmij0rJkDHX1Pj3ztNlm7REsADWWD3&hs=1',
    wblink: 'https://www.wildberries.ru/catalog/274437798/detail.aspx',
  },
  {
    img: rosmarinImg,
    topic: 'Розмариновая кислота',
    intro: 'Розмариновая кислота в капсулах это мощный антиоксидант природного происхождения, обладающий противоопухолевым, противовирусным, антиалергическим, противовспалительным, антиоксидантным действием.',
    detail: 'Розмариновая кислота и входящая в состав, супероксиддисмутаза защищают клетки от повреждений свободными радикалами, помогают бороться с окислительным стрессом и замедлять процессы старения клеток за счет чего Rosmarin Aсid уэффективно омолаживает кожу, повышает ее упругость , эластичность, увлажненность. Помогает справится с акне, дерматитами, выпадением волос, ломкостью ногтей, целлюлитом, псориазом, сухостью кожи, лишним весом, пигментацией Данная пищевая добавка активно используется и хорошо зарекомендовала себя в лечении и профилактике таких заболеваний как артрит, подагра, атопический дерматит, колит, нарушение репродуктивных функций (эндометриоз, спкя, сгустки, гормональный сбой, болезненые менструации) Нарушение работы ЖКТ (воспаление поджелудочной, сахарный диабет, гастрит, интоксикация печени).',
    ozonlink: 'https://www.ozon.ru/product/rozmarinovaya-kislota-1760661304/?_bctx=CAQQ7MOTAQ&at=VvtzqyEB7flWkkVLHrGW0YLsQrxXyDilK1L8lSEQ60zZ&hs=1',
    wblink: 'https://www.wildberries.ru/catalog/286291721/detail.aspx',
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const backButton = document.getElementById('back');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    let unAcceptClick;

    const showSlider = (type) => {
      if (!carouselRef.current || !listRef.current) return;
      const carousel = carouselRef.current;
      const list = listRef.current;
      const items = list.querySelectorAll('.item');

      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';
      carousel.classList.remove('next', 'prev');

      if (type === 'next') {
        list.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    nextButton.onclick = () => showSlider('next');
    prevButton.onclick = () => showSlider('prev');

    seeMoreButtons.forEach((btn) => {
      btn.onclick = () => {
        carouselRef.current.classList.add('showDetail');
      };
    });

    backButton.onclick = () => {
      carouselRef.current.classList.remove('showDetail');
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.topic} />
            <div className="introduce">
              <div className="topic">{item.topic}</div>
              <div className="des">{item.intro}</div>
              <button className="seeMore">Подробнее &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">{item.topic}</div>
              <div className="des">{item.detail}</div>
                <div className="fastLinks">
                    <a href={item.wblink} className="linkCircle wbLink" target="_blank" rel="noopener noreferrer">
                        WB
                    </a>
                    <a href={item.ozonlink} className="linkCircle ozonLink" target="_blank" rel="noopener noreferrer">
                        Ozon
                    </a>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">Каталог &#8599;</button>
      </div>
    </div>
  );
};

export default Carousel;
