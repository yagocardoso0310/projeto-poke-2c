import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
import Menu from './Menu'

const App = () => {

  return (
    <Routes>
      <Route index element={<Menu/>} />
      <Route path = "home/" element={<Home/>} />
      <Route path = "pokeflex" element={<PokeFlex/>} />
      <Route path = "pokeflex" element={<PokeGrid/>} />
    </Routes>
  )
}

export default App
