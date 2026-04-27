import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{display: "flex"}}>
        <Sidebar />
        <Routes>
          <Route>
            <Route path="/" element={<h1>Dashboard euy</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

// import HelloWorld from './components/HelloWorld'
// import ButtonCunihin from './components/ButtonCunihin'

// export default function App() {
//   return (
//     <>
//       <HelloWorld />
//       <ButtonCunihin />
//     </>
//   )
// }