import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <>
      <div className="container text-center">
        <a
          href="https://www.instagram.com/cris3knight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-instagram mx-3"
            size="2xl"
            style={{ color: "#332941" }}
          />
        </a>
        <a
          href="www.linkedin.com/in/cristobal-trinidad-545720137"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fa-linkedin mx-3"
            size="2xl"
            style={{ color: "#332941" }}
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="fa-github mx-3"
            size="2xl"
            style={{ color: "#332941" }}
          />
        </a>
      </div>
    </>
  );
}

export default SocialIcons;
