import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodo } from './redux/reducers/test.slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo()).then(res => console.log(res))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
