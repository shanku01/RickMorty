import {useState,useEffect,useCallback} from "react";
import debounce from 'lodash.debounce';
import axios from 'axios';


function App() {
const [contacts,setContacts] =useState([])
const [data,setData] =useState([])
const [name,setName] =useState("rick")
const [info,setInfo] =useState({})
const [hasMore,setHasMore] =useState(true)
const [url,setUrl] = useState("https://rickandmortyapi.com/api/character/?name="+name+"&page=1")

const debounceOnChange = useCallback(debounce(onChange,1000),[]);
const debounceOnFetchMore = useCallback(debounce(OnFetchMore,1000),[]);



//Inializing contacts
useEffect(()=>{
  dataFetch(setContacts)
},[name]);

useEffect(()=>{
  dataFetch(setData)
  setContacts([...contacts,...data])
},[url]);

//Changing fetched data on search
function onChange(value){
  setName(value)
}

//using axios to fetch data
function dataFetch(set){
  axios.get(url)
  .then((res)=>
  {
    console.log(res.data.results)
    set(res.data.results);
    setInfo(res.data.info);
  })
  .catch((err)=>console.log(err))
}

//fetching more data on scroll
function OnFetchMore(){
  console.log(info)
  if (info.next){ 
    setUrl(info.next);
  }
  else setHasMore(false);
}

  return (
    <div className="App">
      <input
        className="filter-input"
        placeholder="Rick, Morty,Jesus.."
        onChange={e => {
          e.preventDefault();
          debounceOnChange(e.target.value)}}
      />
      <button onClick={OnFetchMore}>click me</button>
      {info.next}
      {/*Priting object*/}
      {contacts.map((item,key)=>{
        return <div key ={key}>
        <p>{item.name}</p>
        </div>
      })}
    </div>
  );
}

export default App;
