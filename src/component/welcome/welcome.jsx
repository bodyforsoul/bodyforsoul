
import React, { useEffect, useRef } from 'react';
import styles from './welcome.module.css';
import Logo from '../../assets/logo.svg';
import Ozon from '../../assets/ozon.svg';
import Wb from '../../assets/wildberries.svg';

export default function Welcome() {
  const sphereRef1 = useRef(null);
  const sphereRef2 = useRef(null);
  const sphereRef3 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const moveSphere = (ref, offset) => {
        if (ref.current) {
          const x = (clientX - window.innerWidth / 2) / offset;
          const y = (clientY - window.innerHeight / 2) / offset;
          ref.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      };

      moveSphere(sphereRef1, 30);
      moveSphere(sphereRef2, 50);
      moveSphere(sphereRef3, 70);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.welcomeContent}>
      <div className={styles.greenSpheres}>
        <span ref={sphereRef1} className={styles.sphere} style={{ top: '5%', left: '5%' }} />
        <span ref={sphereRef2} className={styles.sphere} style={{ bottom: '10%', right: '5%' }} />
        <span ref={sphereRef3} className={styles.sphere} style={{ top: '20%', right: '10%' }} />
      </div>

      <div className={styles.logoWrapper}>
        <img src={Logo} alt="BodyForSoul logo" className={styles.logo} />
      </div>
      <h1 className={styles.title}>BodyForSoul</h1>
      <p className={styles.description}>Комплексные пищевые добавки для Вашего здоровья.</p>
      <div className={styles.fastLinks}>
        <a href="https://www.wildberries.ru/seller/1158449" className={`${styles.linkCircle} ${styles.wbLink}`}>
          <img src={Wb} alt="Wildberries" className={styles.linkIcon} />
        </a>
        <a href="https://www.ozon.ru/seller/bodyforsoul-2417132/?miniapp=seller_2417132" className={`${styles.linkCircle} ${styles.ozonLink}`}>
          <img src={Ozon} alt="Ozon" className={styles.linkIcon} />
        </a>
      </div>
    </div>
  );
}
