// import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import MaskedInput from "react-text-mask";
import { GetStaticProps, GetStaticPaths } from 'next';
import { ProvidersDataAlles } from "../../utils/providers-data";
import { Provider } from "../../interfaces/providers";


const PayWindow = styled.main`
  width: 30rem;
  height: auto;
  padding: 0.5rem 1rem;
  background-color: #afcfea;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PayWindowImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

const PayForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
`;

const PayFormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const PayFormInput = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const StyledMaskedInput = styled(MaskedInput)`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const PayFormBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Button = styled.button`
  border: 0;
  line-height: 2;
  padding: 0 1.5rem;
  font-size: 1rem;
  text-align: center;
  background-color: #51eaff;
  border-radius: 0.5rem;
  &:hover {
    background-color: #d7fffe;
    cursor: pointer;
  }
`;

type Props = {
  provider?: Provider
  errors?: string
}

const ProviderPay = ({provider, errors}) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [error, setError] = useState("");

  const numberChangeHadler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const amountChangeHadler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // if (enteredNumber.length == 17 && enteredAmount <= 1000) {
    // }
    setEnteredNumber("");
    setEnteredAmount("");
  };

  return (
    <>
      {/* {error && (
          <ErrorModal
            title={"Errror"}
            message={"Be warned"}
            onConfirm={errorHandler}
           />
      )} */}
      <PayWindow>
        <h2>{provider.title}</h2>
        <PayWindowImg src={provider.url} alt={provider.title} />
        <form onSubmit={submitHandler}>
          <PayForm>
            <PayForm>
              <PayFormLabel>Phone number</PayFormLabel>
              {/* <input
                type="tel"
                placeholder="+7(XXX)XXX-XX-XX"
                value={enteredNumber}
                onChange={numberChangeHadler}
              /> */}
              <StyledMaskedInput
                mask={[
                  /[1-9]/,
                  " ",
                  "(",
                  /\d/,
                  /\d/,
                  /\d/,
                  ")",
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ]}
                type="tel"
                placeholder="+7(XXX)XXX-XX-XX"
                value={enteredNumber}
                onChange={numberChangeHadler}
              />
            </PayForm>
            <PayForm>
              <label>Amount</label>
              <input
                min="1"
                max="1000"
                placeholder="1-1000 RUB"
                type="number"
                value={enteredAmount}
                onChange={amountChangeHadler}
              />
            </PayForm>
            <PayFormBtns>
              <Link href="/">
                <Button type="button">Go back</Button>
              </Link>
              <Button type="submit">Pay</Button>
            </PayFormBtns>
          </PayForm>
        </form>
      </PayWindow>
    </>
  );
};

export default ProviderPay;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ProvidersDataAlles.map((provider) => ({
    params: { id: provider.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const provider = ProvidersDataAlles.find((item) => item.id === Number(id))
    return { props: { provider } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

