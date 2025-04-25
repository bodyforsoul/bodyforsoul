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
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi...',
  },
  {
    img: chlorImg,
    topic: 'Хлорофил',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque...',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi...',
  },
  {
    img: rosmarinImg,
    topic: 'Розмариновая кислота',
    intro: 'Розмариновая кислота в капсулах это мощный антиоксидант природного происхождения...',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi...',
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
              {/* <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div> */}
                    <div className="fastLinks">
                      <a href="https://www.wildberries.ru/seller/1158449" className="linkCircle wbLink">
                        {/* <img src={Wb} alt="Wildberries" className="linkIcon" /> */}
                        WB
                      </a>
                      <a href="https://www.ozon.ru/seller/bodyforsoul-2417132/?miniapp=seller_2417132" className="linkCircle ozonLink">
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
