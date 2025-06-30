import logo from "../../../public/logo.png"
import { Button } from '../ui/button'

const NavBar = () => {
  return (
    <header className='h-30 container mx-auto flex items-center justify-between'>
        <nav className='flex items-center gap-14'>
          <img src={logo} width={64}/>
          <Button variant="ghost">Projetos</Button>
          <Button variant="ghost">Buscar</Button>
        </nav>

        <Button variant="default">Criar Projeto</Button>
    </header>
  )
}

export default NavBar
