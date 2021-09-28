import Link from "next/link";
// import styles from "./Provider.module.css";
import styled from "styled-components";

const ProviderElement = styled.li`
  width: 20rem;
  height: auto;
  padding: 0.5rem 1rem;
  background-color: #afcfea;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledHead2 = styled.h2`
  margin-bottom: 1.5rem;
  padding: 0;
  color: #f2f8fd;
  font-size: 2rem;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const ButtonDiv = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const StyledButton = styled.button`
  border: 0;
  line-height: 2;
  width: 80%;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: center;
  background-color: #51eaff;
  border-radius: 0.5rem;

  &:hover {
    background-color: #d7fffe;
    cursor: pointer;
  }
`;

const Provider = (props) => {
  return (
    <ProviderElement>
      <StyledMain>
        <StyledHead2>{props.title}</StyledHead2>
        <StyledImg src={props.url} alt={props.title} />
      </StyledMain>
      <ButtonDiv>
        <Link href="/providerPay/[id]" as={`/providerPay/${props.id}`}>
          <StyledButton>Proceed to payment</StyledButton>
        </Link>
      </ButtonDiv>
    </ProviderElement>
  );
};

export default Provider;
