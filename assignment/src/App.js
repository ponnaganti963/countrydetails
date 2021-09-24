import './App.css';
import React, {useState} from 'react';
function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [show,setShow] = useState('0');
  const search =  evt =>{ 
    if(evt.key === 'Enter' &&  query){
      callapi();
    }
  }
  function callapi(){
    fetch(`https://restcountries.com/v3/name/${query}`)
    .then(res => res.json())
    .then(result => {
      setQuery('');
    console.log(result[0].name.common);
    console.log(result[0].capital[0]);
    console.log(result[0].region);
    console.log(result[0].subregion);
    console.log(result[0].flags[0])
    console.log(result[0].borders)

     setResults(result);
      // setShow('0')
      setShow('1')

  })
  .catch(error => {
    setShow('0');
    setResults(results);
  })

  }
  return (
    <div className="App">
      <header className="App-header">
         <input
         type='text'
         placeholder='Search.......'
         className='search'
         onChange={e => setQuery(e.target.value)}
         value={query}
         onKeyPress={search}
         ></input>
         <button className='btn' onClick={()=>{
              if(query){
                callapi();
              }
         }}>Searchs</button>
         
         { parseInt(show) ? (
           <div className='div_block'>
             <h1>{results[0].name.common}</h1>
             <h2>{results[0].capital[0]}</h2>
             <img src={results[0].flags[0]}></img>
             <h4>{results[0].region}</h4>
             <h4>{results[0].subregion}</h4>

           </div>
         ) :
         (' ')


         }
      </header>
    </div>
  );
}

export default App;
