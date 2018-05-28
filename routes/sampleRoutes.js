

module.exports = (app) => {
  
    app.get('/api/sampleRoute', (req, res) => {
        res.send('sampleroute');
    })

}