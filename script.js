function redirect(){
    var phoneInput = document.getElementById("phoneInput");
    if (!phoneInput) {
        console.error("无法找到输入框元素。");
        return;
    }
    var lastFourDigits = phoneInput.value;
    const halfWidthDigits = lastFourDigits.replace(/[０-９]/g,function(s){
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);

    });
    console.log("halfWidthDigits:", halfWidthDigits);
    console.log("Regex test result:", /^\d{4}$/.test(halfWidthDigits));

    if(!/^\d{4}$/.test(halfWidthDigits)){
        alert("数字を正しく入力ください");
        phoneInput.value=""; //clear the form
        return false;
    }
    //if (lastFourDigits.length !== 4 || isNaN(lastFourDigits)) {
    //    alert("请输入有效的手机后四位数字。");
    //    return;
    //}
    var redirectURL = [
        'https://forms.gle/3vCGYyWFx4oeXFq26', 
        'https://forms.gle/nsUjMY5EptVhoXfZ6',
        'https://forms.gle/GTsXPBciiPzTeEzu5', 
        'https://forms.gle/FgA1R8WfBgU6t4rN8',
        'https://forms.gle/89FB32hD2ymzJFAWA',
        'https://forms.gle/aP5KP6bxjTYL7ygc6',
        'https://forms.gle/jKGLPVP12iYJwRLK9',
        'https://forms.gle/22FNbvLBr372Vsys7'
    ];
    //对输入的四位数进行取余，并使其范围在1~8之间
    var remainder =(parseInt(halfWidthDigits) % redirectURL.length);
    console.log("remainder:", remainder);
    //var randomPageNumber = Math.floor(Math.random()*8)+1;

    // 构造跳转链接
    //var redirectURL = "https//example.com/page" + randomPageNumber + ".html";

    //执行跳转
    window.location.href = redirectURL.length > 0 ? redirectURL[remainder] : 'https://www.google.com';

    return false;
}