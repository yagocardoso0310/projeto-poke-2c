import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './Home.css'
import PokeGrid from './PokeGrid'
import PokeFlex from './PokeFlex'
import Menu from './Menu'

const Home = () => {

    return (
        <div>
            <Menu/>
            <PokeGrid/>
            <PokeFlex/>
            <PokeGrid/>
            <PokeFlex/>
        </div>
    )
}

export default Home
