import{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import BlogPage from './Pages/BlogPage'
import DiscoverFroker from './Pages/DiscoverFroker';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/froker' element={<DiscoverFroker/>}/>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPage />} />
    </Route>
  )
)

function App() {
  return (
    <>
     <RouterProvider router={router} />
      {/* <Home/> */}
    </>
  )
}

export default App
