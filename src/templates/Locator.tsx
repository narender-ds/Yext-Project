import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";

import * as React from "react";
import FetchData from "../components/fetchData";
import Footer from "../components/footer";
import Header from "../components/header";

import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "locator",

    fields: ["id", "uid", "meta"],

    filter: {
      entityTypes: ["location"],
    },

    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  //   return document.slug ? document.slug : `${document.id.toString()}`;
  return `index.html`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
        },
      },
    ],
  };
};

const Locator: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {} = document;

  return (
    <>
      <Header />
      <div className="centered-container">
        <div className="section">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            <FetchData />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Locator;
