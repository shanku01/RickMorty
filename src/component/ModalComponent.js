
export default function ModalComponent(props){
    const color = props.data.status == "Alive"? "green":props.data.status == "Dead"? "red":"grey"
    return(
        <div className="modal"><button onClick={props.clickHandler}>Close</button>
            <img src={props.data.image}/>
            <span className="character-name">{props.data.name}</span>
            <svg >
            <circle cx="50" cy="50" r="4"  fill={color} />
            Sorry, your browser does not support inline SVG.  
            </svg>
            <span>{props.data.status}-{props.data.species}</span>
            <h1>{props.data.gender}</h1>
            <h2>{props.data.species}</h2>
            <h2>{props.data.location.name}</h2>
            <h2>{props.data.origin.name}</h2>
            </div>
    )
}