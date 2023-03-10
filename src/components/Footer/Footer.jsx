import "./Footer.scss";
import { Button } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p className="copyright"> &copy; Bob Kyeyune</p>
      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/bob-kyeyune-a37263137/?originalSubdomain=de"
          target="blank"
        >
          <FaLinkedinIn className="linkedin" />
        </a>

        <a
          href="https://www.researchgate.net/profile/Bob-Kyeyune"
          target="blank"
        >
          <FaResearchgate className="research-gate" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
