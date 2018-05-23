import utils from './utils.js';
import Observer from './gallery/observer.js';
import GalleryController from './gallery/gallery.controller.js';
import GalleryModel from './gallery/gallery.model.js';
import GalleryView from './gallery/gallery.view.js';

import LoginController from './login/login.controller.js';
import LoginModel from './login/login.model.js';
import LoginView from './login/login.view.js';

const wrapper = document.querySelector("#wrapper");

let routeConfig = {
    "" : () => {
        utils.initTemplate(wrapper, "login-view");
        let model = new LoginModel;
        let view = new LoginView;
        new LoginController(model, view, utils)
    },
    "gallery" : () => {
        utils.initTemplate(wrapper, "main-view");
        let observer = new Observer;
        let model = new GalleryModel;
        let view = new GalleryView;
        new GalleryController(model, view, observer, new utils)
    },
    "contacts" : () => {
        utils.initTemplate(wrapper, "contact-view");
        console.log("Contacts route is loaded")
        //implement Controller, View and Model for this Route
    }
}

function activateRoute(routeName){
    let route = routeConfig[routeName];
    route && route();    
}

export function updateRoute() {
    let routeName = document.location.hash.replace(/^#/, '');
    if(routeName && !utils.isLoggedIn()) {
        utils.navigateTo(""); 
    } else {
        activateRoute(routeName);
    }
    
}
