import React, { useEffect, useState }from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [idioms, setIdioms] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44380/api/idiom/GetIdioms', {
            method: 'GET',
            headers: { "content-type": "application/json" }
        }).then(res => res.json())
            .then(data => { setIdioms(data); })
            .catch((error) => {
                alert(error)
            })
    }, [])

    useEffect(() => {
        if (idioms && idioms.length > 0) {
            console.log('Idioms', idioms);
        }
    }, [idioms]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
