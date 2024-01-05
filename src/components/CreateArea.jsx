import React, {useState} from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export function CreateArea(props){

    const [cep, setCep] = useState('');
    
  
  function takeValue(e){
    const values = e.target.value;
    setCep(values);
  }
  
  async function submitEvent(e){
   e.preventDefault();
   try{
   const url = `https://viacep.com.br/ws/${cep}/json/`;
   const api = await fetch(url);
   const data = await api.json();
  const newValues = {cep:data.cep, 
    bairro:`Bairro: ${data.bairro}`,
    rua:data.logradouro,
    localidade:data.localidade, 
    uf:data.uf}
    props.addItem(newValues);
    setCep("");
}
  catch(error){
    alert("CEP INEXISTENTE!");
  }
  }

    return  <form>
    <label htmlFor="main" >Buscador de CEP</label>
    <input id="main" placeholder="Digite o CEP" maxLength={8} onChange={takeValue}
    value={cep} type='number'/>
    <button onClick={submitEvent}><SearchRoundedIcon/></button> 
    </form>
}