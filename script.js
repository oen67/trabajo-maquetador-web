(function ($) {
    'use strict';

    // Initialize datepicker
    $('.js-datepicker').flatpickr({
        dateFormat: 'd/m/Y',
        allowInput: true,
    });

    // Form validation and localstorage
    (function () {
        $('.needs-validation').on('submit', function (event) {
            event.preventDefault();
            
            if (this.checkValidity()) {
                const formData = {
                    name: $('#name').val(),
                    birthdate: $('#birthdate').val(),
                    gender: $('#gender').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                };
                localStorage.setItem('formData', JSON.stringify(formData));
                $(this).addClass('was-validated');
                showConfirmation();
            } else {
                event.stopPropagation();
            }
        });
    })();

    // Load form data from localstorage
    (function () {
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
            $('#name').val(formData.name);
            $('#birthdate').val(formData.birthdate);
            $('#gender').val(formData.gender);
            $('#email').val(formData.email);
            $('#phone').val(formData.phone);
        }
    })();

    // Show confirmation message
    function showConfirmation() {
        Swal.fire({
            icon: 'success',
            title: 'Thank you!',
            text: 'Your form has been submitted successfully.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
    }



})(jQuery);
