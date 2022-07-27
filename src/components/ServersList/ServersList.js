import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getServersList } from "../../store/serversList-actions";

import Server from "./Server";
import styles from "./ServersList.module.scss";

let initialLoad = true;

const ServersList = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const sortOption = queryParams.get("sort");

  const testio = useSelector((state) => state.testio);
  const { serversList, token } = testio;

  const [servers, setServers] = useState([]);

  const sortHandler = useCallback(
    (option) => {
      const validOption = option ? option : "name";
      history.push(`/home?sort=${validOption}`);
      const arrayForSort = [...serversList];

      const sorted = arrayForSort.sort((a, b) => {
        return a[validOption] < b[validOption] ? -1 : 1;
      });

      setServers(sorted);
    },
    [history, serversList]
  );

  useEffect(() => {
    if (initialLoad) {
      dispatch(getServersList(token));
      initialLoad = false;
    }
    sortHandler(sortOption);
  }, [dispatch, sortHandler, sortOption, token]);

  return (
    <Fragment>
      <select
        className="pointer"
        name="sort"
        id="sort"
        onChange={(event) => sortHandler(event.target.value)}
      >
        <option value="name">Sort by name</option>
        <option value="distance">Sort by distance</option>
      </select>

      <table className="widthFillAvailable">
        <thead>
          <tr className={styles.tableHeader}>
            <th>Server</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => {
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
    </Fragment>
  );
};

export default ServersList;
