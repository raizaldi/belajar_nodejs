`use strict`

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('aplikasi rest berjalan baik',res);
}

exports.tampilkanmahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows,res);
        }
    })
}

exports.tampilkanmahasiswaberdasarkanID = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswa=?',[id], function(error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows[0],res);
        }
    })
}

exports.tambahsiswa = function(req,res){
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa(nim,nama,jurusan) VALUES (?,?,?)',[nim,nama,jurusan], function(error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(req.body,res);
        }
    })
}

exports.ubahmsiswa = function(req,res){
    let id = req.body.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',[nim,nama,jurusan,id], function(error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(req.body,res);
        }
    })
}

exports.deletesiswa = function(req,res){
    let id = req.params.id;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id], function(error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok('delete berhasil',res);
        }
    })
}