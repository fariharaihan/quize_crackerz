import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';
import Quizs from './components/Quizs/Quizs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>,

        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quizs></Quizs>

        },
        {
          path: '/statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

      ]
    },

    {
      path: '*',
      element: <div className='text-white font-semibold text-5xl'>This page is not found</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
