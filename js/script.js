function convertTemperature() {
    const celsiusInput = document.getElementById('celsiusInput').value;
    const fahrenheitInput = document.getElementById('fahrenheitInput').value;
    const calculationBox = document.querySelector('.calculation-box');

    if (celsiusInput !== '' && fahrenheitInput === '') {
        // Convert from Celsius to Fahrenheit
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
        calculationBox.textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

    } else if (fahrenheitInput !== '' && celsiusInput === '') {
        // Convert from Fahrenheit to Celsius
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsiusInput').value = celsius.toFixed(2);
        calculationBox.textContent = `(${fahrenheit}°F - 32) * (5/9) = ${celsius.toFixed(2)}°C`;

    } else {
        calculationBox.textContent = 'Please enter a value in either Celsius or Fahrenheit, but not both.';
    }
}

function resetForm() {
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.querySelector('.calculation-box').textContent = 'Calculation formula will appear here.';
}
