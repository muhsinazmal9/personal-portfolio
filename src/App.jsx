import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Muhsin, About, Projects, Contact, Blog } from './pages/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Muhsin />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: "404",
  },
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App
