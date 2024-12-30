document.addEventListener('DOMContentLoaded', function() {
    const addPartForm = document.getElementById('addPartForm');
    const partList = document.getElementById('partList');

    if (addPartForm) {
        addPartForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(addPartForm);
            const partData = {
                partName: formData.get('partName'),
                partNumber: formData.get('partNumber'),
                purchaseInfo: formData.get('purchaseInfo'),
                price: parseFloat(formData.get('price')),
            };

            fetch('/parts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(partData),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Optionally, update the part list or redirect
                    window.location.reload();
                } else {
                    alert('Error adding part: ' + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (partList) {
        partList.addEventListener('click', function(event) {
            if (event.target.classList.contains('delete-part')) {
                const partId = event.target.dataset.id;

                fetch(`/parts/delete/${partId}`, {
                    method: 'DELETE',
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Remove the part from the list
                        const partItem = document.getElementById(`part-${partId}`);
                        partItem.remove();
                    } else {
                        alert('Error deleting part: ' + data.message);
                    }
                })
                .catch(error => console.error('Error:', error));
            }
        });
    }
});