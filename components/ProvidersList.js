import Provider from "./Provider";
// import styles from "./ProvidersList.module.css";
import styled from "styled-components";

const StyledProvList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProvidersList = (props) => {
  return (
    <StyledProvList>
      {props.providers.map((provider) => {
        return (
          <Provider
            key={provider.id}
            id={provider.id}
            title={provider.title}
            url={provider.url}
          />
        );
      })}
    </StyledProvList>
  );
};

export default ProvidersList;
