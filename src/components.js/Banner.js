import React, { useEffect, useState } from 'react'
import instance from '../requestApi/baseUrl'
import './banner.css'
function Banner({fetchUrl}) {
  const [bannerData, setData] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const accessMovies = async () => {
  const result= await instance.get(fetchUrl);
    setData(
      result.data.results[Math.floor(Math.random() * result.data.results.length-1)]
    );
  };
  useEffect(() => {
    accessMovies();
  }, []);
  console.log(bannerData);
  return (
    <>
      <div className='bannerMain'
        style={{
          backgroundImage: `url(${base_url}${bannerData?.backdrop_path})`,
        }}
      >
       <div className='wrapper'>
            <div className="banner">
              <h1>{bannerData?.title}</h1>
            </div>
            <div className="overview">
              <h1>{bannerData?.overview}</h1>
            </div>
       </div>
      </div>
    </>
  );
}

export default Banner