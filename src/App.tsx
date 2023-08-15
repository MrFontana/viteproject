import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <DogList />
    </div>
  );
}

function DogList() {
  const [dogs, setDogs] = useState([]);
  const [newDog, setNewDog] = useState('');

  const addDog = () => {
    if (newDog.trim() !== '') {
      setDogs([...dogs, newDog]);
      setNewDog('');
    }
  };

  const removeDog = (index) => {
    const updatedDogList = dogs.filter((_, i) => i !== index);
    setDogs(updatedDogList);
  };

  return (
    <div className="dogsBaybay">
      <h1>List of Dogs</h1>
      <div>
        <input
          type="text"
          value={newDog}
          onChange={(e) => setNewDog(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addDog}>Add Dog</button>
      </div>
      <ul>
        {dogs.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeDog(index)}>Remove Dog</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
