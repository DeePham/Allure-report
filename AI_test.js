Feature('AI');

Scenario('test ai features_6', async ({ I }) => {
  await I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/');
  I.fillField('First name', 'John');
  I.fillField('Last name', 'Doe');
  I.fillField('Username', 'johndoe');
  I.fillField('Email', 'john.doe@example.com');
  I.fillField('Address', '1234 Main St');
  I.fillField('Address 2', 'Apt 101');
  I.selectOption('Country', 'United States');
  I.selectOption('State', 'California');
  I.fillField('Zip', '12345');
  I.checkOption('same-address');
  I.checkOption('save-info');
  I.checkOption('credit');
  I.fillField('Name on card', 'John Doe');
  I.fillField('Credit card number', '1234 5678 9012 3456');
  I.fillField('Expiration', '12/23');
  I.fillField('CVV', '123');
  I.see('Continue to checkout');
  pause();
});

Scenario('test ai features_7', async ({ I }) => {
  await I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/');
  I.fillField('First name', 'John');
  I.fillField('.search', 'Doe');
  I.fillField('.delete', 'johndoe');
  I.fillField('Email', 'john.doe@example.com');
  I.fillField('Address', '1234 Main St');
  I.fillField('Address 2', 'Apt 101');
  I.selectOption('Country', 'United States');
  I.selectOption('State', 'California');
  I.fillField('Zip', '12345');
  I.checkOption('same-address');
  I.checkOption('save-info');
  I.checkOption('credit');
  I.fillField('Name on card', 'John Doe');
  I.fillField('Credit card number', '1234 5678 9012 3456');
  I.fillField('Expiration', '12/23');
  I.fillField('CVV', '123');
  I.see('Continue to checkout');
  pause();
});
