import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as dentistLoader } from './routes/Home';
import RootLayout from './routes/RootLayout';
import Error from './routes/Error';
import DentistDetail, {
  loader as dentistDetailsLoader,
} from './routes/DentistDetail';
import Contact from './routes/Contact';
import Favs from './routes/Favs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: dentistLoader,
      },
      {
        path: 'dentist/:dentistId',
        element: <DentistDetail />,
        loader: dentistDetailsLoader,
      },
      { path: 'contact', element: <Contact /> },
      { path: 'favs', element: <Favs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
