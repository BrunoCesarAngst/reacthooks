import React, { useState, useEffect, useMemo } from 'react';
// com useState criamos o estado que pertence a função.
// com useEffect podemos sobrepor os métodos do ciclo de vida
// com useMemo vamos guardar o valor de retorno de uma função e ela não
// precisará refazer o cálculo para obter o valor de retorno, já que este
// estará armazenado.

function App() {
  // para cada tipo de informação dentro do componente nos teremos um state
  // separado.
  const [techs, setTechs] = useState([]);
  // armazenando o state de tecnologias
  // useState retorna uma array na 1ª posição o state(a lista de tecnologia) a
  // 2ª posição é a atualização do state.
  // e o useState está iniciando com informações: useState(['React...

  // state que armazena o valor do input.
  const [newTech, setNewTech] = useState('');
  // 1º o state e 2º a atualização desse state.

  // a função do button
  function handleAdd() {
    setTechs([...techs, newTech]);
    // chamando o SetTechs do useState que copia todas as techs e acrescenta
    // outra tecnologia de newTech o valor que vem do input.
    setNewTech('');
    // aqui "resetamos" o input
  }

  // useEffect para ciclo de vida
  // executando uma única vez, para montar o componente em tela.
  useEffect(() => {
    // buscado s techs do local storage
    const techsInStorage = localStorage.getItem('techs');

    // se tem informações
    if (techsInStorage) {
      setTechs(JSON.parse(techsInStorage));
    }
    // aqui não em varável para monitorar vai executar uma única vez
  }, []);

  // armazenando as techs no local Storage.
  // o 1º parâmetro é a função que vai ser executada e 2º é quando ela vai ser
  // executada que é um array de dependências que monitora alterações em certas
  // variáveis
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
    // toda vez que o valor de techs for alterado.
  }, [techs]);

  // usando useMemo
  // guarda o valor na variável e só altera se for acrescentado novos valores em
  // techs
  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techsSize} tecnologia!</strong>
      <br />
      {/* toda vez que for alterado o valor do input o setNewState recebe o valor do value */}
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      {/* o onClick chama/executa a função handleAdd */}
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
