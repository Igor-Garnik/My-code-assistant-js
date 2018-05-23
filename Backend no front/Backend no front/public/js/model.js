(function(){
    
    var itemsModel = function() {
        
        function testApi() {
            $.get("/testApi", function( data ) {
                console.log("API is working...");
                console.log(data);
            })
        }
        
        function getDataPromise() {
            return $.get("/getGalleryList", function( data ) {
                return data;
            })            
        }
        
        function getGalleryItemByName(name) {
            return $.get("/getGalleryItemByName", name);            
        }
        
        function getJsonData() {
            $.get("data/list.json", function( data ) {
                console.log("Default load");
                console.log(data);
            })            
        }
        
        function saveData(data) {
            return $.post('/saveGalleryItem', data);
        }
        
        return {
            testApi: testApi,
            saveData: saveData,
            getJsonData : getJsonData,
            getDataPromise: getDataPromise,
            getGalleryItemByName: getGalleryItemByName
        }
    }
    
    var model = itemsModel();
    
    // проверяем работоспособность API
    //model.testApi();
    
    // получить данные из json файла который лежит на диске
    //model.getJsonData();
    
    // Получить все данные из бызы данных. 
    // Передать полученные данные в callback функцию
    model.getDataPromise().then(function(data){
        console.log("All data is loaded");
        console.log(data);
    });
    
    // Получить те елементы из бызы данных,
    // в поле имя которых, входят буквы указанные в параметре name
    var filter = "bmw";
    model.getGalleryItemByName({name: filter}).then(function(data){
        console.log("Filtered Items is loaded for query \'%s\'", filter);
        console.log(data);
    });
    
    // Сохранить данные на сервер
    model.saveData({name: "test", url: "http://testing.com"})
        .done(function(galleryItem) {
		  console.log('Item successfuly saved');
		  console.log(galleryItem);
		});
    
    
}())
