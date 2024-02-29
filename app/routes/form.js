module.exports = (app) => {
    app.get('/form', (req, res) => {
        app.app.controllers.form.form(app, req, res);
    });
};
