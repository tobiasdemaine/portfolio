import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import { ContentLoader } from "@/hooks/content_loader";
import { Main } from "@/components/main";
import { Toolbar } from "@/components/toolbar";
import { Introduction } from "@/components/introduction";

//import { Inter } from "@next/font/google";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { GetContentIntroduction, GetContentToolbar } = ContentLoader();
  const [appState, setAppState] = useState({
    section: "introduction",
    type: "",
    query: "",
  });

  return (
    <>
      <Head>
        <title>De Maine</title>
        <meta name="description" content="De Maine : Creative Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {appState.section !== "introduction" && (
        <nav>
          <Toolbar content={GetContentToolbar()} />
        </nav>
      )}

      {appState.section == "introduction" && (
        <Introduction content={GetContentIntroduction()} />
      )}
    </>
  );
}
