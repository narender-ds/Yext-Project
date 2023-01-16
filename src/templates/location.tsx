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
import Card from "../components/card";
// import { Address } from "@yext/pages/components";

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
      "  hours",
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
  const { _site, name, address,mainPhone, hours, c_locationData } = document;
  console.log("dd", hours);
  const [data, setData] = React.useState([]);

  const Fetch = {
    method: "get",
    url: "https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=50&api_key=ed9fb6461531aa59f5ce73445dea9093&v=20230110&entityTypes=location&location=jaipur&limit=2&ressolvePlaceholders=true",
  };
  axios(Fetch)
    .then(function (response) {
      setData(response?.data?.response?.entities);
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <Header />
      <div className="centered-container" style={styles.mainContainer}>
        <div className="section">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {c_locationData.image.map((item: any) => {
              return <img style={{ marginLeft: "386px" }} src={item.url} />;
            })}{" "}
            <br />
            <Card title={<Details address={address} phone={mainPhone}></Details>} />
            {hours && <Card title={<Hours title={name} hours={hours} />} />}
            <Card
              title={
                <p style={{fontWeight:"bold"}}>About {name} : </p>} des={c_locationData.description}/>
            {data.map((item) => {
              return (
                item.yextDisplayCoordinate && (
                  <Card
                    title={
                      <StaticMap
                        latitude={item.yextDisplayCoordinate?.latitude}
                        longitude={item.yextDisplayCoordinate.longitude}
                      />
                    }
                  />
                )
              );
            })}
            <h1>
              <a href={c_locationData.name} target={"_blank"}>
                Click Here To Visit Site
              </a>
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Location;
const styles={
  mainContainer:{
    marginTop: "50px",
    backgroundColor:"#EEfAE6"

  }
}
