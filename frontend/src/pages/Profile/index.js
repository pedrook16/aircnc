import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default () => {
  const [spots, setSpots] = useState([]);
  //const [requests, setRequests] = useState([]);

  // const socket = useMemo(() =>
  //   socketio(serverConfig.URL, {
  //     query: { user_id }
  //   }
  // ), [user_id])

  // useEffect(() => {
  //   socket.on('booking-request', data =>
  //     setRequests([...requests, data])
  //   )
  // }, [requests, socket])

  useEffect(() => {
    const user_id = localStorage.getItem("user");
    async function loadSpots() {
      const response = await api.get("/profile", {
        headers: { user_id }
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  // const handleAccept = async id => {
  //   await api.post(`/bookings/${id}/approvals`);

  //   setRequests(requests.filter(request => request._id !== id));
  // };

  // const handleReject = async id => {
  //   await api.post(`/bookings/${id}/rejections`);

  //   setRequests(requests.filter(request => request._id !== id));
  // };

  return (
    <>
      {/*<ul className="notifications">
        {requests.map(request => (
          <li key={request._id}>
            <p>
              <strong>{request.user.email} </strong>
              is requesting a booking at
              <strong> {request.spot.company}</strong> for:
              <strong> {request.date}</strong>
            </p>

            <button
              className="accept"
              onClick={() => handleAccept(request._id)}
            >
              ACCEPT
            </button>
            <button
              className="reject"
              onClick={() => handleReject(request._id)}
            >
              REJECT
            </button>
          </li>
        ))}
      </ul>
        */}

      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header
              style={{ backgroundImage: `url('${spot.url}')` }}
            />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `$${spot.price}/day` : `FREE`}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Add new spot</button>
      </Link>
    </>
  );
};
