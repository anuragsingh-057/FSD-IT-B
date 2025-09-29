// const url="https://dummyjson.com/users";
// const pr=fetch(url);
// pr.then(function(res){
//     res.json();
// })
// .then((data)=>{
//     console.log("Data:", data);
// })
// .catch((err)=>{
//     console.log("Error:", err);
// })
// .finally(()=>{
//     console.log("Indise Finally:");
// })


function addpara(){
    const para=document.createElement("p");
    para.textContent="Thus is a new para";
    para.style.color="Red";
    document.body.appendChild(para);
}