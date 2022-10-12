import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './layouts/Main';
import Topics from './Components/Topics/Topics';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import { LoadData } from './Components/LoadData/LoadData';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: LoadData,
          element: <Topics></Topics>
        },
        {
          path: 'quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: LoadData,
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
