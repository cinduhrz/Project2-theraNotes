/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require('express') // bring this in so we can make our router obj
const sessionNote = require('../models/sessionNote') // import sessionNote model for routes
const mongoose = require('../models/connection') // connect to db
const SessionNote = require('../models/sessionNote')


/////////////////////////////////////////////
// Create Router
/////////////////////////////////////////////
const router = express.Router()


/////////////////////////////////////////////
// Router Middleware
/////////////////////////////////////////////


/////////////////////////////////////////////
// Actual Routes (INDUCES)
/////////////////////////////////////////////

// Index
router.get('/', (req, res) => {
    res.redirect('/home')
})

router.get('/home', async (req, res) => {
    const notes = await SessionNote.find({})
    const sortedNotes = notes.sort((a, b) => b.date - a.date)
    console.log(sortedNotes)

    const shortenedDates = sortedNotes.map((note) => {
        return note.date.toDateString()
    })
    console.log(shortenedDates)

    res.render('client/index.ejs', {
        notes: notes,
        dates: shortenedDates
    })
})


// New
// Delete
// Update
// Create
// Edit
// Show


/////////////////////////////////////////////
// Export Router
/////////////////////////////////////////////
module.exports = router