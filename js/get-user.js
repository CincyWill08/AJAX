$().ready(function(){

	get(1)
	.done(function(res) {
		CreateUserTable(res);
		console.log(res);
	})
	.fail(function(err) {
		console.error(err);
	});

});

function CreateUserTable(user){
	$("#idx").text(user.ID);
	$("#name").text(user.FirstName + " " + user.LastName);	
	$("#username").text(user.UserName);
	$("#phone").text(user.Phone);
	$("#email").text(user.Email);	
	$("#reviewer").text((user.IsReviewer ? "Yes" : "No"));
	$("#admin").text((user.Admin ? "Yes" : "No"));
}