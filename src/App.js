import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageUrl } from "./store/movieoSlice";


const App= ()=> {
  const dispatch = useDispatch()

  const fetchTrendingData = async() =>{
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))

      console.log('Response:', response.data.results);
    }

    catch(error){
      console.log(error)
    }
    
  }

  const fetchConfigDetails = async()=>{
    try{
      const response = await axios.get('/configuration')
      dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
      console.log('configuration', response)

    } catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchTrendingData()
    fetchConfigDetails()
  },[])

  return (
  <main className="pb-14 lg:pb-0">
    <Header/>
    <div className="min-h-[90vh]">
    <Outlet/>

    </div>
   <Footer/>
    <MobileNavigation/>
   </main>
  )
};

export default App;
