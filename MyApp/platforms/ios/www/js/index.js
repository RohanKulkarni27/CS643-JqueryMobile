$(document).ready(function(){
movieList();
});

function movieList(){
    str="";
    $.ajax({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=34af113de49540b8c40ab3d1d53a724c',
       
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        data:{
            format:"json"
        },
        success:function(response){
            console.log(response);
           // console.log(response.results.length);
            for(var i=0;i<response.results.length;i++){
                str=str+'<li><a href="#page'+response.results[i].id+'" onclick=movieDetails('+response.results[i].id+'); data-transition="flip" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+response.results[i].title+'</a></li>';
            }
           $("#movieList").append(str);
          
        }
});
}

function movieDetails(movieID){
    
    str="";
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key=34af113de49540b8c40ab3d1d53a724c&language=en-US',
       
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        data:{
            format:"json"
        },
        success:function(response){
            console.log(response);
         
           // console.log(response.results.length);
           str='<div data-role="page" id="page'+movieID+'" data-theme="b">';
           str=str+'<div data-role="header" data-position="fixed">';
           str=str+'<a href="#" data-rel="back" data-icon="back" data-iconpos="notext">Back</a>';
           str=str+'<h1 class="titles">'+response.title+'</div>';
          
           str=str+'<div style="text-align:center;height:15%;"><img width="400" src="https://image.tmdb.org/t/p/w500/'+response.poster_path+'"></div>';
           
           str=str+'<div>';
           
           str=str+'<h2 class="titles">Story Line: </h2>';
           str=str+'<p class="details">'+response.overview+'</p>';
           
           str=str+'<hr />';
           
           str=str+'<p><span class="titles titleHead">Tag Line: </span>';
           str=str+'<span class="details">'+response.tagline+'</span></p>';
           
           str=str+'<p><span class="titles titleHead">Genres: </span>';
           for(var i=0;i<response.genres.length;i++){
               str=str+'<span class="details">'+response.genres[i].name+',</span>';
            }
           str=str+'</p>';

          
           
           str=str+'</div>';

           str=str+'<hr />';

           str=str+'<div>';

           str=str+'<h2 class="titles">Details</h2>';

           str=str+'<p><span class="titles titleHead">Official Site: </span>';
           str=str+'<a href="'+response.homepage+'">'+response.title+'</a></p>';

           str=str+'<p><span class="titles titleHead">Language: </span>';
           str=str+'<span class="details">'+response.original_language+'</span></p>';

           str=str+'<p><span class="titles titleHead">Release Date: </span>';
           str=str+'<span class="details">'+response.release_date+'</span></p>';

           str=str+'</div>';

           str=str+'<hr />';

           str=str+'<div>';
           str=str+'<h2 class="titles">Box Office:</h2>';
           str=str+'<p><span class="titles titleHead">Budget: </span>';
           str=str+'<span class="details">$'+response.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'</span></p>';
           str=str+'<p><span class="titles titleHead">Cumulative World Wide Gross: </span>';
           str=str+'<span class="details">$'+response.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'</span></p>';
           str=str+'</div>';

           str=str+'<hr />';

           str=str+'<div>';
           str=str+'<h2 class="titles">Company Credits</h2>';
           str=str+'<p><span class="titles titleHead">Production co: </span>';
           for(var i=0;i<response.production_companies.length;i++){
               str=str+'<span class="details">'+response.production_companies[i].name+',</span>';
           }
           str=str+'</p>';
           str=str+'</div>';
           
           str=str+'<div data-role="footer" data-position="fixed">';
           str=str+'<h1>Copyright 2018</h1>'
           str=str+'</div>';

           str=str+'</div>';
           $("body").append(str);
          
          
        }
    });
   
}
//<a href="#" data-transition="flip" class="ui-btn ui-btn-icon-right ui-icon-carat-r">

/*<div data-role="page" id="page2" data-theme="b">
            <div data-role="header" data-position="fixed">
                <a href="#" data-rel="back" data-icon="back" data-iconpos="notext">Back</a>
                <h1>Page 2</h1>
            </div>
            <div data-role="main" class="ui-content" ></div>
            <div data-role="footer" data-position="fixed">
                    <h1>Copyright 2018</h1>
            </div>
        </div>*/