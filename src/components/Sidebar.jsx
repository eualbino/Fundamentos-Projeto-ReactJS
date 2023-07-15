import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

const Sidebar = () => {
    return ( 
        <div>
            <aside className={styles.sidebar}>
                <img className={styles.cover}src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

                <div className={styles.profile}>
                    <img className={styles.avatar}src="https://github.com/eualbino.png" />

                    <strong>Diego Fernandes</strong>
                    <span>Web Developer</span>
                </div>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </div>
     );
}
 
export default Sidebar;