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
import Banner from "../components/banner";
import Details from "../components/details";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import Favicon from "../public/yext-favicon.ico";
import "../index.css";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
// import { Address } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "my-location2",
    fields: ["id", "uid", "meta", "name", "address", "c_locationData"],

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
  return document.slug ? document.slug : `${document.id.toString()}`;
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
          href: Favicon,
        },
      },
    ],
  };
};

const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  // eslint-disable-next-line react/prop-types
  const { _site, name, address, c_locationData } = document;

  return (
    <>
      <Header />
      <div className="centered-container" style={{ marginTop: "50px" }}>
        <Details address={address}></Details>
        <p> Description :{c_locationData.description}</p>
        {c_locationData.image.map((item: any) => {
          return <img src={item.url} />;
        })}
        <h1>
          {" "}
          <a href={c_locationData.name} target={"_blank"}>
            Click Here To Visit Site
          </a>
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default Location;
