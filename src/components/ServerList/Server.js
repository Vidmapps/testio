import "./ServerList.css";
const Server = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="text-align-end">{props.distance} km</td>
    </tr>
  );
};

export default Server;
