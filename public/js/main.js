const deleteBtn = document.querySelector('.deleteBtn');

$(document).on('click', '.deleteBtn', function() {
    let endPoint = $(this)[0].dataset.href;
    if (confirm("Want to delete?")) {
        fetch(endPoint, {
                method: "DELETE",
            })
            .then((result => {
                window.location.reload;
            }))
            .then((result => {
                window.location.replace('/product');
            }))
            .catch((err) => console.log(err));
    }
})