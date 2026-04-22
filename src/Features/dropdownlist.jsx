import { useState } from "react";
import "./dropdownlist.css";

function DropdownList({ data }) {
  const [openId, setOpenId] = useState(null);
  const [filter, setFilter] = useState("all");

  // Normalize data to ensure it's always an array
  const safeData = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
    ? data.data
    : [];

  // Status groups
  const statusGroups = {
    "in-process": ["order-info-received", "on-the-way"],
    "ready-to-pick": ["ready-for-pickup"],
    "delivered": ["delivered"],
  };

  // Status styles (Colors based on status)
  const statusStyles = {
    "delivered": "bg-success",
    "ready-for-pickup": "bg-warning text-dark",
  };

  const getStatusClass = (status) => {
    return `badge ${statusStyles[status] || "bg-secondary"}`;
  };

  // Filter logic
  const filteredData = safeData.filter((item) => {
    if (filter === "all") return true;
    return statusGroups[filter]?.includes(item.status);
  });

  return (
    <div className="container py-4">

      {/* Filter Menu */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group bg-white rounded shadow-sm">

          <button
            className={`btn btn-outline-primary ${filter === "all" ? "active" : ""}`}
            onClick={() => {
              setFilter("all");
              setOpenId(null);
            }}
          >
            All
          </button>

          <button
            className={`btn btn-outline-primary ${filter === "in-process" ? "active" : ""}`}
            onClick={() => {
              setFilter("in-process");
              setOpenId(null);
            }}
          >
            In Process
          </button>

          <button
            className={`btn btn-outline-primary ${filter === "ready-to-pick" ? "active" : ""}`}
            onClick={() => {
              setFilter("ready-to-pick");
              setOpenId(null);
            }}
          >
            Ready to Pick
          </button>

          <button
            className={`btn btn-outline-primary ${filter === "delivered" ? "active" : ""}`}
            onClick={() => {
              setFilter("delivered");
              setOpenId(null);
            }}
          >
            Delivered
          </button>

        </div>
      </div>

      {/* Cards */}
      <div className="card-grid">
        {filteredData.map((item) => (
          <div key={item.id}>

            <div className="card shadow-sm border-0">

              {/* Header */}
              <div
                className="card-body"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0 fw-bold">{item.sender}</h6>

                  <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span>
                </div>

                <div className="text-muted small">
                  Parcel ID: {item.parcel_id}
                </div>

                <div className="small">
                  ETA: <b>{item.eta}</b>
                </div>
              </div>

              {/* Expandable Content */}
              {openId === item.id && (
                <div className="card-body border-top bg-light">

                  <div className="mb-2">
                    <b>User:</b> {item.user_name}
                  </div>

                  <div className="mb-2">
                    <b>Phone:</b> {item.user_phone}
                  </div>

                  <div className="mb-2">
                    <b>Verified:</b>{" "}
                    {item.verification_required ? "Yes" : "No"}
                  </div>

                  <div className="mb-2">
                    <b>Location Status:</b>{" "}
                    <span className={item.location_status_ok ? "text-success" : "text-danger"}>
                      {item.location_status_ok ? "OK" : "NO"}
                    </span>
                  </div>

                  <hr />

                  <div className="mb-2">
                    <b>Location:</b> {item.location_name}
                  </div>

                  <div className="small text-muted">
                    {item.location_coordinate_latitude}, {item.location_coordinate_longitude}
                  </div>

                  <hr />

                  <div className="mb-2">
                    <b>Notes:</b>
                    <p className="mb-1 small">{item.notes}</p>
                  </div>

                  <div className="text-muted small">
                    Last updated: {item.last_updated}
                  </div>
                </div>
              )}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownList;