const SideBar = () => {
  return (
    <aside
      className="sidebar d-flex flex-column"
      data-sticky="true"
      data-stop="130"
    >
      <div className="sidebar_widget sidebar_widget--search">
        <form className="form d-flex" action="#" data-type="search">
          <input
            className="field required"
            type="search"
            name="searchQuery"
            id="searchQuery"
            placeholder="Search"
          />
          <button className="btn" type="submit">
            <i className="icon-search"></i>
          </button>
        </form>
      </div>
      {/* <div className="sidebar_widget sidebar_widget--posts">
        <ul className="list d-flex flex-column">
          <li className="list-item">
            <div className="media">
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Chef New Summer Dish"
                />
              </picture>
            </div>
            <div className="main">
              <a className="main_title h5" href="post.html">
                Chef New Summer Dish
              </a>
              <span className="meta_item">January 21, 2022</span>
            </div>
          </li>
          <li className="list-item">
            <div className="media">
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Tea: Interesting Tea Traditions"
                />
              </picture>
            </div>
            <div className="main">
              <a className="main_title h5" href="post.html">
                Tea: Interesting Tea Traditions
              </a>
              <span className="meta_item">January 11, 2022</span>
            </div>
          </li>
          <li className="list-item">
            <div className="media">
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Borscht according to a special recipe"
                />
              </picture>
            </div>
            <div className="main">
              <a className="main_title h5" href="post.html">
                Borscht according to a special recipe
              </a>
              <span className="meta_item">January 10, 2022</span>
            </div>
          </li>
        </ul>
      </div> */}
      {/* <div className="sidebar_widget sidebar_widget--nav">
        <h4 className="sidebar_widget-title">Categories</h4>
        <ul className="list d-flex flex-column text--medium">
          <li className="list-item">
            <a className="link" href="#">
              Recipes
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Desserts
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Food
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Events
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Coffee
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar_widget sidebar_widget--tags">
        <h4 className="sidebar_widget-title">Tags</h4>
        <ul className="list d-flex flex-wrap text--md">
          <li className="list-item">
            <a className="link" href="#">
              New
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Recipes
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Coffee
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Desserts
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Healthy
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Tasty
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#">
              Tea
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar_widget sidebar_widget--feed">
        <h4 className="sidebar_widget-title">Our Instagram</h4>
        <ul className="list">
          <li className="list-item">
            <a
              className="link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Gallery Item"
                />
              </picture>
            </a>
          </li>
          <li className="list-item">
            <a
              className="link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Gallery Item"
                />
              </picture>
            </a>
          </li>
          <li className="list-item">
            <a
              className="link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Gallery Item"
                />
              </picture>
            </a>
          </li>
          <li className="list-item">
            <a
              className="link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="Gallery Item"
                />
              </picture>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar_widget sidebar_widget--archive">
        <h4 className="sidebar_widget-title">Archive</h4>
        <ul className="list d-flex flex-column text--md text--medium">
          <li className="list-item">
            <i className="icon-date icon"></i>
            <a className="link" href="#">
              January
            </a>
          </li>
        </ul>
      </div> */}
    </aside>
  );
};

export default SideBar;
