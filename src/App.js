import React, { useState } from 'react';
import './App.css'; // Importando o arquivo de estilos CSS

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const calculoIMC = peso / (alturaMetros * alturaMetros);
      const classificacaoIMC = getClassificacaoIMC(calculoIMC);
      setIMC(calculoIMC.toFixed(2));
      setClassificacao(classificacaoIMC);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const getClassificacaoIMC = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade Grau 2';
    } else {
      return 'Obesidade Grau 3';
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (cm): </label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button className="btn-calcular" onClick={calcularIMC}>Calcular IMC</button>
      {imc && classificacao && (
        <div className="resultado">
          <h2>Resultado</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default App;
