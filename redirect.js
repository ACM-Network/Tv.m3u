export default function handler(req, res) {
  // Get the User-Agent header from the request
  const userAgent = req.headers['user-agent'] || '';

  // Check if the User-Agent indicates a web browser
  if (/Mozilla|Chrome|Safari|Firefox/.test(userAgent)) {
    // If it's a browser, redirect to the webpage
    res.writeHead(302, {
      Location: 'https://bio.link/alone_spider', // The URL for browser users
    });
    res.end();
  } else {
    // If it's not a browser (likely a streaming app), allow access to the .m3u file
    res.writeHead(302, {
      Location: 'https://raw.githubusercontent.com/ACM-Network/Tv.m3u/main/ACM%20Network.m3u',
    });
    res.end();
  }
}
