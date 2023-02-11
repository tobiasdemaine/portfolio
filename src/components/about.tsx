import styles from "@/styles/about.module.css";
import { useEffect, useState } from "react";

interface ContactProps {
  content: any;
}

export const About = ({ content }: ContactProps) => {
  const [titleClass, setTitleClass] = useState(
    [styles.title, styles.hide].join(" ")
  );
  const [descriptionClass, setDescriptionClass] = useState(
    [styles.description, styles.hide].join(" ")
  );
  const [quoteClass, setQuoteClass] = useState(
    [styles.quote, styles.hide].join(" ")
  );
  const [endClass, setEndClass] = useState([styles.end, styles.hide].join(" "));

  useEffect(() => {
    setTitleClass(styles.title);
    setDescriptionClass(styles.description);
    setQuoteClass(styles.quote);
    setEndClass(styles.end);
  }, []);
  return (
    <>
      <div className={styles.contentWrap}>
        <div className={titleClass}>{content.title}</div>
        <div className={descriptionClass}>{content.description}</div>
        <div className={quoteClass}>
          {content.quote}
          <br />
          <div className={styles.qauthor}>{content.qauthor}</div>
        </div>
        <div className={endClass}>{content.end}</div>
      </div>
    </>
  );
};
