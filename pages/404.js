import Styles from "../styles/404.module.css";
import { useRouter } from "next/router";
import Image from 'next/image'

function PageNotFound() {
  const history = useRouter();

  const handleDashboardRedirection = (e) => {
    try {
      e.stopPropagation();
      const path = `/`;
      history.push(path);
    } catch (error) {
    }
  };
  return (
    <div className={[Styles["fallback-ui-container"]].join(" ")}>
      <span>404 Page Not Found</span>
      <Image 
        src="/static/images/404-not-found.jpg"
        alt="not-found"
        width = "700px"
        height = "400px"
        quality={100}
      />
      <p><a href="https://www.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_21586054.htm#query=404%20page&position=3&from_view=keyword">Image by jcomp</a> on Freepik</p>
      <button
        onClick={handleDashboardRedirection}
      >
        Take me to Home page
      </button>
    </div>
  );
}

export default PageNotFound;
