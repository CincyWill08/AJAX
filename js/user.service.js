var url="http://prs.doudsystems.com";
var seg1 = "/Users";

$().ready(function() {
});
	
function list(){
	return $.getJSON(url+seg1+"/List");

}

function get(id){
	return $.getJSON(url+seg1+"/Get/"+id);

}
