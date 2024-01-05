import React from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export function CEPs(props){

function deleteItem(){
props.deleteItem(props.id)
}
return <li><h1>{props.cep}</h1>
<p>{props.bairro}</p><p>{props.rua}</p>
<p>{props.localidade}-{props.uf}</p>
<button onClick={deleteItem}><DeleteRoundedIcon/></button></li>
}