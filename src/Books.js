 export function Book(props){
    const {img, author, title} = props;
    return (
    <article className="Book">
    <div>
    <img src={img} alt="I Don't Love You Anymore" /> 

    </div>
    
    <h2>{title}</h2>
    <h3>{author}</h3>
    </article>
    )
};