import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Types from './pages/Types';
import Pokemons from './pages/Pokemons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Types />,
  },
  {
    path: "/pokemon-type/:type",
    element: <Pokemons />,
  }
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}