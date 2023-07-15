import styles from './Header.module.css'
import igniteLogo from '../images/ignite-logo.svg'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo do ignite"/>
            <strong>Ignite Feed</strong>
        </header>
     );
}
 
export default Header;