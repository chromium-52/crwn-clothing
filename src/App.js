// React Router Dom - Routes, Route, Outlet, Link
// Documentations:
// https://reactjs.org/docs/getting-started.html
// https://reactrouter.com/

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* index - if passed, render the component if the url matches that of its parent */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
