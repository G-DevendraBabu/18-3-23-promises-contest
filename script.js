
//--selecting buttons and tables from html;
let button=document.getElementById("btn");
button.addEventListener("click",execute);
let table1=document.getElementById("prom1");
let table2=document.getElementById("prom2");
let table3=document.getElementById("prom3");


//-----making the tables not visible at first
table1.style.display="none";
table2.style.display="none";
table3.style.display="none";


//---------------------promise 1
function PromiseAPI1()
{
    return new Promise((resolve,reject)=>
    {

        //-----creating settimeout for 1 sec delay
      setTimeout(()=>{
        let p1=  fetch("https://dummyjson.com/posts")
            .then((response)=>response.json())
            .then((data)=>
            {

                let act_data=data.posts;
                if(act_data)
                {
                    resolve(true);
                }
                else
                {
                    reject(false);
                }

                //----for the creation of table header


                let th=document.createElement("thead");
                th.style.color="red";
                let id_td=document.createElement("td");
                let title_td=document.createElement("td");  
                let body_td=document.createElement("td");



                //--inserting the names of the each column

                id_td.innerHTML="ID";
                title_td.innerHTML="TITLE";
                body_td.innerHTML="BODY";

                //appending to the thead

                th.appendChild(id_td);
                th.appendChild(title_td);
                th.appendChild(body_td);
                
                table1.appendChild(th)

                //using for loop iterating all over the data and storing in the table 
                
                for(let i=0;i<act_data.length;i++)
                {

                    //creating new table row and table_data to store data


                    let tr=document.createElement("tr");
                    let id_td=document.createElement("td");
                    let title_td=document.createElement("td");
                    let body_td=document.createElement("td");


                    // fetching from API and storing data in td
                    id_td.innerHTML=act_data[i].id;
                    title_td.innerHTML=act_data[i].title;
                    body_td.innerHTML=act_data[i].body;


                    //appending the table data to table_row

                    tr.appendChild(id_td);
                    tr.appendChild(title_td);
                    tr.appendChild(body_td);
                    
                    table1.appendChild(tr)

                    // console.log("ID--> " , act_data[i].id  + "  TITLE--> ",act_data[i].title  + "  BODY--> ",act_data[i].body);
                }
                   
            })
            .catch((error)=>{
                
                console.log("ERROR  -- " ,error)});
        },1000);
       
    })
}

//---------------------promise 2
function PromiseAPI2()
{
    return new Promise((resolve,reject)=>
    {
        //-----creating settimeout for 2 sec delay

        setTimeout(()=>{  
        let p1=  fetch("https://dummyjson.com/products")
            .then((response)=>response.json())
            .then((data)=>
            {

                let act_data=data.products;
                
                    if(act_data)
                    {
                        resolve(true);
                    }
                    else
                    {
                        reject(false);
                    }
               
                 //----for the creation of table header


                let th=document.createElement("thead");
                th.style.color="red";
                let id_td=document.createElement("td");
                let title_td=document.createElement("td");  
                let description_td=document.createElement("td");
                let price_td=document.createElement("td");
                let discount_price_td=document.createElement("td");
                

                //--inserting the names of the each column


                id_td.innerHTML="ID";
                title_td.innerHTML="TITLE";
                description_td.innerHTML="DESCRIPTION"
                price_td.innerHTML="PRICE";
                discount_price_td.innerHTML="DISCOUNT PERCENTAGE";


                //appending to the thead


                th.appendChild(id_td);
                th.appendChild(title_td);
                th.appendChild(description_td);
                th.appendChild(price_td);
                th.appendChild(discount_price_td);

                table2.appendChild(th);


                //using for loop iterating all over the data and storing in the table 


                for(let i=0;i<act_data.length;i++)
                {

                    //creating new table row and table_data to store data

                    let tr=document.createElement("tr");
                    let id_td=document.createElement("td");
                    let title_td=document.createElement("td");
                    let description_td=document.createElement("td");
                    let price_td=document.createElement("td");
                    let discount_price_td=document.createElement("td");


                    // fetching from API and storing data in td


                    id_td.innerHTML=act_data[i].id;
                    title_td.innerHTML=act_data[i].title ;
                    description_td.innerHTML=act_data[i].description;
                    price_td.innerHTML=act_data[i].price ;
                    discount_price_td.innerHTML=act_data[i].discountPercentage;


                    //appending the table data to table_row


                    tr.appendChild(id_td);
                    tr.appendChild(title_td);
                    tr.appendChild(description_td);
                    tr.appendChild(price_td);
                    tr.appendChild(discount_price_td);

                    table2.appendChild(tr)

                    // console.log("ID--> " , act_data[i].id  + "  TITLE--> ",act_data[i].title  + "  DESCRIPTION--> ",act_data[i].description + " PRICE --> " ,act_data[i].price  +  " DISCOUNT PERCENTAGE--> " ,act_data[i].discountPercentage);
                }
                
                    
            })
            .catch((error)=>{
                reject(false,error);
                console.log("ERROR  -- " ,error)});
        },2000);                
    })
}

//---------------------promise 3----------------------

function PromiseAPI3()
{
    return new Promise((resolve,reject)=>
    {

        //-----creating settimeout for 2 sec delay

      setTimeout(()=>{
        let p1=  fetch(" https://dummyjson.com/todos")
            .then((response)=>response.json())
            .then((data)=>
            {

                let act_data=data.todos;
                if(act_data)
                {
                    resolve(true);
                }
                else
                {
                    reject(false);
                }

                  //----for the creation of table header


                let th=document.createElement("thead");
                th.style.color="red";
                let id_td=document.createElement("td");
                let todo_td=document.createElement("td");  
                let completed_td=document.createElement("td");
                let user_td=document.createElement("td");

                   //--inserting the names of the each column


                id_td.innerHTML="ID";
                todo_td.innerHTML="TODO"
                completed_td.innerHTML="COMPLETED";
                user_td.innerHTML="USER_ID";
                
                //appending to the thead

                th.appendChild(id_td);
                th.appendChild(todo_td);
                th.appendChild(completed_td);
                th.appendChild(user_td);


                table3.appendChild(th);


                //using for loop iterating all over the data and storing in the table 


                for(let i=0;i<act_data.length;i++)
                {
                    //creating new table row and table_data to store data

                    let tr=document.createElement("tr");
                    let id_td=document.createElement("td");
                    let todo_td=document.createElement("td");  
                    let completed_td=document.createElement("td");
                    let user_td=document.createElement("td");

                    // fetching from API and storing data in td

                    id_td.innerHTML=act_data[i].id ;
                    todo_td.innerHTML=act_data[i].todo;
                    completed_td.innerHTML=act_data[i].completed;
                    user_td.innerHTML= act_data[i].userId;


                    //appending the table data to table_row

                    tr.appendChild(id_td);
                    tr.appendChild(todo_td);
                    tr.appendChild(completed_td);
                    tr.appendChild(user_td);

                    table3.appendChild(tr);

                    
                   
                    // console.log("ID--> " , act_data[i].id  + "  TODO--> ",act_data[i].todo  + " Completed--> " ,act_data[i].completed + " Userid--> " , act_data[i].userId);
                }
                
                    
            })
            .catch((error)=>{
                reject(false,error);
                console.log("ERROR  -- " ,error)});

            },3000)                 
    })
}



async function execute()
{
    //--enabling the table style to block to show the data in webpage
    table1.style.display="block";
    table2.style.display="block";
    table3.style.display="block";

    //------promise chaining
    let s1= await PromiseAPI1();
    console.log("1");//------Verifying the working state of promises using console
    if(s1)
    {
        
        let s2=await PromiseAPI2();
        console.log("2");
        if(s2)
        {
            let s3=await PromiseAPI3();
            console.log("3");
        }
    }

}
