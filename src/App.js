import React, { useEffect, useState } from 'react';
import TMDB from './TMDB';
import MovieRow from './components/movieRow';
import './App.css';
import FeatureMovie from './components/featureMovie';
import Header from './components/header';
//import Preview from './components/preview';

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setfeatureData] = useState([]);
  const [blackHeader, setBlackheader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackheader(true);
      }else{
        setBlackheader(false);
      } 
    }

    window.addEventListener('scroll', scrollListener);

    //remover ao sair da página
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='page'>

          {/* {movieList.map((item, key) => (
          <div>
            <Preview key={key} itens={item.itens}/>
          </div>
          ))} */}

      <Header black={blackHeader}/> 


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

      {movieList <= 0 &&
        <div className='loading'>
          <div className='icon'></div>
          <div className='backdrop'></div>
        </div>
      }
    </div>
  )
}