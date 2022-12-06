class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }
    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = fiel.value;
        });
        return formObject;
    }

     async sendForm() {
        try {
        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: "",
        });
        this.displaySuccess();
    } catch {
        this.displayError();
        throw new Error(error);
    }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class'error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();