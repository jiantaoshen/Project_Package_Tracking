import { useState } from "react";
import "./dropdownlist.css";

function DropdownList({ data }) {
    const [openId, setOpenId] = useState(null);

    const getStatusClass = (status) => {
    if (status === "delivered") return "status delivered";
    if (status === "ready-for-pickup") return "status ready-for-pickup";
    return "status default";
    };

    return (
        <div className="container">
            <ul className="list">
            {data.map(item => (
                <li key={item.id} className="card">

                <div className="header"
                    onClick={() =>
                    setOpenId(openId === item.id ? null : item.id)
                    }
                >
                    <span className="sender">{item.sender}</span>

                    <span className={getStatusClass(item.status)}>
                    {item.status}
                    </span>
                </div>

                <div className={
                    openId === item.id ? "content" : "content hidden"
                    }
                >
                    <div><b>Parcel:</b> {item.parcel_id}</div>
                    <div><b>ETA:</b> {item.eta}</div>
                    <div><b>Verified:</b> {item.verification_required ? "Yes" : "No"}</div>


                    <div><b>User:</b> {item.user_name}</div>
                    <div><b>Phone:</b> {item.user_phone}</div>
                    <div><b>Location Status:</b> {item.location_status_ok ? "OK" : "NO"}</div>

                    <div><b>Location:</b> {item.location_name}</div>
                    <div><b>Lat:</b> {item.location_coordinate_latitude}</div>
                    <div><b>Lng:</b> {item.location_coordinate_longitude}</div>

                    <div className="full">
                        <b>Notes:</b> {item.notes}
                    </div>

                    <div className="full">
                        <b>Last Updated:</b> {item.last_updated}
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default DropdownList;