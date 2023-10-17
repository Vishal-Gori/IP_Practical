

const Card = (props) => {
    return (
        <div>
            <fieldset>
                <div style={{ display: "", justifyContent: "space-between" }}>
                    <div>
                        <center>
                            <img style={{ border: "1px soild", borderRadius: "10px" , width:"300px"}} src={props.Photo} alt='Profile' />
                        </center>
                    </div>
                    <div style={{ display: "", justifyContent: "center" }}>
                        <label>Recipe Name:</label>
                        <h3>{props.name}</h3><br />
                        <label>Description:</label>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </fieldset><br/>
        </div>
    )
}

export default Card