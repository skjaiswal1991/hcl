const connection = require('./db')
  


   discharge = async (dischargedata)=>{
      return await new Promise((resolve,reject) =>{
         connection.query(`UPDATE bed_admissions SET status = '${dischargedata.status}', discharge_date = '${dischargedata.date}' WHERE id = ${dischargedata.id}`,(error, results, fields) => {
            if (error) reject(error);
            resolve(results);
         })
      })
      

   }





module.exports = {discharge}