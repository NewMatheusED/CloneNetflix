import React, { useState } from 'react';
import './movieRow.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function MovieRow({title, itens}) {
    
    const [scrollX, setScrollX] = useState(0);

    const marginLeftSet = (e) => {
        e.preventDefault();
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const marginRightSet = (e) => {
        e.preventDefault();
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = itens.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 80
        }
        setScrollX(x)
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
                <div className="leftArrow" onClick={marginLeftSet}>
                    <ArrowBackIosIcon style={{fontSize: 40}}/>
                </div>
                <div className="rightArrow" onClick={marginRightSet}>
                    <ArrowForwardIosIcon style={{fontSize: 40}}/>
                </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: window.innerWidth * 150
                    }}>
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