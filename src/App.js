import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './layouts/Main';
import Topics from './Components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <Topics></Topics>
        },
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
