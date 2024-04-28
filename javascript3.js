
//destrukturing array
//bab ini cara import ekspor
//gimana cara nya kita ngoding tapi pake file lain 

const listMahasiswa = ["ozi", "arya", "ratih", "nabila", "mayda"];

//cara cepetnya buat output, bedanya ga ngulang ngulang

const [a, b, c, d, e] =listMahasiswa; //pake kurung siku, dan hrs urut

console.log(a);

//atau pake rest kaya gini, rest termasuk parameter yang ga dipanggil

//const [a, b, ...rest] =listMahasiswa;

//console.log(rest);

//destrukturing object

const dataDiri = {
    nama : "jema",
    umur : 17,
    tanggal_lahir : "31 mei 2005" ,
    sapa : function () {
        console.log(`Halo ${this.nama}`);

    },

}

const {umur, tanggal_lahir, nama} = dataDiri;

console.log(nama);

