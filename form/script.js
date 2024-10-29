$(document).ready(function() {
   
    // Form validation
    $("#user-form").validate({
        rules: {
            firstName: {
                required: true,
                maxlength: 25
            },
            lastName: {
                required: true,
                maxlength: 25
            },
            age: {
                required: true,
                number: true,
                min: 15,
                max: 150
            },
            startDate: {
                required: true,
                date: true
            },
            phone: {
                required: true,
                pattern: /^\+?[0-9]+$/  // Cho phép các số với tùy chọn dấu "+"
            }
        },
        messages: {
            firstName: {
                required: "First Name is required",
                maxlength: "First Name can't be longer than 25 characters"
            },
            lastName: {
                required: "Last Name is required",
                maxlength: "Last Name can't be longer than 25 characters"
            },
            age: {
                required: "Age is required",
                number: "Please enter a valid number",
                min: "Age must be at least 15",
                max: "Age must be less than or equal to 150"
            },
            startDate: {
                required: "Start Date is required",
                date: "Please enter a valid date (dd/mm/yyyy)"
            },
            phone: {
                required: "Phone number is required",
                pattern: "Please enter a valid phone number (only numbers and + allowed)"
            }
        },
        submitHandler: function(form) {
            // Lấy giá trị từ các trường form
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var age = $("#age").val();
            var startDate = $("#startDate").val();
            var phone = $("#phone").val();
            
            // Hiển thị thông tin đã nhập lên qua alert
            alert("First Name: " + firstName + 
                  "\nLast Name: " + lastName + 
                  "\nYear Old: " + age + 
                  "\nStart Date: " + startDate + 
                  "\nPhone Number: " + phone);
            
           
            // form.submit();
        }
        
    });
});
