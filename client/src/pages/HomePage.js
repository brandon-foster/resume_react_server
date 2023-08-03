import { useState } from 'react';

export const HomePage = () => {
    const tag = {
        FRUIT: 'FRUIT',
        EXPENSIVE: 'EXPENSIVE',
        FAVORITE: 'FAVORITE',
    };
    const tags = [
        tag.FRUIT, tag.EXPENSIVE, tag.FAVORITE,
    ];
    const books = [
        {
            title: 'Apple Book',
            tagList: [
                tag.FRUIT,
            ],
        },
        {
            title: 'Banana Book',
            tagList: [
                tag.FRUIT,
                tag.EXPENSIVE,
                tag.FAVORITE,
            ],
        },
        {
            title: 'Cherry Book',
            tagList: [
                tag.FRUIT,
                tag.EXPENSIVE,
            ],
        },
    ];
    const [bookListState, setBookListState] = useState([]);
    function handleTagButtonClick(e, tag) {
        const newList = books.filter(b => b.tagList.includes(tag));
        setBookListState([...newList]);
    }
    return (
        <>
            <h1>Brandon Foster</h1>
            <p className="lead">software developer 5+ years</p>
            <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">personal</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">java</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">javascript</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">python</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">utilities</a>
                <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">resume</a>
            </p>
            {tags.map((t, i) => {
                return (
                    <button key={`tagButton${i}`} type='button' className='btn btn-secondary' onClick={e => handleTagButtonClick(e, t)}>{t}</button>
                );
            })}
            {bookListState.map((b, i) => {
                return (
                    <p key={`book${i}`}>{ b.title }</p>
                );
            })}
        </>
    );
};