

class EasyHTTP{

 
  async get(url){
    // dzveli fetch it  da mxolod promisebt 
    /*
       return new Promise((resolve,reject)=>{
         fetch(url)
         .then(res=> res.json())
         .then(data=>resolve(data))
         .catch(err=>reject(err));
       })
    */
       const response=await fetch(url);
       const resData=await response.json();
       return resData;
   }
   

   async post(url,data){

    /*
        return new Promise((resolve,reject)=>{
          fetch(url,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(data)

          })
          .then(res=> res.json())
          .then(data=>resolve(data))
          .catch(err=>reject(err));
        })
        */
         
         const  response= await fetch(url,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(data)
          })
         const resData=await response.json();
         return resData;

         
        
    }


    async put(url,data){
         
          const response=await  fetch(url,{
             method:"PUT",
             headers:{
               "content-type":"application/json"
             },
             body:JSON.stringify(data)
           })
          const resData=await response.json();
          return resData;
         
     }


        async delete(url){
             
              const response=await  fetch(url,{
                  method:"DELETE",
                  headers:{
                    "content-type":"application/json"
                  }
                })
              const resData=await "Resource Deleted";
              return resData;
              
          }


}
