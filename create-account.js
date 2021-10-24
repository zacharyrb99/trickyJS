function createAccount(pin, amount = 0) {
    const checkBalance = inputPin => {
        if (inputPin !== pin) return `Invalid PIN.`;
        return `$${amount}`;
    }

    const deposit = (inputPin, newAmount) => {
        if (inputPin !== pin) return `Invalid PIN.`;
        amount += newAmount;
        return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
    }

    const withdraw = (inputPin, withdrawAmount) => {
        if (inputPin !== pin) return `Invalid PIN.`;
        if (withdrawAmount > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';

        amount -= withdrawAmount;
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
    }

    const changePin = (currPin, newPin) => {
        if (currPin !== pin) return 'Invalid PIN.';
        pin = newPin;
        return 'PIN successfully changed!';
    }

    return {checkBalance, deposit, withdraw, changePin};
}

module.exports = { createAccount };
