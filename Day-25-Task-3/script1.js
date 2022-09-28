let divTag = document.createElement("div");
divTag.innerHTML = `

<div class="container-fluid">
<div class="row">
    <div class="col">
      <img width="200" src="./Logo.png" alt=""> 
    </div>
</div>
<div class="row content">
    <div class="col text-center">
        <h1>Unlimited movies, TV <br> 
            shows and more.</h1>
            <h5>
                Watch anywhere. Cancel anytime.
            </h5>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            
            <a href="./index1.html"><button class="btn get_started btn-danger">Get Started ></button></a>
    </div>
</div>
</div>
`
document.body.append(divTag);