import * as React from "react";
import Card from "./card";
import Details from "./details";
import StaticMap from "./static-map";

const FetchData = () => {
  const [user, setUser] = React.useState<any>([]);

  const Result = async () => {
    const response = await fetch(
      "https:liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=ed9fb6461531aa59f5ce73445dea9093&v=20230110&entityTypes=location&entityTypes=location"
    );
    const data = await response.json();
    return setUser(data);
  };

  React.useEffect(() => {
    Result();
  }, []);
  console.log("user", user);

  return (
    <>
      <div className="centered-container">
        <div>
          {user?.response?.entities.map((item: any) => {
            console.log("first", item);
            return (
              <>
                <Details
                  name={item.name}
                  address={item.address}
                  phone={item.mainPhone}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
