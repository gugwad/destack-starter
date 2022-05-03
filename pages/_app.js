import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
        <meta name="description" content="Meta description content goes here." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="10 Most Important Meta Tags You Need to Know for SEO" />
        <meta property="og:description" content="Some tags are vital for SEO. Others have little or no impact on rankings. Here&#039;s every type of meta tag you need to know about." />
        <meta property="og:url" content="https://www.searchenginejournal.com/important-tags-seo/156440/" />
        <meta property="og:site_name" content="Search Engine Journal" />
        <meta property="article:publisher" content="http://www.facebook.com/SearchEngineJournal" />
        <meta property="article:published_time" content="2020-07-28T14:00:30+00:00" />
        <meta property="article:modified_time" content="2020-07-31T14:12:12+00:00" />
        <meta property="og:image" content="https://cdn.searchenginejournal.com/wp-content/uploads/2020/07/important-meta-tags-5f203655f1aa8.jpg" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="840" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
