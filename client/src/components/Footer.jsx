import { SITE_NAME, SITE_SUFFIX } from "../config";
export default function Footer() {
  return <footer className="footer">© {new Date().getFullYear()} {SITE_NAME}{SITE_SUFFIX} · Made for engineering students</footer>;
}
