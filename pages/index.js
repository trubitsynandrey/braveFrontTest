import { useState } from "react";

import Head from "next/head";
import Provider from "../components/Provider";
import ProvidersList from "../components/ProvidersList";
import Buttonshow from "../components/Buttonshow";

const moreProviders = [
  {
    id: "4",
    title: "TELE 2",
    url: "./tele2.png",
  },
  {
    id: "5",
    title: "Tinkoff Mobile",
    url: "./tinkoff.png",
  },
];

const providers = [
  {
    id: "1",
    title: "MegaFon",
    url: "./megafon.png",
  },
  {
    id: "2",
    title: "Beeline",
    url: "./beeline.png",
  },
  {
    id: "3",
    title: "MTS",
    url: "./MTS.png",
  },
];

export default function Home() {
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
