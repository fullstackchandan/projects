import './App.css'
import {Routes,Route, Outlet} from 'react-router-dom'
function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<>Home Page</>} />
        <Route path='/home' element={<>Admin Page<Outlet /></>}>
          <Route path='title' element={<>Main</>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
