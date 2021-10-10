import React, { useState, useEffect } from 'react'

export default function Comments2ListHook(props) {
    const [postFilter, setPostFilter] = useState([]);
    const { data } = props;

    const onlyEven = () => {
        console.log('btnActive')
        const newData = data.filter((item, index) => index % 2 === 0)
        setPostFilter(newData)
    }
    useEffect(() => {
        console.log('effect');
        if (data.length > 0) setPostFilter(data);
    }, [props]);

    return (
        <div>
            <div>
                <div>
                    <button onClick={onlyEven}>Only even comments</button>
                </div>
                {postFilter.map(({ id, email, body }, index) => (
                    <section key={id}>
                        <p><b>{index + 1}. {email}</b></p>
                        <p>{body}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}
