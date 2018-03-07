

$().ready(function(){

	list()
	.done(function(res) {
		buildUserTable(res);
		console.log(res);
	})
	.fail(function(err) {
		console.error(err);
	});

});

function buildUserTable(vendors){
	var tbody = $("#vendorlist");
	for(var vendor of vendors) {
		var row = "<tr>";
		row += "<td>" + vendor.ID + "</td>";
		row += "<td>" + vendor.Code + "</td>";
		row += "<td>" + vendor.Name + "</td>";
		row += "<td>" + vendor.Address + "</td>";
		row += "<td>" + vendor.City + "</td>";
		row += "<td>" + vendor.State + "</td>";
		row += "<td>" + vendor.Zip + "</td>";
		row += "<td>" + vendor.Phone + "</td>";
		row += "<td>" + vendor.Email + "</td>";
		row += "<td>" + (vendor.IsRecommended == true ? "Yes" : "No") + "</td>";
		row += "</tr>";
		tbody.append(row);
	}
}
