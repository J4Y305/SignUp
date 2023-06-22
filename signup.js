function SignUpCheck(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let id=document.getElementById("ID").value
    let password=document.getElementById("password").value
    let passwordCheck=document.getElementById("passwordCheck").value
    let check=true;
    
    // 이름 확인
    if(name===""){
        document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
        check=false
    }
    else    document.getElementById("nameError").innerHTML=""
    
    // 이메일 확인
    if(email===""){
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
        check=false
    }
    if(email.includes("@")){
        let emailId=email.split("@")[0]
        let emailDomain=email.split("@")[1]
        if(emailId==="" || emailDomain===""){
            document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
            check=false
        }
        else    document.getElementById("emailError").innerHTML=""
    }
    
    // 아이디 확인
    if(id===""){
        document.getElementById("IDError").innerHTML="ID가 올바르지 않습니다."
        check=false
    }
    else    document.getElementById("IDError").innerHTML=""
    
    // 비밀번호 확인
    if(password===""){
        document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
        check=false
    }
    else    document.getElementById("passwordError").innerHTML=""
    
    // 비밀번호 재확인
    if(password!==passwordCheck){
        document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
        check=false
    }
    else    document.getElementById("passwordCheckError").innerHTML=""
    
    if(check){
        alert("가입이 완료되었습니다.")
    }
}