import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testioActions } from "../../store/testio-slice";

import Server from "./Server";

const ServerList = () => {
  console.log("hello");
  const testio = useSelector((state) => state.testio);

  const [serverList, setServerList] = useState(testio.serversList);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /*  const checkIfStillLoading = () => {
      localStorage.getItem("server") === ""
        ? alert("No servers are loaded, please contact support")
        : setIsLoading(false) && sortByDistance();
    };
    if (localStorage.getItem("servers") === "") {
      setIsLoading(true);
      setTimeout(() => {
        checkIfStillLoading();
      }, 2000);
    } else {
      setIsLoading(false);
      sortByDistance();
    } */
  }, []);

  const sortByName = () => {
    const sorted = JSON.parse(localStorage.getItem("servers")).sort(function (
      a,
      b
    ) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    setServerList(sorted);
  };

  const sortByDistance = () => {
    const sorted = JSON.parse(localStorage.getItem("servers")).sort(function (
      a,
      b
    ) {
      if (a.distance < b.distance) return -1;
      if (a.distance > b.distance) return 1;
      return 0;
    });
    setServerList(sorted);
  };

  return (
    <div>
      <button onClick={sortByName}>Show sorted by Name</button>
      <button onClick={sortByDistance}>Show sorted by Distance</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <table className="width-fill-available">
          <thead>
            <tr className="table-header">
              <th scope="text-align-start">Server</th>
              <th scope="text-align-end">Distance</th>
            </tr>
          </thead>
          <tbody>
            {serverList.map((server) => {
              return (
                <Server
                  key={Math.random()}
                  name={server.name}
                  distance={server.distance}
                ></Server>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServerList;
