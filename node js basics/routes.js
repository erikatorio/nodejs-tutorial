function requestHandler(req, res) {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>ODAAT</title></head>');
    res.write('<body><h1>ONE DAY AT A TIME</h1></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/elena') {
    res.write('<html>');
    res.write('<head><title>Elena Alvarez</title></head>');
    res.write('<body><h1>DALE BLANQUITA DALE</h1></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/alex') {
    res.write('<html>');
    res.write('<head><title>Alex Alvarez</title></head>');
    res.write('<body><h1>DALE PAPITO DALE</h1></body>');
    res.write('</html>');
    return res.end();
  }
}

module.exports = requestHandler;