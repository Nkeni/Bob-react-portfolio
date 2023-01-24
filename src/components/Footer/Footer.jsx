import "./Footer.scss";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <p className="copyright"> &copy; Bob Kyeyune</p>
      <div class="social-container">
        <a
          href="https://www.linkedin.com/in/bob-kyeyune-a37263137/?originalSubdomain=de"
          target="blank"
        >
          <Button className="linkedin" variant="light">
            in
          </Button>{" "}
        </a>

        <a
          href="https://www.researchgate.net/profile/Bob-Kyeyune"
          target="blank"
        >
          <Button className="research-gate" variant="light">
            RG
          </Button>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
