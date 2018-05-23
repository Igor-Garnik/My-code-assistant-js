export default class Utils {

    constructor(){

        this.sortingConfig = {
          
            "A": page => {
                page.sort((a, b) =>{
                    return a.email > b.email ? 1 : -1;
                }); 
                return page;
            },
            "Z": page => {
                page.sort((a, b) => {
                    return a.email < b.email ? 1 : -1;;
                }); 
                return page;
            },
            "Admin": page => {
                return page.filter((item) => {
                    return item.role == "Admin";
                })
            },
            "User": page => {
                return page.filter((item) => {
                    return item.role == "User";
                })
            },
            "Find": page => {
                let exp = new RegExp(event.target.value, "i")
                return page.filter(item => {
                    return exp.test(item.name);
                })
            }
        }
    }

    static initTemplate(wrapperEl, templateId) {
        var template = document.querySelector(`#${templateId}`);
        var clon = template.content.cloneNode(true);
        wrapperEl.innerHTML = '';
        wrapperEl.appendChild(clon);
    }

    static navigateTo(routeName) {
        window.location.hash = `#${routeName}`;
    }

    static isLoggedIn() {
        let credentials = JSON.parse(localStorage.getItem('credentials'));
        return !!credentials;
    }

 

}
