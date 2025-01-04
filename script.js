function prefunction(){
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main");


    setTimeout(fun,2000);

    function fun(){
        preloader.style.display = "none";

    // Show the main content
    mainContent.style.display = "block";
    }
    setTimeout(book,10000);
    function book(){
        document.querySelector(".booking-container").style.display = "block";
    }
}

function disclose(){
    document.querySelector(".booking-container").style.display = "none";
}


