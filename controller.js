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