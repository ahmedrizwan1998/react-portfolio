import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
