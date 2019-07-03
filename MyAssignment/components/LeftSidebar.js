import React from "react";
function LeftSidebar(props) {
  const { userAddress, closeSidebar } = props;
  return (
    <div className="leftSidebar">
      <h3>
        Address
        <a
          href="#"
          className="close"
          onClick={() => closeSidebar()}
        ></a>
      </h3>
      <div>
        <p>Street: {userAddress.street}</p>
        <p>suite: {userAddress.suite}</p>
        <p>city: {userAddress.city}</p>
        <p>zipcode: {userAddress.zipcode}</p>
        <p>Latitude: {userAddress.geo.lat}</p>
        <p>Longitude: {userAddress.geo.lng}</p>
      </div>   
    </div>
  );
}
export default LeftSidebar;