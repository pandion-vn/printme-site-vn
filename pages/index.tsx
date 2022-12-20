import { PostsOrPages } from '@tryghost/content-api';
import { getAllPosts } from '@/common/ghost';
import HomeBlogListing from '@/components/home/home_blog_listing';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';

interface HomeProps extends WithChildren {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  const breadcrumbs = [
    {
      name: 'Danh sách bài viết',
      path: '/',
      active: true,
    },
  ];

  return (
    <Layout>
      <Heading title="Trang chủ" breadcrumbs={breadcrumbs} />
      <HomeBlogListing posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getAllPosts({})) as PostsOrPages;

  return { props: { posts } };
}
