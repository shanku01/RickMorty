
export default function MyList(props){
    const color = props.data.status == "Alive"? "green":props.data.status == "Dead"? "red":"grey"
    return(
        <div className="my-list">
            <img src={props.data.image} onClick={props.clickHandler}/>
            <span className="character-name">{props.data.name}</span>
            <svg >
            <circle cx="50" cy="50" r="4"  fill={color} />
            Sorry, your browser does not support inline SVG.  
            </svg>
            <span>{props.data.status}-{props.data.species}</span>
        </div>
    )
}
