const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, trim: true,
        lowercase: true,
        default: null,
        validate: {
            validator: function (v) {
                if (!v) {
                    return false
                }
                else {
                    if (v.length < 1) return false
                    else {
                        let vv = v.split('@').filter(x => x !== "")
                        if (vv.length !== 2) return false
                        else {
                            let v2 = vv[1].split('.').filter(x => x !== "")
                            if (v2.length < 2) return false
                        }
                    }
                }
            },
            message: 'Email is Null or has an invalid Format. Use example myname@autobavaria.co.ke'
        }
    },

    phone: {
        type: Number
    },

    password: {
        type: String,
        minlength: 4,
        validate: {
            validator: function (v) {
                return v && v.length > 3
            },
            message: 'Password cannot be null and has to contain more than 4 Characters'
        }
    }

})


const Customer = new mongoose.model('Customer',customerSchema)