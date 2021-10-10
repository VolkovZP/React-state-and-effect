import React, { useState } from 'react';
import Comments2ListHook from './Comments2ListHook'

export default function CommentHook() {
    const [comment, setComment] = useState([]);

    const selectHandler = ({ target: { value } }) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
            .then(response => response.json())
            .then(data => {
                setComment(data)
            });
    }
    return (
        <div>
            <p>Choose post ID:</p>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                <Comments2ListHook data={comment} />
            </div>
        </div>
    )
}
