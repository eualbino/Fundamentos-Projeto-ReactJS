import styles from './Post.module.css';

const Post = () => {
    return ( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com./MikaelBraghini.png" />
                    <div className={styles.authorInfo}>
                        <strong>Mikael Braghni</strong>
                        <span>Viadinho pao com ovo</span>
                    </div>
                </div>
                <time title='11 de Maio às 21:47' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>👉Fala galeraa 👋
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉 <a>jane.design/doctorcare</a></p>
                    <p><a>#novoprojeto #nlw #rocketseat</a></p>
                </p>
            </div>
        </article>

     );
}
 
export default Post;