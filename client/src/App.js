import './App.css';
import SearchPage from './pages/Search-page.js';
import Layout from './Layout/Layout.js';
import {Route, RouterProvider, createRoutesFromElements,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.js';
import NotFound from './components/NotFound.js';

import useApicall from './customHook/useApicall.js';
//import Pdp from './components/Pdp.js';
import PdpPage from './pages/PdpPage.js';

function App() {


  const {detailData, contactData, error} = useApicall();


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout detailData={detailData} contactData={contactData} error={error}/>}>
        <Route index element={<Home/>}/>
        <Route path='search' element={<SearchPage/>}/>
          <Route path='pdp' element={<PdpPage/>}/>
          {/*<Route path='search/:pdpid' element={<Pdp/>}></Route>*/}
        <Route path='*' element={<NotFound error="404 page not found"/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
