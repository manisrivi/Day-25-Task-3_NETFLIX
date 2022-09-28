let divTag = document.createElement("div");
divTag.innerHTML = `
<div class="container-fluid">
<div class="row">
    <div class="col">
        <img width="200" src="./Logo.png" alt=""> 
    </div>
    <div class="col-8 ">
        <h1>
            See what's next
        </h1>
        <h5>
            WATCH ANYWHERE CANCEL ANYTIME
        </h5>
    </div>
</div>
<div class="row">
    <div class="col col_1">

    </div>
</div>
</div>
`
document.body.append(divTag)
let res = fetch("https://625556538646add390d516af.mockapi.io/movie");
res.then((data) => data.json())
    .then(function (countrydata) {

        // Element tag create function
        function foo(ele, cname) {
            let div = document.createElement(ele);
            div.className = cname;
            return div;
        }
        // container 
        let container = foo("div", "container");
        document.body.append(container);

        // row
        let row = foo("div", "row m-3");
        container.append(row);

        // Cards display 
        countrydata.forEach(function (country) {
            let col = foo("div", "col-lg-3 col-sm-12 col-md-6")
            col.innerHTML = `<div class="card m-3 zoom shadow-lg " style="width: 18rem;">
       <img height="350" src="${country.image}" class="card-img-top" alt="...">
                <a href="https://www.netflix.com/signup" class="btn btn-primary">DOWNLOAD</a>
     </div>`
            row.append(col)
        })
    })
    .catch((error) => console.log(error));

