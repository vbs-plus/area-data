const fs = require("fs");
const path = require("path");
const request = require("request");
const colors = require("colors-console");
const types = require("./types");
const validator = require("validator");

module.exports = (type) => {
  return new Promise((resolve, reject) => {
    const typeText = types[type] || type;

    console.log(colors("blue", "--------------------"));
    console.log(colors("green", "[-- 抓取中 --] ") + typeText);

    request(`https://unpkg.com/china-division/dist/${type}.json`, (err, res, body) => {
      if (err || !validator.isJSON(body)) {
        console.log(colors("yellow", "[-- 抓取失败 --] ") + typeText);
        return resolve();
      }

      console.log(colors("green", "[-- 写入JSON文件 --] ") + typeText);
      fs.writeFile(path.resolve(__dirname, `../dist/${type}.json`), body, (err) => {
        if (err) {
          console.log(colors("yellow", "[-- 写入失败 --] ") + `${type}.json`);
          return resolve();
        }

        console.log(colors("green", "[-- 写入成功 --] ") + `${type}.json`);
        resolve();
      });
    });
  });
};
