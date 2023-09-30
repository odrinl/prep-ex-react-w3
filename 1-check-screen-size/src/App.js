import './App.css';
import Avatars from './components/Avatars';
import useWindowSize from './components/useWindowSize';

function App() {
  const windowSize = useWindowSize(700, 1000);

  return (
    <div className='app'>
      <h1>
        Current Window Size: <br /> {windowSize}
      </h1>
      <Avatars />
      <p>
        Resizing your window changes the clothes and accessories of the avatar.
        A specific avatar is shown depending whether your window is big, medium,
        or small.
      </p>
    </div>
  );
}

export default App;
