(function() {
    // table for displaying result of a create
    const dataTable = document.querySelector('#data-table');
    // form for getting input data for creating new users
    const dataForm = document.querySelector('#data-form');

    function createStudentFromFormObj(dataObject) {
                const student = new Student(dataObject.firstName, dataObject.surname);
        return student;
    }

    function create() {
        // form data as a js object, all inputs are directly accessible via dot notation
        const formData = new FormData(dataForm);
        const formDataObject = Object.fromEntries(formData.entries());
        // { username: "", street: "", city: "", etc...}
        // - street and city should be in a nested address object but are not
        // - use createUserFromFormObj() to create an appropriate User instance

        setStatus('PREPARING PUT REQUEST');
        
        // this fetch request has options as the second parameter
        fetch(`http://localhost:8080/student/${id.value}`, {
            
            method: 'PUT', // request method
            body: JSON.stringify(createStudentFromFormObj(formDataObject), console.log(formDataObject)),
            headers: {
                'Content-type': 'application/json' // has json data in the body
            }
        }).then(response => {
            setStatus('RECEIVED RESPONSE');
            // response.ok checks if the response code is between 200 - 206
            // - returns a true value if it is, otherwise false
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        })
          .then(student => {
            setStatus('RENDERING TABLE');
            // user is put in an array because renderUserTable() accepts an array of users
            renderStudentTable([student], dataTable);
            setStatus('RESPONSE RENDERED INTO TABLE');
        })
          .catch(error => {
            setStatus('ERROR ENCOUNTERED');
            handleError(error);
        });
    }

    function handleFormSubmission(event) {
        // prevent form submission from refreshing page in this case, returning false also does the same
        // - more generally, preventDefault() prevents default behaviours of an event
        event.preventDefault(); 
        create();
        //return false;
    }

    // initialise an event listener for submit events on the form
    dataForm.addEventListener('submit', handleFormSubmission);
})();