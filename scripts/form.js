const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor',
        averageRating: 4.5
    },
    {
        id: 'fc-2050',
        name: 'power laces',
        averageRating: 4.7
    },
    {
        id: 'fs-1987',
        name: 'time circuits',
        averageRating: 3.5
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor',
        averageRating: 3.9
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer',
        averageRating: 5.0
    }
];

function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}

function populateFeatureCheckboxes() {
    const featureCheckboxes = document.querySelector('.feature-checkboxes');

    products.forEach(product => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `feature-${product.id}`;
        checkbox.name = 'usefulFeatures';
        checkbox.value = product.name;

        const label = document.createElement('label');
        label.textContent = product.name;
        label.setAttribute('for', `feature-${product.id}`);

        featureCheckboxes.appendChild(checkbox);
        featureCheckboxes.appendChild(label);
        featureCheckboxes.appendChild(document.createElement('br'));
    });
}

// event listener when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateProductOptions();
    populateFeatureCheckboxes();

    // current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedDate;
});
