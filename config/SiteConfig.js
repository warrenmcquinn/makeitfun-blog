module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Make it Fun – Blog', // Navigation and Site Title
  siteTitleAlt: 'A first-run blog by Warren McQuinn', // Alternative Site title for SEO
  siteUrl: 'https://makeitfun-blog.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Why make it hard? Make it fun. A blog for everyone, by Warren McQuinn', // Your site description
  author: 'Warren McQuinn', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@minimal', // Twitter Username - Optional
  // ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#777DA7',
  backgroundColor: '#575B7A',

  // Settings for typography.js
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',
};
// $primary: #777DA7
// $primary-dark: #575B7A
// $primary-light: #90C2E7
// $green-dark: #092327
// $green: #0B5351
// $green-bright: #00A9A5
