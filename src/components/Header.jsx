import React, { useEffect, useState } from 'react'
import './Header.scss'

function Header({cartCounter, onMenuClick}) {


    const [isScrolled,setIsScrolled] = useState(false)

    //hook para mudar o state do header quando acontece um scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY//lê o deslocamento do scroll da pagina
            if(offset > 50) //deslocamento minimo em px para a ativação do estado  isScrolled
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

        <div className='header-left'>
            <button className="icon" onClick={onMenuClick}>

            <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M14 6.41669H0V7.58335H14V6.41669Z"/>
                    <path d="M14 2.33337H0V3.50004H14V2.33337Z"/>
                    <path d="M14 10.5H0V11.6667H14V10.5Z"/>
                    </svg>

                </button>
                <button className="icon">
                    <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g clipPath="url(#clip0_1_1771)">
                        <path d="M14.0001 13.1752L10.3473 9.52233C11.2961 8.36184 11.7627 6.88105 11.6504 5.38624C11.538 3.89143 10.8555 2.49697 9.74387 1.4913C8.63226 0.485626 7.17663 -0.054318 5.67807 -0.0168494C4.17952 0.0206191 2.75269 0.632633 1.69272 1.6926C0.632756 2.75257 0.0207412 4.1794 -0.0167273 5.67795C-0.0541959 7.17651 0.485748 8.63214 1.49142 9.74375C2.49709 10.8554 3.89155 11.5379 5.38636 11.6502C6.88117 11.7625 8.36196 11.296 9.52245 10.3472L13.1753 14L14.0001 13.1752ZM5.83345 10.5C4.91047 10.5 4.00822 10.2263 3.24079 9.71352C2.47336 9.20074 1.87522 8.47191 1.52201 7.61918C1.1688 6.76646 1.07639 5.82815 1.25645 4.92291C1.43652 4.01766 1.88097 3.18614 2.53362 2.5335C3.18626 1.88085 4.01778 1.43639 4.92303 1.25633C5.82827 1.07627 6.76658 1.16868 7.61931 1.52189C8.47203 1.8751 9.20086 2.47324 9.71364 3.24067C10.2264 4.0081 10.5001 4.91035 10.5001 5.83333C10.4987 7.07058 10.0066 8.25676 9.13175 9.13163C8.25688 10.0065 7.0707 10.4986 5.83345 10.5Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1771">
                        <rect width="14" height="14"/>
                        </clipPath>
                    </defs>
                    </svg>


            </button>

        </div>

        <img src={ isScrolled ? "static/images/logos/logo-branco.png" : "static/images/logos/logo-preto.png"} alt="" /> {/*Muda o logo carregado de acordo com o scroll da tela*/}

        <div className='header-right'>
            <button className="icon">
                <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <g clipPath="url(#clip0_1_1774)">
                    <path d="M12.25 14H11.0833V11.0583C11.0829 10.6009 10.901 10.1625 10.5776 9.83908C10.2542 9.5157 9.81575 9.33382 9.35842 9.33335H4.64158C4.18425 9.33382 3.74578 9.5157 3.42239 9.83908C3.09901 10.1625 2.91713 10.6009 2.91667 11.0583V14H1.75V11.0583C1.75093 10.2917 2.05587 9.55671 2.59795 9.01464C3.14002 8.47256 3.87497 8.16761 4.64158 8.16669H9.35842C10.125 8.16761 10.86 8.47256 11.4021 9.01464C11.9441 9.55671 12.2491 10.2917 12.25 11.0583V14Z"/>
                    <path d="M7 7C6.30777 7 5.63108 6.79473 5.05551 6.41015C4.47993 6.02556 4.03133 5.47894 3.76642 4.83939C3.50152 4.19985 3.4322 3.49612 3.56725 2.81719C3.7023 2.13825 4.03564 1.51461 4.52513 1.02513C5.01461 0.535644 5.63825 0.202301 6.31719 0.0672531C6.99612 -0.0677952 7.69985 0.0015165 8.33939 0.266423C8.97893 0.53133 9.52556 0.979934 9.91014 1.55551C10.2947 2.13108 10.5 2.80777 10.5 3.5C10.4991 4.42798 10.13 5.31768 9.47385 5.97385C8.81768 6.63003 7.92797 6.99908 7 7ZM7 1.16667C6.53851 1.16667 6.08739 1.30352 5.70367 1.55991C5.31996 1.8163 5.02089 2.18071 4.84428 2.60707C4.66768 3.03343 4.62147 3.50259 4.7115 3.95521C4.80153 4.40784 5.02376 4.8236 5.35009 5.14992C5.67641 5.47624 6.09217 5.69847 6.54479 5.7885C6.99741 5.87853 7.46657 5.83233 7.89293 5.65572C8.31929 5.47912 8.68371 5.18005 8.9401 4.79633C9.19649 4.41262 9.33333 3.96149 9.33333 3.5C9.33333 2.88116 9.0875 2.28767 8.64992 1.85009C8.21233 1.4125 7.61884 1.16667 7 1.16667Z"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_1774">
                    <rect width="14" height="14"/>
                    </clipPath>
                </defs>
                </svg>

            </button>

            <button className="icon cart-icon">

                {/*Removi o 0 do icone para colocar o contador*/}
                <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <g clipPath="url(#clip0_2024_93)">
                <path d="M10.5 4.00024C10.5 3.07199 10.1313 2.18175 9.47487 1.52537C8.8185 0.868993 7.92826 0.500244 7 0.500244C6.07174 0.500244 5.1815 0.868993 4.52513 1.52537C3.86875 2.18175 3.5 3.07199 3.5 4.00024H0V12.7502C0 13.2144 0.184374 13.6595 0.512563 13.9877C0.840752 14.3159 1.28587 14.5002 1.75 14.5002H12.25C12.7141 14.5002 13.1592 14.3159 13.4874 13.9877C13.8156 13.6595 14 13.2144 14 12.7502V4.00024H10.5ZM7 1.66691C7.61884 1.66691 8.21233 1.91274 8.64992 2.35033C9.0875 2.78791 9.33333 3.38141 9.33333 4.00024H4.66667C4.66667 3.38141 4.9125 2.78791 5.35008 2.35033C5.78767 1.91274 6.38116 1.66691 7 1.66691ZM12.8333 12.7502C12.8333 12.905 12.7719 13.0533 12.6625 13.1627C12.5531 13.2721 12.4047 13.3336 12.25 13.3336H1.75C1.59529 13.3336 1.44692 13.2721 1.33752 13.1627C1.22812 13.0533 1.16667 12.905 1.16667 12.7502V5.16691H3.5V6.33358H4.66667V5.16691H9.33333V6.33358H10.5V5.16691H12.8333V12.7502Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_2024_93">
                <rect width="14" height="14" transform="translate(0 0.500244)"/>
                </clipPath>
                </defs>
                </svg>
                <span className="cart-counter">{cartCounter}</span>

            </button>
       </div> 

    </header>
  )
}

export default Header