const createAccount = (pin, amount = 0) => {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      return `$${amount}`;
    },

    deposit(inputPin, newAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      amount += newAmount;
      return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
    },

    withdraw(inputPin, requiredAmount) {
      if (inputPin !== pin) return "Invalid PIN.";

      if (requiredAmount > amount)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";

      amount -= requiredAmount;
      return `Succesfully withdrew $${requiredAmount}. Current balance: $${amount}.`;
    },

    changePin(inputPin, newPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
};

module.exports = { createAccount };
