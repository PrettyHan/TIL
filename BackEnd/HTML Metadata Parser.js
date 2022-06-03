/* 
Install
npm install html-metadata-parser
yarn install html-metadata-parser
const { parser } = require('html-metadata-parser');

parser('https://www.youtube.com/watch?v=eSzNNYk7nVU').then(result=>{
   console.log(JSON.stringify(result, null, 3));
})
// async 
const { parser } = require('html-metadata-parser');
(async () => {
    var result = await parse('https://www.youtube.com/watch?v=eSzNNYk7nVU');
    console.log(JSON.stringify(result, null, 3));
})();
// result

{
   "og": {
      "site_name": "YouTube",
      "url": "https://www.youtube.com/watch?v=eSzNNYk7nVU",
      "title": "Rebuilding iOS 15 with Tailwind CSS",
      "image": "https://i.ytimg.com/vi/eSzNNYk7nVU/maxresdefault.jpg",
      "description": "In this video, I'll show you how to rebuild the new Notification Summary UI from iOS 15 using Tailwind CSS.Source code: https://play.tailwindcss.com/kY4LYXwsNZ",
      "type": "video.other"
   },
   "meta": {
      "title": "Rebuilding iOS 15 with Tailwind CSS",
      "description": "In this video, I'll show you how to rebuild the new Notification Summary UI from iOS 15 using Tailwind CSS.Source code: https://play.tailwindcss.com/kY4LYXwsNZ"
   },
   "images": []
}
*/


var link = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"

const { parser } = require('html-metadata-parser');
(async () => {
    var a = await parser(link);
    const result= JSON.stringify(a, null, 3);
    console.log(a.meta) // meta로 묶고 stringify 처리
})();


