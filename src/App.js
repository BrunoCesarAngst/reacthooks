import React, { useState } from 'react';
// com useState criamos o estado que pertence a função.
// com useEffect podemos sobrepor os métodos do ciclo de vida

function App() {
  // para cada tipo de informação dentro do componente nos teremos um state
  // separado.
  const [techs, setTechs] = useState(['ReactJS', 'React-Native']);
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

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
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
