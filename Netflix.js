const accordionsContent = document.querySelectorAll(".accordion-content");

accordionsContent.forEach((item,index)=>{
    let header = item.querySelector("header");
    header.addEventListener("click",()=>{
        item.classList.toggle("open");  

        let description = item.querySelector(".description")
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fa-times")
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-times","fa-plus")
        }
        console.log(description);
    })

})
// const accordionsContent = document.querySelectorAll("#accordion");

// accordionsContent.forEach((item,index)=>{
//     let header = item.querySelector("label");
//     header.addEventListener("click",()=>{
//         item.classList.toggle("open");  

//         let content = item.querySelector(".content")
//         if(item.classList.contains("open")){
//             content.style.height = `${content.scrollHeight}px`;
//             item.querySelector("i").classList.replace("fa-plus","fa-times")
//         }else{
//             content.style.height = "0px";
//             item.querySelector("i").classList.replace("fa-times","fa-plus")
//         }
//         console.log(content);
//     })

// })
