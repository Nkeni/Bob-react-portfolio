import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/fontawesome-svg-core/import.macro";

function Footer() {
  return (
    <div className="footer">
      <p> &copy; Bob Kyeyune</p>
      <div class="social-container">
        <a
          href="https://www.linkedin.com/in/bob-kyeyune-a37263137/?originalSubdomain=de"
          className="linkedIn social"
        >
          {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
        </a>
      </div>
    </div>
  );
}

export default Footer;
