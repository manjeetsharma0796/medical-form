import mongoose  from 'mongoose';
import { Schema } from 'mongoose';
import yup from 'yup';// Define Yup schema for validation

const clientSchema = yup.object().shape({
    name: yup.string().matches(/^[A-Za-z]+$/, 'Name must contain only alphabetic characters').required(),
    age: yup.number().required(),
    gender: yup.string().required(),
    phone: yup.string().matches(/^\d{10}$/, 'Invalid phone number format').required(),
    email: yup.string().email('Invalid email format').required(),
    bp: yup.number().required(),
    pr: yup.number().required(),
    temp: yup.number().required(),
    spo2: yup.number().required(),
    ecg: yup.number().required(),
    smo: yup.number().required(),
    dib: yup.number().required(),
    hp: yup.number().required(),
    cbg: yup.number().required(),
});

// Create a Mongoose schema from the Yup schema
const ClientSchema = new Schema(clientSchema.fields, { strict: false });

const Client = mongoose.model('Client', ClientSchema);

export default Client;