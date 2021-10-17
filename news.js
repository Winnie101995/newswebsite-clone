// console.log("Hello World")


const API_KEY = "346c08a9192432eb5c20565a59bd15b2";
const baseURL = "https://gnews.io/api/v4";
const path = "/top-headlines";
const query = `?token=${API_KEY}`;

// const fetchData = () => {
//     const url = baseURL + path + query;
//     const fromFetch = fetch(url);
//     fromFetch
//         .then((success) => {
//         return success.json();
//     })
//         .then((success) => {
//         console.log(success.articles);
//     });
// };

const fetchAsync = async () => {
    const url = baseURL + path + query;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const articles = data.articles;
    const totalArticles = data.totalArticles;
    // console.log(`Title is: ${articles[7].title}`);

    const htmlTitleArea = document.getElementById("titleArea");
    // const listItem = document.createElement("li");
    // listItem.innerHTML = articles[7].title;
    // htmlTitleArea.appendChild(listItem);

   
    // const listItem2 = document.createElement("li");
    // listItem2.innerHTML = articles[7].title;
    // htmlTitleArea.appendChild(listItem2);
    
    articles.map((singleArticle) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = singleArticle.title;
        htmlTitleArea.appendChild(listItem);
    });

    
    return;
};
    function renderArticle(singleArticle) {
        return
        <li class="mb-3 align-self-center article">
        ${article.title}
        <img src="${article.urlToImage}" alt="Snow" />
      </div>
        <i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
        <h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
      <p><i class="fa fa-envelope"></i>${article.content}</p>
    </li>
  `;
}
    


fetchAsync();
