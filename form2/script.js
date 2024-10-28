$(document).ready(function() {
    // Bắt sự kiện khi nhấn vào nút submit
    $("#submitBtn").on('click', function() {
        // Lấy giá trị từ các trường
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var sex = $("input[name='sex']:checked").val();
        var nationality = $("#nationality").val();

        // Kiểm tra nếu các trường trống thì thông báo
        if(firstName === "" || lastName === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Hiển thị thông tin ra các phần tương ứng
        $("#fullnameDisplay").text(lastName + " " + firstName);
        $("#sexDisplay").text(sex);
        $("#nationalityDisplay").text(nationality);
    });
});