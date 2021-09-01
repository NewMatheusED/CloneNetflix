import React from 'react';
import './movieRow.css';

export default function movieRow({title, itens}) {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {itens.results.length > 0 && itens.results.map((itens, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${itens.poster_path}`} alt={itens.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 