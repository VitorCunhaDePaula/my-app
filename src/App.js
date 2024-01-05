import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { CreateArea } from './components/CreateArea';
import { CEPs } from './components/Ceps';

function App() {
  const [map, setMap] = useState([]);

  function addItem(newValue){
  setMap(prevValue =>{
    return [...prevValue, newValue]
  })
  }

  function deleteItem(id){
    setMap(prevValue =>{
      return prevValue.filter((item, index) =>{
        return id !== index;
      })
    })
  }

  return (
    <div className="App">
      <CreateArea addItem={addItem}/>
      <ul>{map.map((info, index)=>{
        return <CEPs key={index} id={index} cep={info.cep} bairro={info.bairro}
        rua={info.rua} localidade={info.localidade} uf={info.uf} 
        deleteItem={deleteItem}/>
      })}</ul>
      
    
    </div>
  );
}

export default App;

{/* <li><h1>{value.cep}</h1>
      <p>{value.bairro}</p><p>{value.rua}</p>
      <p>{value.localidade} {value.uf}</p></li> */}