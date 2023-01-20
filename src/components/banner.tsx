import * as React from "react";
import Cta from "./cta";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, address } = props;

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-96 bg-[url(/src/assets/images/maharaja.jpg)] `}
      >
        <div className="absolute left-0 right-0 flex flex-col items-center ">
                      <div>
              <h1 className="text-white text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2 text-white font-semibold">
                {renderPrettyAddress(address)}
              </p>
            </div>
            {/* <div className="flex pt-4 justify-between">
              <Cta
                buttonText="Order Pickup"
                url="#"
                style="text-orange bg-white shadow-xl"
              ></Cta>
              <Cta
                buttonText="Order Delivery"
                url="#"
                style="text-orange bg-white shadow-xl"
              ></Cta>
            </div> */}
        
        </div>
      </div>
    </>
  );
};

export default Banner;
