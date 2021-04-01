$(document).ready(function () {

    load();

})

function load() {

    $.ajax({
        type: "GET",
        url: "https://newsapi.org/v2/everything?" +
            "q=Apple&" +
            "from=2021-03-31&" +
            "sortBy=popularity&" +
            "apiKey=04e1dfbc8807455ba9aef4658665a9af",             
        dataType: "json",        
        success: function (result) {
            debugger;                        

            //start instancia el datatables            
            var E2 = document.getElementById("mydataOculto");
            E2.innerHTML = "";
            var ab = result.articles[0].content;
            E2.innerHTML = ab;

            var E1 = document.getElementById("mydatatitle");
            E1.innerHTML = "";
            var ab1 = result.articles[0].title;
            E1.innerHTML = ab1;
                                            
            var E3 = document.getElementById("mydataurl");            
            var ab2 = result.articles[0].url;
            E3.setAttribute("href",  ab2);





            var E21 = document.getElementById("mydataOculto1");
            E21.innerHTML = "";
            var ab10 = result.articles[15].content;
            E21.innerHTML = ab10;

            var E11 = document.getElementById("mydatatitle1");
            E11.innerHTML = "";
            var ab11 = result.articles[15].title;
            E11.innerHTML = ab11;

            var E31 = document.getElementById("mydataurl1");
            var ab21 = result.articles[15].url;
            E31.setAttribute("href", ab21);





            var E212 = document.getElementById("mydataOculto2");
            E212.innerHTML = "";
            var ab100 = result.articles[9].content;
            E212.innerHTML = ab100;

            var E110 = document.getElementById("mydatatitle2");
            E110.innerHTML = "";
            var ab110 = result.articles[9].title;
            E110.innerHTML = ab110;

            var E310 = document.getElementById("mydataurl2");
            var ab210 = result.articles[9].url;
            E310.setAttribute("href", ab210);

        }

    });





}