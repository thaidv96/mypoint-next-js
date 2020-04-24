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
    </Head>
  </div>
);

PageHead.propTypes = {
  title: PropTypes.string,
};

PageHead.defaultProps = {
  title: "TODO DEFAULT TITLE",
};

export default PageHead;
