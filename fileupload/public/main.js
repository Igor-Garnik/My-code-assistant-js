(
    function () {
        let form = document.getElementById('my-form');
        let fileInput = document.getElementById('my-file');
        let fileContainer = document.getElementById('file-container');
        let submitButton = document.getElementById('sbm-btn');

        document.addEventListener('DOMContentLoaded', function () {
            submitButton.disabled = true;
        });

        fileInput.addEventListener('change', function () {
            let file = fileInput.files[0];

            if (file) {
                submitButton.disabled = false;
                fileContainer.innerHTML = `Загружаем файл ${file.name}`;
            }
        });

        form.addEventListener('submit', function (e) {

            let file = fileInput.files[0];

            if (file) {
                upload(file);
            }

            e.preventDefault();
        });


        function upload(file) {
            let data = new FormData();
            data.append('myFile', file);

            fetch('/upload', {
                method: 'POST',
                body: data
            }).then(() => console.log('done!'));

        }
    }
)();

