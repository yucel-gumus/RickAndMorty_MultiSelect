import Swal from 'sweetalert2';

const showAlert = (message: string) => {
    Swal.fire({
        text: message,
        icon: 'error',
        confirmButtonText: "Tamam",
        confirmButtonColor: '#8CD4F5',
        showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
        }
    });
};

export default showAlert;
