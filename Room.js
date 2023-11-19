const mongoose = require ("mongoose")
const RoomSchema = new mongoose.Schema(
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
            },


            roomnumbers : [ { number : Number , unavailableDates : { type : [dates ] } } ]
    
            
        
    


        }
    
)

export default mongoose.model("Room",RoomSchema);