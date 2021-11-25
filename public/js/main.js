$(document).on('click', '.deleteBtn', function() {
    let endPoint = $(this)[0].dataset.href;
    if (confirm("Want to delete?")) {
        fetch(endPoint, {
                method: "DELETE",
            })
            .then((result => {}))
            .then((result => {
                window.location.replace('/product');
            }))
            .catch((err) => console.log(err));
    }
})