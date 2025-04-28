function callvalue(){
    var name=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var message=document.getElementById("message").value;


    document.writeln("your info : <br> "+" Your name: "+name+" <br>");
    document.writeln(" Your email: "+email+" <br>" );
    document.writeln(" Your phone: "+phone+" <br>" );
    document.writeln(" Your message: "+message);

}