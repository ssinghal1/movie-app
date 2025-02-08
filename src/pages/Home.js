import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const {data: nowPlayingData}= useFetch("/movie/now_playing")
  const {data: topRated}=useFetch("/movie/top_rated")
  const {data: popularTvShowData}=useFetch("/tv/popular")
  const {data: onAirTvShowData}=useFetch("/tv/on_the_air")

  
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Shows"} media_type={"tv"}/>
      <HorizontalScrollCard data={onAirTvShowData} heading={"On The Air "} media_type={"tv"}/>

     
    </div>
  );
};

export default Home;
