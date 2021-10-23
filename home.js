let news_div=document.getElementById("news");

async function  fun(){
    //news_div.innerHtml=null;
    
    let res= await fetch(`http://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=cc09f61609b54bd8bcc8373e3b1bc841`);


    var data=await res.json();

    var articles=data.articles;
    showdetails(data)

    
    console.log(data);
}
fun();

function showdetails(article){

let div=document.createElement("div");


    let newauhor=document.createElement('p');
    newauhor.innerText=article.author;

    let newconten=document.createElement('p');
    newconten.innertext=article.content;

    let newdesc=document.createElement('p');
    newdesc.innertext=article.description;


    div.append(newconten,newauhor,newdesc);

    news_div.append(div)
}
//cc09f61609b54bd8bcc8373e3b1bc841