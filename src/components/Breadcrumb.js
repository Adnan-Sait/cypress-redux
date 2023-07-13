import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumbs = [] }) {
  return (
    <div className="app-breadcrumb">
      {breadcrumbs.map((crumb, index) => {
        return (
          <>
            {breadcrumbs.length - index > 1 ? (
              <Link to={crumb.to}>{crumb.label}</Link>
            ) : (
              <p>{crumb.label}</p>
            )}
            {breadcrumbs.length - index > 1 && <p>&gt;</p>}
          </>
        );
      })}
    </div>
  );
}
