const sendEmail = function(e) {

    e.preventDefault();

    const link = `mailto:makiko.vaughan@gmail.com
             ?cc=makikohassler@hotmail.com
             &subject=Inquiry from Makiko Web Site&from=${escape($("#email").val())}
             &body= ${escape($("#message").val())} 
             ${escape($("#name").val())}`;

    $("#name").val("");
    $("#email").val("");
    $("#message").val("");

    window.location.href = link;
}

$("#submit").click(sendEmail);