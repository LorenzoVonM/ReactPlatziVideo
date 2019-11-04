/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState';

const Home = ({myList, trends, originals}) => {

  //const initialState = useInitialState(API);

  return (
    <>
      <Search />

      {myList.length > 0 && (
        <Categories title='mi lista'>
          <Carousel>

            {myList.map((item) => <CarouselItem key={item.id} {...item} />)}

          </Carousel>
        </Categories>
      )}

      <Categories title='tendencias'>
        <Carousel>

          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}

        </Carousel>
      </Categories>

      <Categories title='originales Platzi video'>
        <Carousel>

          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}

        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
