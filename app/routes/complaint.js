module.exports = (app) => {
    app.get('/complaint', (req, res) => {
        app.app.controllers.complaint.complaint(app, req, res);
    });
};