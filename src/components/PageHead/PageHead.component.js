import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import reset from "~/theme/reset.styles";
import transitionStyles from "~/theme/page-transitions.styles";

const PageHead = ({ title }) => (
  <div className="PageHead">
    <Head>
      <meta charset="UTF-8" />
      <title>Homepage</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/static/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/dist/css/fonts.css" />
      <link rel="stylesheet" href="/static/dist/css/all.min.css" />
      <link rel="stylesheet" href="/static/dist/css/owl.carousel.min.css" />
      <link
        rel="stylesheet"
        href="/static/dist/css/owl.theme.default.min.css"
      />
      <link rel="stylesheet" href="/static/dist/css/style.css" />
      <link rel="stylesheet" href="/static/dist/css/style_responsice.css" />

      <script
        type="text/javascript"
        src="/static/dist/js/jquery-3.4.1.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/dist/js/bootstrap.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/dist/js/owl.carousel.min.js"
      ></script>
      {/* <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#F7F7F7" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="TODO INFO/static/DISTRICTES" />
      <meta name="twitter:image" content="/static/favicons/og-image.jpg" />
      <meta name="twitter:title" content="TODO INFODISTRICTES" />
      <meta name="twitter:app:country" content="PT" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="stylesheet" href="/static/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/dist/css/fonts.css" />
      <link rel="stylesheet" href="/static/dist/css/all.min.css" />
      <link rel="stylesheet" href="/static/dist/css/owl.carousel.min.css" />
      <link
        rel="stylesheet"
        href="/static/dist/css/owl.theme.default.min.css"
      />
      <link rel="stylesheet" href="/static/dist/css/style.css" />
      <link rel="stylesheet" href="/static/dist/css/style_responsice.css" />
      <script
        type="text/javascript"
        src="/static/dist/js/jquery-3.4.1.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/dist/js/bootstrap.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/dist/js/owl.carousel.min.js"
      ></script>

      <meta name="msapplication-TileColor" content="#F7F7F7" />
      <meta
        name="msapplication-config"
        content="/static/favicons/browserconfig.xml"
      />
      <meta
        name="msapplication-TileImage"
        content="/static/favicons/ms-icon-144x144.png"
      />
      <meta property="og:image" content="/static/og-image.jpg" />
      <meta property="og:image:width" content="201" />
      <meta property="og:image:height" content="201" />
      <meta property="og:title" content="TODO INFODISTRICTES" />
      <meta property="og:description" content="TODO INFODISTRICTES" />
      <meta property="og:url" content="TODO INFODISTRICTES" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" /> */}
    </Head>
    {/* <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {transitionStyles}
    </style> */}
  </div>
);

PageHead.propTypes = {
  title: PropTypes.string,
};

PageHead.defaultProps = {
  title: "TODO DEFAULT TITLE",
};

export default PageHead;
