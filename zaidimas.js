document.getElementById("myclick1").addEventListener('click', (event)=> {
    
    document.getElementById("myclick1").disabled=true;
    document.getElementById("idh4").innerHTML="";
    var time1 = Date.now();
    var time2 = Date.now();
    var element = document.createElement('button');
    element.textContent = 'Pagauk';
    element.setAttribute('id', 'myclick2');
    element.style.width = '9vh'; // Mygtuko plotis
    element.style.height = '9vh'; // Mygtuko aukstis
    element.style.position = 'absolute';
    element.style.backgroundColor = 'red';

    document.getElementById('game-info').appendChild(element);

    // Ismatuojam konteineri pixeliais
    const container = document.getElementById('game-info');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    //Konvertuojam i vh
    const elWidth = (parseFloat(element.style.width) * window.innerHeight) / 100; 
    const elHeight = (parseFloat(element.style.height) * window.innerHeight) / 100;

    //Random pozicija pixeliais
    const randomX = Math.random() * (containerWidth - elWidth);
    const randomY = Math.random() * (containerHeight - elHeight);

    // Mygtuko pozicija
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`; //





    console.log(time1, time2);
    document.getElementById("myclick2").addEventListener('click', (event)=> {
        document.getElementById("myclick1").disabled=false;
        time2 = Date.now();
        var time3 = time2-time1;
        console.log(time3/1000 + " sekundės");

        document.getElementById("game-info").innerHTML ="";
        document.getElementById("idh4").innerHTML = time3/1000 + " sekundės";
    });

});