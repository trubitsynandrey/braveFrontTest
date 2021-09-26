import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./ProviderPay.module.css";
import Layout from "./Layout";
import Link from "next/link";

const ProviderPay = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const numberChangeHadler = (event) => {
      setEnteredNumber(event.target.value);
  }
  const amountChangeHadler = (event) => {
    setEnteredAmount(event.target.value);
  } 

  const data = [
    {
      id: "1",
      title: "MegaFon",
      url: "../megafon.png",
    },
    {
      id: "2",
      title: "Beeline",
      url: "../beeline.png",
    },
    {
      id: "3",
      title: "MTS",
      url: "../MTS.png",
    },
    {
      id: "4",
      title: "TELE 2",
      url: "../tele2.png",
    },
    {
      id: "5",
      title: "Tinkoff Mobile",
      url: "../tinkoff.png",
    },
  ];
  const router = useRouter();
  //console.log(router);
  const { key } = router.query;
  const provider = data.find((item) => item.id == key);
  return (
    <>
      <main className={styles.payWindow}>
        <h2>{provider.title}</h2>
        <img src={provider.url} alt={provider.title} />
        <form>
          <div className={styles.payForm}>
            <div className={styles.payForm}>
              <label>Phone number</label>
              <input
                type="number"
                value={enteredNumber}
                onChange={numberChangeHadler}
              />
            </div>
            <div className={styles.payForm}>
              <label>Amount</label>
              <input
                min='1'
                max='1000'
                type="number"
                value={enteredAmount}
                onChange={amountChangeHadler}
              />
            </div>
            <div className={styles.payFormBtns}>
              <Link href="/"><button type="button">Go back</button></Link>
              <button type="submit">Pay</button>
            </div>
            
          </div>
        </form>
      </main>
    </>
  );
};

export default ProviderPay;
