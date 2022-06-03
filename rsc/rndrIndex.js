const captchaSolveArray = [
    "CAPTCHA_COOKIE",
    "CAPTCHA_ANTICAPTCHA",
    "CAPTCHA_DEATCHBYCAPTCA",
    "CAPTCHA_GURU",
    "CAPTCHA_AZCAPTCHA",
    "CAPTCHA_MONSTER_XEVIL",
    "CAPTCHA_MONSTER_CLOUD",
    "CAPTCHA_2CAPTCHA",
    "CAPTCHA_IMAGE",
    "CAPTCHA_CUSTOM"
];
const captchaSolveAllowArray = [
    "CAPTCHA_COOKIE",
    "CAPTCHA_2CAPTCHA",
    "CAPTCHA_IMAGE",
    "CAPTCHA_CUSTOM"
];
const smsVerifyArray = [
    "SMS_5SIM",
    "SMS_ACTIVATE_ORG"
];
const smsVerifyAllowArray = [
    "SMS_5SIM",
    "SMS_ACTIVATE_ORG"
];
let genStatus = false;
let plusOption = false;
let requestToken = 0;
var iii = 0;

function handleFilesProxy(fileList) {
    document.getElementById("proxy").value = (fileList[0].path + '').replace(/\\/g, '\\\\');
};

function handleFilesToken(fileList) {
    document.getElementById("tokendir").value = (fileList[0].path + '').replace(/\\/g, '\\\\');
};

function changeTheme() {
    var slct = document.getElementById('theme');
    var vlue = slct.options[slct.selectedIndex].value;
    if (vlue == 1) {
        document.body.style.backgroundImage = 'url("./themeLight.png")';
    } else if (vlue == 2) {
        document.body.style.backgroundImage = 'url("./themeDiscordBlue.png")';
    } else if (vlue == 3) {
        document.body.style.backgroundImage = 'url("./themeDiscordDark.png")';
    };
};

function changeGenlog() {
    var chckbx = document.getElementById('genlog');
    var element1 = document.getElementById('webhook');
    var element2 = document.getElementsByClassName('brGenlog');
    if (chckbx.checked == true) {
        element1.style.display = "inline";
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "inline";
        };
    } else {
        element1.style.display = "none";
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "none";
        };
    };
};

function changeChkLimit() {
    var chckbx = document.getElementById('limitACC');
    var element1 = document.getElementsByClassName('brLIMIT');
    if (chckbx.checked == true) {
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "inline";
        };
    } else {
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "none";
        };
    };
};

function changeChkThread() {
    var chckbx = document.getElementById('slcMultiThread');
    var element1 = document.getElementsByClassName('brMULTI');
    if (chckbx.checked == true) {
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "inline";
        };
    } else {
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "none";
        };
    };
};

function changeBrowser() {
    var chckbx = document.getElementById('browserCapSlct');
    var element1 = document.getElementsByClassName("brBCAP");
    var element2 = document.getElementsByClassName("forBCAP");
    if (chckbx.checked == true) {
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "inline";
        };
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "inline-block";
        };
    } else {
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "none";
        };
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "none";
        };
    };
};

function changeCaptcha() {
    var slct = document.getElementById("captchaKeyType");
    var vlue = slct.options[slct.selectedIndex].value;
    var key = document.getElementById("captchaKeyValue");

    if (vlue == 1) {
        key.style.display = "inline";
    } else if (vlue == 2) {
        key.style.display = "none";
    };
};

function changeCaptchaSolveType() {
    var chckbx = document.getElementById("useCaptcha");
    var slct = document.getElementById("captchaKeyType");
    var slct2 = document.getElementById("captchaSolveType");
    var vlue2 = slct2.options[slct2.selectedIndex].value;
    var key = document.getElementById("captchaKeyValue");
    var element = document.getElementsByClassName("brCAP");
    var element2 = document.getElementsByClassName("brCAP2");

    if (chckbx.checked == true && (vlue2 == 9 || vlue2 == 10)) {
        slct.style.display = "none";
        key.style.display = "none";
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = "none";
        };
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "inline";
        };
    } else if (chckbx.checked == true) {
        slct.style.display = "inline";
        key.style.display = "inline";
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = "inline";
        };
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "inline";
        };
    };
};

function changeUseProxy() {
    var chckbx = document.getElementById('proxygen');
    var element1 = document.getElementById('proxyUser');
    var element2 = document.getElementById('proxy');
    var element3 = document.getElementsByClassName('brProxy');
    var element4 = document.getElementById('boxImportProxy');
    if (chckbx.checked == true) {
        element1.style.display = "inline";
        element2.style.display = "inline";
        element4.style.display = "inline";
        for (var i = 0; i < element3.length; i++) {
            element3[i].style.display = "inline";
        };
    } else {
        element1.style.display = "none";
        element2.style.display = "none";
        element4.style.display = "none";
        for (var i = 0; i < element3.length; i++) {
            element3[i].style.display = "none";
        };
    };
};

function changeNickname() {
    var chckbx = document.getElementById('randomNick');
    var slct = document.getElementById('nickType');
    var vlue = slct.options[slct.selectedIndex].value;
    var element1 = document.getElementById('nick1');
    var element2 = document.getElementById('nick2');
    var element3 = document.getElementsByClassName('brNick');
    if (chckbx.checked == true) {
        slct.style.display = "none";
        element1.style.display = "none";
        element2.style.display = "none";
        for (var i = 0; i < element3.length; i++) {
            element3[i].style.display = "none";
        };
    } else {
        if (vlue == 1) {
            slct.style.display = "inline";
            element1.style.display = "inline";
            element2.style.display = "none";
        } else if (vlue == 2) {
            slct.style.display = "inline";
            element1.style.display = "none";
            element2.style.display = "inline";
        };
        for (var i = 0; i < element3.length; i++) {
            element3[i].style.display = "inline";
        };
    };
};

function changeSMS() {
    var slct = document.getElementById('smsG');
    var vlue = slct.options[slct.selectedIndex].value;
    var key = document.getElementById('smsKey');
    if (vlue == 1) {
        key.style.display = "inline";
    } else if (vlue == 2) {
        key.style.display = "none";
    };
};

function checkPriceSMS() {
    var slct = document.getElementById('smsType');
    var vlue = slct.options[slct.selectedIndex].value;
    if (vlue == 1) {
        document.getElementsByClassName('cbRussia')[0].textContent = 'Russia - 6.7rub';
        document.getElementsByClassName('cbIndonesia')[0].textContent = 'Indonesia - 11.0rub';
        document.getElementsByClassName('cbVietnam')[0].textContent = 'Vietnam - 5.0rub';
        document.getElementsByClassName('cbCambodia')[0].textContent = 'Cambodia - 2.0rub';
        document.getElementsByClassName('cbBrazil')[0].textContent = 'Brazil - 1.0rub';
    } else if (vlue == 2) {
        document.getElementsByClassName('cbRussia')[0].textContent = 'Russia - 7.5rub : mts,any';
        document.getElementsByClassName('cbIndonesia')[0].textContent = 'Indonesia - 7.5rub : telkomsel,any';
        document.getElementsByClassName('cbVietnam')[0].textContent = 'Vietnam - 7.5rub : viettel,any';
        document.getElementsByClassName('cbCambodia')[0].textContent = 'Cambodia - 6.0rub : metfone,any';
        document.getElementsByClassName('cbBrazil')[0].textContent = 'Brazil - 8.5rub : vivo,any';
    };
};

function changeChkSMS() {
    var chckbx = document.getElementById('useSMS');
    var element1 = document.getElementById('smsG');
    var element2 = document.getElementById('smsKey');
    var element3 = document.getElementById('smsType');
    var element4 = document.getElementsByClassName('brSMS');
    var element5 = document.getElementsByClassName('forSMS');
    if (chckbx.checked == true) {
        // document.getElementById("verifyEmail").checked = true;
        // changeChkEmail();
        element1.style.display = "inline";
        element2.style.display = "inline";
        element3.style.display = "inline";
        changeSMS();
        for (var i = 0; i < element4.length; i++) {
            element4[i].style.display = "inline";
        };
        for (var i = 0; i < element5.length; i++) {
            element5[i].style.display = "inline-block";
        };
    } else {
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        for (var i = 0; i < element4.length; i++) {
            element4[i].style.display = "none";
        };
        for (var i = 0; i < element5.length; i++) {
            element5[i].style.display = "none";
        };
    };
};

function changeChkEmail() {
    var chckbx = document.getElementById('verifyEmail');
    var element1 = document.getElementById('mail');
    var element2 = document.getElementsByClassName('brEmail');
    if (chckbx.checked == true) {
        element1.style.display = "inline";
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "inline";
        };
    } else {
        document.getElementById("useSMS").checked = false;
        changeChkSMS();
        element1.style.display = "none";
        for (var i = 0; i < element2.length; i++) {
            element2[i].style.display = "none";
        };
    };
};

function changeCaptchaStyle() {
    var chckbx = document.getElementById("useCaptcha");
    var element1 = document.getElementById("captchaKeyType");
    var element2 = document.getElementById("captchaKeyValue");
    var element3 = document.getElementsByClassName("brCAP");
    if (chckbx.checked == true) {
        element1.style.display = "inline";
        element2.style.display = "inline";
        for (var i = 0; i < element3.length; i++) {
            element3[i].style.display = "inline";
        };
        changeCaptcha();
        changeCaptchaSolveType();
    } else {
        element1.style.display = "none";
        element2.style.display = "none";
        for (var i = 0; i < element3.length; i++) {
            element3[i].style.display = "none";
        };
    };
};

document.getElementById('contact').addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Contact Developer',
        html: 'Kakaotalk : imbestjihoon1234<br>Discord : 지훈#7539<br>Telegram : @ow9kj1w<br>Site : https://jh-shop.kr/<br>Discord Server : https://jh-shop.kr/discord<br>Youtube : https://jh-shop.kr/youtube<br>Subscribe my youtube!',
        showCancelButton: false
    });
});

document.getElementById('noConfig').addEventListener('click', () => {
    document.getElementById("method").value = 2;

    document.getElementById("module").value = 2;

    document.getElementById("browserT").value = 1;

    document.getElementById("genlog").checked = false;
    changeGenlog();

    document.getElementById("proxygen").checked = true;
    changeUseProxy();

    document.getElementById("randomNick").checked = true;
    changeNickname();

    document.getElementById("verifyEmail").checked = false;
    changeChkEmail();

    document.getElementById("useSMS").checked = false;
    changeChkSMS();

    document.getElementById("useCaptcha").checked = true;
    document.getElementById("captchaSolveType").value = 8;
    document.getElementById("captchaKeyType").value = 2;
    changeCaptchaStyle();

    document.getElementById("slcMultiThread").checked = false;
    changeChkThread();

    document.getElementById("limitACC").checked = true;
    document.getElementById("token").value = '1000';
    changeChkLimit();
});

document.getElementById('cleanLog').addEventListener('click', () => {
    var container = document.getElementById('mylist');
    container.innerHTML = '';
});

document.getElementById('reload').addEventListener('click', () => {
    var config = {
        'msg': 'command',
        'cmd': 'reload'
    };
    ipcRenderer.send('msg', config);
});

document.getElementById('emailConfig').addEventListener('click', () => {
    document.getElementById("method").value = 2;

    document.getElementById("module").value = 2;

    document.getElementById("browserT").value = 1;

    document.getElementById("genlog").checked = false;
    changeGenlog();

    document.getElementById("proxygen").checked = true;
    changeUseProxy();

    document.getElementById("randomNick").checked = true;
    changeNickname();

    document.getElementById("verifyEmail").checked = true;
    document.getElementById("mail").value = 5;
    changeChkEmail();

    document.getElementById("useSMS").checked = false;
    changeChkSMS();

    document.getElementById("useCaptcha").checked = true;
    document.getElementById("captchaSolveType").value = 8;
    document.getElementById("captchaKeyType").value = 2;
    changeCaptchaStyle();

    document.getElementById("slcMultiThread").checked = false;
    changeChkThread();

    document.getElementById("limitACC").checked = true;
    document.getElementById("token").value = '1000';
    changeChkLimit();
});

document.getElementById('superconfig').addEventListener('click', () => {
    document.getElementById("method").value = 2;

    document.getElementById("module").value = 2;

    document.getElementById("browserT").value = 1;

    document.getElementById("genlog").checked = false;
    changeGenlog();

    document.getElementById("proxygen").checked = true;
    changeUseProxy();

    document.getElementById("randomNick").checked = true;
    changeNickname();

    document.getElementById("verifyEmail").checked = true;
    document.getElementById("mail").value = 5;
    changeChkEmail();

    document.getElementById("useSMS").checked = true;
    document.getElementById("smsType").value = 1;
    document.getElementById("smsG").value = 2;
    document.getElementById("cbRussia").checked = true;
    document.getElementById("cbIndonesia").checked = false;
    document.getElementById("cbVietnam").checked = true;
    document.getElementById("cbCambodia").checked = true;
    document.getElementById("cbBrazil").checked = false;
    changeChkSMS();

    document.getElementById("useCaptcha").checked = true;
    document.getElementById("captchaSolveType").value = 8;
    document.getElementById("captchaKeyType").value = 2;
    changeCaptchaStyle();

    document.getElementById("slcMultiThread").checked = false;
    changeChkThread();

    document.getElementById("limitACC").checked = true;
    document.getElementById("token").value = '1000';
    changeChkLimit();
});

document.getElementById('plusoption').addEventListener('click', () => {
    var element1 = document.getElementsByClassName('plusoption');
    if (plusOption == false) {
        plusOption = true;
        document.getElementById('superconfig').style.removeProperty('display');
        document.getElementById('emailConfig').style.removeProperty('display');
        document.getElementById('noConfig').style.removeProperty('display');
        document.getElementById('reload').style.removeProperty('display');
        document.getElementById('testbutton').style.removeProperty('display');
        document.getElementById('cleanLog').style.removeProperty('display');
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "inline";
        };
    } else {
        plusOption = false;
        document.getElementById('superconfig').style.display = "none";
        document.getElementById('emailConfig').style.display = "none";
        document.getElementById('noConfig').style.display = "none";
        document.getElementById('reload').style.display = "none";
        document.getElementById('testbutton').style.display = "none";
        document.getElementById('cleanLog').style.display = "none";
        for (var i = 0; i < element1.length; i++) {
            element1[i].style.display = "none";
        };
    };
});

document.getElementById('gencheck').addEventListener('click', () => {
    try {
        if (genStatus == true) {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'Click the button \'Accept\' to end the token generation thread!',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Accept',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Request Success',
                        text: 'Token generation will stop after the curremt token generation operation is finished!',
                    });
                    var config = {
                        'msg': 'command',
                        'cmd': 'stopGen'
                    };
                    ipcRenderer.send('msg', config);
                };
            });
        } else {
            var input_tokenAmount = document.getElementById('token');
            var input_webhook = document.getElementById('webhook');
            var input_nickname = document.getElementById('nick1');
            var input_nickname2 = document.getElementById('nick2');
            var input_proxygen = document.getElementById('proxy');
            var input_tokendir = document.getElementById('tokendir');
            var input_multithread = document.getElementById('multithread');

            var select_genMethod = document.getElementById('method');
            var select_genModule = document.getElementById('module');
            var select_genMail = document.getElementById('mail');
            var select_genBrowser = document.getElementById('browserT');
            var select_nickType = document.getElementById('nickType');
            var select_proxy = document.getElementById('proxyUser');

            var checkbox_randomNick = document.getElementById('randomNick');
            var checkbox_capVerify = document.getElementById('capVerify');
            var checkbox_capBirth = document.getElementById('capBirth');
            var checkbox_capNick = document.getElementById('capNick');
            var checkbox_capAcc = document.getElementById('capAcc');
            var checkbox_capCverify = document.getElementById('capCverify');
            var checkbox_capEnick = document.getElementById('capEnick');
            var checkbox_genlog = document.getElementById('genlog');
            var checkbox_proxygen = document.getElementById('proxygen');
            var checkbox_headless = document.getElementById('headless');
            var checkbox_verifyEmail = document.getElementById('verifyEmail');
            var checkbox_newThread = document.getElementById('slcMultiThread');
            var checkbox_newLimit = document.getElementById('limitACC');

            var tokenAmount = input_tokenAmount.value;
            tokenAmount *= 1;
            var multithread = input_multithread.value;
            multithread *= 1;

            var methodValue = select_genMethod.value;
            methodValue *= 1;
            var moduleValue = select_genModule.value;
            moduleValue *= 1;
            var mailValue = select_genMail.value;
            mailValue *= 1;
            var browserValue = select_genBrowser.value;
            browserValue *= 1;

            //SMS Values [Renewed]

            var checkbox_SMS_Use = document.getElementById("useSMS");
            var input_SMS_Key_Value = document.getElementById("smsKey"); //verify key
            var select_SMS_Key_Type = document.getElementById("smsG"); //own / shop key type
            var select_SMS_Type= document.getElementById("smsType"); //module type

            var var_SMS_Key_Type = select_SMS_Key_Type.value;
            var_SMS_Key_Type *= 1;

            var var_SMS_Type = select_SMS_Type.value;
            var_SMS_Type *= 1;
            var_SMS_Type = smsVerifyArray[var_SMS_Type - 1];

            var var_SMS_Value = input_SMS_Key_Value.value;

            //Captcha Values [Renewed]

            var checkbox_Captcha_Use = document.getElementById("useCaptcha");
            var input_Captcha_Key_Value = document.getElementById("captchaKeyValue");
            var select_Captcha_Key_Type = document.getElementById("captchaKeyType");
            var select_Catpcha_SolveType = document.getElementById("captchaSolveType");

            var var_Captcha_Key_Type = select_Captcha_Key_Type.value;
            var_Captcha_Key_Type *= 1;

            var var_Captcha_Type = select_Catpcha_SolveType.value;
            var_Captcha_Type *= 1;
            var_Captcha_Type = captchaSolveArray[var_Captcha_Type - 1];

            var var_Captcha_Value = input_Captcha_Key_Value.value;

            //Proxy Values [Renewed]

            var var_Proxy_Dir = input_proxygen.value;

            var var_Proxy_User_Type = select_proxy.value + "";

            //Old
            var nickTypeValue = select_nickType.value;
            nickTypeValue *= 1;

            var hookValue = input_webhook.value;
            var nickValue = input_nickname.value;
            var dirValue = input_nickname2.value;
            var tokenValue = input_tokendir.value;

            var countryList = [];

            //SMS Setting

            if (document.getElementById('cbRussia').checked == true) {
                countryList.push({
                    'country': 'Russia',
                    'countryS': 'russia',
                    'countryCode': '7',
                    'offerCode': '0',
                    'subLength': 1,
                    'operator': 'mts,any',
                });
            };

            if (document.getElementById('cbIndonesia').checked == true) {
                countryList.push({
                    'country': 'Indonesia',
                    'countryS': 'indonesia',
                    'countryCode': '62',
                    'offerCode': '6',
                    'subLength': 2,
                    'operator': 'telkomsel,any',
                });
            };

            if (document.getElementById('cbVietnam').checked == true) {
                countryList.push({
                    'country': 'Vietnam',
                    'countryS': 'vietnam',
                    'countryCode': '84',
                    'offerCode': '10',
                    'subLength': 2,
                    'operator': 'viettel,any',
                });
            };

            if (document.getElementById('cbCambodia').checked == true) {
                countryList.push({
                    'country': 'Cambodia',
                    'countryS': 'cambodia',
                    'countryCode': '855',
                    'offerCode': '24',
                    'subLength': 3,
                    'operator': 'metfone,any',
                });
            };

            if (document.getElementById('cbBrazil').checked == true) {
                countryList.push({
                    'country': 'Brazil',
                    'countryS': 'brazil',
                    'countryCode': '55',
                    'offerCode': '73',
                    'subLength': 2,
                    'operator': 'vivo,any',
                });
            };

            //SMS Setting End

            if (tokenAmount >= 1) {
                //Enviroment Check

                if (methodValue != 2 && methodValue != 3) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Warning',
                        text: 'This generate method is not supported!',
                    });
                    return;
                };

                if (moduleValue == 1 && checkbox_Captcha_Use.checked == true) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Warning',
                        text: 'This generate module is not supported!',
                    });
                    return;
                };
                
                if (moduleValue == 2) {
                    if (browserValue != 1 && browserValue != 2) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Warning',
                            text: 'This generate browser is not supported!',
                        });
                        return;
                    };
                };

                if (checkbox_Captcha_Use.checked == true && !captchaSolveAllowArray.includes(var_Captcha_Type)) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Warning',
                        text: 'This captcha solve type is not supported!',
                    });
                    return;
                };

                if (checkbox_SMS_Use.checked == true && !smsVerifyAllowArray.includes(var_SMS_Type)) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Warning',
                        text: 'This sms verify type is not supported!',
                    });
                    return;
                };

                //Enviroment Check End

                //Enviroment Set

                if (checkbox_Captcha_Use.checked == true && var_Captcha_Key_Type == 2) {
                    var_Captcha_Value = "541126d3e3eb6b127f9ebab52225a4d2";
                };

                if (checkbox_SMS_Use.checked == true && var_SMS_Key_Type == 2) {
                    if (var_SMS_Type == "SMS_ACTIVATE_ORG") {
                        var_SMS_Value = "930A12fdb21d50466ff32339c0cf8b92";
                    };

                    if (var_SMS_Type == "SMS_5SIM") {
                        var_SMS_Value = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjI0NzE4MzMsImlhdCI6MTYzMDkzNTgzMywicmF5IjoiNjBkYmQ1YmM0Mjk0NDY0ZDRiZTliOWFiZDQ1N2I2NWEiLCJzdWIiOjczMjIwOX0.fGauVPzygd4IIV7IrOZ9FGQNwQblTstNPP3KH99oH3e0ykIaxIezO1Bnv_CtI-TPYtFMLa0oW1AnViF0sQeUkxTUUrDle3Fqdnwn_qp4PuRayXGrohjFMyamLlqtHYJhnz2qVxVOar42L2AFZgqcg40KNlsD8nLNWt6tOmeAGnHTYrtskxx71vUZLjyxC_uFbpDLb3Uv-KZoIbzzeQq2IVTzFv97YCug43dCP_dRU03NKaAzUMwq7efhCoSikl0uiB_qmovmY90jTr1GNbIF9odXvAPXFUV54xIVbEV8TDDAFBjrB8iaMNBmQ1DrzPzfi3T7QXVE-gAl1K6IPr9p6Q";
                    };
                };

                //Enviroment Set End

                Swal.fire({
                    icon: 'warning',
                    title: 'Warning',
                    text: 'When you click \'Accept\', token generate thread will start!',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Accept',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.isConfirmed) {
                        document.getElementById('gencheck').textContent = 'Stop Gen';
                        requestToken = tokenAmount;
                        genStatus = true;
                        Swal.fire({
                            icon: 'success',
                            title: 'Request Success',
                            text: 'Generating ' + tokenAmount + ' token thread will start!',
                        });
                        var config = {
                            'msg': 'command',
                            'cmd': 'startGen',

                            'amount': tokenAmount,
                            'multithread': multithread,
                            'method': methodValue + '',
                            'mail': mailValue + '',
                            'verifyMail': checkbox_verifyEmail.checked,
                            'browserValue': browserValue + '',
                            'moduleValue': moduleValue + '',

                            'genlog': false,
                            'genhook': null,

                            'serverlink': null,
                            'customnick': false,
                            'nickname': null,
                            'customtype': null,

                            "configProxy": {
                                "use": checkbox_proxygen.checked,
                                "proxydir": var_Proxy_Dir,
                                "proxyUser": var_Proxy_User_Type
                            },

                            "configCatpcha": {
                                "use": checkbox_Captcha_Use.checked,
                                "module": var_Captcha_Type,
                                "keytype": var_Captcha_Key_Type,
                                "key": var_Captcha_Value
                            },

                            "configSMS": {
                                "use": checkbox_SMS_Use.checked,
                                "module": var_SMS_Type,
                                "keytype": var_SMS_Key_Type,
                                "key": var_SMS_Value
                            },

                            "configCapture": {
                                "capVerify": checkbox_capVerify.checked,
                                "capBirth": checkbox_capBirth.checked,
                                "capNick": checkbox_capNick.checked,
                                "capAcc": checkbox_capAcc.checked,
                                "capEnick": checkbox_capEnick.checked,
                                "capCverify": checkbox_capCverify.checked
                            },

                            'countryList': countryList,
                            'tokendir': tokenValue,
                            'mailserver': mailValue + '',

                            "headless": checkbox_headless.checked
                        };
                        if (checkbox_newThread.checked == false) {
                            config['multithread'] = 1;
                        };
                        if (checkbox_newLimit.checked == false) {
                            config['amount'] = 999999;
                        };
                        if (checkbox_genlog.checked) {
                            config['genlog'] = true;
                            config['genhook'] = hookValue;
                        };
                        if (checkbox_randomNick.checked == false) {
                            if (nickTypeValue == 1) {
                                config['customnick'] = true;
                                config['nickname'] = nickValue;
                                config['customtype'] = 'custom';
                            } else {
                                config['customnick'] = true;
                                config['nickname'] = dirValue;
                                config['customtype'] = 'dir';
                            };
                        };
                        var element1 = document.getElementsByClassName("logTab");
                        for (var i = 0; i < element1.length; i++) {
                            element1[i].style.display = "block";
                        };
                        ipcRenderer.send('msg', config);
                    };
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Warning',
                    text: 'Enter the correct token number!',
                });
            };
        };
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Error Occurred',
            text: e,
        });
    };
});

function checkNumber(event) {
    if (event.key == 0 || event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9) {
        return true;
    };
    return false;
};

document.getElementById('testbutton').addEventListener('click', () => {
    // Swal.fire({
    //     title: 'Test',
    //     text: 'Toast with custom target',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     toast: true,
    //     position: 'bottom-right'
    // });

    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'center-center',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //         toast.addEventListener('mouseenter', Swal.stopTimer)
    //         toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    // });
    // Toast.fire({
    //     icon: 'success',
    //     title: 'toast 알림이 정상적으로 실행 되었습니다.'
    // });

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr.info('kakashi');
});

ipcRendererOn('msg', (event, msg) => {
    if (msg['msg'] == 'fire') {
        Swal.fire({
            icon: msg['icon'],
            title: msg['title'],
            text: msg['text'],
        });
    } else if (msg['msg'] == 'weblog') {
        if (msg['text'] == 'Log : gen force stop' || msg['text'] == 'Log : gen finished') {
            document.getElementById('gencheck').textContent = 'Start Gen';
            genStatus = false;
        };
        var container = document.getElementById('mylist');
        container.innerHTML = '<li class="globaltag-semi-sec-font">[' + msg['type'] + '] ' + msg['text'] + '</li>' + container.innerHTML;
        console.log('TYPE:' + msg['type'] + '\n' + msg['text']);
    };
});