import {
  GetHeadConfig,
  GetPath,
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
import StaticMap from "../components/static-map";

import "../index.css";

export const config: TemplateConfig = {};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `index.html`;
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
  // eslint-disable-next-line react/prop-types
  document,
}) => {
  const {} = document;

  return (
    <>
      <Header />
      <div className="centered-container">
        <div className="section">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            <div
              className="overflow-y-auto sm:overflow-auto sm:border lg:w-1/3 w-full"
              style={{ width: "250px", maxHeight: "580px" }}
            >
              <div className="flex flex-col justify-between border-b p-4 shadow-sm hoverlist result">
                <div className="flex text-base">
                  <div className="text-sm">
                    <FetchData />
                  </div>
                </div>
              </div>
            </div>
            {/* <StaticMap/> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Locator;
