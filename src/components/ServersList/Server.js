const Server = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.distance} km</td>
    </tr>
  );
};

export default Server;
