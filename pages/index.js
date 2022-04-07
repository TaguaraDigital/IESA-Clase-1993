import Head from 'next/head'

import { getPosts } from '../services'
import { Categories, PostCard, PostWidget } from '../components'

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>IESA 2050 Blog</title>
        <link rel="icon" href="/assets/images/logo/td.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-12 lg:col-span-8 lg:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <div key={post.node.id} className="test">
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

// Fetch data at build time
export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
