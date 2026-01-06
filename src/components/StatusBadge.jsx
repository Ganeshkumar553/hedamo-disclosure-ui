import React from "react";
import "../styles/components.css";

const StatusBadge = ({ status }) => {
  let color = "#9ca3af"; 
  if (status === "Submitted") color = "#3b82f6"; 
  if (status === "Published") color = "#10b981"; 

  return (
    <span className="status-badge" style={{ backgroundColor: color }}>
      {status}
    </span>
  );
};

export default StatusBadge;
