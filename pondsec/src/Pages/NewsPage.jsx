// import NewsCard from "../Components/NewsCard"
// import { useState } from 'react'

// function NewsPage() {

// // Requesting data from GoogleNews API

// async function getNews(){

//    const res = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${value}&freshness=Day&textFormat=Raw&safeSearch=Off`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-bingapis-sdk": "true",
// 		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
// 		"x-rapidapi-key": "51ecb98dacmsh8b42eacd9a0d27dp1442d1jsn1941119d7cf1"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// const newsData = await res.json();
// return newsData.value;

// }
//  const [data, getData ] = useState();



//     return (
//         <div>
//             <ul>
//                 {data.map(info => (
//                     <NewsCard {...info} />
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default NewsPage
