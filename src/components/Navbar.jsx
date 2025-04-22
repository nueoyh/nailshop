import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hoverMenu, setHoverMenu] = useState(null);

    const menuData = [
        {
            label: "New",
            path: "/new-1",
            submenu: [
                { label: "신상품", path: "/new-1" }
            ]
        },
        {
            label: "Best",
            path: "/best-1",
            submenu: [
                { label: "인기상품", path: "/best-1" },
                { label: "추천상품", path: "/best-2" }
            ]
        },
        {
            label: "Nail",
            path: "/nail-1",
            submenu: [
                { label: "매직프레스", path: "/nail-1" },
                { label: "글레이즈", path: "/nail-2" }
            ]
        },
        {
            label: "Pedi",
            path: "/pedi-1",
            submenu: [
                { label: "매직프레스", path: "/pedi-1" },
                { label: "글레이즈", path: "/pedi-2" }
            ]
        }
    ];
    return (
        <div className='gnbArea'>
            <ul className={styles.gnb}>
                {menuData.map((menu, index) => (
                    <li
                        key={index}
                        onMouseEnter={()=> setHoverMenu(index)}
                        onMouseLeave={() => setHoverMenu(null)}
                        className={styles.menuItem}>
                            <Link to={menu.path}>{menu.label}</Link>
                            {/* submenu */}
                            {hoverMenu === index && menu.submenu && (
                                <ul className={styles.submenu}>
                                    {menu.submenu.map((sub, idx)=>(
                                        <li key={idx}>
                                            <Link to = {sub.path}>{sub.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar