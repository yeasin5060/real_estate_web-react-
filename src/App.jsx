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
import Signuporlogin from "./Pages/Signuporlogin/Signuporlogin";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element ={<Main/>}>
          <Route path="/" element ={<Home/>}/>
          <Route path="/buy" element ={<Buy/>}/>
          <Route path="/rent" element ={<Rent/>}/>
          <Route path="/mortgage" element ={<Mortgage/>}/>
          <Route path="/savedhomes" element ={<Savedhomes/>}/>
          <Route path="/savedsearches" element ={<Savedsearch/>}/>
          <Route path="/signuporlogin" element ={<Signuporlogin/>}/>
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
