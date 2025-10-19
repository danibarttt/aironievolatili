import Gallery from "./components/Gallery";
import {createHashRouter, RouterProvider} from 'react-router';

const router = createHashRouter([
  {
    path: "/",
    element: <Gallery/>,
  },
]);

export default function App() {
  return <div style={{
    padding: '30px',
    boxSizing: 'border-box'
  }}><RouterProvider router={router}/></div>;
}
