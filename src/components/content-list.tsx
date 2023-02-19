import _ from "lodash";
import styles from "@/styles/content-list.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface ContentProps {
  content: any;
  title: any;
}

/*
  "date": "2023",
  "name": "De Maine",
  "client": "De Maine",
  "description": "A template for creating a portfolio site",
  "technology": ["ReactJs", "NextJs", "typescript"],
  "tags": ["ReactJs", "NextJs"],
  "images": [{"file":"img.jpg", "description": "Lorem Ipsum"],
  "links": ["http://tech.tobiasdemaine.com"],
  "embed": [{ "swf": "linktofile" }],
  "type": ["Web App"]
  */

export const ContentList = ({ content, title }: ContentProps) => {
  const router = useRouter();

  const [divShow, setDivShow] = useState<any>(
    [styles.contentListItem, styles.hide].join(" ")
  );

  const [titleShow, setTitleShow] = useState<any>(
    [styles.title, styles.titletop].join(" ")
  );

  useEffect(() => {
    setDivShow(styles.contentListItem);
    setTitleShow(styles.title);
  }, []);

  return (
    <div className={styles.contentWrap}>
      <div className={titleShow}>{title}</div>
      {content.map((item: any, index: number) => (
        <div
          key={index}
          className={divShow}
          onClick={() => {
            setDivShow([styles.contentListItem, styles.exit_left].join(" "));
            setTitleShow([styles.title, styles.exit_top].join(" "));
            setTimeout(() => {
              router.push(`/display/${encodeURIComponent(item.name)}`);
            }, 500);
          }}
        >
          <Image
            className={styles.contentListImage}
            src={item.thumb ? item.thumb : "/assets/img/no-image.png"}
            alt={item.name}
            width="10"
            height="10"
          />
          <div className={styles.contentListItemName}>{item.name}</div>
          <div className={styles.contentListItemDescription}>{item.short}</div>
        </div>
      ))}
    </div>
  );
};
