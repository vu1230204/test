$(document).ready(function() {
    let cart = [];

  
    function updateCart() {
        $('#cart-items').empty();

        
        cart.forEach((item, index) => {
            $('#cart-items').append(`
                <tr>
                    <td><img src="${item.image}" alt="${item.name}"></td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td>${item.quantity}</td>
                    <td><button class="remove-item" data-index="${index}">❌</button></td>
                </tr>
            `);
        });
    }


    $('.course-card button').click(function() {
        const courseCard = $(this).closest('.course-card');
        const courseName = courseCard.find('h2').text();
        const coursePrice = courseCard.find('.price span').text().replace('$', '');
        const courseImage = courseCard.find('img').attr('src');
         const existingItem = cart.find(item => item.name === courseName);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            
            cart.push({ name: courseName, price: parseFloat(coursePrice), image: courseImage, quantity: 1 });
        }
        
        updateCart();
        alert(`${courseName} ha sido agregado al carrito.`);
    });

    
    $('.cart-icon').click(function() {
        $('#cart-modal').toggle();
    });

  
    $('#close-cart').click(function() {
        $('#cart-modal').hide();
    });

  
    $(document).on('click', '.remove-item', function() {
        const index = $(this).data('index');
        cart.splice(index, 1); 
        updateCart(); 
    });

    $('#clear-cart').click(function() {
        cart = []; 
        updateCart(); 
        alert("Carrito vaciado.");
    });
});
