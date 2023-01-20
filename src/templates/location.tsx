/* eslint-disable react/prop-types */
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
import "../index.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { Link } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "my-location2",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "c_locationData",
    ],

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
    ],
  };
};

const Location: Template<TemplateRenderProps> = ({ document }) => {
  const { name, address, mainPhone, hours, c_locationData } = document;

  return (
    <>
      <Header />
      <Banner />
      <div className="centered-container" style={styles.mainContainer}>
        <div className="section">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {c_locationData.image.map((item: any) => {
              return (
                <>
                  <img style={{ marginLeft: "386px" }} src={item.url} alt="" />
                </>
              );
            })}{" "}
            <br />
            <Card
              title={<Details address={address} phone={mainPhone}></Details>}
              Description=""
            />
            {hours && (
              <Card
                title={<Hours title={name} hours={hours} />}
                Description=""
              />
            )}
            <Card
              title={<p style={{ fontWeight: "bold" }}>About {name} : </p>}
              Description={c_locationData.description}
            />
            <Link href={c_locationData.name} target={"_blank"}>
              {"Click Here To Visit Site"}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Location;
const styles = {
  mainContainer: {
    marginTop: "50px",
    backgroundColor: "#EEfAE6",
  },
};
