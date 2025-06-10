import React, { useEffect, useRef, useState } from 'react';

export default function RefExamples() {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0); // Armazena valor sem causar render
  const buttonRef = useRef(); // Referência para DOM
  const previousValueRef = useRef(); // Guarda valor anterior
  const inputRef = useRef(); // Referência para um input (novo exemplo)

  // 1. Não re-renderiza o componente (ref para armazenar valores)
  useEffect(() => {
    numberRef.current = Math.random(); // altera valor sem causar render
    console.log("Número no ref (sem render):", numberRef.current);
  }, []);

  // 2. Referência para elementos do DOM (ref para botão)
  useEffect(() => {
    console.log("Clicando no botão via ref:");
    buttonRef.current?.click();
  }, []);

  // 3. Referência do valor anterior (guardando o valor anterior de `number`)
  useEffect(() => {
    previousValueRef.current = number;
  }, [number]);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  
  const handleIncrement = () => {
    setNumber(prev => prev + 1);
    console.log("Botão foi clicado!");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h1>Exemplos de useRef</h1>
    
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>1. Armazenar valor sem renderizar</h2>
      <p>Valor atual: {number}</p>
      <p>Valor aleatório armazenado no ref (não causa render): {numberRef.current}</p>
      <button 
        ref={buttonRef}
        onClick={handleIncrement}
        style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Incrementar número ({number})
      </button>
    </div>
    
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>2. Referência para elementos DOM</h2>
      <p>O botão acima foi clicado automaticamente via ref quando o componente montou</p>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Digite algo..." 
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button 
        onClick={handleFocusInput}
        style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Focar no input
      </button>
    </div>
    
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>3. Guardar valor anterior</h2>
      <p>Valor atual: {number}</p>
      <p>Valor anterior: {previousValueRef.current ?? 'Nenhum ainda'}</p>
    </div>
    
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Console</h2>
      <p>Verifique o console do navegador para ver as mensagens dos useEffects</p>
    </div>
  </div>
  );
}
