import Head from 'next/head'

import Layout from 'components/Layout'

import 'antd/dist/antd.css'
import '/styles/utility.min.css'
import '/styles/fontawesome/css/all.min.css'
import 'antd-button-color/dist/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ({ Component, pageProps }) => {
  return (
    <> 
      <Head>
        <meta charSet="UTF-8" />
        <title>Perlindungan Kesehatan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Perlindungan Kesehatan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
        <link rel="icon" href="/images/ico.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <style jsx global>{`
      body {
        font-size: 14px;
        padding-top: 79px;
      }
      section {
        padding: 60px 0;
      }
      .hover-pointer:hover {
        cursor: pointer;
      }
      .fw-500 {
        font-weight: 500 !important;
      }
      .text-danger-2 {
        color: #cf1322;
      }
      blockquote {
        border-left: 5px solid #ebebeb;
        margin: 1.5em 0px;
        padding: 0.5em 20px;
      }
      blockquote p::before {
        content: open-quote;
      }
      blockquote p::after {
        content: close-quote;
      }
      blockquote p {
        display: inline;
        font-size: 100%;
      }
      .border-type-1 {
        border: 1px solid rgb(0 0 0 / 4%);
      }
      .bor-rad-10px {
        border-radius: 10px;
      }
      .truncate-3 {
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .truncate-4 {
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      `}</style>
    </>
  )
}

export default App
