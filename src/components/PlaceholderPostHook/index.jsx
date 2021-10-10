import React, { useEffect, useState } from 'react'

function PlaceholderPostHook() {
    const [dataInfo, setDataInfo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(res => res.json())
            .then(data => setDataInfo(data));
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {dataInfo.map(({ id, body, title }) => (
                <section key={id}>
                    <h2>{id}. {title}</h2>
                    <p>{body}</p>
                </section>
            ))}
        </div>
    )
}
export default PlaceholderPostHook;

