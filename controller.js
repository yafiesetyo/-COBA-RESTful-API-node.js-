'use strict' ;

var response = require('./res');
var connection = require('./conn');

exports.users = function (req,res){
    connection.query('select * from manusia', function (error,rows,fields){
        if(error){
            console.log('gangguan')
        }else{
            response.ok(rows,res)
        }
    });
};

exports.index = function(req,res){
    response.ok('halo jembzzz', res)
};

exports.cariOrang = function(req,res){
    var id = req.params.id;

    connection.query('select * from manusia where id = ?',
    [id],
    function (error, rows, fields){
        if(error){
            console.log('gangguan')
        }else{
            response.ok(rows, res)
        }
    });
};

exports.create = function(req,res){
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    var no_hp = req.body.no_hp;

    connection.query('insert into manusia (nama,alamat,no_hp) values (?,?,?)',
    [nama,alamat,no_hp], function (error, rows, fields){
        if(error){
            console.log('gangguan cok')
        }else{
            response.ok("input success",res)
        }
    });
};

exports.update = function(req,res){
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    var no_hp = req.body.no_hp;
    var id = req.body.user_id;

    connection.query('update manusia set nama = ?,alamat=?,no_hp=? where id = ?',
    [nama,alamat,no_hp,id],
    function (error, rows, fields){
        if(error){
            console.log('gangguan su')
        }else{
            response.ok("berhasil diupdate !!!",res)
        }
    });
};

exports.delete = function(req,res){
    var id = req.body.user_id;

    connection.query('delete from manusia where id = ?',[id],
    function(error,rows,fields){
        if(error){
            console.log('gangguan blok')
        }else{
            response.ok("berhasil terhapoes",res)
        }
    });
};
