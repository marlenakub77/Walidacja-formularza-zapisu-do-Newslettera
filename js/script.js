let formNewsletter = document.getElementById(`newsletter-form`);

let allAgreeCheckbox = document.getElementById('all-agree');


// funkcja wywołania zdarzenia 
const validate = (event) => {

    let txtname = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    // czyszczona lista error
    errors.innerHTML = '';
   
    // funkcaja trim ucina białe znaki z lewej i z prawej strony naszego stringa


    if (txtname.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz imię i nazwisko";
        errors.appendChild(liError);
    }


    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz adres e-mail";
        errors.appendChild(liError);
    }


    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz poprawny adres e-mail";
        errors.appendChild(liError);
    }


    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "Nie wyraziłeś zgody 1";
        errors.appendChild(liError);
    }

// wysłanie formularza jesli są bledy form jest blokowany
    if (errors.children.length > 0) {
        event.preventDefault();
   }
} 

// funkcja zaznaczenia checboxa all-agree
const allAgree = (event) => {

    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

agree1.checked = event.target.checked;
agree2.checked = event.target.checked;

agree1.disabled = event.target.checked;
agree2.disabled = event.target.checked;
}

// podpjęcie form 
formNewsletter.addEventListener('submit', validate);
allAgreeCheckbox.addEventListener('change', allAgree);