export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  // Check if the request comes from a web browser
  if (/Mozilla|Chrome|Safari|Firefox/.test(userAgent)) {
    // Redirect web browsers to a specific page
    res.writeHead(302, {
      Location: 'https://bio.link/alone_spider', // Redirect URL for web browsers
    });
    res.end();
  } else {
    // Allow streaming apps to access the .m3u file directly
    res.writeHead(302, {
      Location: 'https://raw.githubusercontent.com/ACM-Network/Tv.m3u/main/ACM%20Network.m3u',
    });
    res.end();
  }
}
