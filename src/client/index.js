import './styles/base.css';
import './styles/footer.css';

import './styles/header.css';
import './styles/form.css';
import './styles/resets.css';
const handleSubmit = require("../client/js/formHandler");

document.getElementById('processURLButton').addEventListener('click', function() {
    let URL = document.getElementById('url').value;
    handleSubmit(URL)
});