(function ($) {
    "use strict"; // Start of use strict
    var input = [{
        "name": "Kohilan Moh",
        "id": 1,
        "order_total": 12.50,
        "amount_paid": 0,
        "order": [
            {
                "name": "hot dog",
                "type": "beef",
                "count": 1,
                "price": 3.00,
                "combo": false
		},
            {
                "name": "fries",
                "count": 4,
                "price": 3.00
		}
	   ],
    },
    {
        "name": "John Doe",
        "id": 2,
        "order_total": 14.99,
        "amount_paid": 0,
        "order": [
            {
                "name": "veggie poutine",
                "type": "veggie",
                "count": 74,
                "price": 3.00,
                "combo": false
        },
            {
                "name": "eating sticks",
                "count": 1,
                "price": 3.00
        }
       ],
    },
    {
        "name": "Billy Bob",
        "id": 3,
        "order_total": 3.99,
        "amount_paid": 0,
        "order": [
            {
                "name": "chilli cheese dog",
                "type": "spicy",
                "count": 1,
                "price": 4.00,
                "combo": false
        },
            {
                "name": "coke",
                "count": 1,
                "price": 1.00
        }
       ],
    }]
    var num_items = input.length
    var title = document.createElement("h2");
    title.id = "title";
    title.innerHTML = "Welcome, you have "+num_items+" order(s)!";
    document.body.appendChild(title);


    for (var j = 0; j < input.length; j++) {
        var customerName_s = input[j].name;
        var id = input[j].id;
        var order_total = input[j].order_total;
        var amount_paid = input[j].amount_paid;
        var amount_due = order_total - amount_paid;
        var list_of_items = input[j].order;

        var body = document.getElementsByTagName('body');

        var rowelements = document.createElement("DIV");
        rowelements.className = "row";
        rowelements.id = "row";


        // Ticket
        var ticket = document.createElement("DIV");
        ticket.className = "col-md-12";
        ticket.id = "ticket";
        rowelements.appendChild(ticket);

        // Order Number
        var orderNumber = document.createElement("DIV");
        orderNumber.id = "orderNumber";
        orderNumber.innerHTML = id;
        ticket.appendChild(orderNumber);

        // Customer Name
        var customerName = document.createElement("H2");
        customerName.id = "customerName";
        customerName.innerHTML = customerName_s;
        ticket.appendChild(customerName);

        // Price Group
        var priceGroup = document.createElement("DIV");
        priceGroup.className ="priceGroup";
        ticket.appendChild(priceGroup);

        // Price
        var price = document.createElement("H2");
        price.className = "price";
        price.innerHTML = "$"+(amount_due.toFixed(2));
        priceGroup.appendChild(price);

        // Remove Button
        var remove = document.createElement("a");
        remove.className = "remove";
        remove.href = "#";
        remove.innerHTML = "X";
        priceGroup.appendChild(remove);


        var htmlItemsList = document.createElement("UL");
        htmlItemsList.id = "listOfItems";
        ticket.appendChild(htmlItemsList);

        //Loop through each order item
        for (var i = 0; i < list_of_items.length; i++) {
            var listItem = document.createElement("LI");
            htmlItemsList.appendChild(listItem);

            //Number
            var itemCount = document.createElement("H2");
            itemCount.className += 'itemCount';
            itemCount.innerHTML = list_of_items[i].count;

            //Circle
            var circle = document.createElement("DIV");
            circle.className += 'circle';
            listItem.appendChild(circle);
            circle.appendChild(itemCount);
            
            //Name
            var itemName = document.createElement("H2");
            itemName.className += 'itemName';
            itemName.innerHTML = list_of_items[i].name;
            listItem.appendChild(itemName);

        }

        var doneButton = document.createElement("BUTTON");
        doneButton.type = "button";
        doneButton.className = "btn btn-success done";
        doneButton.innerHTML = "DONE";
        ticket.appendChild(doneButton);


        document.body.appendChild(rowelements);
    }

    //Click Function
    $("p").click(function () {
        $(this).hide();
    });
    //Click function for remove button
    $(".remove").click(function () {
        $(this).parent().parent().parent().hide();
        num_items = num_items - 1;
        title.innerHTML = "Welcome, you have "+num_items+" order(s)!";
    });
    //Click function for done button
    $(".done").click(function () {
        $(this).parent().parent().hide();
        num_items = num_items - 1;
        title.innerHTML = "Welcome, you have "+num_items+" order(s)!";
    });
<<<<<<< HEAD
    for (var j = 0; j < input.length; j++) {
        $(function() {
            $('.yourCountdownContainer'+j).countdown({
                date: "June 7, 2087 15:03:26"
            });
        });
    }
})(jQuery); // End of use strict
=======
})(jQuery); // End of use strict
>>>>>>> 8a769477d0ca7e9eb67348a9ea8609b12061ebb0
