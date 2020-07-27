document.getElementById('loginButton').onclick = function () {
    require.ensure([], function (require) {
        let login = require('../helpers/login');
        login.login();
    });
};

document.getElementById('logoutButton').onclick = function () {
    require.ensure([], function (require) {
        let logout = require('../helpers/logout');
        logout.logout();
    });
};
