
axios.get("/rest-ajax").then(function(res){
	console.log(res);
});
axios.post("/rest-ajax", {
	username: '홍길동'
}).then(function(res){
	console.log(res);
});
axios.delete("/rest-ajax", {
	data:{
		id: 12
	}
}).then(function(res){
	console.log(res);
});
axios.put("/rest-ajax", {
	id: 22,
	username: "홍길만"
}).then(function(res){
	console.log(res);
});
