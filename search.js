var timer_Id;
    let movies_div = document.getElementById('movies');
    async function searchnew(movie_name)
    {
        try{
            let res = await fetch(`http://www.omdbapi.com/?apikey=d806bd70&s=${movie_name}`);
            var data =  await res.json();
            console.log("data",data);
            return data;
        }
        catch(e){
            console.log("e",e);
        }
        
    }
    //searchMovie("inception");
    function appendnew(movies)
    {
        movies_div.innerHTML=null;
    if(movies === undefined)
    {
        return false;
    }else
    {
        movies.forEach(function(movie){
            
            let p = document.createElement('p');

            p.innerText = movie.Title;

            movies_div.append(p);
        });

    }
    }

   async function main(){
        let name = document.getElementById("movie").value;

        if(name.length < 3){
            return false;
        }
        var res = await  searchnew(name);
       // console.log("res",res);
        console.log("2",res.Search)
        appendnew(res.Search)
    }
    function debounce(func, delay){

        if(timer_Id){

        clearTimeout(timer_Id);
        }
        timer_Id = setTimeout(function(){
            func();
        },delay);

    }

