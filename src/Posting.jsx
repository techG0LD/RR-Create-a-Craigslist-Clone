export default function Posting(props) {
    return (
        <div>
            {/* <h1>Posting</h1> */}
            <div style ={{borderRadius:'5px', boxShadow:'grey 0px 0px 5px', padding: "10px", maxWidth:'400px'}}>
                <div>{props.data.price}</div>
                <img src={props.data.imageURL} alt ='' />
                <h3>{props.title}</h3>
                <p>{props.data.description}</p>
            </div>
          
        </div>
        
    )
}