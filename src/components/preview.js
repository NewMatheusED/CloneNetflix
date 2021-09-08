import React from 'react';
import './preview.css';

export default function Preview({itens}) {
    return(
        <div>
            <div className="backDrop">
                <div className="main">
                    <h2>{itens.vote_average}</h2>
                </div>
            </div>
        </div>
    )
}