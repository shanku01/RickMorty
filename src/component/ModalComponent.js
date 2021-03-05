
export default function ModalComponent(props){
    const color = props.data.status == "Alive"? "green":props.data.status == "Dead"? "red":"grey"
    return(
        <div className="modal">
            <button onClick={props.clickHandler}>Close</button>
            <img src={props.data.image}/>
            <span className="modal-character-name">{props.data.name}</span>
            <div className="character-info">
                <div className="inlineblock">
                    <span className="info">Species</span>
                    <span>{props.data.species}</span>
                </div>
                <div className="inlineblock">
                    <span className="info">Gender</span>
                    <span>{props.data.gender}</span>
                </div>
                <div className="inlineblock" style={{width:"70%"}}>
                    <span className="info">Location</span>
                    <span>{props.data.location.name}</span>
                </div>
                <div className="inlineblock">
                    <span className="info">Origin</span>
                    <span>{props.data.origin.name}</span>
                </div>
            </div>
            </div>
    )
}