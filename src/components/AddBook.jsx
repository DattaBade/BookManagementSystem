import './AddBook.css';
import { useState } from 'react';
function AddBook(props){

    const[enteredId, setEnteredId] = useState("");
    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAuthor, setEnteredAuthor] = useState("");
    const[enteredPrice, setEnteredPrice] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        }

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }

    function handleChangeId(event) {
        setEnteredId(event.target.value);
    }

    function handleChangeTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setEnteredPrice(event.target.value);
    }

 



    return (
        <div className='form-container' >

        <form className='form-div' onSubmit={handleSubmit}>
            Id: <input type="text" id='id' onChange={handleChangeId} value={enteredId}/>
            Title: <input type="text" id='title' onChange={handleChangeTitle} value={enteredTitle}/>
            Author: <input type="text" id='author' onChange={handleChangeAuthor} value={enteredAuthor}/>
            Price: <input type="text" id='price' onChange={handleChangePrice} value={enteredPrice}/>

            <input type="submit" value="Add" id='add-btn' />
        </form>
    </div>
    );
}

export default AddBook;








 