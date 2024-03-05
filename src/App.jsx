import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import Buy from "./Pages/Buy/Buy";
import Rent from "./Pages/Rent/Rent";
import Mortgage from "./Pages/Mortgage/Mortgage";
import Savedhomes from "./Pages/Savedhomes/Savedhomes";
import Savedsearch from "./Pages/Savedsearch/Savedsearch";
import firebaseConfig from "./firebaseconfig";
import Errpage from "./Pages/Errpage/Errpage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route element ={<Main/>}>
            <Route path="/" element ={<Home/>}/>
            <Route path="/buy" element ={<Buy/>}/>
            <Route path="/rent" element ={<Rent/>}/>
            <Route path="/mortgage" element ={<Mortgage/>}/>
            <Route path="/savedhomes" element ={<Savedhomes/>}/>
            <Route path="/savedsearches" element ={<Savedsearch/>}/>
          </Route>
          <Route path="*" element = {<Errpage/>}/>
        </Route>
    )
  );
  

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
