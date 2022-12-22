import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container d-flex">
        <div className="footer_about">
          <Link className="logo h5" href="/">
            <span className="logo_img">
              <img src="/logo_printme.svg" alt="" />
            </span>
          </Link>
          {/* <div className="wrapper">
            <p className="footer_about-address text--sm text--bold">
              Riverside Building, County Hall, London SE1 7PB, UK
            </p>
            <p className="footer_about-copyright text--sm">
              Powered by Pandion.vn.
              <span id="currentYear"></span>
            </p>
          </div> */}
        </div>
        {/* <div className="footer_block">
          <h4 className="footer_block-title">Contact Info</h4>
          <ul className="footer_block-list text--bold text--md">
            <li>
              <a className="link" href="tel:+1234567890">
                {' '}
                <i className="icon-phone icon"></i> +1 (800) 234-65-78{' '}
              </a>
            </li>
            <li>
              <a className="link" href="tel:+1234567890">
                {' '}
                <i className="icon-phone icon"></i> +1 (800) 234-65-78{' '}
              </a>
            </li>
            <li>
              <a className="link" href="mailto:example@domain.com">
                {' '}
                <i className="icon-email icon"></i> cafert@example.com{' '}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_block">
          <h4 className="footer_block-title">Opening Hours</h4>
          <ul className="footer_block-list text--md">
            <li>
              <span className="text--bold">Mon – Fri</span> from 8am to 9pm
            </li>
            <li>
              <span className="text--bold">Saturday</span> from 9am to 4pm
            </li>
            <li>
              <span className="text--bold">Sunday</span> from 9am to 4pm
            </li>
          </ul>
        </div> */}
        <div className="footer_block">
          <p className="footer_about-copyright text--sm">
            Powered by Pandion.vn.
            <span id="currentYear"></span>
          </p>
          {/* <h4 className="footer_block-title">Follow Our Activity</h4>
          <p className="footer_block-subtitle text--md text--bold">
            We are in social networks
          </p> */}
          {/* <ul className="footer_block-socials d-flex">
            <li>
              <a
                className="link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-facebook icon"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
