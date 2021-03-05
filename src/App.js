import {useState,useEffect,useCallback,useRef} from "react";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroller";
import Modal from "react-modal";
import MyList from "./component/MyList";
import ModalComponent from "./component/ModalComponent";


function App() {
const [contacts,setContacts] =useState([])
const [data,setData] =useState([])
const [info,setInfo] =useState({})
const [name,setName] =useState("rick")
const [page,setPage] =useState(1)
const [myhasmore,setHasMore] =useState(true)
const [url,setUrl] = useState("https://rickandmortyapi.com/api/character/?name="+name+"&page="+page)
const [isOpen,setOpen] =useState(false)
const [modalData,setModalData]=useState({})

useEffect(()=>{
  setPage(1)
  setUrl("https://rickandmortyapi.com/api/character/?name="+name+"&page="+page)
  dataFetch(setContacts)
},[name]);

useEffect(()=>{
  dataFetch(setData)
  if (JSON.stringify(contacts)!=JSON.stringify(data)) setContacts([...contacts,...data]);
},[url]);

//Changing fetched data on search
function onChange(value){
  setName(value)
  setHasMore(true)
}

//using axios to fetch data
function dataFetch(set){
  axios.get(url)
  .then((res)=>
  {
    set(res.data.results);
    setInfo(res.data.info);
  })
  .catch((err)=>console.log(err))
}

//fetching more data on scroll
function OnFetchMore(){
    setUrl(info.next);
  if(contacts.length==info.count){
   setHasMore(false) 
  }
}

function listHandel(item){
  setOpen(!isOpen)
  setModalData(item)
}

  return (
    <>
    <input
        className="filter-input"
        placeholder="Rick, Morty,Jesus.....Search!!"
        onChange={e => {
          e.preventDefault();
          onChange(e.target.value)}}
      />
    <Modal 
    isOpen={isOpen} 
    style={{
    overlay: {
      position: 'fixed',
      top: "15%",
      left: "25%",
      width:"70%",
      height:"70%",
      backgroundColor: 'white',
      opacity:0.7,
      borderRadius:"20px",
    },
    content: {
      position: 'absolute',
      display:"block",
      border:"none",
      background: '#fff',
      overflow: 'auto',
      outline: 'none',
      padding: '10px',
      backgroundColor: 'white',
      opacity:0.8,
    }
  }}
    >
      
            
            <ModalComponent key={modalData.id} data={modalData} clickHandler={event=>{
              event.preventDefault();
              listHandel(modalData)
            }}/>
    </Modal>
        <InfiniteScroll
            pageStart={0}
            loadMore={OnFetchMore}
            hasMore={myhasmore}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
        >
                      {/*Priting object*/}
      {contacts.map((item,key)=>{
        return (<MyList key={item.img} data={item} clickHandler={event=>{
          event.preventDefault()
          listHandel(item)}}/>)}
      )}
        </InfiniteScroll>
    </>
  );
}

export default App;
