const mongoose = require ("mongoose")
const UserSchema = new mongoose.Schema(
    {
        username : {
            type:string,
            required : true ,
            unique : true
            },

        email: {
            type:string,
            required : true ,
            unique : true
            },

        password: {
             type:string,
             required : true ,
             unique : true
             },

        city: {
            type:string,
            required : true ,
            unique : true
            },

      
        starttime : {
            type:number,
            required : true ,
            unique : true
            },

        endtime: {
            type:number,
            required : true ,
            unique : true
            }
    
            
        
    


        }
    
)

export default mongoose.model("User",UserSchema);