import logo from './logo.svg';
import './App.css';
import { LazyLoading } from './LazyLoading';
import { MovieDbLazyLoad } from './MovieDb/MovieDbLazyLoad';

function App() {
  return (
    <div className="App">
      {/*<LazyLoading />*/}
      <MovieDbLazyLoad />
    </div>
  );
}

export default App;
