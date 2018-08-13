var con=require('./conn')

function insertdata(data,cb)
{
    db.collection('register').insert(data,function(err,result){
        if(result)
            cb({'result':'Record Inserted Successfully'})
        else
            cb({'result':'Record Not Inserted'})
    })
}

module.exports={insertdata,insertdata}