import './App.css';
import Card from './components/Card'
import { useEffect, useState } from 'react'
var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://api.reddit.com/r/worldnews/hot.json',
  headers: { }
};

function App() {
  const [titles, setTitles] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios(config)
    .then(function (response) {
      let arr = [];
      for(let i = 1; i < response.data.data.children.length; i++){
        arr.push(response.data.data.children[i].data.title)
      }
      setTitles(arr);
      setLoaded(true)
    })
    .catch(function (error) {
      console.log(error);
    });
    for(let i = 1; i < document.querySelector("#container").children.length; i++){
      document.querySelector("#container").children[i].style.display="none"
    }
    let index = 1;
    setInterval(() => {
      if(index >= document.querySelector("#container").children.length){
        clearInterval();
        window.location.reload();
      }else{
        document.querySelector('.progress-bar').width="0%"
        document.querySelector("#container").children[index].style.display = "block";
        document.querySelector("#container").children[index - 1].style.display = "none";
        index++;
      }
    }, 5000)

  }, [loaded])


  return (
    <div className="App">
      <header className="App-header">
      
      <div id = "container" style = {{width: '65%',  fontFamily: 'system-ui', textShadow : '0 0 10px'}}>
        {titles.map((title) => {
          return <Card title = {title}></Card>
        })}
      </div>
      </header>
    </div>
  );
}

export default App;
