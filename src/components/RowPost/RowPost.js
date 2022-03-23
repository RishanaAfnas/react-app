import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY } from '../../constants/constants';
import './RowPost.css';
import { imageUrl } from '../../constants/constants';
function RowPost(props) {
  const [movies,setMOvies] =useState([])
  const [urlId, seturlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMOvies(response.data.results)
       
    }).catch(err=>{
     // alert('Network error')
    })



}, []);
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const handleMovie =(id)=>{
  console.log(id)
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data);
    if(response.data.results.length!==0){
      seturlId(response.data.results[0])
    }else{
      console.log('Array Empty');
      alert('Unavailable')
    }
  })
}

  
  

  return (
   <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
           <img onClick={()=>handleMovie(obj.id)}
             className={props.isSmall ? 'smallposter':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path }`}/>
       

        )}
       
         
          
         
      </div>
  { urlId  &&  <YouTube opts={opts} videoId={urlId.key}/>}

   </div>
  )
}

export default RowPost;
