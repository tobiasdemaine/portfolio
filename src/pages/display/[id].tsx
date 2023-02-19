import { useEffect, useState } from "react";
import { Toolbar } from "@/components/toolbar";
import { ContentLoader } from "@/hooks/content_loader";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/index.module.css";
import { ContentDisplay } from "@/components/content-display";

const Display = () => {
  const router = useRouter();
  const { GetContentToolbar, GetContentContentByName } = ContentLoader();
  const [content, setContent] = useState<any>(null);
  const [exitAnimate, setExitAnimate] = useState(false);
  const [animate, setAnimate] = useState(styles.indexWrapDisplay);
  useEffect(() => {
    if (exitAnimate == true) {
      setAnimate([styles.indexWrapDisplay, styles.animateOut].join(" "));
    }
  }, [exitAnimate]);
  useEffect(() => {
    if (router.query.id !== undefined) {
      setContent(GetContentContentByName(router.query.id as string));
    } else {
      setContent(
        GetContentContentByName(
          window.location.href
            .split("/")
            .pop()
            ?.replaceAll("%20", " ")
            .replace("%5B", "[")
            .replace("%5D", "]") as string
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
        <Toolbar content={GetContentToolbar()} exitAnimate={setExitAnimate} />
      </nav>
      <main className={animate}>
        {content && (
          <ContentDisplay content={content} title={router.query.id as string} />
        )}
      </main>
    </>
  );
};
export default Display;
