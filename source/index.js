const formDataHandler = () => {
    const orderForm = document.querySelector('#form');
    const checkbox = document.querySelector('#form-agreement');
    const button = document.querySelector('.form-block__submit');

    // В аргументах функции не хватает event
    function retrieveFormValue(event) {
        event.preventDefault(event);
        const formData = new FormData(orderForm);
        const values = Object.fromEntries(formData.entries());
        alert('Данные отправлены');
        console.log('Данные корзины', values);
    }

    orderForm.addEventListener('submit', retrieveFormValue);
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            button.removeAttribute('disabled')
        }
        else {
            button.setAttribute('disabled', true)
        }
    })

}
addEventListener('DOMContentLoaded', formDataHandler);