const { appendFileSync, readdirSync, readFileSync } = require('fs');

const join = () => {
  const pages = readdirSync('./pages');
  console.log(pages);

  for (let page of pages) {
    console.log(page);
    appendFileSync('joined.txt', `${page}\n\n${readFileSync(`./pages/${page}`).toString()}\n\n`)
  }
};

join();
