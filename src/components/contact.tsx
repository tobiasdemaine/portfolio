import styles from "@/styles/contact.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface ContactProps {
  content: any;
}

export const Contact = ({ content }: ContactProps) => {
  const [nameClass, setNameClass] = useState<any>();
  const [emailClass, setEmailClass] = useState<any>();
  const [messageClass, setMessageClass] = useState<any>();
  const [toggle, setToggle] = useState<any>(styles.hide);
  const [toggleForm, setToggleForm] = useState<any>(styles.mailForm);
  const [toggleThankyou, setToggleThankyou] = useState<any>(styles.hide);

  const [animate, setAnimate] = useState<any>(
    [styles.contentWrap, styles.contentWrapBegin].join(" ")
  );

  const [error, setError] = useState(false);

  const name = useRef<any>();
  const email = useRef<any>();
  const phone = useRef<any>();
  const message = useRef<any>();
  const validEmail = (e: any) => {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  };
  useEffect(() => {
    setAnimate(styles.contentWrap);
  }, []);
  return (
    <div className={animate}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.description}>{content.description}</div>
      <div className={toggleForm}>
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
            var error = false;
            if (name.current.value == "") {
              error = true;
              setNameClass(styles.error);
            } else {
              setNameClass(null);
            }
            if (!validEmail(email.current.value)) {
              error = true;
              setEmailClass(styles.error);
            } else {
              setEmailClass(null);
            }
            if (message.current.value == "") {
              error = true;
              setMessageClass(styles.error);
            } else {
              setMessageClass(null);
            }
            if (!error) {
              // show a loader
              setToggleForm(styles.hide);
              setToggle(styles.show);
              const formData = new FormData();
              formData.append("name", name.current.value);
              formData.append("email", email.current.value);
              formData.append("phone", phone.current.value);
              formData.append("message", message.current.value);
              // do the ajax
              axios
                .post(process.env.EMAILSRV as string, formData)
                .then(() => {
                  setToggle(styles.hide);
                  setToggleThankyou(styles.thankyou);
                })
                .catch(() => {
                  setToggle(styles.hide);
                  setError(true);
                });
            }
          }}
        >
          Send
        </button>
      </div>
      <div className={toggle}>
        <span className={styles.loader}></span>
      </div>
      <div className={toggleThankyou}>{content.thankyou}</div>
      {error && <div className={styles.errorEmail}>{content.error}</div>}
    </div>
  );
};
