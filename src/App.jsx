import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './reduxs'; 
import List from './list';
import Pay from './payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/Payment",
    element: <Pay />,
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div id="nav">
        <li>Home</li>
        <li>About</li>
        <li>Account</li>
        <li>Contact</li>
      </div>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
