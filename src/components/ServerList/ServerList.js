import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getServerList } from "../../store/serversList-actions";

import Server from "./Server";

let initialLoad = true;

const ServerList = () => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const sortOption = queryParams.get("sort");

  const dispatch = useDispatch();

  const servers = useSelector((state) => state.testio.serversList);
  const token = useSelector((state) => state.testio.token);

  const [serversList, setServersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sortHandler = useCallback(
    (option) => {
      history.push(`/home?sort=${option}`);
      const arrayForSort = [...servers];

      if (option === "name") {
        const sorted = arrayForSort.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });

        setServersList(sorted);
      }

      if (option === "distance") {
        const sorted = arrayForSort.sort(function (a, b) {
          if (a.distance < b.distance) return -1;
          if (a.distance > b.distance) return 1;
          return 0;
        });

        setServersList(sorted);
      }
    },
    [history, servers]
  );

  const sortByDistanceHandler = useCallback(() => {
    history.push("/home?sort=distance");

    const arrayForSort = [...servers];
  }, [history, servers]);

  useEffect(() => {
    if (initialLoad) {
      dispatch(getServerList(token));
      initialLoad = false;
    }
    sortHandler(sortOption);
  }, [dispatch, sortHandler, sortOption, token]);

  return (
    <div>
      <button onClick={() => sortHandler("name")}>Show sorted by Name</button>
      <button onClick={() => sortHandler("distance")}>
        Show sorted by Distance
      </button>
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
            {serversList.map((server) => {
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
