import styles from "@/styles/introduction.module.css";
import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import _ from "lodash";
import { useRouter } from "next/router";

interface mainProps {
  content: any;
}

export const Introduction = ({ content }: mainProps) => {
  const router = useRouter();
  const [classes, setClasses] = useState(styles.animationWrap);
  const [logoClasses, setLogoClasses] = useState(styles.demaineLogo);
  const [toggle, setToggle] = useState("");
  return (
    <div className={classes}>
      <div className={toggle}>
        <TypeAnimation
          sequence={[
            content.text[0],
            1000,
            content.text[1],
            1000,
            content.text[2],
            1000,
            content.text[3],
            1000,
            content.text[4],
            1000,
            content.text[5],
            1000,
            "",
            500,
            () => {
              setToggle(styles.hide);
              setLogoClasses([styles.demaineLogo, styles.fadeIn].join(" "));
            },
            3000,
            () => {
              setClasses([styles.animationWrap, styles.fadeOut].join(" "));
            },
            2000,
            () => {
              router.push("/discover");
            },
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          wrapper="span"
        />
      </div>
      {toggle != "" && (
        <Image
          src="/assets/img/logo.png"
          alt="De Maine"
          className={logoClasses}
          width={300}
          height={300}
          priority
        />
      )}
    </div>
  );
};
