import { useLocation, useMatches } from "react-router-dom";
import { BREADCRUMB_PAGE_MAP } from "../utilities/constants";

export default function useBreadcrumb() {
  const matches = useMatches();
  const location = useLocation();

  function createBreadcrumbList() {
    const breadcrumb = [];
    matches.forEach((route, index) => {
      const crumb = {};
      let label = BREADCRUMB_PAGE_MAP[route.id];
      if (route.pathname === location.pathname) {
        label =
          location?.state?.breadcrumb?.pageName ||
          BREADCRUMB_PAGE_MAP[route.id];
      }
      crumb.label = label;
      if (!crumb.label) return;

      if (matches.length - index > 1) crumb.to = route.pathname;
      breadcrumb.push(crumb);
    });

    return breadcrumb;
  }

  return createBreadcrumbList();
}
