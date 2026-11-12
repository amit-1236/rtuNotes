import { SITE_NAME, SITE_SUFFIX } from "../config";

export default function Logo() {
  return (
    <span className="brand-logo">
      <span className="brand-mark">
        <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 20V6C10 4.5 7 4.5 4 5.5V18c3-1 6-1 8 2Z" />
          <path d="M12 20V6c2-1.500 5-1.500 8-.5V18c-3-1-6-1-8 2Z" opacity=".75" />
        </svg>
      </span>
      <span className="brand-text">
        {SITE_NAME}
        <span className="brand-accent">{SITE_SUFFIX}</span>
      </span>
    </span>
  );
}
