import { useEffect, useState } from "react";
import "./Menu.css"

type MenuItem = 'Home' | 'Modules' | 'About' | 'Reviews' | 'Contact';
type MenuProps = { menuItem?: boolean }

 export function Menu(){
    const [activeItem, setActiveItem] = useState<MenuItem | ''>('');
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item);
    
        if (item === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setTimeout(() => {
            setActiveItem('');
        }, 5000);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
    
            if (currentScrollY > lastScrollY && !isAtTop) {
                // Scroll para baixo e não está no topo, esconder menu
                setIsVisible(false);
            } else {
                // Scroll para cima ou está no topo, mostrar menu
                setIsVisible(true);
            }
    
            // Verifica se está no topo da página
            if (currentScrollY > 60) {
                setIsAtTop(false);
            } else {
                setIsAtTop(true);
            }
    
            setLastScrollY(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isAtTop]);

    return(
        <div className={`menu ${isVisible ? 'visible' : 'hidden'} ${isAtTop ? 'isTop' : ''} `}>
            <div className="menu-container">
                <div className="menu-itens">
                <img className="logo" src="images/logo.png"  onClick={() => handleItemClick('Home')}></img>
                <div className="menu-nav">
                    <ul>
                        <li  className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>Sobre</li>
                        <li  className={activeItem === 'Modules' ? 'active' : ''} onClick={() => handleItemClick('Modules')}>Modulos</li>
                        <li  className={activeItem === 'Reviews' ? 'active' : ''} onClick={() => handleItemClick('Reviews')}>Reviews</li>
                        <li  className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contato</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
 }