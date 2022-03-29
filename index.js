//Api Key = 25817be7157f4c089ea3055a8eaac0b8
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=25817be7157f4c089ea3055a8eaac0b8

//initialize the variable
let source = 'bbc-news'
let api_key = `25817be7157f4c089ea3055a8eaac0b8`;
let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`;
let newsAccordion = document.getElementById("newsAccordion")
//create an Ajax get request
const xhr = new XMLHttpRequest()
xhr.open("GET", url, true)
//when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let jsonResponse = JSON.parse(this.responseText)
        let articles = jsonResponse.articles;
        //console.log(jsonResponse)
        console.log(articles)
        let newsHTML = "";
        articles.forEach((element, index) => {
            let news = `
                <div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}">
                                <b>Breaking News:</b> ${index + 1} ${element['title']}
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                        data-parent="#newsAccordion">
                        <div class="card-body">
                        ${element['content']} .  <a href="${element['url']}" target="_blank">Read more here...</a>
                        </div >
                    </div >
                </div > `;
            newsHTML += news
        })

        newsAccordion.innerHTML = newsHTML;

    } else {
        console.log("Some error is occured")
    }
}

xhr.send()


