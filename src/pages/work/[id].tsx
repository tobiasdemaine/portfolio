import { Toolbar } from "@/components/toolbar";
import { ContentLoader } from "@/hooks/content_loader";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/index.module.css";
import { ContentList } from "@/components/content-list";

const Work = () => {
  const router = useRouter();
  const { GetContentToolbar, GetContentDataByType } = ContentLoader();

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
        <ContentList
          content={GetContentDataByType(router.query.id as string)}
          title={router.query.id as string}
        />
      </main>
    </>
  );
};

export default Work;
