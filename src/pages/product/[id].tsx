import { Toolbar } from "@/components/toolbar";
import { ContentLoader } from "@/hooks/content_loader";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/index.module.css";
import { ContentDisplay } from "@/components/content-display";
import { useEffect, useState } from "react";

const Product = () => {
  const router = useRouter();
  const { GetContentToolbar, GetContentContentByName } = ContentLoader();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (router.query.id !== undefined) {
      setContent(GetContentContentByName(router.query.id as string));
    } else {
      setContent(
        GetContentContentByName(
          window.location.href
            .split("/")
            .pop()
            ?.replaceAll("%20", " ") as string
        )
      );
    }
  }, []);
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
      <main className={styles.indexWrapDisplay}>
        {content && (
          <ContentDisplay content={content} title={router.query.id as string} />
        )}
      </main>
    </>
  );
};
export default Product;
