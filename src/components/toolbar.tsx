import styles from "@/styles/toolbar.module.css";
import { useRouter } from "next/router";
interface ToolbarProps {
  content: any;
  exitAnimate: Function;
}

export const Toolbar = ({ content, exitAnimate }: ToolbarProps) => {
  const router = useRouter();
  return (
    <div className={styles.toolbarWrap}>
      <div
        className={styles.itemLeft}
        onClick={() => {
          if (window.location.href.split("/").pop() != "discover") {
            exitAnimate(true);
            setTimeout(() => {
              router.push(`/discover`);
            }, 500);
          }
        }}
      >
        {content.title}
      </div>
      <div
        onClick={() => {
          if (window.location.href.split("/").pop() != "about") {
            exitAnimate(true);
            setTimeout(() => {
              router.push(`/about`);
            }, 500);
          }
        }}
        className={styles.itemsRight}
      >
        {content.about}
      </div>
      <div
        onClick={() => {
          if (window.location.href.split("/").pop() != "contact") {
            exitAnimate(true);
            setTimeout(() => {
              router.push(`/contact`);
            }, 500);
          }
        }}
        className={styles.itemsRight}
      >
        {content.contact}
      </div>
    </div>
  );
};
