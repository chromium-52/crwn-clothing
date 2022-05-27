// React Router Dom - Routes, Route, Outlet, Link
// Documentations:
// React - https://reactjs.org/docs/getting-started.html
// React Router Dom - https://reactrouter.com/
// Firebase - https://firebase.google.com/docs/auth/web/google-signin#web-version-9_3

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

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
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
