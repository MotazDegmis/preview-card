


const Cards = ({data}) => {
    
    return (
        <div className="cards" >
            {data.map(card =>{
                return(
                    <div className="card" key={card.id}>
                        <img className="img" src={card.src} alt="aaa" />
                        <h1 className="title">{card.title}</h1>
                        <p className="text">{card.body}</p>
                        <button className="btn" type="button">Learn More</button>
                    </div>
                    )
                
            })}
        </div>
    )
}

export default Cards