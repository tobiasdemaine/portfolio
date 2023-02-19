import React, { useRef, useState } from "react";
import parse from "html-react-parser";
import styles from "@/styles/content-display.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faPlayCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export interface ContentProps {
  content: any;
  title: any;
}

export const ContentDisplay = ({ content }: ContentProps) => {
  const [fullScreenContentClasses, setFullScreenContentCLasses] = useState(
    [styles.fullScreenMedia, styles.hide].join(" ")
  );
  const [fullScreenContent, setFullScreenContent] = useState({
    type: "",
    src: "",
    description: "",
  });

  return (
    <>
      <div className={styles.contentWrap}>
        <div
          className={styles.contentName}
          style={{ backgroundImage: `url(${content.head})` }}
        >
          {content.name}
          <div className={styles.contentClient}>{content.client}</div>
        </div>
        {/*<div className={styles.contentDate}>{content.date}</div>*/}

        <div className={styles.contentDescription}>
          <div>{parse(content.description)}</div>
          <div className={styles.contentLinksWrap}>
            {content?.links.length > 0 && (
              <div className={styles.contentLinks}>
                {content.links.map((data: any, index: number) => (
                  <div key={index} className={styles.contentLinksData}>
                    <a href={data.url} target="_blank" rel="noreferrer">
                      {data.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.contentTagsTechWrap}>
          <div className={styles.contentTags}>
            <h3>Skills</h3>
            {content?.tags.map((data: string, index: number) => (
              <div key={index} className={styles.contentTagsData}>
                {data}
              </div>
            ))}
          </div>
          <div className={styles.contentTechnology}>
            <h3>Technologies</h3>
            {content?.technology.map((data: string, index: number) => (
              <div key={index} className={styles.contentTechnologyData}>
                {data}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.break}></div>
      </div>
      {content?.media.length > 0 && (
        <div className={styles.contentMedia}>
          {content.media.map((data: any, index: number) => (
            <React.Fragment key={index}>
              <div
                className={styles.mediaWrap}
                onClick={() => {
                  setFullScreenContentCLasses(
                    [styles.fullScreenMedia, styles.show].join(" ")
                  );
                  setFullScreenContent({
                    type: data.type,
                    src: data.file,
                    description: data.description,
                  });
                }}
              >
                <div className={styles.contentMediaFile}>
                  <Image
                    className={styles.mediaSmall}
                    src={!data.thumb ? data.file : data.thumb}
                    alt={data?.description}
                    width="10"
                    height="10"
                  />
                </div>
                <FontAwesomeIcon
                  icon={
                    !data.type
                      ? faMagnifyingGlass
                      : data.type == "image"
                      ? faMagnifyingGlass
                      : faPlayCircle
                  }
                  className={styles.mediaIcon}
                />
                <div className={styles.contentMediaDescription}>
                  {data?.description}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      <div
        className={fullScreenContentClasses}
        onClick={() => {
          setFullScreenContentCLasses(
            [styles.fullScreenMedia, styles.hide].join(" ")
          );
          setFullScreenContent({
            type: "",
            src: "",
            description: "",
          });
        }}
      >
        <div className={styles.imgWrap}>
          <div className={styles.contentMediaFile}>
            {fullScreenContent.type == "youtube" ? (
              <iframe
                className={styles.mediaYoutubeNormal}
                src={`https://www.youtube.com/embed/${fullScreenContent.src}?autoplay=1&showinfo=0&loop=1&playlist=${fullScreenContent.src}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <Image
                className={styles.mediaNormal}
                src={fullScreenContent.src}
                alt={fullScreenContent.description}
                width="10"
                height="10"
              />
            )}
          </div>
          <div className={styles.fullscreenMediaDescription}>
            {fullScreenContent.description}
          </div>
        </div>
      </div>
    </>
  );
};
