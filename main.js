
// azrze aravr esristvisaa 
const http=new EasyHTTP;


//GET 
/*
http.get("https://jsonplaceholder.typicode.com/users")
.then(data=> console.log(data))
.catch(err=> console.log(err));

*/




const data={
  name:"Jhone Doe",
  username:"jondoe",
  email:"skdjksd@gmail.com"
}
//POST 
/*
http.post("https://jsonplaceholder.typicode.com/users",data)
.then(data => console.log(data))
.catch(err => console.log(err));
*/



// PUT
/*
http.put("https://jsonplaceholder.typicode.com/users/2",data)
.then(data => console.log(data))
.catch(err => console.log(err));

*/


// DELETE 

http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err => console.log(err));

