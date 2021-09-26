import Link from "next/link";
import styles from "./Provider.module.css";

const Provider = (props) => {

  return (
    <li className={styles.providerElement}>
      <main>
        <h2>{props.title}</h2>
        <img src={props.url} alt={props.title} />
      </main>
      <div className={styles.btn_holder}>
        <Link href="/providerPay/[key]" as={`/providerPay/${props.id}`}>
          <button>Proceed to payment</button>
        </Link>
      </div>
    </li>
  );
};

export default Provider;
