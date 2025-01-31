import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )

}


export default App