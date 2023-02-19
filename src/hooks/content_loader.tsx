import content from "../data/data.json";

export const ContentLoader = () => {
  const GetContentIntroduction = () => {
    return content.introduction;
  };
  const GetContentMain = () => {
    return content.main;
  };
  const GetContentToolbar = () => {
    return content.toolbar;
  };

  const GetContentAll = () => {
    return { ...content };
  };

  const GetContentContact = () => {
    return content.contact;
  };

  const GetContentAbout = () => {
    return content.about;
  };

  const GetContentContentByName = (title: string) => {
    let data = {};
    for (var x in content.projects) {
      if (content.projects[x].name == title) {
        data = content.projects[x];
      }
    }
    return data;
  };
  const GetContentDataByTag = (tag: string) => {
    const data = [];
    for (var x in content.projects) {
      if (content.projects[x].tags?.indexOf(tag as never) > -1) {
        data.push(content.projects[x]);
      }
    }
    return data;
  };
  const GetContentDataByTechnology = (tech: string) => {
    const data = [];
    for (var x in content.projects) {
      if (content.projects[x].technology?.indexOf(tech) > -1) {
        data.push(content.projects[x]);
      }
    }
    return data;
  };
  const GetContentDataByType = (type: string) => {
    const data = [];
    for (var x in content.projects) {
      if (content.projects[x].type.indexOf(type as never) > -1) {
        data.push({ ...content.projects[x] });
      }
    }
    return data;
  };

  return {
    GetContentIntroduction,
    GetContentMain,
    GetContentContact,
    GetContentAbout,
    GetContentAll,
    GetContentDataByTag,
    GetContentDataByTechnology,
    GetContentDataByType,
    GetContentToolbar,
    GetContentContentByName,
  };
};
