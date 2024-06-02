import React,{useState, useEffect} from 'react';
import axios from 'axios';

export function App1(props) {
  const [error, setError]= useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

 useEffect(()=>{
  const fetchData = async()=>{
    try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setData(response.data);
    }
    catch (error){
        setError(error.message);
      } finally {
      setLoading(false);
    }
    };
    fetchData();
  },[]);

  if(loading){
    return <div> Loading...</div>;
  }
  if(error){
    return <div>Error: {error}</div>
  }

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data.map(item =>(
          <li key={item.id}>{item.name}</li>
        ) )}
      </ul>
    </div>
  );
}