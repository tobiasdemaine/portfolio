import { useEffect, useState } from "react";
import { Toolbar } from "@/components/toolbar";
import { ContentLoader } from "@/hooks/content_loader";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/index.module.css";
import { Contact } from "@/components/contact";

const ContactPage = () => {
  const router = useRouter();
  const { GetContentToolbar, GetContentContact } = ContentLoader();
  const [exitAnimate, setExitAnimate] = useState(false);
  const [animate, setAnimate] = useState(styles.indexWrap);
  useEffect(() => {
    if (exitAnimate == true) {
      setAnimate([styles.indexWrap, styles.animateOut].join(" "));
    }
  }, [exitAnimate]);
  return (
    <>
      <Head>
        <title>De Maine</title>
        <meta name="description" content="De Maine : Creative Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Toolbar content={GetContentToolbar()} exitAnimate={setExitAnimate} />
      </nav>
      <main className={animate}>
        <Contact content={GetContentContact()} />
      </main>
    </>
  );
};

export default ContactPage;
