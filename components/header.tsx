import Link from 'next/link';

const Header = () => {
  return (
    <header className="header" data-page="blog" data-page-parent="blog">
      <div className="container d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
        <Link className="logo h5" href="/">
          <span className="logo_img">
            <img src="/logo_printme.svg" alt="" />
          </span>
        </Link>
        <nav
          className="header_nav text--medium text--md collapse"
          id="headerMenu"
        >
          <ul className="header_nav-list">
            <li className="header_nav-list_item">
              <Link className="nav-item nav-link" href="/">
                <span className="nav-item_text">Trang chủ</span>
              </Link>
            </li>
            <li className="header_nav-list_item">
              <Link className="nav-item nav-link" href="/">
                <span className="nav-item_text">Về chúng tôi</span>
              </Link>
            </li>
          </ul>
          <ul className="header_nav-socials d-flex">
            <li>
              <a
                className="link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-facebook icon"></i>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="header_trigger"
          id="headerTrigger"
          data-bs-toggle="collapse"
          data-bs-target="#headerMenu"
          aria-controls="headerMenu"
          aria-expanded="false"
          type="button"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line line--short"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
