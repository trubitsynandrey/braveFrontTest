import Image from "next/image";
import beePic from '../public/beeline.png'
import styles from './Provider.module.css'

const Provider = (props) => {
  return (
        <li className={styles.providerElement}>
                <main>
                <h2>{props.title}</h2>
                <img src={props.url} alt={props.title}/>
                </main>
                <div className={styles.btn_holder}>
                <button>Pay Here</button>
                </div>
        </li>
  );
};

export default Provider;
