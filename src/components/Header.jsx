import React, { useEffect, useState } from 'react'
import './Header.scss'

function Header() {

    const [isScrolled,setIsScrolled] = useState(false)

    //hook para mudar o state do header quando acontece um scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY//lê o deslocamento do scroll da pagina
            if(offset > 50)
                setIsScrolled(true)
            else
                setIsScrolled(false)

        }
        window.addEventListener('scroll',handleScroll) //adiciona um event listener para chamar a função de verificação do scroll
        return () => {
            window.removeEventListener('scroll',handleScroll) //remove o listener quando o componente é desmontado
        }
    },[])

  return (
    //a classe do header muda de acordo com o state isScrolled
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}> 
        <button className="icon">
            <img src="/static/images/icons/icone-menu.svg" alt="Menu"/>
        </button>
        <button className="icon">
            <img src="static/images/icons/icone-search.svg" alt="Search"/>
        </button>

        <img src="static/images/logos/logo-preto.png" alt="" />

        <button className="icon">
            <img src="static/images/icons/icone-conta.svg" alt="Conta"/>
        </button>

        <button className="icon">
            <img src="static/images/icons/icone-carrinho.svg" alt="Carrinho"/>
        </button>

    </header>
  )
}

export default Header