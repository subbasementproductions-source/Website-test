import { SBP_LOGO_PATH } from "../data";

/**
 * SBP SVG logo mark.
 *
 * @param {{ width?: number, className?: string, style?: React.CSSProperties }} props
 */
const SBPLogo = ({ width = 72, className = "", style = {} }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 380 156"
        width={width}
        height="auto"
        fill="currentColor"
        className={className}
        style={style}
        aria-label="SBP"
    >
      <path d={SBP_LOGO_PATH}/>
    </svg>
);
export default SBPLogo
