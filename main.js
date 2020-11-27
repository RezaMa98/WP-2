    mobileNumberInput = document.getElementById('mobileNumberInput')
    mobileNumberInput.defaultValue = "۰۹"
    maritalStatus = document.getElementById('marital')
    maritalStatus.value = null

    function birthDateChanged(e) {
        if (e.code != 'Backspace') {
            birthDate = document.getElementById('birthDate')
            const birthDateValue = document.getElementById('birthDate').value
            year = birthDateValue.slice(0, 4)
            if (year.length == 4 && birthDateValue[4] != '/') {
                birthDate.value = birthDateValue + "/"
            }
            month = birthDateValue.slice(5, 7)
            if (month.length == 2 && birthDateValue[7] != '/') {
                birthDate.value = birthDateValue + "/"
            }
            day = birthDateValue.slice(8, 10)
            if (day.length == 2) {
                e.preventDefault()
            }
        }
    }
    function checkBirthDate() {
        birthDateValue = document.getElementById('birthDate').value
        if(birthDateValue.length==0){
            return 0
        }
        console.log(birthDateValue.length)
        if (birthDateValue.length < 10) {
            return 1
        }
        let year = birthDateValue.slice(0, 4)
        let month = birthDateValue.slice(5, 7)
        let day = birthDateValue.slice(8, 10)

        year = parseInt(year)
        month = parseInt(month)
        day = parseInt(day)

        console.log(day)

        if(year<1310){
            return 2;
        }
        if(year>1399){
            return 3
        }
        if(month<1 || month > 12){
            return 4
        }
        if(day<1 || day>31){
            return 5
        }
    }
    function onlyPersian(e) {
        var aranicUnicodes = /^[\u0600-\u06FF\s]+$/;
        if (aranicUnicodes.test(e.key)) {
        }
        else {
            e.preventDefault();
        }
    }

    function onlyEnglish(e) {
        var englishUniCode = /^[A-Za-z][A-Za-z0-9]*$/;
        if (englishUniCode.test(e.key)) {
        }
        else {
            e.preventDefault();
        }
    }

    function allEnglishCodes(e) {
        var englishUniCode = /^[A-Za-z0-9-+!#$*=]*$/;
        if (englishUniCode.test(e.key)) {
        }
        else {
            e.preventDefault();
        }
    }

    function checkPassword() {
        const password = document.getElementById('password').value
        var englishUniCode = /^[A-Za-z0-9-+!#$*=]*$/;
        if (password.length < 8) {
            return 1
        }
        else if (!englishUniCode.test(password)) {
            return 2
        }
        else {
            return 0
        }
    }

    function onlyEnglishNumbers(e) {
        var englishNumberUniCode = /^\d+$/;
        if (englishNumberUniCode.test(e.key)) {
        }
        else {
            e.preventDefault();
        }
    }

    function limitCharchters(limit, elementId, e) {
        const elementValue = document.getElementById(elementId).value
        if (elementValue.length >= limit) {
            e.preventDefault()
        }
    }

    function validateEmail() {
        const value = document.getElementById('email').value
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function mobileNumberChanged() {
        numbers = [
            { eng: '0', pe: '۰' },
            { eng: '1', pe: '۱' },
            { eng: '2', pe: '۲' },
            { eng: '3', pe: '۳' },
            { eng: '4', pe: '۴' },
            { eng: '5', pe: '۵' },
            { eng: '6', pe: '۶' },
            { eng: '7', pe: '۷' },
            { eng: '8', pe: '۸' },
            { eng: '9', pe: '۹' }
        ]
        mobileNumberString = mobileNumberInput.value
        splitedMobileNumber = mobileNumberString.split('')

        splitedMobileNumber.forEach((number, index) => {
            findedNumber = numbers.find(i => i.eng == number)
            if (findedNumber) {
                splitedMobileNumber[index] = findedNumber.pe
            }
        });

        mobileNumberInput.value = splitedMobileNumber.join('')
    }

    function nationalCodeChanged(e) {
        if (e.code !== 'Backspace') {
            nationalCodeInput = document.getElementById('nationalIdInput')
            numbers = [
                { eng: '0', pe: '۰' },
                { eng: '1', pe: '۱' },
                { eng: '2', pe: '۲' },
                { eng: '3', pe: '۳' },
                { eng: '4', pe: '۴' },
                { eng: '5', pe: '۵' },
                { eng: '6', pe: '۶' },
                { eng: '7', pe: '۷' },
                { eng: '8', pe: '۸' },
                { eng: '9', pe: '۹' }
            ]
            nationalCodeString = nationalCodeInput.value
            splitednationalCode = nationalCodeString.split('')
            splitednationalCode.forEach((number, index) => {
                findedNumber = numbers.find(i => i.eng == number)
                if (findedNumber) {
                    splitednationalCode[index] = findedNumber.pe
                }
                switch (index) {
                    case 2:
                        splitednationalCode[3] = '-'
                        break
                    case 9:
                        splitednationalCode[10] = '-'
                        break
                }
            });

            nationalCodeInput.value = splitednationalCode.join('')
        }
    }

    function checkRePassword() {
        const password = document.getElementById('password').value
        const rePassword = document.getElementById('rePassword').value
        if (rePassword != password) {
            return false
        }
        else {
            return true
        }
    }

    function selectChanged(selectId, event) {
        const selectValue = document.getElementById(selectId).value
        console.log(event)
    }

    function check() {
        errorsField = document.getElementById('errors')
        firstName = document.getElementById('firstName').value
        lastName = document.getElementById('lastName').value
        email = document.getElementById('email').value
        mobileNumber = document.getElementById('mobileNumberInput').value
        nationalId = document.getElementById('nationalIdInput').value
        inneredHtml = ''
        if (firstName.length < 3) {
            inneredHtml += '<p>حداقل طول برای فیلد نام 3 میباشد</p>'
        }
        if (lastName.length < 3) {
            inneredHtml += '<p>حداقل طول برای فیلد نام خانوادگی 3 میباشد</p>'
        }
        if (email.length < 1) {
            inneredHtml += '<p>پست الکترونیکی وارد نشده است</p>'
        }
        if (!validateEmail()) {
            inneredHtml += '<p>فرمت ایمیل وارد شده صحیح نمیباشد</p>'
        }
        if (mobileNumber.length < 3) {
            inneredHtml += '<p> شماره موبایل وارد نشده است</p>'
        }
        if (nationalId.length < 12) {
            inneredHtml += '<p>فرمت وارد شده برای کد ملی صحیح نیست</p>'
        }

        checkPasswordStatus = checkPassword()

        if (checkPasswordStatus == 1) {
            inneredHtml += '<p>طول رمز عبور باید حداقل 8 کاراکتر باشد</p>'
        }

        if (checkRePassword() == false) {
            inneredHtml += '<p>رمز با عبور با تکرار آن مطابقت ندارد</p>'
        }

        const maritalStatus = document.getElementById('marital').value
        if (!maritalStatus) {
            inneredHtml += '<p>وضعیت تاهل را انتخاب نکرده اید</p>'
        }

        checkedBirthDay = checkBirthDate()

        if(checkedBirthDay==0){
            inneredHtml += '<p>تاریخ تولد وارد نشده است</p>'
        }

        if(checkedBirthDay==1){
            inneredHtml += '<p>فرمت ورودی تاریخ تولداشتباه است</p>'
        }
        if(checkedBirthDay==2){
            inneredHtml += '<p>سال کوچکتر از 1310 نمیتواند باشد</p>'
        }
        if(checkedBirthDay==3){
            inneredHtml += '<p>سال بزرگتر از 1399 نمیتواند باشد</p>'
        }
        if(checkedBirthDay==4){
            inneredHtml += '<p>ماه وارد شده اشتباه است</p>'
        }

        if(checkedBirthDay==5){
            inneredHtml += '<p>روز وارد شده اشتباه است</p>'
        }

        // console.log(inneredHtml)

        errorsField.innerHTML = inneredHtml



    }