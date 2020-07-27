let moduleName = location.pathname.slice(1);
switch (moduleName) {
    case 'feedback.html': {
        moduleName = 'feedback';
        break;
    }
    case 'index.html': {
        moduleName = 'index';
        break;
    }
    case 'about.html': {
        moduleName = 'about';
        break;
    }
}
let route = require(`bundle-loader!./routes/` + moduleName);
console.log(route);
route;
