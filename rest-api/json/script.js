let mahasiswa = {
    nama : "Abdul",
    nrp  : "030403023",
    email: "mustafa@gmail.com"
}

console.log(mahasiswa);

// pakai ajax
let xhr =new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}
xhr.open('GET', 'coba.json', true);
xhr.send();

// pakai jquery
$getJSON('coba.json', function(data) {
    console.log(data);
}); 

