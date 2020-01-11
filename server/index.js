const Nightmare = require('nightmare');
const cheerio = require('cheerio');

const nightmare = Nightmare({ show: false });
const url = 'http://localhost:4000/';

nightmare
  .goto(url)
  .wait('#root')
  .evaluate(() => document.querySelector('body').innerHTML)
  .end()
  .then(response => {
    console.log(getData(response));
  }).catch(err => console.log);

  let getData = html => {
    data = [];
    const $ = cheerio.load(html);
    $('a').each((i,elem)=>data.push(elem.attribs.href));
    return data;
  }