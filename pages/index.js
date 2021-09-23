import { useState } from "react";

import Head from "next/head";
import Provider from "../components/Provider";
import ProvidersList from "../components/ProvidersList";
import Buttonshow from "../components/Buttonshow";

const moreProviders = [
  {
    id: "prov4",
    title: "TELE 2",
    url: "./tele2.png",
  },
  {
    id: "prov5",
    title: "Tinkoff Mobile",
    url: "./tinkoff.png",
  },
];

const providers = [
  {
    id: "prov1",
    title: "MegaFon",
    url: "./megafon.png",
  },
  {
    id: "prov2",
    title: "Beeline",
    url: "./beeline.png",
  },
  {
    id: "prov3",
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
      <h1>Choose the provider to pay</h1>
      <ProvidersList providers={providerState} />
      <Buttonshow onClick={showMore}>
      {!showContent? 'Show me more' : 'Hide these'}
      </Buttonshow>
    </>
  );
}
