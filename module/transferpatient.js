const connection = require('./db')

   transferpatient = async (dischargedata)=>{

      return await new Promise((resolve,reject) =>{
      connection.query(`UPDATE bed_admissions SET status = "transfer", discharge_date = '${dischargedata.date}' WHERE id = ${dischargedata.id}`,(error, results, fields) => {
            if (error) reject(error);
            resolve(results);
              
         })
      })
      

   }

   getbed_admissions =  async(bed_admissions_id) =>{
    
      return await new Promise((resolve,reject) =>{
         connection.query(`select * from  bed_admissions where id = ${bed_admissions_id} `,(error, results, fields) => {
               if (error) reject(error);
               resolve(results);
                 
            })
         })
   }

   newbedtransfer = async (dischargedata)=>{
       
      let discharge = JSON.parse(JSON.stringify(dischargedata))[0]; 

      return await new Promise((resolve,reject) =>{
      connection.query(`INSERT INTO bed_admissions (bed_id, patient_id, provider_id, status) VALUES ( '${discharge.bed_id}', '${discharge.patient_id}', '${discharge.provider_id}', '${discharge.status}');`,(error, results, fields) => {
            if (error) reject(error);
            resolve(results);
              
         })
      })
      

   }





module.exports = {transferpatient,getbed_admissions,newbedtransfer}