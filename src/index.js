import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { book } from "./book";
import { Book } from "./Books";
function BookList(){
      
    return <>
        <section className="BookList">
        {book.map(({img, title, author,id}) => {
          return <Book img={img} title={title} author={author} key={id}/>
        })}
        
        </section>
    </>
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)