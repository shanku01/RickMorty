
export default function MyList(props){
    const color = props.data.status == "Alive"? "green":props.data.status == "Dead"? "red":"grey"
    return(
        <div className="my-list">
            <img className="icon" src={props.data.image} onClick={props.clickHandler}/>
            <span className="character-name">{props.data.name}</span>
            <span className="details">{props.data.status}-{props.data.species}</span>
        </div>
    )
}
