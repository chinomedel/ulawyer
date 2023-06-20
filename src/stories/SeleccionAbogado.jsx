import React, { useState } from 'react';
import EmailSender from './EmailSender';
import { Header } from './Header';

export default function SeleccionAbogado() {
  const usuario = { name: "Nelson" }
  const [regionUser, setRegionUser] = useState("");
  const [consultationType, setConsultationType] = useState('');
  const [caseText, setCaseText] = useState('');
  const [files, setFiles] = useState([]);
  const [lawyers, setLawyers] = useState([
    { id: 1, name: 'Abogado 1', rating: 4.5, selected: false },
    { id: 2, name: 'Abogado 2', rating: 3.8, selected: false },
    { id: 3, name: 'Abogado 3', rating: 4.2, selected: false },
    { id: 4, name: 'Abogado 4', rating: 4.9, selected: false },
  ]);

  function handleRegionUser(event){
    setRegionUser(event.target.value)
  }

  function handleConsultationTypeChange(event) {
    setConsultationType(event.target.value);
  }

  function handleCaseTextChange(event) {
    setCaseText(event.target.value);
  }

  function handleFileChange(event) {
    const newFiles = [...files];
    for (let i = 0; i < event.target.files.length; i++) {
      newFiles.push(event.target.files[i]);
    }
    setFiles(newFiles);
  }

  function handleSelectLawyer(id) {
    const updatedLawyers = lawyers.map((lawyer) =>
      lawyer.id === id ? { ...lawyer, selected: !lawyer.selected } : lawyer
    );
    setLawyers(updatedLawyers);
  }

  return (
    <>
      <Header user={usuario} />
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Selección de Abogados
        </h2>
      </div>

      <div className="container mx-auto pl-60 px-60 grid grid-cols-2 gap-4">
        <div className="p-4">
          <form>
          <label className="block text-sm font-medium leading-6 text-gray-900">Region</label>
            <select
              value={regionUser}
              onChange={handleRegionUser}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            >
              <option value="">Seleccionar</option>
              <option value="Metropolitana">Metropolitana</option>
              <option value="Valparaiso">Valparaiso</option>
              <option value="Rancagua">Rancagua</option>
            </select>

            <label className="block text-sm font-medium leading-6 text-gray-900">Tipo de Consulta</label>
            <select
              value={consultationType}
              onChange={handleConsultationTypeChange}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            >
              <option value="">Seleccionar</option>
              <option value="Familiar">Familiar</option>
              <option value="Penal">Penal</option>
              <option value="Civil">Civil</option>
            </select>

            <label className="block text-sm font-medium leading-6 text-gray-900">Ingresar Caso</label>
            <textarea
              value={caseText}
              onChange={handleCaseTextChange}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />

            <label className="block text-sm font-medium leading-6 text-gray-900">Archivos</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            />

            <h2>Listado de Abogados Seleccionados</h2>
            {lawyers
              .filter((lawyer) => lawyer.selected)
              .map((lawyer) => (
                <div key={lawyer.id}>
                  <span>{lawyer.name}</span>
                  <span>{lawyer.rating}</span>
                </div>
              ))}

            <EmailSender
              regionUser={regionUser}
              consultationType={consultationType}
              caseText={caseText}
              files={files}
              lawyers={JSON.stringify(
                lawyers
                  .filter((lawyer) => lawyer.selected)
                  .map((lawyer) => ({ id: lawyer.id, name: lawyer.name }))
              )}
            />
          </form>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Abogados</h2>
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={lawyer.selected}
                onChange={() => handleSelectLawyer(lawyer.id)}
                className="mr-2"
              />
              <span>{lawyer.name}</span>
              <span className="ml-2">{lawyer.rating}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
