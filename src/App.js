import {useState,useEffect,useCallback} from "react";
import debounce from 'lodash.debounce';
import axios from 'axios';

function App() {
const [contacts,setContacts] =useState([])
const debounceOnChange = useCallback(debounce(onChange,1000),[]);

//Inializing contacts
useEffect(()=>{
  dataFetch("rick")
},[]);

//Changing fetched data on search
function onChange(value){
  dataFetch(value);
}

//using axios to fetch data
function dataFetch(value){
  const url = "https://rickandmortyapi.com/api/character/?name="+value
  console.log(url)
  axios.get(url)
  .then((res)=>setContacts(res.data.results))
  .catch((err)=>console.log(err))
};


  return (
    <div className="App">
      <input
        className="filter-input"
        placeholder="Rick, Morty,Jesus.."
        onChange={e => {
          e.preventDefault();
          debounceOnChange(e.target.value)}}
      />
    </div>
  );
}

export default App;
