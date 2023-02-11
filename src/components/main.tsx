import styles from "@/styles/main.module.css";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface mainProps {
  content: any;
}

export const Main = ({ content }: mainProps) => {
  const router = useRouter();
  const [liShow, setLiShow] = useState<any>([
    styles.hide_li,
    styles.hide_li,
    styles.hide_li,
  ]);
  const [titleShow, setTitleShow] = useState<any>(styles.hide_li);
  useEffect(() => {
    setTitleShow({});
    setLiShow({});
  }, []);
  return (
    <>
      <div className={styles.contentWrap}>
        <h1 className={titleShow}>{content.title}</h1>

        <div className={styles.contentColumn}>
          <h2 className={liShow[0]}>{content.oneliner}</h2>
          <ul>
            {content.types.map((item: string, index: number) => (
              <li
                className={liShow[0]}
                key={index}
                onClick={() => {
                  setLiShow([
                    styles.exit_left,
                    styles.exit_top,
                    styles.exit_right,
                  ]);
                  setTitleShow(styles.exit_top);
                  setTimeout(() => {
                    router.push(`/work/${encodeURIComponent(item)}`);
                  }, 500);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contentColumn}>
          <h2 className={liShow[1]}>{content.secondliner}</h2>
          <ul>
            {content.technologies.map((item: string, index: number) => (
              <li
                className={liShow[1]}
                key={index}
                onClick={() => {
                  setLiShow([
                    styles.exit_left,
                    styles.exit_top,
                    styles.exit_right,
                  ]);
                  setTitleShow(styles.exit_top);
                  setTimeout(() => {
                    router.push(`/product/${encodeURIComponent(item)}`);
                  }, 500);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contentColumn}>
          <h2 className={liShow[2]}>{content.thirdliner}</h2>
          <ul>
            {content.tags.map((item: string, index: number) => (
              <li
                className={liShow[2]}
                key={index}
                onClick={() => {
                  setLiShow([
                    styles.exit_left,
                    styles.exit_top,
                    styles.exit_right,
                  ]);
                  setTitleShow(styles.exit_top);
                  setTimeout(() => {
                    router.push(`/skills/${encodeURIComponent(item)}`);
                  }, 500);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
