(function(){

//Changes the navbar titles colour
$("#nav-text").removeClass("text-dark").addClass(function(){
    return ["text-primary", "text-danger", "text-success", "text-warning", "text-white"][Math.floor(Math.random() * 5) ];
});


}());
