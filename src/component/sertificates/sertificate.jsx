import React from 'react';
import pdfIcon from '../../assets/pdf.svg';
import './sertificate.css'

import pdf1 from '../../assets/pdf/1049932.eod.pdf';
import pdf2 from '../../assets/pdf/1077989.eod.pdf';
import pdf3 from '../../assets/pdf/19547068 от 03.12.2024.pdf';

const pdfFiles = [
  { name: '1049932.eod.pdf', file: pdf1 },
  { name: '1077989.eod.pdf', file: pdf2 },
  { name: '19547068 от 03.12.2024.pdf', file: pdf3 },
  { name: '1049932.eod.pdf', file: pdf1 },
  { name: '1077989.eod.pdf', file: pdf2 },
  { name: '19547068 от 03.12.2024.pdf', file: pdf3 },
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