import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home",
  "/skills": "Skills",
  "/work": "My Work",
  "/contact": "Contact",
};

// Keeps the browser tab title in sync with the current page.
export default function usePageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `My Profile | ${titles[pathname] ?? "Home"}`;
  }, [pathname]);
}
