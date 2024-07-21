var xhr=new XMLHttpRequest();
var url="./health.json";

xhr.open('GET',url,'true');
xhr.responseType='json';

xhr.onload=function(){
    var articles=xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        //This article class is used in the creation of Elements in the specific div

        var title=document.createElement('h1');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;
        
        
        //Header for WaysHeader
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve :';
       //List item of ways to acheive
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            var listItem =  document.createElement('li')
            listItem.textContent= way;
            waysList.appendChild(listItem);
        });

        
        //Header for Benefit
        var benefitsHeader =document.createElement('h3');
        benefitsHeader.textContent='Benefits :';
        //list for Benefit
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit){
            var listItem = document.createElement('li')
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    }); 
}

xhr.send();