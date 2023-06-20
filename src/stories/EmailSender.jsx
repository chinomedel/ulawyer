import React from 'react';
import axios from 'axios';

const EmailSender = ({ regionUser, consultationType, caseText, files, lawyers }) => {
  const sendEmail = () => {
    const emailData = {
      regionUser,
      consultationType,
      caseText,
      files,
      lawyers,
    };
    alert(regionUser+ " " +consultationType+" "+caseText+" "+files+" Abogados:"+ lawyers)

    /* Códgo para envío por axios */
    /*
    axios.post('URL_DEL_ENDPOINT', emailData)
      .then((response) => {
        alert('Correo enviado correctamente');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
      */
  };

  return (
    <button
      onClick={sendEmail}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Enviar
    </button>
  );
};

export default EmailSender;
