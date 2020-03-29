
window.onload = () => {
    fetch ("https://ipinfo.io/?token=a859861bea1a9b",{})
    .then(response => response.json())
    .then((data)=>{

        document.getElementById("dado").innerHTML = "<h2>ip ="+data.ip+"</h2><br>"+
        "<h2>city ="+data.city+"</h2><br>"+
        "<h2> region="+data.region+"</h2><br>"+
        "<h2>country ="+data.country+"</h2><br>"+
        "<h2>loc ="+data.loc+"</h2><br>"+
        "<h2>org ="+data.org+"</h2><br>"+
        "<h2>postal ="+data.postal+"</h2><br>"+
        "<h2>timezone ="+data.timezone+"</h2>"
        
    })
}


