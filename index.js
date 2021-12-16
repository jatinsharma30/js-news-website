console.log("k");

//initialise the news api parameters
let source='bbc-news';
let apikey='54218257f39b46e8aa62a2f1d7cb98b6';

//grab news container
let newsAccordion=document.getElementById('newsAccordion');

//create an ajax get request
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`,true);
// what to do when response is ready
xhr.onload=function(){
    if (this.status==200){
        let json =JSON.parse(this.responseText);
        let articles=json.articles;

        let newsHtml="";
        console.log(articles);
        articles.forEach(function(element,index) {
            let news=`<div class="accordion-item">
                      <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    <b>Breaking News${index+1}: </b> ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a> </div>
            </div>
            </div>`
        newsHtml+=news;
    });
        newsAccordion.innerHTML=newsHtml;
    }
    else{
        console.log('some error occured')
    }
}
xhr.send();

