var waktu = new Date();

var hari = waktu.getDay(); //Buat Ambil Index Hari
var fixHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var bulan = waktu.getMonth();
var fixBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var tanggal = waktu.getDate();
var tahun = waktu.getFullYear();

var jam = waktu.getHours();
var fixJam = '';
if (jam <= 11){
    var print = '<h2> Selamat Pagi <br> Waktu Saat Ini: ' + fixHari[hari] + ' ' + fixBulan[bulan] + ' ' + tanggal + ' ' + tahun + '</h2>';
    document.write(print)
} else if (jam <= 15){
    var print = '<h2> Selamat Siang <br> Waktu Saat Ini: ' + fixHari[hari] + ' ' + fixBulan[bulan] + ' ' + tanggal + ' ' + tahun + '</h2>';
    document.write(print)
} else if (jam <= 18) {
    var print = '<h2> Selamat Sore <br> Waktu Saat Ini: ' + fixHari[hari] + ' ' + fixBulan[bulan] + ' ' + tanggal + ' ' + tahun + '</h2>';
    document.write(print)
} else if (jam <= 5) {
    var print = '<h2> Selamat Malam <br> Waktu Saat Ini: ' + fixHari[hari] + ' ' + fixBulan[bulan] + ' ' + tanggal + ' ' + tahun + '</h2>';
    document.write(print)
} else {
    document.write('Something Error in Date Code');
}
