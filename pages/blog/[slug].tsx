import { PostsOrPages } from '@tryghost/content-api';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { Meta } from '@/types/seo';
import { formatDate, truncateStr } from '@/common/utils';
import { getAllPosts, getPostBySlug } from '@/common/ghost';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import SideBar from '@/components/widgets/sidebar';

interface BlogDetailProps extends WithChildren {
  post: Post;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const breadcrumbs = [
    {
      name: 'Trang chủ',
      path: '/',
      active: false,
    },
    {
      name: truncateStr(post.title, 25),
      path: `/blog/${post.slug}`,
      active: true,
    },
  ];

  const meta = {
    title: post.title ?? 'Printer blog solutions',
    description: post.excerpt ?? 'Everything about printer',
    keywords: post.primary_tag,
  } as Meta;

  return (
    <Layout meta={meta}>
      <Heading title={post.title} breadcrumbs={breadcrumbs} />

      <main className="section">
        <div className="post_container container sticky-parent">
          <div className="post">
            <article className="post_article text--md">
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
                <div
                  className="main_text"
                  dangerouslySetInnerHTML={{
                    __html: post.html,
                  }}
                />
              </div>
            </article>
            {/* <section className="post_comments">
              <h4 className="post_comments-title">Comments</h4>
              <ul className="post_comments-list d-flex flex-column">
                <li className="post_comments-list_item">
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
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="main">
                    <div className="main_panel d-flex flex-wrap text--sm">
                      <span className="main_panel-timestamp">
                        29 February, 2022 3:23 pm
                      </span>
                      <a className="main_panel-reply text--bold" href="#">
                        {' '}
                        <i className="icon-reply icon"></i> Reply{' '}
                      </a>
                      <h5 className="main_panel-name">Nahia Colunga</h5>
                    </div>
                    <p className="main_comment text--md">
                      Elementum est auctor ut integer leo viverra condimentum
                      risus. Dignissim vitae suspendisse praesent ipsum in leo,
                      ac non tempus. Nullam ornare sit lacus tellus lacus quis
                      proin quam ultrices aenean.
                    </p>
                  </div>
                </li>
                <li className="post_comments-list_item" data-reply="true">
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
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="main">
                    <div className="main_panel d-flex flex-wrap text--sm">
                      <span className="main_panel-timestamp">
                        29 February, 2022 3:23 pm
                      </span>
                      <a className="main_panel-reply text--bold" href="#">
                        {' '}
                        <i className="icon-reply icon"></i> Reply{' '}
                      </a>
                      <h5 className="main_panel-name">Rutherford Brannan</h5>
                    </div>
                    <p className="main_comment text--md">
                      Elementum est auctor ut integer leo viverra condimentum
                      risus. Dignissim vitae suspendisse praesent ipsum.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="post_reply">
              <h4 className="post_reply-title">Write a Comment</h4>
              <form
                className="post_reply-form d-flex flex-column"
                action="#"
                method="post"
                data-type="reply"
              >
                <fieldset className="post_reply-form_fieldset d-flex flex-column">
                  <textarea
                    className="field required"
                    name="commentText"
                    id="commentText"
                    placeholder="Comment"
                  ></textarea>
                  <input
                    className="field required"
                    type="text"
                    name="commentName"
                    id="commentName"
                    placeholder="Name"
                  />
                  <input
                    className="field required"
                    type="text"
                    data-type="email"
                    name="commentEmail"
                    id="commentEmail"
                    placeholder="Email"
                  />
                  <input
                    className="field"
                    type="text"
                    name="commentWebsite"
                    id="commentWebsite"
                    placeholder="Website"
                  />
                </fieldset>
                <div className="checkbox">
                  <input type="checkbox" id="saveMyName" />
                  <label className="label text--sm" htmlFor="saveMyName">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                    <i className="icon-check icon"></i>
                  </label>
                </div>
                <button className="btn" type="submit">
                  Submit Comment
                </button>
              </form>
            </section> */}
            <div className="post_nav d-flex flex-wrap">
              <div className="post_nav-item post_nav-item--prev">
                <span className="post_nav-item_label section_header-subtitle">
                  previous
                </span>
                <div className="post_nav-item_main">
                  <a className="nav-link" href="#">
                    <i className="icon-chevron-left"></i>
                  </a>
                  <a className="title h4" href="#">
                    Tea: Interesting Tea Traditions
                  </a>
                </div>
              </div>
              <div className="post_nav-item post_nav-item--next">
                <span className="post_nav-item_label section_header-subtitle">
                  next
                </span>
                <div className="post_nav-item_main">
                  <a className="title h4" href="#">
                    Borscht according to a special recipe
                  </a>
                  <a className="nav-link" href="#">
                    <i className="icon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <SideBar />
        </div>
      </main>
    </Layout>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const posts = (await getAllPosts({})) as PostsOrPages;
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return { props: { post } };
}
