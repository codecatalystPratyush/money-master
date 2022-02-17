window.addEventListener('load', () => {
    document.getElementById('calculate-btn').addEventListener('click', () => {
        const values = [invalid('income'), invalid('food'), invalid('rent'), invalid('clothes')];

        if (values[0] == 'invalid' || values[1] == 'invalid' || values[2] == 'invalid' || values[3] == 'invalid') {
            showError('invalid');
        } else {
            const expenses = values[1] + values[2] + values[3];

            if (expenses > values[0]) {
                showError('expenses');
            } else {
                document.getElementById('total-expenses').innerText = expenses;
                document.getElementById('balance').innerText = values[0] - expenses;
            }
        }
    });

    document.getElementById('save-btn').addEventListener('click', () => {
        const balance = parseInt(document.getElementById('balance').innerText);
        const values = [invalid('income'), invalid('save')];

        if (values[0] == 'invalid' || values[1] == 'invalid' || values[1] > 100) {
            showError('invalid');
        } else {
            const amount = values[0] * values[1] / 100;

            if (amount > balance) {
                showError('saving');
            } else {
                document.getElementById('saving-amount').innerText = amount;
                document.getElementById('remaining-balance').innerText = balance - amount;
            }
        }
    });
});

function invalid(idName) {
    const input = parseInt(document.getElementById(idName).value);

    if (isNaN(input) || input < 0) {
        return 'invalid';
    } else {
        return input;
    }
}

function showError(id) {
    const modalAhem = new bootstrap.Modal(document.getElementById(`modal-${id}`));
    modalAhem.show();
}