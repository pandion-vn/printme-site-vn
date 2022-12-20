import { formatDate, truncateStr } from '@/common/utils';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import Link from 'next/link';
import SideBar from '../widgets/sidebar';

interface HomeBlogListingProps extends WithChildren {
  posts: Post[];
}

const HomeBlogListing = ({ posts }: HomeBlogListingProps) => {
  return (
    <main className="section">
      <div className="blog_container container sticky-parent">
        <div className="blog d-flex flex-column">
          {posts.map((post, index) => (
            <div key={index} className="blog_post">
              <div className="media">
                {post.feature_image ? (
                  <picture>
                    <source
                      data-srcset={post.feature_image}
                      srcSet={post.feature_image}
                      type="image/webp"
                    />
                    <img
                      className="lazy"
                      data-src={post.feature_image}
                      src={post.feature_image}
                      alt=""
                    />
                  </picture>
                ) : (
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
                      alt=""
                    />
                  </picture>
                )}
                {/* <ul className="blog_tags text--medium text--sm">
                  <li className="blog_tags-tag">Recipes</li>
                  <li className="blog_tags-tag">Food</li>
                </ul> */}
              </div>
              <div className="main">
                <Link className="main_title h3" href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
                <ul className="meta">
                  <li className="meta_item">
                    <i className="icon-date icon"></i>{' '}
                    {formatDate(post.published_at)}
                  </li>
                  {/* <li className="meta_item">
                    <i className="icon-comment icon"></i> No Comments
                  </li>
                  <li className="meta_item meta_item--pin">
                    <i className="icon-pin icon"></i> Featured
                  </li> */}
                </ul>
                <p className="main_text">{truncateStr(post.excerpt, 200)}</p>
              </div>
            </div>
          ))}

          {/* <div className="blog_pagination d-flex justify-content-between align-items-center">
            <a className="nav-link" href="#">
              <i className="icon-chevron-left icon"></i>
            </a>
            <ul className="pages d-flex">
              <li className="pages_page">
                <a className="link link--current" href="#">
                  1
                </a>
              </li>
              <li className="pages_page">
                <a className="link" href="#">
                  2
                </a>
              </li>
              <li className="pages_page">
                <a className="link" href="#">
                  3
                </a>
              </li>
              <li className="pages_page">
                <a className="link" href="#">
                  4
                </a>
              </li>
            </ul>
            <a className="nav-link" href="#">
              <i className="icon-chevron-right icon"></i>
            </a>
          </div> */}
        </div>

        <SideBar />
      </div>
    </main>
  );
};

export default HomeBlogListing;
