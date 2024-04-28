
//pertemuan 1

// let nama ="jema";

// const asal ="blora";

// nama ="may" ;

// console.log(nama, asal);

//let string ="perempuan" ;

//let integer ="12" ;

//let float ="4.5" ;

//boolean
//let salah = false ;
//let benar = true ;

//console.log(nama, asal);

//let nilai = 80;
//let kkm = 70;

//if(nilai > kkm){
//    console.log("anda lulus");
//} else if (nilai== kkm) {
//    console.log("nilai sama");
//} else {
//    console.log("tidak lulus");
//}

//let arrayAngka = [2, 4, 6, 8 ] ; //bisa angka juga bisa huruf . urutan array (index) itu dr 0 
//let arrayString = ["may", "jema", "ale"]; //kalo string harus ada "" tanda petiknya  
//arrayString.push("lea"); //buat nambahin
//arrayString[0] = "meyssie" ;//buat ganti


//console.log(array[3]); //cara nampilin salah satu array dgn [isinya index yg mau kita tampilin] kalo mau 2 langsung pake [2:3]
//console.log(arrayString);

//pertemuan 2

//object
//kalo nambahin object gaboleh pake spasi pake nya _ kaya contoh : tanggal_lahir 
//objek itu kaya nama, umur, tgl lhr gabisa diubah kalosampingnya itu bisa


// const dataDiri = {
//     nama: "jema",
//     umur: 18,
//     tanggal_lahir: "31 mei 2005",
// };

//ini kalo mau ganti umur tinggal di ketik dataDiri trs titik yg mau diganti 
// dataDiri.umur = 17;

//  console.log (
//     `nama saya ${dataDiri.nama} umur saya ${dataDiri.umur} lahir ${dataDiri.tanggal_lahir}`
// );
//jadi kalo mau outputnya itu ga pake {} tapi pake kurung 

//ini kalo mau outputnya nampilin 1 aja
//console.log(dataDiri.nama);

//function

//console.log termasuk function

//jadi default itu bisa di isi apa aja, tipe data apa aja
//kalo nama akhir ga di tulis tp ada di parameter itu bakal undefined
// function sapaAkuBg(namaAwal, namaAkhir = "2") {
//     console.log(`namaku ${namaAwal} ${namaAkhir}`);
// }

// //ini namanya parameter
// sapaAkuBg("jema", "ale");
// sapaAkuBg("karomah");

// function sapaAkuBg(namaAwal, namaAkhir = "2") {
//     return `namaku ${namaAwal} ${namaAkhir}`;
// }

// const hasil = sapaAkuBgReturn("value");
// console.log(hasil);

// function finalNilai(nilai){
//     if (nilai > 90) {
//         return "A";
//     } else if (nilai > 70) {
//         return "B" ;
//     } else {
//         return "C";
//     }
// }

// const nilaiUjian = finalNilai(90);
// console.log(nilaiUjian);

//scope

//scope buat, ketika buat variabel tempat kita ngeakses kalo buat variabel diluar function bisa kita akses dimana aja, bisa digunakan dimana aja

//arrow function

//sama kaya fuction lainnya, cuma cara deklarasikan aja yg beda
//isi dari function, jika banyak pake blok. kalo cuma simple atau pendek gausah pake blok

const salam = (namaAwal, namaAkhir) => {
    return `halo ${namaAwal} ${namaAkhir}`;
};

const salam2 = (nama1) => `halo ${nama1}`;
const salam3 = (nama) => `halo ${nama}`;


//function pd array

const angkas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const angkasKaliDua = angkas.map((angka) => angka * 3);

angkas.forEach((value) => value * 2);

//kalo ganjil % 2 !=0
//kalo genap % 2 ==0
const angkaGenap = angkas.filter ((value) => value % 2 !=0);

//ini buat ngefilter angka genap atau ganjil
console.log(angkaGenap);

console.log("angkas" , angkas);
console.log("angkasKaliDua" , angkasKaliDua);

//function dalam object
//bisa nambahin function di objject
//pake this.nama karena ada di dalam object





