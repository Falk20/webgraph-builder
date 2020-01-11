const needle = require('needle');
const cheerio = require('cheerio');

needle.get('https://www.facebook.com/people/%D0%AF%D0%BD%D0%B0-%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F/100035700768682', function(error, response) {
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(response.body);
    console.log(response.headers['content-type'])
    console.log($('img._11kf.img')[0].attribs.alt);
  }
  console.log(response.statusCode);
    
});