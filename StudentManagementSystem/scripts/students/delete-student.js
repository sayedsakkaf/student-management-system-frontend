(function () {
    const dataForm = document.querySelector('#data-form');
    const id = document.querySelector('#id');

    function findById() {
        setStatus('Finding student to delete...')
        fetch(`http://localhost:8080/student/${id.value}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        })
            .then(student => {
                confirm = window.confirm("Are you sure you want to delete " + student.id + "?")
                if (confirm) {
                    remove();
                }
            })

    }

    function remove() {
        fetch(`http://localhost:8080/student/${id.value}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        }).then(json => {
            setStatus('STUDENT DELETED');
            console.log(json);
        }).catch(error => {
            setStatus('FAILED TO DELETE STUDENT');
            handleError(error);
        });
    }

    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();
        findById();
    });

})();