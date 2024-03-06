 export function Book(props){
    const {img, author, title, number} = props;
    return (
        <>
       
        
    <article className="book">
    
    <img src={img} alt="I Don't Love You Anymore" /> 

    
    
    <h2>{title}</h2>
    <h3>{author}</h3>
    <span className="number">{`# ${number + 1}`}</span>
    
    </article>
    </>
    )
};