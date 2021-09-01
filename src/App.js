import React, { useEffect, useState } from 'react';
import TMDB from './TMDB';
import MovieRow from './components/movieRow';
import './App.css';
import FeatureMovie from './components/featureMovie';
import Header from './components/header';

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setfeatureData] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      // recebendo info dos filmes
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'Originais');
      let randomChoice = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      let chosen = originals[0].itens.results[randomChoice];
      let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
      setfeatureData(chosenInfo)
    }

    loadAll();
  }, []);

  return (
    <div className='page'>

      <Header /> 


      { featureData &&
        <FeatureMovie item={featureData}/>
      }


      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} itens={item.itens}/>
          </div>
        ))}
      </section>
    </div>
  )
}