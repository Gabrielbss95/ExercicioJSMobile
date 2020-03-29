window.onload = () =>{
    document.getElementById('info').innerHTML = 
        '<h3>RAM: '+ navigator.deviceMemory+'</h3><br>'+
        '<h3>Online: '+navigator.onLine+'</h3><br>'+
        '<h3>Linguagem: '+navigator.language+'</h3><br>'+
        '<h3>User-Agent: '+ navigator.userAgent+'</h3>';
}