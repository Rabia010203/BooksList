import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { book } from "./book";
import { Book } from "./Books";
function BookList(){
      
    return <>
       <h1 className="heading">amazon best sellers</h1>
        <section className="booklist">
        {book.map((book, index) => {
          return <Book {...book} key={book.id} number={index}/>
        })}
        
        </section>
    </>
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)