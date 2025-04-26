import React from 'react';
import pdfIcon from '../../assets/pdf.svg';
import './sertificate.css'

import pdf1 from '../../assets/pdf/1049932.eod.pdf';
import pdf2 from '../../assets/pdf/1077989.eod.pdf';
import pdf3 from '../../assets/pdf/19547068 от 03.12.2024.pdf';
import pdf4 from '../../assets/pdf/ООО»БОДИФОРСОУЛ».pdf';
import pdf5 from '../../assets/pdf/Выписка_по_ДС_№_ЕАЭС_N_RU_Д_RU_РА01_В_10157_25_от_2025_04_03.pdf';

const pdfFiles = [
  { name: 'Свидетельство товарный знак (Имя)', file: pdf1 },
  { name: 'Свидетельство товарный знак (Logo)', file: pdf2 },
  { name: 'Декларация о соответствии розмарин', file: pdf3 },
  { name: 'Декларация о соответствии хлорофил', file: pdf5 },
  { name: 'Согласие на использование товарного знака', file: pdf4 },
];

const Sertificate = () => {
  return (
    <div className="sertificate-container">
      <h2 className="sertificate-heading">О нас</h2>
      <div className="sertificate-grid">
        {pdfFiles.map((pdf, index) => (
          <a
            key={index}
            href={pdf.file}
            target="_blank"
            rel="noopener noreferrer"
            className="sertificate-link"
          >
            <img src={pdfIcon} alt="PDF icon" className="sertificate-icon" />
            <span>{pdf.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sertificate;