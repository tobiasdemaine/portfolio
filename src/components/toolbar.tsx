import styles from "@/styles/toolbar.module.css";
import { useRouter } from "next/router";
interface ToolbarProps {
  content: any;
}

export const Toolbar = ({ content }: ToolbarProps) => {
  const router = useRouter();
  return (
    <div className={styles.toolbarWrap}>
      <div
        className={styles.itemLeft}
        onClick={() => {
          router.push(`/discover`);
        }}
      >
        {content.title}
      </div>
      <div
        onClick={() => {
          router.push(`/about`);
        }}
        className={styles.itemsRight}
      >
        {content.about}
      </div>
      <div
        onClick={() => {
          router.push(`/contact`);
        }}
        className={styles.itemsRight}
      >
        {content.contact}
      </div>
    </div>
  );
};
