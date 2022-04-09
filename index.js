const express = require('express');
const dischargemodule = require('./module/dischargepatient')
const transferpatientObject = require('./module/transferpatient')
const app  = express()
const PORT = 3022;
app.use(express.json());

app.post('/transfer',(req,res)=>{

		
		    transferpatientObject.transferpatient(req.body)
			.then((responseupadte)=>{

				if(responseupadte){
					transferpatientObject.getbed_admissions(req.body.id)
					.then((pdata)=>{
						 if(pdata){
							transferpatientObject.newbedtransfer(pdata)
							.then((transferp)=>{
								res.status(200).send({"status":"success",msg:"tranfer data sucsessfully"})
							})
							.catch(error=>{
								res.status(400).send({"status":error,msg:"tranfer data not sucsessfully updated"})
							})
						 }else{
							res.status(400).send({"status":error,msg:"tranfer data not sucsessfully updated"})
						 }
							
					})
					.catch(error=>{
						res.status(400).send({"status":error,msg:"tranfer data not sucsessfully updated"})
					})
				}else{
					res.status(400).send({"status":error,msg:"tranfer data not sucsessfully updated"})
				}
				
			})
			.catch(error=>{
				res.send({"status":error,msg:"tranfer data not sucsessfully updated"})
			})
 
})

app.post('/discharge',(req,res)=>{

	result = dischargemodule.discharge(req.body)
    
	result.then((response)=>{
		if(response){
			res.status(200).send({status:"success",msg:"discharge data updated"})
		}else{
			res.status(400).send({status:error,msg:"discharge data not updated"})
		}
		
	})
	.catch(error=>{
		res.status(400).send({status:error,msg:"discharge data not updated"})
	})
    

})



app.listen(PORT,()=>{
	console.log("Port is working",PORT)
}
)