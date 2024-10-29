`use strict`

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilkanmahasiswa')
        .get(jsonku.tampilkanmahasiswa);

        app.route('/tampil/:id')
        .get(jsonku.tampilkanmahasiswaberdasarkanID);

        app.route('/tambah')
        .post(jsonku.tambahsiswa);
}