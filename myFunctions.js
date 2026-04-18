function toggleDetails(id) {
    let row = document.getElementById(id);
    row.style.display = (row.style.display === "table-row") ? "none" : "table-row";
}
function showDaetails(checkbox,id)
{
   const row = document.getElementById(id)
   if(checkbox.checked){
    row.style.display = "table-row";
   }
    else{
     row.style.display = "none";
    }
   
}    
function showForm() {
    let checkboxes = document.querySelectorAll(".choose:checked");
    if (checkboxes.length === 0) {
        alert("الرجاء اختيار وجبة واحدة على الأقل");
        return;
    }
    document.getElementById("orderForm").style.display = "block";
}

function validateForm() {
    let name = document.getElementById("fullName").value.trim();
    let account = document.getElementById("bank").value.trim();
    let date = document.getElementById("date").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    let nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    let accountRegex = /^[0-9]{6}$/;
    let mobileRegex = /^(09(3|4|5|6|8|9)[0-9]{7})$/;

    if (!accountRegex.test(account)) {
        alert("رقم الحساب يجب أن يكون 6 أرقام");
        return false;
    }

    if (name !== "" && !nameRegex.test(name)) {
        alert("الاسم يجب أن يكون باللغة الإنكليزية مع فراغ واحد");
        return false;
    }

    if (mobile !== "" && !mobileRegex.test(mobile)) {
        alert("رقم الموبايل غير صحيح");
        return false;
    }

    let selected = [];
    document.querySelectorAll(".choose:checked").forEach(ch => {
        selected.push(ch.dataset.name + " - " + ch.dataset.price);
    });

    let total = 0;
    document.querySelectorAll(".choose:checked").forEach(ch => {
        total += parseInt(ch.dataset.price);
    });

    let tax = total * 0.10;
    let net = total + tax;

    alert(
        "الوجبات المختارة:\n" + selected.join("\n") +
        "\n\nالمجموع: " + total +
        "\nالضريبة 10%: " + tax +
        "\nالمبلغ الصافي: " + net
    );

    return true;
}
