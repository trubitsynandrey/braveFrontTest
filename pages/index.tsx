import { GetStaticProps } from 'next';
import { useState } from "react";
import styled from "styled-components";
import { Provider } from '../interfaces/providers';
import { ProvidersData, ProvidersDataExtented } from '../utils/providers-data';

import Head from "next/head";
import ProvidersList from "../components/ProvidersList";
import Buttonshow from "../components/Buttonshow";

type Props = {
  providers: Provider[],
  moreProviders: Provider[],
};

export default function Home({ providers, moreProviders }) {
  const [providerState, setProviders] = useState(providers);
  const [showContent, setShowContent] = useState(false);

  const showMore = (event) => {
    if (!showContent) {
      setProviders([...providers, ...moreProviders]);
      setShowContent(true);
    } else {
      setProviders([...providers])
      setShowContent(false);
    }
  };

  return (
    <>
      <Head>
        <title>Mobile Providers</title>
      </Head>
      <h1>Choose the provider</h1>
      <ProvidersList providers={providerState} />
      <Buttonshow onClick={showMore}>
      {!showContent? 'Show me more' : 'Hide these'}
      </Buttonshow>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const providers:  Provider[] = ProvidersData;
  const moreProviders: Provider[] = ProvidersDataExtented;
  return { props: { providers, moreProviders } }
}
