const express = require('express')
const mongodb = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb')

const app = express();

app.use(express.json())

const mongoUrl = "mongodb://localhost:27017"
const dbname = "contactManager";

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err
    console.log('Database connexion succeed!')
    let db = client.db(dbname)

    app.post('/newcontact', (req, res) => {
        db.collection('contacts').insertOne(req.body, (err, contact) => {
            if (err) res.send('An error has occured!')
            res.send(contact)

        })
    })

    app.get('/allcontacts', (req, res) => {
        db.collection('contacts').find().toArray((err, contacts) => {
            if (err) throw err
            res.send(contacts)
        })
    })
    
    app.get('contact/:id', (req, res) => {
        let contactId = ObjectID(req.params.id)
        db.collection('contacts').find({_id: contactId}, (err, contact) => {
            if (err) throw err
            res.send(contact)
        })
    })

    app.get('/deletecontact/:id', (req, res) => {
        let contactId = ObjectID(req.params.id)
        db.collection('contacts').findOneAndDelete({_id: contactId}, (err) => {
            if (err) res.send('Cannot find contact!')
            res.send('Contact deleted sucessfully!')
        })
    })

    app.put('/editcontact/:id', (req, res) => {
        let contactId = ObjectID(req.params.id)
        db.collection('contacts').findOneAndUpdate({_id: contactId}, {$set: {...req.body}}, (err, data) => {
            if (err) throw err
            res.send('Contact updated successfully!')
        })
    })

})

app.listen(6000, (err) => {
    if (err) throw err
    console.log('Server is running on port 6000')
})
