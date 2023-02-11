import { Toolbar } from "@/components/toolbar";
import { ContentLoader } from "@/hooks/content_loader";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/index.module.css";
import { Contact } from "@/components/contact";

const ContactPage = () => {
  const router = useRouter();
  const { GetContentToolbar, GetContentContact } = ContentLoader();
  return (
    <>
      <Head>
        <title>De Maine</title>
        <meta name="description" content="De Maine : Creative Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Toolbar content={GetContentToolbar()} />
      </nav>
      <main className={styles.indexWrap}>
        <Contact content={GetContentContact()} />
      </main>
    </>
  );
};

export default ContactPage;
