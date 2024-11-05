import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './booksSlice';

const EditBook = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateBook({ id, title, author }));
        console.log({ id, title, author });
        // navigate('/show-books', { replace: true });
    }

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author : </label>
                    <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <Link>
                        <button type='submit'>Update Book</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditBook;