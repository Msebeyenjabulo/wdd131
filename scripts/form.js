const products = [
    {
        id: 'fc-1888',
        name: "Flux Capacitor",
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: "Power Laces",
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: "Time Circuits",
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: "Low Voltage Reactor",
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: "Warp Equalizer",
        avgRating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', function() {
    populateProductNameOptions();
    populateFeatureCheckboxes();
});

function populateProductNameOptions() {
    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}

function populateFeatureCheckboxes() {
    const featureCheckboxes = document.getElementById('featureCheckboxes');

    products.forEach(product => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `feature-${product.id}`;
        checkbox.name = 'usefulFeatures'; // Ensure this matches the name attribute in the HTML
        checkbox.value = product.name;

        const label = document.createElement('label');
        label.textContent = product.name;
        label.setAttribute('for', `feature-${product.id}`);

        featureCheckboxes.appendChild(checkbox);
        featureCheckboxes.appendChild(label);
        featureCheckboxes.appendChild(document.createElement('br'));
    });
}
