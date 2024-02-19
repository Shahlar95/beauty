const cards = document.querySelector('.cards');

const arr = [
    { id:1,
    imgUrl: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/57dec7b9975c5f77b31fc004/bnbnbn.jpg"},
    {   id:2,
        head:"Makeup & Lashes",
        text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
       
    },
    {
        id:3,
        imgUrl:"https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/73fd2fab38c8530a9181527f/fgfg.jpg"
    },
    {
        id:4,
        head:"Hair Care",
        text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        
    },
    {
        id:5,
        imgUrl:"https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c7a6dfddfff9552d8faa5199/hghggh54.jpg"
    },
    {
        id:6,
        head:"Nails & Pedicure",
        text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        
    }
    
]


let writer = "";

arr.forEach((item) => {

       
     if ( item.id %2 == 1) {
        writer += `
        <div class="col-sm-12 col-md-4 col-lg-4 p-0">
        <div class='inner'>
        <div class="img">
            <img src=${item.imgUrl} alt="">
        </div>
        </div>
        
        </div>
        
        `
     }
     else{
        writer += `
        <div class="col-sm-12 col-md-4 col-lg-4 p-0">
        <div class='inner'>
        <div class="text">
        <h2>${item.head}</h2>
        <p>${item.text}</p>
        <p><span class='more' >MORE</span></p>
    </div>
        </div>
       
    </div>
        `
     }
   
});

cards.innerHTML = writer;

