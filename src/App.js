
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Router';

function App() {
  return (
    // providing router provider 
    <RouterProvider
      router={router}
    ></RouterProvider>
  );
}

export default App;
