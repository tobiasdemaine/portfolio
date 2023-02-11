import styles from "@/styles/contact.module.css";
import { useRef, useState } from "react";

interface ContactProps {
  content: any;
}

export const Contact = ({ content }: ContactProps) => {
  const [nameClass, setNameClass] = useState<any>();
  const [emailClass, setEmailClass] = useState<any>();
  const [messageClass, setMessageClass] = useState<any>();

  const name = useRef<any>();
  const email = useRef<any>();
  const phone = useRef<any>();
  const message = useRef<any>();
  const validEmail = (e: any) => {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  };
  return (
    <div className={styles.contentWrap}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.mailForm}>
        <input
          ref={name}
          className={nameClass}
          placeholder="Your Name"
          type="text"
        />

        <input
          ref={email}
          className={emailClass}
          placeholder="Your Email"
          type="text"
        />
        <input ref={phone} placeholder="Your Phone" type="text" />
        <textarea
          ref={message}
          className={messageClass}
          placeholder="Your Message"
        />
        <button
          onClick={() => {
            // error test
            console.log(name.current.value);
            if (name.current.value == "") {
              console.log(name.current.value);
              setNameClass(styles.error);
            }
            if (validEmail(email.current.value)) {
              setEmailClass(styles.error);
            }
            if (message.current.value == "") {
              setMessageClass(styles.error);
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
