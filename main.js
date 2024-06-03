// Input
document.getElementById("number-btn").addEventListener("click", numberBtnClicked);

// Output
function numberBtnClicked() {
    let num = document.getElementById("number").value;

    // Process
    let numName;
    let numberName;
    let numTens;
    let numberTens;
    if (num > 20 && num < 100) {
        if (num[1] == "1") {
            numName = "one";
            numberName = "Un";
        } else if (num[1] == "2") {
            numName = "two";
            numberName = "Duo";
        } else if (num[1] == "3") {
            numName = "three";
            numberName = "Tre";
        } else if (num[1] == "4") {
            numName = "four";
            numberName = "Quattuor";
        } else if (num[1] == "5") {
            numName = "five";
            numberName = "Quin";
        } else if (num[1] == "6") {
            numName = "six";
            numberName = "Sex";
        } else if (num[1] == "7") {
            numName = "seven";
            numberName = "Septen";
        } else if (num[1] == "8") {
            numName = "eight";
            numberName = "Octo";
        } else if (num[1] == "9") {
            numName = "nine";
            numberName = "Novem";
        }
    } else if (num > 100 && num < 1000) {
        if (num[2] == "1") {
            numName = "one";
            numberName = "Un";
        } else if (num[2] == "2") {
            numName = "two";
            numberName = "Duo";
        } else if (num[2] == "3") {
            numName = "three";
            numberName = "Tre";
        } else if (num[2] == "4") {
            numName = "four";
            numberName = "Quattuor";
        } else if (num[2] == "5") {
            numName = "five";
            numberName = "Quin";
        } else if (num[2] == "6") {
            numName = "six";
            numberName = "Sex";
        } else if (num[2] == "7") {
            numName = "seven";
            numberName = "Septen";
        } else if (num[2] == "8") {
            numName = "eight";
            numberName = "Octo";
        } else if (num[2] == "9") {
            numName = "nine";
            numberName = "Novem";
        }
    } else if (num > 1000 && num < 1010 || num > 2000 && num < 2010 || num > 3000 && num < 3010 || num > 4000 && num < 4010) {
        if (num[3] == "1") {
            numName = "one";
            numberName = "Un";
        } else if (num[3] == "2") {
            numName = "two";
            numberName = "Duo";
        } else if (num[3] == "3") {
            numName = "three";
            numberName = "Tre";
        } else if (num[3] == "4") {
            numName = "four";
            numberName = "Quattuor";
        } else if (num[3] == "5") {
            numName = "five";
            numberName = "Quin";
        } else if (num[3] == "6") {
            numName = "six";
            numberName = "Sex";
        } else if (num[3] == "7") {
            numName = "seven";
            numberName = "Septen";
        } else if (num[3] == "8") {
            numName = "eight";
            numberName = "Octo";
        } else if (num[3] == "9") {
            numName = "nine";
            numberName = "Novem";
        }
    } else if (num > 1009 && num < 1100 || num > 1109 && num < 1200 || num > 1209 && num < 1300 || num > 1309 && num < 1400 || num > 1409 && num < 1500 || num > 1509 && num < 1600 || num > 1609 && num < 1700 || num > 1709 && num < 1800 || num > 1809 && num < 1900 || num > 1909 && num < 2000 || num > 2009 && num < 2100 || num > 2109 && num < 2200 || num > 2209 && num < 2300 || num > 2309 && num < 2400 || num > 2409 && num < 2500 || num > 2509 && num < 2600 || num > 2609 && num < 2700 || num > 2709 && num < 2800 || num > 2809 && num < 2900 || num > 2909 && num < 3000 || num > 3009 && num < 3100 || num > 3109 && num < 3200 || num > 3209 && num < 3300 || num > 3309 && num < 3400 || num > 3409 && num < 3500 || num > 3509 && num < 3600 || num > 3609 && num < 3700 || num > 3709 && num < 3800 || num > 3809 && num < 3900 || num > 3909 && num < 4000 || num > 4009 && num < 4100 || num > 4109 && num < 4200 || num > 4209 && num < 4300 || num > 4309 && num < 4400 || num > 4409 && num < 4500 || num > 4509 && num < 4600 || num > 4609 && num < 4700 || num > 4709 && num < 4800 || num > 4809 && num < 4900 || num > 4909 && num < 5000) {
        if (num[2] == "1" && num[3] >= "0") {
            numTens = "ten";
            numberTens = "dec";
        } else if (num[2] == "2" && num[3] >= "0") {
            numTens = "twenty";
            numberTens = "vigint";
        } else if (num[2] == "3" && num[3] >= "0") {
            numTens = "thirty";
            numberTens = "trigint";
        } else if (num[2] == "4" && num[3] >= "0") {
            numTens = "forty";
            numberTens = "quadragint";
        } else if (num[2] == "5" && num[3] >= "0") {
            numTens = "fifty";
            numberTens = "quinquagint";
        } else if (num[2] == "6" && num[3] >= "0") {
            numTens = "sixty";
            numberTens = "sexagint";
        } else if (num[2] == "7" && num[3] >= "0") {
            numTens = "seventy";
            numberTens = "septuagint";
        } else if (num[2] == "8" && num[3] >= "0") {
            numTens = "eighty";
            numberTens = "octogint";
        } else if (num[2] == "9" && num[3] >= "0") {
            numTens = "ninety";
            numberTens = "nonagint";
        }
        if (num[2] > "0" && num[3] == "0") {
            numName = "";
            numberName = "";
        } else if (num[2] > "0" && num[3] == "1") {
            numName = "-one";
            numberName = "un";
        } else if (num[2] > "0" && num[3] == "2") {
            numName = "-two";
            numberName = "duo";
        } else if (num[2] > "0" && num[3] == "3") {
            numName = "-three";
            numberName = "tre";
        } else if (num[2] > "0" && num[3] == "4") {
            numName = "-four";
            numberName = "quattuor";
        } else if (num[2] > "0" && num[3] == "5") {
            numName = "-five";
            numberName = "quin";
        } else if (num[2] > "0" && num[3] == "6") {
            numName = "-six";
            numberName = "sex";
        } else if (num[2] > "0" && num[3] == "7") {
            numName = "-seven";
            numberName = "septen";
        } else if (num[2] > "0" && num[3] == "8") {
            numName = "-eight";
            numberName = "octo";
        } else if (num[2] > "0" && num[3] == "9") {
            numName = "-nine";
            numberName = "novem";
        }
    } else if (num > 1100 && num < 1110 || num > 1200 && num < 1210 || num > 1300 && num < 1310 || num > 1400 && num < 1410 || num > 1500 && num < 1510 || num > 1600 && num < 1610 || num > 1700 && num < 1710 || num > 1800 && num < 1810 || num > 1900 && num < 1910 || num > 2100 && num < 2110 || num > 2200 && num < 2210 || num > 2300 && num < 2310 || num > 2400 && num < 2410 || num > 2500 && num < 2510 || num > 2600 && num < 2610 || num > 2700 && num < 2710 || num > 2800 && num < 2810 || num > 2900 && num < 2910 || num > 3100 && num < 3110 || num > 3200 && num < 3210 || num > 3300 && num < 3310 || num > 3400 && num < 3410 || num > 3500 && num < 3510 || num > 3600 && num < 3610 || num > 3700 && num < 3710 || num > 3800 && num < 3810 || num > 3900 && num < 3910 || num > 4100 && num < 4110 || num > 4200 && num < 4210 || num > 4300 && num < 4310 || num > 4400 && num < 4410 || num > 4500 && num < 4510 || num > 4600 && num < 4610 || num > 4700 && num < 4710 || num > 4800 && num < 4810 || num > 4900 && num < 4910 || num > 5100 && num < 5110 || num > 5200 && num < 5210 || num > 5300 && num < 5310 || num > 5400 && num < 5410 || num > 5500 && num < 5510 || num > 5600 && num < 5610 || num > 5700 && num < 5710 || num > 5800 && num < 5810 || num > 5900 && num < 5910 || num > 6100 && num < 6110 || num > 6200 && num < 6210 || num > 6300 && num < 6310 || num > 6400 && num < 6410 || num > 6500 && num < 6510 || num > 6600 && num < 6610 || num > 6700 && num < 6710 || num > 6800 && num < 6810 || num > 6900 && num < 6910 || num > 7100 && num < 7110 || num > 7200 && num < 7210 || num > 7300 && num < 7310 || num > 7400 && num < 7410 || num > 7500 && num < 7510 || num > 7600 && num < 7610 || num > 7700 && num < 7710 || num > 7800 && num < 7810 || num > 7900 && num < 7910 || num > 8100 && num < 8110 || num > 8200 && num < 8210 || num > 8300 && num < 8310 || num > 8400 && num < 8410 || num > 8500 && num < 8510 || num > 8600 && num < 8610 || num > 8700 && num < 8710 || num > 8800 && num < 8810 || num > 8900 && num < 8910 || num > 9100 && num < 9110 || num > 9200 && num < 9210 || num > 9300 && num < 9310 || num > 9400 && num < 9410 || num > 9500 && num < 9510 || num > 9600 && num < 9610 || num > 9700 && num < 9710 || num > 9800 && num < 9810 || num > 9900 && num < 9910) {
        if (num[3] == "1") {
            numName = "one";
            numberName = "un";
        } else if (num[3] == "2") {
            numName = "two";
            numberName = "duo";
        } else if (num[3] == "3") {
            numName = "three";
            numberName = "tre";
        } else if (num[3] == "4") {
            numName = "four";
            numberName = "quattuor";
        } else if (num[3] == "5") {
            numName = "five";
            numberName = "quin";
        } else if (num[3] == "6") {
            numName = "six";
            numberName = "sex";
        } else if (num[3] == "7") {
            numName = "seven";
            numberName = "septen";
        } else if (num[3] == "8") {
            numName = "eight";
            numberName = "octo";
        } else if (num[3] == "9") {
            numName = "nine";
            numberName = "novem";
        }
    }
    
    // Testing
    if (num == 0) {
        alert("Zero");
        alert("Thousand");
    } else if (num == 1) {
        alert("One");
        alert("Million");
    } else if (num == 2) {
        alert("Two");
        alert("Billion");
    } else if (num == 3) {
        alert("Three");
        alert("Trillion");
    } else if (num == 4) {
        alert("Four");
        alert("Quadrillion");
    } else if (num == 5) {
        alert("Five");
        alert("Quintillion");
    } else if (num == 6) {
        alert("Six");
        alert("Sextillion");
    } else if (num == 7) {
        alert("Seven");
        alert("Septillion");
    } else if (num == 8) {
        alert("Eight");
        alert("Octillion");
    } else if (num == 9) {
        alert("Nine");
        alert("Nonillion");
    } else if (num == 10) {
        alert("Ten");
        alert("Decillion");
    } else if (num == 11) {
        alert("Eleven");
        alert("Undecillion");
    } else if (num == 12) {
        alert("Twelve");
        alert("Duodecillion");
    } else if (num == 13) {
        alert("Thirteen");
        alert("Tredecillion");
    } else if (num == 14) {
        alert("Fourteen");
        alert("Quattuordecillion");
    } else if (num == 15) {
        alert("Fifteen");
        alert("Quindecillion");
    } else if (num == 16) {
        alert("Sixteen");
        alert("Sexdecillion");
    } else if (num == 17) {
        alert("Seventeen");
        alert("Septendecillion");
    } else if (num == 18) {
        alert("Eighteen");
        alert("Octodecillion");
    } else if (num == 19) {
        alert("Nineteen");
        alert("Novemdecillion");
    } else if (num == 20) {
        alert("Twenty");
        alert("Vigintillion");
    } else if (num > 20 && num < 30) {
        alert("Twenty-" + numName);
        alert(numberName + "vigintillion");
    } else if (num == 30) {
        alert("Thirty");
        alert("Trigintillion");
    } else if (num > 30 && num < 40) {
        alert("Thirty-" + numName);
        alert(numberName + "trigintillion");
    } else if (num == 40) {
        alert("Forty");
        alert("Quadragintillion");
    } else if (num > 40 && num < 50) {
        alert("Forty-" + numName);
        alert(numberName + "quadragintillion");
    } else if (num == 50) {
        alert("Fifty");
        alert("Quinquagintillion");
    } else if (num > 50 && num < 60) {
        alert("Fifty-" + numName);
        alert(numberName + "quinquagintillion");
    } else if (num == 60) {
        alert("Sixty");
        alert("Sexagintillion");
    } else if (num > 60 && num < 70) {
        alert("Sixty-" + numName);
        alert(numberName + "sexagintillion");
    } else if (num == 70) {
        alert("Seventy");
        alert("Septuagintillion");
    } else if (num > 70 && num < 80) {
        alert("Seventy-" + numName);
        alert(numberName + "septuagintillion");
    } else if (num == 80) {
        alert("Eighty");
        alert("Octogintillion");
    } else if (num > 80 && num < 90) {
        alert("Eighty-" + numName);
        alert(numberName + "octogintillion");
    } else if (num == 90) {
        alert("Ninety");
        alert("Nonagintillion");
    } else if (num > 90 && num < 100) {
        alert("Ninety-" + numName);
        alert(numberName + "nonagintillion");
    } else if (num == 100) {
        alert("One hundred");
        alert("Centillion");
    } else if (num == 103) {
        alert("One hundred " + numName);
        alert("Trescentillion");
    } else if (num > 100 && num < 110) {
        alert("One hundred " + numName);
        alert(numberName + "centillion");
    } else if (num == 110) {
        alert("One hundred ten");
        alert("Decicentillion");
    } else if (num == 111) {
        alert("One hundred eleven");
        alert("Undecicentillion");
    } else if (num == 112) {
        alert("One hundred twelve");
        alert("Duodecicentillion");
    } else if (num == 113) {
        alert("One hundred thirteen");
        alert("Tredecicentillion");
    } else if (num == 114) {
        alert("One hundred fourteen");
        alert("Quattuordecicentillion");
    } else if (num == 115) {
        alert("One hundred fifteen");
        alert("Quindecicentillion");
    } else if (num == 116) {
        alert("One hundred sixteen");
        alert("Sexdecicentillion");
    } else if (num == 117) {
        alert("One hundred seventeen");
        alert("Septendecicentillion");
    } else if (num == 118) {
        alert("One hundred eighteen");
        alert("Octodecicentillion");
    } else if (num == 119) {
        alert("One hundred nineteen");
        alert("Novemdecicentillion");
    } else if (num == 120) {
        alert("One hundred twenty");
        alert("Viginticentillion");
    } else if (num > 120 && num < 130) {
        alert("One hundred twenty-" + numName);
        alert(numberName + "viginticentillion");
    } else if (num == 130) {
        alert("One hundred thirty");
        alert("Trigintacentillion");
    } else if (num > 130 && num < 140) {
        alert("One hundred thirty-" + numName);
        alert(numberName + "trigintacentillion");
    } else if (num == 140) {
        alert("One hundred forty");
        alert("Quadragintacentillion");
    } else if (num > 140 && num < 150) {
        alert("One hundred forty-" + numName);
        alert(numberName + "quadragintacentillion");
    } else if (num == 150) {
        alert("One hundred fifty");
        alert("Quinquagintacentillion");
    } else if (num > 150 && num < 160) {
        alert("One hundred fifty-" + numName);
        alert(numberName + "quinquagintacentillion");
    } else if (num == 160) {
        alert("One hundred sixty");
        alert("Sexagintacentillion");
    } else if (num > 160 && num < 170) {
        alert("One hundred sixty-" + numName);
        alert(numberName + "sexagintacentillion");
    } else if (num == 170) {
        alert("One hundred seventy");
        alert("Septuagintacentillion");
    } else if (num > 170 && num < 180) {
        alert("One hundred seventy-" + numName);
        alert(numberName + "septuagintacentillion");
    } else if (num == 180) {
        alert("One hundred eighty");
        alert("Octogintacentillion");
    } else if (num > 180 && num < 190) {
        alert("One hundred eighty-" + numName);
        alert(numberName + "octogintacentillion");
    } else if (num == 190) {
        alert("One hundred ninety");
        alert("Nonagintacentillion");
    } else if (num > 190 && num < 200) {
        alert("One hundred ninety-" + numName);
        alert(numberName + "nonagintacentillion");
    } else if (num == 200) {
        alert("Two hundred");
        alert("Ducentillion");
    } else if (num > 200 && num < 210) {
        alert("Two hundred " + numName);
        alert(numberName + "ducentillion");
    } else if (num == 210) {
        alert("Two hundred ten");
        alert("Deciducentillion");
    } else if (num == 211) {
        alert("Two hundred eleven");
        alert("Undeciducentillion");
    } else if (num == 212) {
        alert("Two hundred twelve");
        alert("Duodeciducentillion");
    } else if (num == 213) {
        alert("Two hundred thirteen");
        alert("Tredeciducentillion");
    } else if (num == 214) {
        alert("Two hundred fourteen");
        alert("Quattuordeciducentillion");
    } else if (num == 215) {
        alert("Two hundred fifteen");
        alert("Quindeciducentillion");
    } else if (num == 216) {
        alert("Two hundred sixteen");
        alert("Sexdeciducentillion");
    } else if (num == 217) {
        alert("Two hundred seventeen");
        alert("Septendeciducentillion");
    } else if (num == 218) {
        alert("Two hundred eighteen");
        alert("Octodeciducentillion");
    } else if (num == 219) {
        alert("Two hundred nineteen");
        alert("Novemdeciducentillion");
    } else if (num == 220) {
        alert("Two hundred twenty");
        alert("Vigintiducentillion");
    } else if (num > 220 && num < 230) {
        alert("Two hundred twenty-" + numName);
        alert(numberName + "vigintiducentillion");
    } else if (num == 230) {
        alert("Two hundred thirty");
        alert("Trigintaducentillion");
    } else if (num > 230 && num < 240) {
        alert("Two hundred thirty-" + numName);
        alert(numberName + "trigintaducentillion");
    } else if (num == 240) {
        alert("Two hundred forty");
        alert("Quadragintaducentillion");
    } else if (num > 240 && num < 250) {
        alert("Two hundred forty-" + numName);
        alert(numberName + "quadragintaducentillion");
    } else if (num == 250) {
        alert("Two hundred fifty");
        alert("Quinquagintaducentillion");
    } else if (num > 250 && num < 260) {
        alert("Two hundred fifty-" + numName);
        alert(numberName + "quinquagintaducentillion");
    } else if (num == 260) {
        alert("Two hundred sixty");
        alert("Sexagintaducentillion");
    } else if (num > 260 && num < 270) {
        alert("Two hundred sixty-" + numName);
        alert(numberName + "sexagintaducentillion");
    } else if (num == 270) {
        alert("Two hundred seventy");
        alert("Septuagintaducentillion");
    } else if (num > 270 && num < 280) {
        alert("Two hundred seventy-" + numName);
        alert(numberName + "septuagintaducentillion");
    } else if (num == 280) {
        alert("Two hundred eighty");
        alert("Octogintaducentillion");
    } else if (num > 280 && num < 290) {
        alert("Two hundred eighty-" + numName);
        alert(numberName + "octogintaducentillion");
    } else if (num == 290) {
        alert("Two hundred ninety");
        alert("Nonagintaducentillion");
    } else if (num > 290 && num < 300) {
        alert("Two hundred ninety-" + numName);
        alert(numberName + "nonagintaducentillion");
    } else if (num == 300) {
        alert("Three hundred");
        alert("Trecentillion");
    } else if (num > 300 && num < 310) {
        alert("Three hundred " + numName);
        alert(numberName + "trecentillion");
    } else if (num == 310) {
        alert("Three hundred ten");
        alert("Decitrecentillion");
    } else if (num == 311) {
        alert("Three hundred eleven");
        alert("Undecitrecentillion");
    } else if (num == 312) {
        alert("Three hundred twelve");
        alert("Duodecitrecentillion");
    } else if (num == 313) {
        alert("Three hundred thirteen");
        alert("Tredecitrecentillion");
    } else if (num == 314) {
        alert("Three hundred fourteen");
        alert("Quattuordecitrecentillion");
    } else if (num == 315) {
        alert("Three hundred fifteen");
        alert("Quindecitrecentillion");
    } else if (num == 316) {
        alert("Three hundred sixteen");
        alert("Sexdecitrecentillion");
    } else if (num == 317) {
        alert("Three hundred seventeen");
        alert("Septendecitrecentillion");
    } else if (num == 318) {
        alert("Three hundred eighteen");
        alert("Octodecitrecentillion");
    } else if (num == 319) {
        alert("Three hundred nineteen");
        alert("Novemdecitrecentillion");
    } else if (num == 320) {
        alert("Three hundred twenty");
        alert("Vigintitrecentillion");
    } else if (num > 320 && num < 330) {
        alert("Three hundred twenty-" + numName);
        alert(numberName + "vigintitrecentillion");
    } else if (num == 330) {
        alert("Three hundred thirty");
        alert("Trigintatrecentillion");
    } else if (num > 330 && num < 340) {
        alert("Three hundred thirty-" + numName);
        alert(numberName + "trigintatrecentillion");
    } else if (num == 340) {
        alert("Three hundred forty");
        alert("Quadragintatrecentillion");
    } else if (num > 340 && num < 350) {
        alert("Three hundred forty-" + numName);
        alert(numberName + "quadragintatrecentillion");
    } else if (num == 350) {
        alert("Three hundred fifty");
        alert("Quinquagintatrecentillion");
    } else if (num > 350 && num < 360) {
        alert("Three hundred fifty-" + numName);
        alert(numberName + "quinquagintatrecentillion");
    } else if (num == 360) {
        alert("Three hundred sixty");
        alert("Sexagintatrecentillion");
    } else if (num > 360 && num < 370) {
        alert("Three hundred sixty-" + numName);
        alert(numberName + "sexagintatrecentillion");
    } else if (num == 370) {
        alert("Three hundred seventy");
        alert("Septuagintatrecentillion");
    } else if (num > 370 && num < 380) {
        alert("Three hundred seventy-" + numName);
        alert(numberName + "septuagintatrecentillion");
    } else if (num == 380) {
        alert("Three hundred eighty");
        alert("Octogintatrecentillion");
    } else if (num > 380 && num < 390) {
        alert("Three hundred eighty-" + numName);
        alert(numberName + "octogintatrecentillion");
    } else if (num == 390) {
        alert("Three hundred ninety");
        alert("Nonagintatrecentillion");
    } else if (num > 390 && num < 400) {
        alert("Three hundred ninety-" + numName);
        alert(numberName + "nonagintatrecentillion");
    } else if (num == 400) {
        alert("Four hundred");
        alert("Quadringentillion");
    } else if (num > 400 && num < 410) {
        alert("Four hundred " + numName);
        alert(numberName + "quadringentillion");
    } else if (num == 410) {
        alert("Four hundred ten");
        alert("Deciquadringentillion");
    } else if (num == 411) {
        alert("Four hundred eleven");
        alert("Undeciquadringentillion");
    } else if (num == 412) {
        alert("Four hundred twelve");
        alert("Duodeciquadringentillion");
    } else if (num == 413) {
        alert("Four hundred thirteen");
        alert("Tredeciquadringentillion");
    } else if (num == 414) {
        alert("Four hundred fourteen");
        alert("Quattuordeciquadringentillion");
    } else if (num == 415) {
        alert("Four hundred fifteen");
        alert("Quindeciquadringentillion");
    } else if (num == 416) {
        alert("Four hundred sixteen");
        alert("Sexdeciquadringentillion");
    } else if (num == 417) {
        alert("Four hundred seventeen");
        alert("Septendeciquadringentillion");
    } else if (num == 418) {
        alert("Four hundred eighteen");
        alert("Octodeciquadringentillion");
    } else if (num == 419) {
        alert("Four hundred nineteen");
        alert("Novemdeciquadringentillion");
    } else if (num == 420) {
        alert("Four hundred twenty");
        alert("Vigintiquadringentillion");
    } else if (num > 420 && num < 430) {
        alert("Four hundred twenty-" + numName);
        alert(numberName + "vigintiquadringentillion");
    } else if (num == 430) {
        alert("Four hundred thirty");
        alert("Trigintaquadringentillion");
    } else if (num > 430 && num < 440) {
        alert("Four hundred thirty-" + numName);
        alert(numberName + "trigintaquadringentillion");
    } else if (num == 440) {
        alert("Four hundred forty");
        alert("Quadragintaquadringentillion");
    } else if (num > 440 && num < 450) {
        alert("Four hundred forty-" + numName);
        alert(numberName + "quadragintaquadringentillion");
    } else if (num == 450) {
        alert("Four hundred fifty");
        alert("Quinquagintaquadringentillion");
    } else if (num > 450 && num < 460) {
        alert("Four hundred fifty-" + numName);
        alert(numberName + "quinquagintaquadringentillion");
    } else if (num == 460) {
        alert("Four hundred sixty");
        alert("Sexagintaquadringentillion");
    } else if (num > 460 && num < 470) {
        alert("Four hundred sixty-" + numName);
        alert(numberName + "sexagintaquadringentillion");
    } else if (num == 470) {
        alert("Four hundred seventy");
        alert("Septuagintaquadringentillion");
    } else if (num > 470 && num < 480) {
        alert("Four hundred seventy-" + numName);
        alert(numberName + "septuagintaquadringentillion");
    } else if (num == 480) {
        alert("Four hundred eighty");
        alert("Octogintaquadringentillion");
    } else if (num > 480 && num < 490) {
        alert("Four hundred eighty-" + numName);
        alert(numberName + "octogintaquadringentillion");
    } else if (num == 490) {
        alert("Four hundred ninety");
        alert("Nonagintaquadringentillion");
    } else if (num > 490 && num < 500) {
        alert("Four hundred ninety-" + numName);
        alert(numberName + "nonagintaquadringentillion");
    } else if (num == 500) {
        alert("Five hundred");
        alert("Quingentillion");
    } else if (num > 500 && num < 510) {
        alert("Five hundred " + numName);
        alert(numberName + "quingentillion");
    } else if (num == 510) {
        alert("Five hundred ten");
        alert("Deciquingentillion");
    } else if (num == 511) {
        alert("Five hundred eleven");
        alert("Undeciquingentillion");
    } else if (num == 512) {
        alert("Five hundred twelve");
        alert("Duodeciquingentillion");
    } else if (num == 513) {
        alert("Five hundred thirteen");
        alert("Tredeciquingentillion");
    } else if (num == 514) {
        alert("Five hundred fourteen");
        alert("Quattuordeciquingentillion");
    } else if (num == 515) {
        alert("Five hundred fifteen");
        alert("Quindeciquingentillion");
    } else if (num == 516) {
        alert("Five hundred sixteen");
        alert("Sexdeciquingentillion");
    } else if (num == 517) {
        alert("Five hundred seventeen");
        alert("Septendeciquingentillion");
    } else if (num == 518) {
        alert("Five hundred eighteen");
        alert("Octodeciquingentillion");
    } else if (num == 519) {
        alert("Five hundred nineteen");
        alert("Novemdeciquingentillion");
    } else if (num == 520) {
        alert("Five hundred twenty");
        alert("Vigintiquingentillion");
    } else if (num > 520 && num < 530) {
        alert("Five hundred twenty-" + numName);
        alert(numberName + "vigintiquingentillion");
    } else if (num == 530) {
        alert("Five hundred thirty");
        alert("Trigintaquingentillion");
    } else if (num > 530 && num < 540) {
        alert("Five hundred thirty-" + numName);
        alert(numberName + "trigintaquingentillion");
    } else if (num == 540) {
        alert("Five hundred forty");
        alert("Quadragintaquingentillion");
    } else if (num > 540 && num < 550) {
        alert("Five hundred forty-" + numName);
        alert(numberName + "quadragintaquingentillion");
    } else if (num == 550) {
        alert("Five hundred fifty");
        alert("Quinquagintaquingentillion");
    } else if (num > 550 && num < 560) {
        alert("Five hundred fifty-" + numName);
        alert(numberName + "quinquagintaquingentillion");
    } else if (num == 560) {
        alert("Five hundred sixty");
        alert("Sexagintaquingentillion");
    } else if (num > 560 && num < 570) {
        alert("Five hundred sixty-" + numName);
        alert(numberName + "sexagintaquingentillion");
    } else if (num == 570) {
        alert("Five hundred seventy");
        alert("Septuagintaquingentillion");
    } else if (num > 570 && num < 580) {
        alert("Five hundred seventy-" + numName);
        alert(numberName + "septuagintaquingentillion");
    } else if (num == 580) {
        alert("Five hundred eighty");
        alert("Octogintaquingentillion");
    } else if (num > 580 && num < 590) {
        alert("Five hundred eighty-" + numName);
        alert(numberName + "octogintaquingentillion");
    } else if (num == 590) {
        alert("Five hundred ninety");
        alert("Nonagintaquingentillion");
    } else if (num > 590 && num < 600) {
        alert("Five hundred ninety-" + numName);
        alert(numberName + "nonagintaquingentillion");
    } else if (num == 600) {
        alert("Six hundred");
        alert("Sescentillion");
    } else if (num > 600 && num < 610) {
        alert("Six hundred " + numName);
        alert(numberName + "sescentillion");
    } else if (num == 610) {
        alert("Six hundred ten");
        alert("Decisescentillion");
    } else if (num == 611) {
        alert("Six hundred eleven");
        alert("Undecisescentillion");
    } else if (num == 612) {
        alert("Six hundred twelve");
        alert("Duodecisescentillion");
    } else if (num == 613) {
        alert("Six hundred thirteen");
        alert("Tredecisescentillion");
    } else if (num == 614) {
        alert("Six hundred fourteen");
        alert("Quattuordecisescentillion");
    } else if (num == 615) {
        alert("Six hundred fifteen");
        alert("Quindecisescentillion");
    } else if (num == 616) {
        alert("Six hundred sixteen");
        alert("Sexdecisescentillion");
    } else if (num == 617) {
        alert("Six hundred seventeen");
        alert("Septendecisescentillion");
    } else if (num == 618) {
        alert("Six hundred eighteen");
        alert("Octodecisescentillion");
    } else if (num == 619) {
        alert("Six hundred nineteen");
        alert("Novemdecisescentillion");
    } else if (num == 620) {
        alert("Six hundred twenty");
        alert("Vigintisescentillion");
    } else if (num > 620 && num < 630) {
        alert("Six hundred twenty-" + numName);
        alert(numberName + "vigintisescentillion");
    } else if (num == 630) {
        alert("Six hundred thirty");
        alert("Trigintasescentillion");
    } else if (num > 630 && num < 640) {
        alert("Six hundred thirty-" + numName);
        alert(numberName + "trigintasescentillion");
    } else if (num == 640) {
        alert("Six hundred forty");
        alert("Quadragintasescentillion");
    } else if (num > 640 && num < 650) {
        alert("Six hundred forty-" + numName);
        alert(numberName + "quadragintasescentillion");
    } else if (num == 650) {
        alert("Six hundred fifty");
        alert("Quinquagintasescentillion");
    } else if (num > 650 && num < 660) {
        alert("Six hundred fifty-" + numName);
        alert(numberName + "quinquagintasescentillion");
    } else if (num == 660) {
        alert("Six hundred sixty");
        alert("Sexagintasescentillion");
    } else if (num > 660 && num < 670) {
        alert("Six hundred sixty-" + numName);
        alert(numberName + "sexagintasescentillion");
    } else if (num == 670) {
        alert("Six hundred seventy");
        alert("Septuagintasescentillion");
    } else if (num > 670 && num < 680) {
        alert("Six hundred seventy-" + numName);
        alert(numberName + "septuagintasescentillion");
    } else if (num == 680) {
        alert("Six hundred eighty");
        alert("Octogintasescentillion");
    } else if (num > 680 && num < 690) {
        alert("Six hundred eighty-" + numName);
        alert(numberName + "octogintasescentillion");
    } else if (num == 690) {
        alert("Six hundred ninety");
        alert("Nonagintasescentillion");
    } else if (num > 690 && num < 700) {
        alert("Six hundred ninety-" + numName);
        alert(numberName + "nonagintasescentillion");
    } else if (num == 700) {
        alert("Seven hundred");
        alert("Septingentillion");
    } else if (num > 700 && num < 710) {
        alert("Seven hundred " + numName);
        alert(numberName + "septingentillion");
    } else if (num == 710) {
        alert("Seven hundred ten");
        alert("Deciseptingentillion");
    } else if (num == 711) {
        alert("Seven hundred eleven");
        alert("Undeciseptingentillion");
    } else if (num == 712) {
        alert("Seven hundred twelve");
        alert("Duodeciseptingentillion");
    } else if (num == 713) {
        alert("Seven hundred thirteen");
        alert("Tredeciseptingentillion");
    } else if (num == 714) {
        alert("Seven hundred fourteen");
        alert("Quattuordeciseptingentillion");
    } else if (num == 715) {
        alert("Seven hundred fifteen");
        alert("Quindeciseptingentillion");
    } else if (num == 716) {
        alert("Seven hundred sixteen");
        alert("Sexdeciseptingentillion");
    } else if (num == 717) {
        alert("Seven hundred seventeen");
        alert("Septendeciseptingentillion");
    } else if (num == 718) {
        alert("Seven hundred eighteen");
        alert("Octodeciseptingentillion");
    } else if (num == 719) {
        alert("Seven hundred nineteen");
        alert("Novemdeciseptingentillion");
    } else if (num == 720) {
        alert("Seven hundred twenty");
        alert("Vigintiseptingentillion");
    } else if (num > 720 && num < 730) {
        alert("Seven hundred twenty-" + numName);
        alert(numberName + "vigintiseptingentillion");
    } else if (num == 730) {
        alert("Seven hundred thirty");
        alert("Trigintaseptingentillion");
    } else if (num > 730 && num < 740) {
        alert("Seven hundred thirty-" + numName);
        alert(numberName + "trigintaseptingentillion");
    } else if (num == 740) {
        alert("Seven hundred forty");
        alert("Quadragintaseptingentillion");
    } else if (num > 740 && num < 750) {
        alert("Seven hundred forty-" + numName);
        alert(numberName + "quadragintaseptingentillion");
    } else if (num == 750) {
        alert("Seven hundred fifty");
        alert("Quinquagintaseptingentillion");
    } else if (num > 750 && num < 760) {
        alert("Seven hundred fifty-" + numName);
        alert(numberName + "quinquagintaseptingentillion");
    } else if (num == 760) {
        alert("Seven hundred sixty");
        alert("Sexagintaseptingentillion");
    } else if (num > 760 && num < 770) {
        alert("Seven hundred sixty-" + numName);
        alert(numberName + "sexagintaseptingentillion");
    } else if (num == 770) {
        alert("Seven hundred seventy");
        alert("Septuagintaseptingentillion");
    } else if (num > 770 && num < 780) {
        alert("Seven hundred seventy-" + numName);
        alert(numberName + "septuagintaseptingentillion");
    } else if (num == 780) {
        alert("Seven hundred eighty");
        alert("Octogintaseptingentillion");
    } else if (num > 780 && num < 790) {
        alert("Seven hundred eighty-" + numName);
        alert(numberName + "octogintaseptingentillion");
    } else if (num == 790) {
        alert("Seven hundred ninety");
        alert("Nonagintaseptingentillion");
    } else if (num > 790 && num < 800) {
        alert("Seven hundred ninety-" + numName);
        alert(numberName + "nonagintaseptingentillion");
    } else if (num == 800) {
        alert("Eight hundred");
        alert("Octingentillion");
    } else if (num > 800 && num < 810) {
        alert("Eight hundred " + numName);
        alert(numberName + "octingentillion");
    } else if (num == 810) {
        alert("Eight hundred ten");
        alert("Decioctingentillion");
    } else if (num == 811) {
        alert("Eight hundred eleven");
        alert("Undecioctingentillion");
    } else if (num == 812) {
        alert("Eight hundred twelve");
        alert("Duodecioctingentillion");
    } else if (num == 813) {
        alert("Eight hundred thirteen");
        alert("Tredecioctingentillion");
    } else if (num == 814) {
        alert("Eight hundred fourteen");
        alert("Quattuordecioctingentillion");
    } else if (num == 815) {
        alert("Eight hundred fifteen");
        alert("Quindecioctingentillion");
    } else if (num == 816) {
        alert("Eight hundred sixteen");
        alert("Sexdecioctingentillion");
    } else if (num == 817) {
        alert("Eight hundred seventeen");
        alert("Septendecioctingentillion");
    } else if (num == 818) {
        alert("Eight hundred eighteen");
        alert("Octodecioctingentillion");
    } else if (num == 819) {
        alert("Eight hundred nineteen");
        alert("Novemdecioctingentillion");
    } else if (num == 820) {
        alert("Eight hundred twenty");
        alert("Vigintioctingentillion");
    } else if (num > 820 && num < 830) {
        alert("Eight hundred twenty-" + numName);
        alert(numberName + "vigintioctingentillion");
    } else if (num == 830) {
        alert("Eight hundred thirty");
        alert("Trigintaoctingentillion");
    } else if (num > 830 && num < 840) {
        alert("Eight hundred thirty-" + numName);
        alert(numberName + "trigintaoctingentillion");
    } else if (num == 840) {
        alert("Eight hundred forty");
        alert("Quadragintaoctingentillion");
    } else if (num > 840 && num < 850) {
        alert("Eight hundred forty-" + numName);
        alert(numberName + "quadragintaoctingentillion");
    } else if (num == 850) {
        alert("Eight hundred fifty");
        alert("Quinquagintaoctingentillion");
    } else if (num > 850 && num < 860) {
        alert("Eight hundred fifty-" + numName);
        alert(numberName + "quinquagintaoctingentillion");
    } else if (num == 860) {
        alert("Eight hundred sixty");
        alert("Sexagintaoctingentillion");
    } else if (num > 860 && num < 870) {
        alert("Eight hundred sixty-" + numName);
        alert(numberName + "sexagintaoctingentillion");
    } else if (num == 870) {
        alert("Eight hundred seventy");
        alert("Septuagintaoctingentillion");
    } else if (num > 870 && num < 880) {
        alert("Eight hundred seventy-" + numName);
        alert(numberName + "septuagintaoctingentillion");
    } else if (num == 880) {
        alert("Eight hundred eighty");
        alert("Octogintaoctingentillion");
    } else if (num > 880 && num < 890) {
        alert("Eight hundred eighty-" + numName);
        alert(numberName + "octogintaoctingentillion");
    } else if (num == 890) {
        alert("Eight hundred ninety");
        alert("Nonagintaoctingentillion");
    } else if (num > 890 && num < 900) {
        alert("Eight hundred ninety-" + numName);
        alert(numberName + "nonagintaoctingentillion");
    } else if (num == 900) {
        alert("Nine hundred");
        alert("Nongentillion");
    } else if (num > 900 && num < 910) {
        alert("Nine hundred " + numName);
        alert(numberName + "nongentillion");
    } else if (num == 910) {
        alert("Nine hundred ten");
        alert("Decinongentillion");
    } else if (num == 911) {
        alert("Nine hundred eleven");
        alert("Undecinongentillion");
    } else if (num == 912) {
        alert("Nine hundred twelve");
        alert("Duodecinongentillion");
    } else if (num == 913) {
        alert("Nine hundred thirteen");
        alert("Tredecinongentillion");
    } else if (num == 914) {
        alert("Nine hundred fourteen");
        alert("Quattuordecinongentillion");
    } else if (num == 915) {
        alert("Nine hundred fifteen");
        alert("Quindecinongentillion");
    } else if (num == 916) {
        alert("Nine hundred sixteen");
        alert("Sexdecinongentillion");
    } else if (num == 917) {
        alert("Nine hundred seventeen");
        alert("Septendecinongentillion");
    } else if (num == 918) {
        alert("Nine hundred eighteen");
        alert("Octodecinongentillion");
    } else if (num == 919) {
        alert("Nine hundred nineteen");
        alert("Novemdecinongentillion");
    } else if (num == 920) {
        alert("Nine hundred twenty");
        alert("Vigintinongentillion");
    } else if (num > 920 && num < 930) {
        alert("Nine hundred twenty-" + numName);
        alert(numberName + "vigintinongentillion");
    } else if (num == 930) {
        alert("Nine hundred thirty");
        alert("Trigintanongentillion");
    } else if (num > 930 && num < 940) {
        alert("Nine hundred thirty-" + numName);
        alert(numberName + "trigintanongentillion");
    } else if (num == 940) {
        alert("Nine hundred forty");
        alert("Quadragintanongentillion");
    } else if (num > 940 && num < 950) {
        alert("Nine hundred forty-" + numName);
        alert(numberName + "quadragintanongentillion");
    } else if (num == 950) {
        alert("Nine hundred fifty");
        alert("Quinquagintanongentillion");
    } else if (num > 950 && num < 960) {
        alert("Nine hundred fifty-" + numName);
        alert(numberName + "quinquagintanongentillion");
    } else if (num == 960) {
        alert("Nine hundred sixty");
        alert("Sexagintanongentillion");
    } else if (num > 960 && num < 970) {
        alert("Nine hundred sixty-" + numName);
        alert(numberName + "sexagintanongentillion");
    } else if (num == 970) {
        alert("Nine hundred seventy");
        alert("Septuagintanongentillion");
    } else if (num > 970 && num < 980) {
        alert("Nine hundred seventy-" + numName);
        alert(numberName + "septuagintanongentillion");
    } else if (num == 980) {
        alert("Nine hundred eighty");
        alert("Octogintanongentillion");
    } else if (num > 980 && num < 990) {
        alert("Nine hundred eighty-" + numName);
        alert(numberName + "octogintanongentillion");
    } else if (num == 990) {
        alert("Nine hundred ninety");
        alert("Nonagintanongentillion");
    } else if (num > 990 && num < 1000) {
        alert("Nine hundred ninety-" + numName);
        alert(numberName + "nonagintanongentillion");
    } else if (num == 1000) {
        alert("One thousand");
        alert("Millillion");
    } else if (num == 1005) {
        alert("One thousand " + numName);
        alert("Quinquamillillion");
    } else if (num == 1006) {
        alert("One thousand " + numName);
        alert("Sesmillillion");
    } else if (num > 1000 && num < 1010) {
        alert("One thousand " + numName);
        alert(numberName + "millillion");
    } else if (num == 1010) {
        alert("One thousand ten");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1011) {
        alert("One thousand eleven");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1012) {
        alert("One thousand twelve");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1013) {
        alert("One thousand thirteen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1014) {
        alert("One thousand fourteen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1015) {
        alert("One thousand fifteen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1016) {
        alert("One thousand sixteen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1017) {
        alert("One thousand seventeen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1018) {
        alert("One thousand eighteen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1019) {
        alert("One thousand nineteen");
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num > 1019 && num < 1100) {
        alert("One thousand " + numTens + numberName);
        alert("Milli-" + numberName + numberTens + "illion");
    } else if (num == 1100) {
        alert("One thousand one hundred");
        alert("Eleven hundred");
        alert("Milli-centillion");
    } else if (num == 1103) {
        alert("One thousand one hundred " + numName);
        alert("Eleven hundred " + numName);
        alert("Milli-trescentillion");
    } else if (num > 1100 && num < 1110) {
        alert("One thousand one hundred " + numName);
        alert("Eleven hundred " + numName);
        alert("Milli-" + numberName + "centillion");
    } else if (num == 1110) {
        alert("One thousand one hundred ten");
        alert("Eleven hundred ten");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1111) {
        alert("One thousand one hundred eleven");
        alert("Eleven hundred eleven");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1112) {
        alert("One thousand one hundred twelve");
        alert("Eleven hundred twelve");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1113) {
        alert("One thousand one hundred thirteen");
        alert("Eleven hundred thirteen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1114) {
        alert("One thousand one hundred fourteen");
        alert("Eleven hundred fourteen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1115) {
        alert("One thousand one hundred fifteen");
        alert("Eleven hundred fifteen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1116) {
        alert("One thousand one hundred sixteen");
        alert("Eleven hundred sixteen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1117) {
        alert("One thousand one hundred seventeen");
        alert("Eleven hundred seventeen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1118) {
        alert("One thousand one hundred eighteen");
        alert("Eleven hundred eighteen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num == 1119) {
        alert("One thousand one hundred nineteen");
        alert("Eleven hundred nineteen");
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num > 1119 && num < 1130) {
        alert("One thousand one hundred " + numTens + numName);
        alert("Eleven hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "icentillion");
    } else if (num > 1129 && num < 1200) {
        alert("One thousand one hundred " + numTens + numName);
        alert("Eleven hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "acentillion");
    } else if (num == 1200) {
        alert("One thousand two hundred");
        alert("Twelve hundred");
        alert("Milli-ducentillion");
    } else if (num > 1200 && num < 1210) {
        alert("One thousand two hundred " + numName);
        alert("Twelve hundred " + numName);
        alert("Milli-" + numberName + "ducentillion");
    } else if (num == 1210) {
        alert("One thousand two hundred ten");
        alert("Twelve hundred ten");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1211) {
        alert("One thousand two hundred eleven");
        alert("Twelve hundred eleven");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1212) {
        alert("One thousand two hundred twelve");
        alert("Twelve hundred twelve");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1213) {
        alert("One thousand two hundred thirteen");
        alert("Twelve hundred thirteen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1214) {
        alert("One thousand two hundred fourteen");
        alert("Twelve hundred fourteen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1215) {
        alert("One thousand two hundred fifteen");
        alert("Twelve hundred fifteen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1216) {
        alert("One thousand two hundred sixteen");
        alert("Twelve hundred sixteen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1217) {
        alert("One thousand two hundred seventeen");
        alert("Twelve hundred seventeen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1218) {
        alert("One thousand two hundred eighteen");
        alert("Twelve hundred eighteen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num == 1219) {
        alert("One thousand two hundred nineteen");
        alert("Twelve hundred nineteen");
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num > 1219 && num < 1230) {
        alert("One thousand two hundred " + numTens + numName);
        alert("Twelve hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "iducentillion");
    } else if (num > 1229 && num < 1300) {
        alert("One thousand two hundred " + numTens + numName);
        alert("Twelve hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "aducentillion");
    } else if (num == 1300) {
        alert("One thousand three hundred");
        alert("Thirteen hundred");
        alert("Milli-trecentillion");
    } else if (num > 1300 && num < 1310) {
        alert("One thousand three hundred " + numName);
        alert("Thirteen hundred " + numName);
        alert("Milli-" + numberName + "trecentillion");
    } else if (num == 1310) {
        alert("One thousand three hundred ten");
        alert("Thirteen hundred ten");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1311) {
        alert("One thousand three hundred eleven");
        alert("Thirteen hundred eleven");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1312) {
        alert("One thousand three hundred twelve");
        alert("Thirteen hundred twelve");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1313) {
        alert("One thousand three hundred thirteen");
        alert("Thirteen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1314) {
        alert("One thousand three hundred fourteen");
        alert("Thirteen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1315) {
        alert("One thousand three hundred fifteen");
        alert("Thirteen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1316) {
        alert("One thousand three hundred sixteen");
        alert("Thirteen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1317) {
        alert("One thousand three hundred seventeen");
        alert("Thirteen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1318) {
        alert("One thousand three hundred eighteen");
        alert("Thirteen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 1319) {
        alert("One thousand three hundred nineteen");
        alert("Thirteen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 1319 && num < 1330) {
        alert("One thousand three hundred " + numTens + numName);
        alert("Thirteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 1329 && num < 1400) {
        alert("One thousand three hundred " + numTens + numName);
        alert("Thirteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 1400) {
        alert("One thousand four hundred");
        alert("Fourteen hundred");
        alert("Milli-quadringentillion");
    } else if (num > 1400 && num < 1410) {
        alert("One thousand four hundred " + numName);
        alert("Fourteen hundred " + numName);
        alert("Milli-" + numberName + "quadringentillion");
    } else if (num == 1410) {
        alert("One thousand four hundred ten");
        alert("Fourteen hundred ten");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1411) {
        alert("One thousand four hundred eleven");
        alert("Fourteen hundred eleven");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1412) {
        alert("One thousand four hundred twelve");
        alert("Fourteen hundred twelve");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1413) {
        alert("One thousand four hundred thirteen");
        alert("Fourteen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1414) {
        alert("One thousand four hundred fourteen");
        alert("Fourteen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1415) {
        alert("One thousand four hundred fifteen");
        alert("Fourteen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1416) {
        alert("One thousand four hundred sixteen");
        alert("Fourteen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1417) {
        alert("One thousand four hundred seventeen");
        alert("Fourteen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1418) {
        alert("One thousand four hundred eighteen");
        alert("Fourteen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 1419) {
        alert("One thousand four hundred nineteen");
        alert("Fourteen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 1419 && num < 1430) {
        alert("One thousand four hundred " + numTens + numName);
        alert("Fourteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 1429 && num < 1500) {
        alert("One thousand four hundred " + numTens + numName);
        alert("Fourteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 1500) {
        alert("One thousand five hundred");
        alert("Fifteen hundred");
        alert("Milli-quingentillion");
    } else if (num > 1500 && num < 1510) {
        alert("One thousand five hundred " + numName);
        alert("Fifteen hundred " + numName);
        alert("Milli-" + numberName + "quingentillion");
    } else if (num == 1510) {
        alert("One thousand five hundred ten");
        alert("Fifteen hundred ten");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1511) {
        alert("One thousand five hundred eleven");
        alert("Fifteen hundred eleven");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1512) {
        alert("One thousand five hundred twelve");
        alert("Fifteen hundred twelve");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1513) {
        alert("One thousand five hundred thirteen");
        alert("Fifteen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1514) {
        alert("One thousand five hundred fourteen");
        alert("Fifteen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1515) {
        alert("One thousand five hundred fifteen");
        alert("Fifteen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1516) {
        alert("One thousand five hundred sixteen");
        alert("Fifteen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1517) {
        alert("One thousand five hundred seventeen");
        alert("Fifteen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1518) {
        alert("One thousand five hundred eighteen");
        alert("Fifteen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 1519) {
        alert("One thousand five hundred nineteen");
        alert("Fifteen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 1519 && num < 1530) {
        alert("One thousand five hundred " + numTens + numName);
        alert("Fifteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 1529 && num < 1600) {
        alert("One thousand five hundred " + numTens + numName);
        alert("Fifteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 1600) {
        alert("One thousand six hundred");
        alert("Sixteen hundred");
        alert("Milli-sescentillion");
    } else if (num > 1600 && num < 1610) {
        alert("One thousand six hundred " + numName);
        alert("Sixteen hundred " + numName);
        alert("Milli-" + numberName + "sescentillion");
    } else if (num == 1610) {
        alert("One thousand six hundred ten");
        alert("Sixteen hundred ten");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1611) {
        alert("One thousand six hundred eleven");
        alert("Sixteen hundred eleven");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1612) {
        alert("One thousand six hundred twelve");
        alert("Sixteen hundred twelve");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1613) {
        alert("One thousand six hundred thirteen");
        alert("Sixteen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1614) {
        alert("One thousand six hundred fourteen");
        alert("Sixteen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1615) {
        alert("One thousand six hundred fifteen");
        alert("Sixteen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1616) {
        alert("One thousand six hundred sixteen");
        alert("Sixteen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1617) {
        alert("One thousand six hundred seventeen");
        alert("Sixteen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1618) {
        alert("One thousand six hundred eighteen");
        alert("Sixteen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num == 1619) {
        alert("One thousand six hundred nineteen");
        alert("Sixteen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num > 1619 && num < 1630) {
        alert("One thousand six hundred " + numTens + numName);
        alert("Sixteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "isescentillion");
    } else if (num > 1629 && num < 1700) {
        alert("One thousand six hundred " + numTens + numName);
        alert("Sixteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "asescentillion");
    } else if (num == 1700) {
        alert("One thousand seven hundred");
        alert("Seventeen hundred");
        alert("Milli-septingentillion");
    } else if (num > 1700 && num < 1710) {
        alert("One thousand seven hundred " + numName);
        alert("Seventeen hundred " + numName);
        alert("Milli-" + numberName + "septingentillion");
    } else if (num == 1710) {
        alert("One thousand seven hundred ten");
        alert("Seventeen hundred ten");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1711) {
        alert("One thousand seven hundred eleven");
        alert("Seventeen hundred eleven");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1712) {
        alert("One thousand seven hundred twelve");
        alert("Seventeen hundred twelve");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1713) {
        alert("One thousand seven hundred thirteen");
        alert("Seventeen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1714) {
        alert("One thousand seven hundred fourteen");
        alert("Seventeen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1715) {
        alert("One thousand seven hundred fifteen");
        alert("Seventeen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1716) {
        alert("One thousand seven hundred sixteen");
        alert("Seventeen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1717) {
        alert("One thousand seven hundred seventeen");
        alert("Seventeen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1718) {
        alert("One thousand seven hundred eighteen");
        alert("Seventeen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 1719) {
        alert("One thousand seven hundred nineteen");
        alert("Seventeen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 1719 && num < 1730) {
        alert("One thousand seven hundred " + numTens + numName);
        alert("Seventeen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 1729 && num < 1800) {
        alert("One thousand seven hundred " + numTens + numName);
        alert("Seventeen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 1800) {
        alert("One thousand eight hundred");
        alert("Eighteen hundred");
        alert("Milli-octingentillion");
    } else if (num > 1800 && num < 1810) {
        alert("One thousand eight hundred " + numName);
        alert("Eighteen hundred " + numName);
        alert("Milli-" + numberName + "octingentillion");
    } else if (num == 1810) {
        alert("One thousand eight hundred ten");
        alert("Eighteen hundred ten");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1811) {
        alert("One thousand eight hundred eleven");
        alert("Eighteen hundred eleven");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1812) {
        alert("One thousand eight hundred twelve");
        alert("Eighteen hundred twelve");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1813) {
        alert("One thousand eight hundred thirteen");
        alert("Eighteen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1814) {
        alert("One thousand eight hundred fourteen");
        alert("Eighteen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1815) {
        alert("One thousand eight hundred fifteen");
        alert("Eighteen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1816) {
        alert("One thousand eight hundred sixteen");
        alert("Eighteen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1817) {
        alert("One thousand eight hundred seventeen");
        alert("Eighteen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1818) {
        alert("One thousand eight hundred eighteen");
        alert("Eighteen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 1819) {
        alert("One thousand eight hundred nineteen");
        alert("Eighteen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 1819 && num < 1830) {
        alert("One thousand eight hundred " + numTens + numName);
        alert("Eighteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 1829 && num < 1900) {
        alert("One thousand eight hundred " + numTens + numName);
        alert("Eighteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 1900) {
        alert("One thousand nine hundred");
        alert("Nineteen hundred");
        alert("Milli-nongentillion");
    } else if (num > 1900 && num < 1910) {
        alert("One thousand nine hundred " + numName);
        alert("Nineteen hundred " + numName);
        alert("Milli-" + numberName + "nongentillion");
    } else if (num == 1910) {
        alert("One thousand nine hundred ten");
        alert("Nineteen hundred ten");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1911) {
        alert("One thousand nine hundred eleven");
        alert("Nineteen hundred eleven");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1912) {
        alert("One thousand nine hundred twelve");
        alert("Nineteen hundred twelve");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1913) {
        alert("One thousand nine hundred thirteen");
        alert("Nineteen hundred thirteen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1914) {
        alert("One thousand nine hundred fourteen");
        alert("Nineteen hundred fourteen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1915) {
        alert("One thousand nine hundred fifteen");
        alert("Nineteen hundred fifteen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1916) {
        alert("One thousand nine hundred sixteen");
        alert("Nineteen hundred sixteen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1917) {
        alert("One thousand nine hundred seventeen");
        alert("Nineteen hundred seventeen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1918) {
        alert("One thousand nine hundred eighteen");
        alert("Nineteen hundred eighteen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num == 1919) {
        alert("One thousand nine hundred nineteen");
        alert("Nineteen hundred nineteen");
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num > 1919 && num < 1930) {
        alert("One thousand nine hundred " + numTens + numName);
        alert("Nineteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "inongentillion");
    } else if (num > 1929 && num < 2000) {
        alert("One thousand nine hundred " + numTens + numName);
        alert("Nineteen hundred " + numTens + numName);
        alert("Milli-" + numberName + numberTens + "anongentillion");
    } else if (num == 2000) {
        alert("Two thousand");
        alert("Dumillillion");
    } else if (num > 2000 && num < 2010) {
        alert("Two thousand " + numName);
        alert(numberName + "dumillillion");
    } else if (num == 2010) {
        alert("Two thousand ten");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2011) {
        alert("Two thousand eleven");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2012) {
        alert("Two thousand twelve");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2013) {
        alert("Two thousand thirteen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2014) {
        alert("Two thousand fourteen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2015) {
        alert("Two thousand fifteen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2016) {
        alert("Two thousand sixteen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2017) {
        alert("Two thousand seventeen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2018) {
        alert("Two thousand eighteen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2019) {
        alert("Two thousand nineteen");
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num > 2019 && num < 2100) {
        alert("Two thousand " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "illion");
    } else if (num == 2100) {
        alert("Two thousand one hundred");
        alert("Twenty-one hundred");
        alert("Dumilli-centillion");
    } else if (num == 2103) {
        alert("Two thousand one hundred " + numName);
        alert("Twenty-one hundred " + numName);
        alert("Dumilli-trescentillion");
    } else if (num > 2100 && num < 2110) {
        alert("Two thousand one hundred " + numName);
        alert("Twenty-one hundred " + numName);
        alert("Dumilli-" + numberName + "centillion");
    } else if (num == 2110) {
        alert("Two thousand one hundred ten");
        alert("Twenty-one hundred ten");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2111) {
        alert("Two thousand one hundred eleven");
        alert("Twenty-one hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2112) {
        alert("Two thousand one hundred twelve");
        alert("Twenty-one hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2113) {
        alert("Two thousand one hundred thirteen");
        alert("Twenty-one hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2114) {
        alert("Two thousand one hundred fourteen");
        alert("Twenty-one hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2115) {
        alert("Two thousand one hundred fifteen");
        alert("Twenty-one hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2116) {
        alert("Two thousand one hundred sixteen");
        alert("Twenty-one hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2117) {
        alert("Two thousand one hundred seventeen");
        alert("Twenty-one hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2118) {
        alert("Two thousand one hundred eighteen");
        alert("Twenty-one hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num == 2119) {
        alert("Two thousand one hundred nineteen");
        alert("Twenty-one hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num > 2119 && num < 2130) {
        alert("Two thousand one hundred " + numTens + numName);
        alert("Twenty-one hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "icentillion");
    } else if (num > 2129 && num < 2200) {
        alert("Two thousand one hundred " + numTens + numName);
        alert("Twenty-one hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "acentillion");
    } else if (num == 2200) {
        alert("Two thousand two hundred");
        alert("Twenty-two hundred");
        alert("Dumilli-ducentillion");
    } else if (num > 2200 && num < 2210) {
        alert("Two thousand two hundred " + numName);
        alert("Twenty-two hundred " + numName);
        alert("Dumilli-" + numberName + "ducentillion");
    } else if (num == 2210) {
        alert("Two thousand two hundred ten");
        alert("Twenty-two hundred ten");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2211) {
        alert("Two thousand two hundred eleven");
        alert("Twenty-two hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2212) {
        alert("Two thousand two hundred twelve");
        alert("Twenty-two hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2213) {
        alert("Two thousand two hundred thirteen");
        alert("Twenty-two hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2214) {
        alert("Two thousand two hundred fourteen");
        alert("Twenty-two hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2215) {
        alert("Two thousand two hundred fifteen");
        alert("Twenty-two hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2216) {
        alert("Two thousand two hundred sixteen");
        alert("Twenty-two hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2217) {
        alert("Two thousand two hundred seventeen");
        alert("Twenty-two hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2218) {
        alert("Two thousand two hundred eighteen");
        alert("Twenty-two hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 2219) {
        alert("Two thousand two hundred nineteen");
        alert("Twenty-two hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 2219 && num < 2230) {
        alert("Two thousand two hundred " + numTens + numName);
        alert("Twenty-two hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 2229 && num < 2300) {
        alert("Two thousand two hundred " + numTens + numName);
        alert("Twenty-two hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 2300) {
        alert("Two thousand three hundred");
        alert("Twenty-three hundred");
        alert("Dumilli-trecentillion");
    } else if (num > 2300 && num < 2310) {
        alert("Two thousand three hundred " + numName);
        alert("Twenty-three hundred " + numName);
        alert("Dumilli-" + numberName + "trecentillion");
    } else if (num == 2310) {
        alert("Two thousand three hundred ten");
        alert("Twenty-three hundred ten");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2311) {
        alert("Two thousand three hundred eleven");
        alert("Twenty-three hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2312) {
        alert("Two thousand three hundred twelve");
        alert("Twenty-three hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2313) {
        alert("Two thousand three hundred thirteen");
        alert("Twenty-three hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2314) {
        alert("Two thousand three hundred fourteen");
        alert("Twenty-three hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2315) {
        alert("Two thousand three hundred fifteen");
        alert("Twenty-three hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2316) {
        alert("Two thousand three hundred sixteen");
        alert("Twenty-three hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2317) {
        alert("Two thousand three hundred seventeen");
        alert("Twenty-three hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2318) {
        alert("Two thousand three hundred eighteen");
        alert("Twenty-three hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 2319) {
        alert("Two thousand three hundred nineteen");
        alert("Twenty-three hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 2319 && num < 2330) {
        alert("Two thousand three hundred " + numTens + numName);
        alert("Twenty-three hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 2329 && num < 2400) {
        alert("Two thousand three hundred " + numTens + numName);
        alert("Twenty-three hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 2400) {
        alert("Two thousand four hundred");
        alert("Twenty-four hundred");
        alert("Dumilli-quadringentillion");
    } else if (num > 2400 && num < 2410) {
        alert("Two thousand four hundred " + numName);
        alert("Twenty-four hundred " + numName);
        alert("Dumilli-" + numberName + "quadringentillion");
    } else if (num == 2410) {
        alert("Two thousand four hundred ten");
        alert("Twenty-four hundred ten");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2411) {
        alert("Two thousand four hundred eleven");
        alert("Twenty-four hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2412) {
        alert("Two thousand four hundred twelve");
        alert("Twenty-four hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2413) {
        alert("Two thousand four hundred thirteen");
        alert("Twenty-four hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2414) {
        alert("Two thousand four hundred fourteen");
        alert("Twenty-four hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2415) {
        alert("Two thousand four hundred fifteen");
        alert("Twenty-four hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2416) {
        alert("Two thousand four hundred sixteen");
        alert("Twenty-four hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2417) {
        alert("Two thousand four hundred seventeen");
        alert("Twenty-four hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2418) {
        alert("Two thousand four hundred eighteen");
        alert("Twenty-four hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 2419) {
        alert("Two thousand four hundred nineteen");
        alert("Twenty-four hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 2419 && num < 2430) {
        alert("Two thousand four hundred " + numTens + numName);
        alert("Twenty-four hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 2429 && num < 2500) {
        alert("Two thousand four hundred " + numTens + numName);
        alert("Twenty-four hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 2500) {
        alert("Two thousand five hundred");
        alert("Twenty-five hundred");
        alert("Dumilli-quingentillion");
    } else if (num > 2500 && num < 2510) {
        alert("Two thousand five hundred " + numName);
        alert("Twenty-five hundred " + numName);
        alert("Dumilli-" + numberName + "quingentillion");
    } else if (num == 2510) {
        alert("Two thousand five hundred ten");
        alert("Twenty-five hundred ten");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2511) {
        alert("Two thousand five hundred eleven");
        alert("Twenty-five hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2512) {
        alert("Two thousand five hundred twelve");
        alert("Twenty-five hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2513) {
        alert("Two thousand five hundred thirteen");
        alert("Twenty-five hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2514) {
        alert("Two thousand five hundred fourteen");
        alert("Twenty-five hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2515) {
        alert("Two thousand five hundred fifteen");
        alert("Twenty-five hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2516) {
        alert("Two thousand five hundred sixteen");
        alert("Twenty-five hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2517) {
        alert("Two thousand five hundred seventeen");
        alert("Twenty-five hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2518) {
        alert("Two thousand five hundred eighteen");
        alert("Twenty-five hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 2519) {
        alert("Two thousand five hundred nineteen");
        alert("Twenty-five hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 2519 && num < 2530) {
        alert("Two thousand five hundred " + numTens + numName);
        alert("Twenty-five hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 2529 && num < 2600) {
        alert("Two thousand five hundred " + numTens + numName);
        alert("Twenty-five hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 2600) {
        alert("Two thousand six hundred");
        alert("Twenty-six hundred");
        alert("Dumilli-sescentillion");
    } else if (num > 2600 && num < 2610) {
        alert("Two thousand six hundred " + numName);
        alert("Twenty-six hundred " + numName);
        alert("Dumilli-" + numberName + "sescentillion");
    } else if (num == 2610) {
        alert("Two thousand six hundred ten");
        alert("Twenty-six hundred ten");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2611) {
        alert("Two thousand six hundred eleven");
        alert("Twenty-six hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2612) {
        alert("Two thousand six hundred twelve");
        alert("Twenty-six hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2613) {
        alert("Two thousand six hundred thirteen");
        alert("Twenty-six hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2614) {
        alert("Two thousand six hundred fourteen");
        alert("Twenty-six hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2615) {
        alert("Two thousand six hundred fifteen");
        alert("Twenty-six hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2616) {
        alert("Two thousand six hundred sixteen");
        alert("Twenty-six hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2617) {
        alert("Two thousand six hundred seventeen");
        alert("Twenty-six hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2618) {
        alert("Two thousand six hundred eighteen");
        alert("Twenty-six hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 2619) {
        alert("Two thousand six hundred nineteen");
        alert("Twenty-six hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 2619 && num < 2630) {
        alert("Two thousand six hundred " + numTens + numName);
        alert("Twenty-six hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 2629 && num < 2700) {
        alert("Two thousand six hundred " + numTens + numName);
        alert("Twenty-six hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 2700) {
        alert("Two thousand seven hundred");
        alert("Twenty-seven hundred");
        alert("Dumilli-septingentillion");
    } else if (num > 2700 && num < 2710) {
        alert("Two thousand seven hundred " + numName);
        alert("Twenty-seven hundred " + numName);
        alert("Dumilli-" + numberName + "septingentillion");
    } else if (num == 2710) {
        alert("Two thousand seven hundred ten");
        alert("Twenty-seven hundred ten");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2711) {
        alert("Two thousand seven hundred eleven");
        alert("Twenty-seven hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2712) {
        alert("Two thousand seven hundred twelve");
        alert("Twenty-seven hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2713) {
        alert("Two thousand seven hundred thirteen");
        alert("Twenty-seven hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2714) {
        alert("Two thousand seven hundred fourteen");
        alert("Twenty-seven hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2715) {
        alert("Two thousand seven hundred fifteen");
        alert("Twenty-seven hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2716) {
        alert("Two thousand seven hundred sixteen");
        alert("Twenty-seven hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2717) {
        alert("Two thousand seven hundred seventeen");
        alert("Twenty-seven hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2718) {
        alert("Two thousand seven hundred eighteen");
        alert("Twenty-seven hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 2719) {
        alert("Two thousand seven hundred nineteen");
        alert("Twenty-seven hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 2719 && num < 2730) {
        alert("Two thousand seven hundred " + numTens + numName);
        alert("Twenty-seven hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 2729 && num < 2800) {
        alert("Two thousand seven hundred " + numTens + numName);
        alert("Twenty-seven hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 2800) {
        alert("Two thousand eight hundred");
        alert("Twenty-eight hundred");
        alert("Dumilli-octingentillion");
    } else if (num > 2800 && num < 2810) {
        alert("Two thousand eight hundred " + numName);
        alert("Twenty-eight hundred " + numName);
        alert("Dumilli-" + numberName + "octingentillion");
    } else if (num == 2810) {
        alert("Two thousand eight hundred ten");
        alert("Twenty-eight hundred ten");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2811) {
        alert("Two thousand eight hundred eleven");
        alert("Twenty-eight hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2812) {
        alert("Two thousand eight hundred twelve");
        alert("Twenty-eight hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2813) {
        alert("Two thousand eight hundred thirteen");
        alert("Twenty-eight hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2814) {
        alert("Two thousand eight hundred fourteen");
        alert("Twenty-eight hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2815) {
        alert("Two thousand eight hundred fifteen");
        alert("Twenty-eight hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2816) {
        alert("Two thousand eight hundred sixteen");
        alert("Twenty-eight hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2817) {
        alert("Two thousand eight hundred seventeen");
        alert("Twenty-eight hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2818) {
        alert("Two thousand eight hundred eighteen");
        alert("Twenty-eight hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 2819) {
        alert("Two thousand eight hundred nineteen");
        alert("Twenty-eight hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 2819 && num < 2830) {
        alert("Two thousand eight hundred " + numTens + numName);
        alert("Twenty-eight hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 2829 && num < 2900) {
        alert("Two thousand eight hundred " + numTens + numName);
        alert("Twenty-eight hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 2900) {
        alert("Two thousand nine hundred");
        alert("Twenty-nine hundred");
        alert("Dumilli-nongentillion");
    } else if (num > 2900 && num < 2910) {
        alert("Two thousand nine hundred " + numName);
        alert("Twenty-nine hundred " + numName);
        alert("Dumilli-" + numberName + "nongentillion");
    } else if (num == 2910) {
        alert("Two thousand nine hundred ten");
        alert("Twenty-nine hundred ten");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2911) {
        alert("Two thousand nine hundred eleven");
        alert("Twenty-nine hundred eleven");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2912) {
        alert("Two thousand nine hundred twelve");
        alert("Twenty-nine hundred twelve");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2913) {
        alert("Two thousand nine hundred thirteen");
        alert("Twenty-nine hundred thirteen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2914) {
        alert("Two thousand nine hundred fourteen");
        alert("Twenty-nine hundred fourteen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2915) {
        alert("Two thousand nine hundred fifteen");
        alert("Twenty-nine hundred fifteen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2916) {
        alert("Two thousand nine hundred sixteen");
        alert("Twenty-nine hundred sixteen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2917) {
        alert("Two thousand nine hundred seventeen");
        alert("Twenty-nine hundred seventeen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2918) {
        alert("Two thousand nine hundred eighteen");
        alert("Twenty-nine hundred eighteen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 2919) {
        alert("Two thousand nine hundred nineteen");
        alert("Twenty-nine hundred nineteen");
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 2919 && num < 2930) {
        alert("Two thousand nine hundred " + numTens + numName);
        alert("Twenty-nine hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 2929 && num < 3000) {
        alert("Two thousand nine hundred " + numTens + numName);
        alert("Twenty-nine hundred " + numTens + numName);
        alert("Dumilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 3000) {
        alert("Three thousand");
        alert("Trimillillion");
    } else if (num > 3000 && num < 3010) {
        alert("Three thousand " + numName);
        alert(numberName + "trimillillion");
    } else if (num == 3010) {
        alert("Three thousand ten");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3011) {
        alert("Three thousand eleven");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3012) {
        alert("Three thousand twelve");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3013) {
        alert("Three thousand thirteen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3014) {
        alert("Three thousand fourteen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3015) {
        alert("Three thousand fifteen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3016) {
        alert("Three thousand sixteen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3017) {
        alert("Three thousand seventeen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3018) {
        alert("Three thousand eighteen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3019) {
        alert("Three thousand nineteen");
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num > 3019 && num < 3100) {
        alert("Three thousand " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "illion");
    } else if (num == 3100) {
        alert("Three thousand one hundred");
        alert("Thirty-one hundred");
        alert("Trimilli-centillion");
    } else if (num == 3103) {
        alert("Three thousand one hundred " + numName);
        alert("Thirty-one hundred " + numName);
        alert("Trimilli-trescentillion");
    } else if (num > 3100 && num < 3110) {
        alert("Three thousand one hundred " + numName);
        alert("Thirty-one hundred " + numName);
        alert("Trimilli-" + numberName + "centillion");
    } else if (num == 3110) {
        alert("Three thousand one hundred ten");
        alert("Thirty-one hundred ten");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3111) {
        alert("Three thousand one hundred eleven");
        alert("Thirty-one hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3112) {
        alert("Three thousand one hundred twelve");
        alert("Thirty-one hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3113) {
        alert("Three thousand one hundred thirteen");
        alert("Thirty-one hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3114) {
        alert("Three thousand one hundred fourteen");
        alert("Thirty-one hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3115) {
        alert("Three thousand one hundred fifteen");
        alert("Thirty-one hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3116) {
        alert("Three thousand one hundred sixteen");
        alert("Thirty-one hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3117) {
        alert("Three thousand one hundred seventeen");
        alert("Thirty-one hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3118) {
        alert("Three thousand one hundred eighteen");
        alert("Thirty-one hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 3119) {
        alert("Three thousand one hundred nineteen");
        alert("Thirty-one hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 3119 && num < 3130) {
        alert("Three thousand one hundred " + numTens + numName);
        alert("Thirty-one hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 3129 && num < 3200) {
        alert("Three thousand one hundred " + numTens + numName);
        alert("Thirty-one hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "acentillion");
    } else if (num == 3200) {
        alert("Three thousand two hundred");
        alert("Thirty-two hundred");
        alert("Trimilli-ducentillion");
    } else if (num > 3200 && num < 3210) {
        alert("Three thousand two hundred " + numName);
        alert("Thirty-two hundred " + numName);
        alert("Trimilli-" + numberName + "ducentillion");
    } else if (num == 3210) {
        alert("Three thousand two hundred ten");
        alert("Thirty-two hundred ten");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3211) {
        alert("Three thousand two hundred eleven");
        alert("Thirty-two hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3212) {
        alert("Three thousand two hundred twelve");
        alert("Thirty-two hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3213) {
        alert("Three thousand two hundred thirteen");
        alert("Thirty-two hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3214) {
        alert("Three thousand two hundred fourteen");
        alert("Thirty-two hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3215) {
        alert("Three thousand two hundred fifteen");
        alert("Thirty-two hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3216) {
        alert("Three thousand two hundred sixteen");
        alert("Thirty-two hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3217) {
        alert("Three thousand two hundred seventeen");
        alert("Thirty-two hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3218) {
        alert("Three thousand two hundred eighteen");
        alert("Thirty-two hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 3219) {
        alert("Three thousand two hundred nineteen");
        alert("Thirty-two hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 3219 && num < 3230) {
        alert("Three thousand two hundred " + numTens + numName);
        alert("Thirty-two hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 3229 && num < 3300) {
        alert("Three thousand two hundred " + numTens + numName);
        alert("Thirty-two hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 3300) {
        alert("Three thousand three hundred");
        alert("Thirty-three hundred");
        alert("Trimilli-trecentillion");
    } else if (num > 3300 && num < 3310) {
        alert("Three thousand three hundred " + numName);
        alert("Thirty-three hundred " + numName);
        alert("Trimilli-" + numberName + "trecentillion");
    } else if (num == 3310) {
        alert("Three thousand three hundred ten");
        alert("Thirty-three hundred ten");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3311) {
        alert("Three thousand three hundred eleven");
        alert("Thirty-three hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3312) {
        alert("Three thousand three hundred twelve");
        alert("Thirty-three hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3313) {
        alert("Three thousand three hundred thirteen");
        alert("Thirty-three hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3314) {
        alert("Three thousand three hundred fourteen");
        alert("Thirty-three hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3315) {
        alert("Three thousand three hundred fifteen");
        alert("Thirty-three hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3316) {
        alert("Three thousand three hundred sixteen");
        alert("Thirty-three hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3317) {
        alert("Three thousand three hundred seventeen");
        alert("Thirty-three hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3318) {
        alert("Three thousand three hundred eighteen");
        alert("Thirty-three hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 3319) {
        alert("Three thousand three hundred nineteen");
        alert("Thirty-three hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 3319 && num < 3330) {
        alert("Three thousand three hundred " + numTens + numName);
        alert("Thirty-three hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 3329 && num < 3400) {
        alert("Three thousand three hundred " + numTens + numName);
        alert("Thirty-three hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 3400) {
        alert("Three thousand four hundred");
        alert("Thirty-four hundred");
        alert("Trimilli-quadringentillion");
    } else if (num > 3400 && num < 3410) {
        alert("Three thousand four hundred " + numName);
        alert("Thirty-four hundred " + numName);
        alert("Trimilli-" + numberName + "quadringentillion");
    } else if (num == 3410) {
        alert("Three thousand four hundred ten");
        alert("Thirty-four hundred ten");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3411) {
        alert("Three thousand four hundred eleven");
        alert("Thirty-four hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3412) {
        alert("Three thousand four hundred twelve");
        alert("Thirty-four hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3413) {
        alert("Three thousand four hundred thirteen");
        alert("Thirty-four hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3414) {
        alert("Three thousand four hundred fourteen");
        alert("Thirty-four hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3415) {
        alert("Three thousand four hundred fifteen");
        alert("Thirty-four hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3416) {
        alert("Three thousand four hundred sixteen");
        alert("Thirty-four hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3417) {
        alert("Three thousand four hundred seventeen");
        alert("Thirty-four hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3418) {
        alert("Three thousand four hundred eighteen");
        alert("Thirty-four hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 3419) {
        alert("Three thousand four hundred nineteen");
        alert("Thirty-four hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 3419 && num < 3430) {
        alert("Three thousand four hundred " + numTens + numName);
        alert("Thirty-four hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 3429 && num < 3500) {
        alert("Three thousand four hundred " + numTens + numName);
        alert("Thirty-four hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 3500) {
        alert("Three thousand five hundred");
        alert("Thirty-five hundred");
        alert("Trimilli-quingentillion");
    } else if (num > 3500 && num < 3510) {
        alert("Three thousand five hundred " + numName);
        alert("Thirty-five hundred " + numName);
        alert("Trimilli-" + numberName + "quingentillion");
    } else if (num == 3510) {
        alert("Three thousand five hundred ten");
        alert("Thirty-five hundred ten");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3511) {
        alert("Three thousand five hundred eleven");
        alert("Thirty-five hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3512) {
        alert("Three thousand five hundred twelve");
        alert("Thirty-five hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3513) {
        alert("Three thousand five hundred thirteen");
        alert("Thirty-five hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3514) {
        alert("Three thousand five hundred fourteen");
        alert("Thirty-five hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3515) {
        alert("Three thousand five hundred fifteen");
        alert("Thirty-five hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3516) {
        alert("Three thousand five hundred sixteen");
        alert("Thirty-five hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3517) {
        alert("Three thousand five hundred seventeen");
        alert("Thirty-five hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3518) {
        alert("Three thousand five hundred eighteen");
        alert("Thirty-five hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 3519) {
        alert("Three thousand five hundred nineteen");
        alert("Thirty-five hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 3519 && num < 3530) {
        alert("Three thousand five hundred " + numTens + numName);
        alert("Thirty-five hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 3529 && num < 3600) {
        alert("Three thousand five hundred " + numTens + numName);
        alert("Thirty-five hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 3600) {
        alert("Three thousand six hundred");
        alert("Thirty-six hundred");
        alert("Trimilli-sescentillion");
    } else if (num > 3600 && num < 3610) {
        alert("Three thousand six hundred " + numName);
        alert("Thirty-six hundred " + numName);
        alert("Trimilli-" + numberName + "sescentillion");
    } else if (num == 3610) {
        alert("Three thousand six hundred ten");
        alert("Thirty-six hundred ten");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3611) {
        alert("Three thousand six hundred eleven");
        alert("Thirty-six hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3612) {
        alert("Three thousand six hundred twelve");
        alert("Thirty-six hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3613) {
        alert("Three thousand six hundred thirteen");
        alert("Thirty-six hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3614) {
        alert("Three thousand six hundred fourteen");
        alert("Thirty-six hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3615) {
        alert("Three thousand six hundred fifteen");
        alert("Thirty-six hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3616) {
        alert("Three thousand six hundred sixteen");
        alert("Thirty-six hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3617) {
        alert("Three thousand six hundred seventeen");
        alert("Thirty-six hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3618) {
        alert("Three thousand six hundred eighteen");
        alert("Thirty-six hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 3619) {
        alert("Three thousand six hundred nineteen");
        alert("Thirty-six hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 3619 && num < 3630) {
        alert("Three thousand six hundred " + numTens + numName);
        alert("Thirty-six hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 3629 && num < 3700) {
        alert("Three thousand six hundred " + numTens + numName);
        alert("Thirty-six hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 3700) {
        alert("Three thousand seven hundred");
        alert("Thirty-seven hundred");
        alert("Trimilli-septingentillion");
    } else if (num > 3700 && num < 3710) {
        alert("Three thousand seven hundred " + numName);
        alert("Thirty-seven hundred " + numName);
        alert("Trimilli-" + numberName + "septingentillion");
    } else if (num == 3710) {
        alert("Three thousand seven hundred ten");
        alert("Thirty-seven hundred ten");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3711) {
        alert("Three thousand seven hundred eleven");
        alert("Thirty-seven hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3712) {
        alert("Three thousand seven hundred twelve");
        alert("Thirty-seven hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3713) {
        alert("Three thousand seven hundred thirteen");
        alert("Thirty-seven hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3714) {
        alert("Three thousand seven hundred fourteen");
        alert("Thirty-seven hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3715) {
        alert("Three thousand seven hundred fifteen");
        alert("Thirty-seven hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3716) {
        alert("Three thousand seven hundred sixteen");
        alert("Thirty-seven hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3717) {
        alert("Three thousand seven hundred seventeen");
        alert("Thirty-seven hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3718) {
        alert("Three thousand seven hundred eighteen");
        alert("Thirty-seven hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 3719) {
        alert("Three thousand seven hundred nineteen");
        alert("Thirty-seven hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 3719 && num < 3730) {
        alert("Three thousand seven hundred " + numTens + numName);
        alert("Thirty-seven hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 3729 && num < 3800) {
        alert("Three thousand seven hundred " + numTens + numName);
        alert("Thirty-seven hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 3800) {
        alert("Three thousand eight hundred");
        alert("Thirty-eight hundred");
        alert("Trimilli-octingentillion");
    } else if (num > 3800 && num < 3810) {
        alert("Three thousand eight hundred " + numName);
        alert("Thirty-eight hundred " + numName);
        alert("Trimilli-" + numberName + "octingentillion");
    } else if (num == 3810) {
        alert("Three thousand eight hundred ten");
        alert("Thirty-eight hundred ten");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3811) {
        alert("Three thousand eight hundred eleven");
        alert("Thirty-eight hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3812) {
        alert("Three thousand eight hundred twelve");
        alert("Thirty-eight hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3813) {
        alert("Three thousand eight hundred thirteen");
        alert("Thirty-eight hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3814) {
        alert("Three thousand eight hundred fourteen");
        alert("Thirty-eight hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3815) {
        alert("Three thousand eight hundred fifteen");
        alert("Thirty-eight hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3816) {
        alert("Three thousand eight hundred sixteen");
        alert("Thirty-eight hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3817) {
        alert("Three thousand eight hundred seventeen");
        alert("Thirty-eight hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3818) {
        alert("Three thousand eight hundred eighteen");
        alert("Thirty-eight hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 3819) {
        alert("Three thousand eight hundred nineteen");
        alert("Thirty-eight hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 3819 && num < 3830) {
        alert("Three thousand eight hundred " + numTens + numName);
        alert("Thirty-eight hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 3829 && num < 3900) {
        alert("Three thousand eight hundred " + numTens + numName);
        alert("Thirty-eight hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 3900) {
        alert("Three thousand nine hundred");
        alert("Thirty-nine hundred");
        alert("Trimilli-nongentillion");
    } else if (num > 3900 && num < 3910) {
        alert("Three thousand nine hundred " + numName);
        alert("Thirty-nine hundred " + numName);
        alert("Trimilli-" + numberName + "nongentillion");
    } else if (num == 3910) {
        alert("Three thousand nine hundred ten");
        alert("Thirty-nine hundred ten");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3911) {
        alert("Three thousand nine hundred eleven");
        alert("Thirty-nine hundred eleven");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3912) {
        alert("Three thousand nine hundred twelve");
        alert("Thirty-nine hundred twelve");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3913) {
        alert("Three thousand nine hundred thirteen");
        alert("Thirty-nine hundred thirteen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3914) {
        alert("Three thousand nine hundred fourteen");
        alert("Thirty-nine hundred fourteen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3915) {
        alert("Three thousand nine hundred fifteen");
        alert("Thirty-nine hundred fifteen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3916) {
        alert("Three thousand nine hundred sixteen");
        alert("Thirty-nine hundred sixteen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3917) {
        alert("Three thousand nine hundred seventeen");
        alert("Thirty-nine hundred seventeen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3918) {
        alert("Three thousand nine hundred eighteen");
        alert("Thirty-nine hundred eighteen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 3919) {
        alert("Three thousand nine hundred nineteen");
        alert("Thirty-nine hundred nineteen");
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 3919 && num < 3930) {
        alert("Three thousand nine hundred " + numTens + numName);
        alert("Thirty-nine hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 3929 && num < 4000) {
        alert("Three thousand nine hundred " + numTens + numName);
        alert("Thirty-nine hundred " + numTens + numName);
        alert("Trimilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 4000) {
        alert("Four thousand");
        alert("Quadrimillillion");
    } else if (num > 4000 && num < 4010) {
        alert("Four thousand " + numName);
        alert(numberName + "quadrimillillion");
    } else if (num == 4010) {
        alert("Four thousand ten");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4011) {
        alert("Four thousand eleven");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4012) {
        alert("Four thousand twelve");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4013) {
        alert("Four thousand thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4014) {
        alert("Four thousand fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4015) {
        alert("Four thousand fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4016) {
        alert("Four thousand sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4017) {
        alert("Four thousand seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4018) {
        alert("Four thousand eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4019) {
        alert("Four thousand nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num > 4019 && num < 4100) {
        alert("Four thousand " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "illion");
    } else if (num == 4100) {
        alert("Four thousand one hundred");
        alert("Forty-one hundred");
        alert("Quadrimilli-centillion");
    } else if (num == 4103) {
        alert("Four thousand one hundred " + numName);
        alert("Forty-one hundred " + numName);
        alert("Quadrimilli-trescentillion");
    } else if (num > 4100 && num < 4110) {
        alert("Four thousand one hundred " + numName);
        alert("Forty-one hundred " + numName);
        alert("Quadrimilli-" + numberName + "centillion");
    } else if (num == 4110) {
        alert("Four thousand one hundred ten");
        alert("Forty-one hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4111) {
        alert("Four thousand one hundred eleven");
        alert("Forty-one hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4112) {
        alert("Four thousand one hundred twelve");
        alert("Forty-one hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4113) {
        alert("Four thousand one hundred thirteen");
        alert("Forty-one hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4114) {
        alert("Four thousand one hundred fourteen");
        alert("Forty-one hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4115) {
        alert("Four thousand one hundred fifteen");
        alert("Forty-one hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4116) {
        alert("Four thousand one hundred sixteen");
        alert("Forty-one hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4117) {
        alert("Four thousand one hundred seventeen");
        alert("Forty-one hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4118) {
        alert("Four thousand one hundred eighteen");
        alert("Forty-one hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 4119) {
        alert("Four thousand one hundred nineteen");
        alert("Forty-one hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 4119 && num < 4130) {
        alert("Four thousand one hundred " + numTens + numName);
        alert("Forty-one hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 4129 && num < 4200) {
        alert("Four thousand one hundred " + numTens + numName);
        alert("Forty-one hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "acentillion");
    } else if (num == 4200) {
        alert("Four thousand two hundred");
        alert("Forty-two hundred");
        alert("Quadrimilli-ducentillion");
    } else if (num > 4200 && num < 4210) {
        alert("Four thousand two hundred " + numName);
        alert("Forty-two hundred " + numName);
        alert("Quadrimilli-" + numberName + "ducentillion");
    } else if (num == 4210) {
        alert("Four thousand two hundred ten");
        alert("Forty-two hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4211) {
        alert("Four thousand two hundred eleven");
        alert("Forty-two hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4212) {
        alert("Four thousand two hundred twelve");
        alert("Forty-two hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4213) {
        alert("Four thousand two hundred thirteen");
        alert("Forty-two hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4214) {
        alert("Four thousand two hundred fourteen");
        alert("Forty-two hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4215) {
        alert("Four thousand two hundred fifteen");
        alert("Forty-two hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4216) {
        alert("Four thousand two hundred sixteen");
        alert("Forty-two hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4217) {
        alert("Four thousand two hundred seventeen");
        alert("Forty-two hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4218) {
        alert("Four thousand two hundred eighteen");
        alert("Forty-two hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 4219) {
        alert("Four thousand two hundred nineteen");
        alert("Forty-two hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 4219 && num < 4230) {
        alert("Four thousand two hundred " + numTens + numName);
        alert("Forty-two hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 4229 && num < 4300) {
        alert("Four thousand two hundred " + numTens + numName);
        alert("Forty-two hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 4300) {
        alert("Four thousand three hundred");
        alert("Forty-three hundred");
        alert("Quadrimilli-trecentillion");
    } else if (num > 4300 && num < 4310) {
        alert("Four thousand three hundred " + numName);
        alert("Forty-three hundred " + numName);
        alert("Quadrimilli-" + numberName + "trecentillion");
    } else if (num == 4310) {
        alert("Four thousand three hundred ten");
        alert("Forty-three hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4311) {
        alert("Four thousand three hundred eleven");
        alert("Forty-three hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4312) {
        alert("Four thousand three hundred twelve");
        alert("Forty-three hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4313) {
        alert("Four thousand three hundred thirteen");
        alert("Forty-three hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4314) {
        alert("Four thousand three hundred fourteen");
        alert("Forty-three hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4315) {
        alert("Four thousand three hundred fifteen");
        alert("Forty-three hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4316) {
        alert("Four thousand three hundred sixteen");
        alert("Forty-three hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4317) {
        alert("Four thousand three hundred seventeen");
        alert("Forty-three hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4318) {
        alert("Four thousand three hundred eighteen");
        alert("Forty-three hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 4319) {
        alert("Four thousand three hundred nineteen");
        alert("Forty-three hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 4319 && num < 4330) {
        alert("Four thousand three hundred " + numTens + numName);
        alert("Forty-three hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 4329 && num < 4400) {
        alert("Four thousand three hundred " + numTens + numName);
        alert("Forty-three hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 4400) {
        alert("Four thousand four hundred");
        alert("Forty-four hundred");
        alert("Quadrimilli-quadringentillion");
    } else if (num > 4400 && num < 4410) {
        alert("Four thousand four hundred " + numName);
        alert("Forty-four hundred " + numName);
        alert("Quadrimilli-" + numberName + "quadringentillion");
    } else if (num == 4410) {
        alert("Four thousand four hundred ten");
        alert("Forty-four hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4411) {
        alert("Four thousand four hundred eleven");
        alert("Forty-four hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4412) {
        alert("Four thousand four hundred twelve");
        alert("Forty-four hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4413) {
        alert("Four thousand four hundred thirteen");
        alert("Forty-four hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4414) {
        alert("Four thousand four hundred fourteen");
        alert("Forty-four hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4415) {
        alert("Four thousand four hundred fifteen");
        alert("Forty-four hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4416) {
        alert("Four thousand four hundred sixteen");
        alert("Forty-four hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4417) {
        alert("Four thousand four hundred seventeen");
        alert("Forty-four hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4418) {
        alert("Four thousand four hundred eighteen");
        alert("Forty-four hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 4419) {
        alert("Four thousand four hundred nineteen");
        alert("Forty-four hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 4419 && num < 4430) {
        alert("Four thousand four hundred " + numTens + numName);
        alert("Forty-four hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 4429 && num < 4500) {
        alert("Four thousand four hundred " + numTens + numName);
        alert("Forty-four hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 4500) {
        alert("Four thousand five hundred");
        alert("Forty-five hundred");
        alert("Quadrimilli-quingentillion");
    } else if (num > 4500 && num < 4510) {
        alert("Four thousand five hundred " + numName);
        alert("Forty-five hundred " + numName);
        alert("Quadrimilli-" + numberName + "quingentillion");
    } else if (num == 4510) {
        alert("Four thousand five hundred ten");
        alert("Forty-five hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4511) {
        alert("Four thousand five hundred eleven");
        alert("Forty-five hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4512) {
        alert("Four thousand five hundred twelve");
        alert("Forty-five hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4513) {
        alert("Four thousand five hundred thirteen");
        alert("Forty-five hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4514) {
        alert("Four thousand five hundred fourteen");
        alert("Forty-five hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4515) {
        alert("Four thousand five hundred fifteen");
        alert("Forty-five hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4516) {
        alert("Four thousand five hundred sixteen");
        alert("Forty-five hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4517) {
        alert("Four thousand five hundred seventeen");
        alert("Forty-five hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4518) {
        alert("Four thousand five hundred eighteen");
        alert("Forty-five hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 4519) {
        alert("Four thousand five hundred nineteen");
        alert("Forty-five hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 4519 && num < 4530) {
        alert("Four thousand five hundred " + numTens + numName);
        alert("Forty-five hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 4529 && num < 4600) {
        alert("Four thousand five hundred " + numTens + numName);
        alert("Forty-five hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 4600) {
        alert("Four thousand six hundred");
        alert("Forty-six hundred");
        alert("Quadrimilli-sescentillion");
    } else if (num > 4600 && num < 4610) {
        alert("Four thousand six hundred " + numName);
        alert("Forty-six hundred " + numName);
        alert("Quadrimilli-" + numberName + "sescentillion");
    } else if (num == 4610) {
        alert("Four thousand six hundred ten");
        alert("Forty-six hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4611) {
        alert("Four thousand six hundred eleven");
        alert("Forty-six hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4612) {
        alert("Four thousand six hundred twelve");
        alert("Forty-six hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4613) {
        alert("Four thousand six hundred thirteen");
        alert("Forty-six hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4614) {
        alert("Four thousand six hundred fourteen");
        alert("Forty-six hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4615) {
        alert("Four thousand six hundred fifteen");
        alert("Forty-six hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4616) {
        alert("Four thousand six hundred sixteen");
        alert("Forty-six hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4617) {
        alert("Four thousand six hundred seventeen");
        alert("Forty-six hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4618) {
        alert("Four thousand six hundred eighteen");
        alert("Forty-six hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 4619) {
        alert("Four thousand six hundred nineteen");
        alert("Forty-six hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 4619 && num < 4630) {
        alert("Four thousand six hundred " + numTens + numName);
        alert("Forty-six hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 4629 && num < 4700) {
        alert("Four thousand six hundred " + numTens + numName);
        alert("Forty-six hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 4700) {
        alert("Four thousand seven hundred");
        alert("Forty-seven hundred");
        alert("Quadrimilli-septingentillion");
    } else if (num > 4700 && num < 4710) {
        alert("Four thousand seven hundred " + numName);
        alert("Forty-seven hundred " + numName);
        alert("Quadrimilli-" + numberName + "septingentillion");
    } else if (num == 4710) {
        alert("Four thousand seven hundred ten");
        alert("Forty-seven hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4711) {
        alert("Four thousand seven hundred eleven");
        alert("Forty-seven hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4712) {
        alert("Four thousand seven hundred twelve");
        alert("Forty-seven hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4713) {
        alert("Four thousand seven hundred thirteen");
        alert("Forty-seven hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4714) {
        alert("Four thousand seven hundred fourteen");
        alert("Forty-seven hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4715) {
        alert("Four thousand seven hundred fifteen");
        alert("Forty-seven hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4716) {
        alert("Four thousand seven hundred sixteen");
        alert("Forty-seven hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4717) {
        alert("Four thousand seven hundred seventeen");
        alert("Forty-seven hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4718) {
        alert("Four thousand seven hundred eighteen");
        alert("Forty-seven hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 4719) {
        alert("Four thousand seven hundred nineteen");
        alert("Forty-seven hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 4719 && num < 4730) {
        alert("Four thousand seven hundred " + numTens + numName);
        alert("Forty-seven hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 4729 && num < 4800) {
        alert("Four thousand seven hundred " + numTens + numName);
        alert("Forty-seven hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 4800) {
        alert("Four thousand eight hundred");
        alert("Forty-eight hundred");
        alert("Quadrimilli-octingentillion");
    } else if (num > 4800 && num < 4810) {
        alert("Four thousand eight hundred " + numName);
        alert("Forty-eight hundred " + numName);
        alert("Quadrimilli-" + numberName + "octingentillion");
    } else if (num == 4810) {
        alert("Four thousand eight hundred ten");
        alert("Forty-eight hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4811) {
        alert("Four thousand eight hundred eleven");
        alert("Forty-eight hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4812) {
        alert("Four thousand eight hundred twelve");
        alert("Forty-eight hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4813) {
        alert("Four thousand eight hundred thirteen");
        alert("Forty-eight hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4814) {
        alert("Four thousand eight hundred fourteen");
        alert("Forty-eight hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4815) {
        alert("Four thousand eight hundred fifteen");
        alert("Forty-eight hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4816) {
        alert("Four thousand eight hundred sixteen");
        alert("Forty-eight hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4817) {
        alert("Four thousand eight hundred seventeen");
        alert("Forty-eight hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4818) {
        alert("Four thousand eight hundred eighteen");
        alert("Forty-eight hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 4819) {
        alert("Four thousand eight hundred nineteen");
        alert("Forty-eight hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 4819 && num < 4830) {
        alert("Four thousand eight hundred " + numTens + numName);
        alert("Forty-eight hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 4829 && num < 4900) {
        alert("Four thousand eight hundred " + numTens + numName);
        alert("Forty-eight hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 4900) {
        alert("Four thousand nine hundred");
        alert("Forty-nine hundred");
        alert("Quadrimilli-nongentillion");
    } else if (num > 4900 && num < 4910) {
        alert("Four thousand nine hundred " + numName);
        alert("Forty-nine hundred " + numName);
        alert("Quadrimilli-" + numberName + "nongentillion");
    } else if (num == 4910) {
        alert("Four thousand nine hundred ten");
        alert("Forty-nine hundred ten");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4911) {
        alert("Four thousand nine hundred eleven");
        alert("Forty-nine hundred eleven");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4912) {
        alert("Four thousand nine hundred twelve");
        alert("Forty-nine hundred twelve");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4913) {
        alert("Four thousand nine hundred thirteen");
        alert("Forty-nine hundred thirteen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4914) {
        alert("Four thousand nine hundred fourteen");
        alert("Forty-nine hundred fourteen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4915) {
        alert("Four thousand nine hundred fifteen");
        alert("Forty-nine hundred fifteen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4916) {
        alert("Four thousand nine hundred sixteen");
        alert("Forty-nine hundred sixteen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4917) {
        alert("Four thousand nine hundred seventeen");
        alert("Forty-nine hundred seventeen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4918) {
        alert("Four thousand nine hundred eighteen");
        alert("Forty-nine hundred eighteen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 4919) {
        alert("Four thousand nine hundred nineteen");
        alert("Forty-nine hundred nineteen");
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 4919 && num < 4930) {
        alert("Four thousand nine hundred " + numTens + numName);
        alert("Forty-nine hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 4929 && num < 5000) {
        alert("Four thousand nine hundred " + numTens + numName);
        alert("Forty-nine hundred " + numTens + numName);
        alert("Quadrimilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 5000) {
        alert("Five thousand");
        alert("Quinmillillion");
    } else if (num > 5000 && num < 5010) {
        alert("Five thousand " + numName);
        alert(numberName + "quinmillillion");
    } else if (num == 5010) {
        alert("Five thousand ten");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5011) {
        alert("Five thousand eleven");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5012) {
        alert("Five thousand twelve");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5013) {
        alert("Five thousand thirteen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5014) {
        alert("Five thousand fourteen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5015) {
        alert("Five thousand fifteen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5016) {
        alert("Five thousand sixteen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5017) {
        alert("Five thousand seventeen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5018) {
        alert("Five thousand eighteen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5019) {
        alert("Five thousand nineteen");
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num > 5019 && num < 5100) {
        alert("Five thousand " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "illion");
    } else if (num == 5100) {
        alert("Five thousand one hundred");
        alert("Fifty-one hundred");
        alert("Quinmilli-centillion");
    } else if (num == 5103) {
        alert("Five thousand one hundred " + numName);
        alert("Fifty-one hundred " + numName);
        alert("Quinmilli-trescentillion");
    } else if (num > 5100 && num < 5110) {
        alert("Five thousand one hundred " + numName);
        alert("Fifty-one hundred " + numName);
        alert("Quinmilli-" + numberName + "centillion");
    } else if (num == 5110) {
        alert("Five thousand one hundred ten");
        alert("Fifty-one hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5111) {
        alert("Five thousand one hundred eleven");
        alert("Fifty-one hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5112) {
        alert("Five thousand one hundred twelve");
        alert("Fifty-one hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5113) {
        alert("Five thousand one hundred thirteen");
        alert("Fifty-one hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5114) {
        alert("Five thousand one hundred fourteen");
        alert("Fifty-one hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5115) {
        alert("Five thousand one hundred fifteen");
        alert("Fifty-one hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5116) {
        alert("Five thousand one hundred sixteen");
        alert("Fifty-one hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5117) {
        alert("Five thousand one hundred seventeen");
        alert("Fifty-one hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5118) {
        alert("Five thousand one hundred eighteen");
        alert("Fifty-one hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 5119) {
        alert("Five thousand one hundred nineteen");
        alert("Fifty-one hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num > 5119 && num < 5130) {
        alert("Five thousand one hundred " + numTens + numName);
        alert("Fifty-one hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "icentillion");
    } else if (num > 5129 && num < 5200) {
        alert("Five thousand one hundred " + numTens + numName);
        alert("Fifty-one hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "acentillion");
    } else if (num == 5200) {
        alert("Five thousand two hundred");
        alert("Fifty-two hundred");
        alert("Quinmilli-ducentillion");
    } else if (num > 5200 && num < 5210) {
        alert("Five thousand two hundred " + numName);
        alert("Fifty-two hundred " + numName);
        alert("Quinmilli-" + numberName + "ducentillion");
    } else if (num == 5210) {
        alert("Five thousand two hundred ten");
        alert("Fifty-two hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5211) {
        alert("Five thousand two hundred eleven");
        alert("Fifty-two hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5212) {
        alert("Five thousand two hundred twelve");
        alert("Fifty-two hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5213) {
        alert("Five thousand two hundred thirteen");
        alert("Fifty-two hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5214) {
        alert("Five thousand two hundred fourteen");
        alert("Fifty-two hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5215) {
        alert("Five thousand two hundred fifteen");
        alert("Fifty-two hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5216) {
        alert("Five thousand two hundred sixteen");
        alert("Fifty-two hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5217) {
        alert("Five thousand two hundred seventeen");
        alert("Fifty-two hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5218) {
        alert("Five thousand two hundred eighteen");
        alert("Fifty-two hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 5219) {
        alert("Five thousand two hundred nineteen");
        alert("Fifty-two hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 5219 && num < 5230) {
        alert("Five thousand two hundred " + numTens + numName);
        alert("Fifty-two hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 5229 && num < 5300) {
        alert("Five thousand two hundred " + numTens + numName);
        alert("Fifty-two hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 5300) {
        alert("Five thousand three hundred");
        alert("Fifty-three hundred");
        alert("Quinmilli-trecentillion");
    } else if (num > 5300 && num < 5310) {
        alert("Five thousand three hundred " + numName);
        alert("Fifty-three hundred " + numName);
        alert("Quinmilli-" + numberName + "trecentillion");
    } else if (num == 5310) {
        alert("Five thousand three hundred ten");
        alert("Fifty-three hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5311) {
        alert("Five thousand three hundred eleven");
        alert("Fifty-three hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5312) {
        alert("Five thousand three hundred twelve");
        alert("Fifty-three hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5313) {
        alert("Five thousand three hundred thirteen");
        alert("Fifty-three hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5314) {
        alert("Five thousand three hundred fourteen");
        alert("Fifty-three hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5315) {
        alert("Five thousand three hundred fifteen");
        alert("Fifty-three hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5316) {
        alert("Five thousand three hundred sixteen");
        alert("Fifty-three hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5317) {
        alert("Five thousand three hundred seventeen");
        alert("Fifty-three hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5318) {
        alert("Five thousand three hundred eighteen");
        alert("Fifty-three hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 5319) {
        alert("Five thousand three hundred nineteen");
        alert("Fifty-three hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 5319 && num < 5330) {
        alert("Five thousand three hundred " + numTens + numName);
        alert("Fifty-three hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 5329 && num < 5400) {
        alert("Five thousand three hundred " + numTens + numName);
        alert("Fifty-three hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 5400) {
        alert("Five thousand four hundred");
        alert("Fifty-four hundred");
        alert("Quinmilli-quadringentillion");
    } else if (num > 5400 && num < 5410) {
        alert("Five thousand four hundred " + numName);
        alert("Fifty-four hundred " + numName);
        alert("Quinmilli-" + numberName + "quadringentillion");
    } else if (num == 5410) {
        alert("Five thousand four hundred ten");
        alert("Fifty-four hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5411) {
        alert("Five thousand four hundred eleven");
        alert("Fifty-four hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5412) {
        alert("Five thousand four hundred twelve");
        alert("Fifty-four hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5413) {
        alert("Five thousand four hundred thirteen");
        alert("Fifty-four hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5414) {
        alert("Five thousand four hundred fourteen");
        alert("Fifty-four hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5415) {
        alert("Five thousand four hundred fifteen");
        alert("Fifty-four hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5416) {
        alert("Five thousand four hundred sixteen");
        alert("Fifty-four hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5417) {
        alert("Five thousand four hundred seventeen");
        alert("Fifty-four hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5418) {
        alert("Five thousand four hundred eighteen");
        alert("Fifty-four hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 5419) {
        alert("Five thousand four hundred nineteen");
        alert("Fifty-four hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 5419 && num < 5430) {
        alert("Five thousand four hundred " + numTens + numName);
        alert("Fifty-four hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 5429 && num < 5500) {
        alert("Five thousand four hundred " + numTens + numName);
        alert("Fifty-four hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 5500) {
        alert("Five thousand five hundred");
        alert("Fifty-five hundred");
        alert("Quinmilli-quingentillion");
    } else if (num > 5500 && num < 5510) {
        alert("Five thousand five hundred " + numName);
        alert("Fifty-five hundred " + numName);
        alert("Quinmilli-" + numberName + "quingentillion");
    } else if (num == 5510) {
        alert("Five thousand five hundred ten");
        alert("Fifty-five hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5511) {
        alert("Five thousand five hundred eleven");
        alert("Fifty-five hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5512) {
        alert("Five thousand five hundred twelve");
        alert("Fifty-five hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5513) {
        alert("Five thousand five hundred thirteen");
        alert("Fifty-five hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5514) {
        alert("Five thousand five hundred fourteen");
        alert("Fifty-five hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5515) {
        alert("Five thousand five hundred fifteen");
        alert("Fifty-five hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5516) {
        alert("Five thousand five hundred sixteen");
        alert("Fifty-five hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5517) {
        alert("Five thousand five hundred seventeen");
        alert("Fifty-five hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5518) {
        alert("Five thousand five hundred eighteen");
        alert("Fifty-five hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 5519) {
        alert("Five thousand five hundred nineteen");
        alert("Fifty-five hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 5519 && num < 5530) {
        alert("Five thousand five hundred " + numTens + numName);
        alert("Fifty-five hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 5529 && num < 5600) {
        alert("Five thousand five hundred " + numTens + numName);
        alert("Fifty-five hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 5600) {
        alert("Five thousand six hundred");
        alert("Fifty-six hundred");
        alert("Quinmilli-sescentillion");
    } else if (num > 5600 && num < 5610) {
        alert("Five thousand six hundred " + numName);
        alert("Fifty-six hundred " + numName);
        alert("Quinmilli-" + numberName + "sescentillion");
    } else if (num == 5610) {
        alert("Five thousand six hundred ten");
        alert("Fifty-six hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5611) {
        alert("Five thousand six hundred eleven");
        alert("Fifty-six hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5612) {
        alert("Five thousand six hundred twelve");
        alert("Fifty-six hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5613) {
        alert("Five thousand six hundred thirteen");
        alert("Fifty-six hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5614) {
        alert("Five thousand six hundred fourteen");
        alert("Fifty-six hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5615) {
        alert("Five thousand six hundred fifteen");
        alert("Fifty-six hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5616) {
        alert("Five thousand six hundred sixteen");
        alert("Fifty-six hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5617) {
        alert("Five thousand six hundred seventeen");
        alert("Fifty-six hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5618) {
        alert("Five thousand six hundred eighteen");
        alert("Fifty-six hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 5619) {
        alert("Five thousand six hundred nineteen");
        alert("Fifty-six hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 5619 && num < 5630) {
        alert("Five thousand six hundred " + numTens + numName);
        alert("Fifty-six hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 5629 && num < 5700) {
        alert("Five thousand six hundred " + numTens + numName);
        alert("Fifty-six hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 5700) {
        alert("Five thousand seven hundred");
        alert("Fifty-seven hundred");
        alert("Quinmilli-septingentillion");
    } else if (num > 5700 && num < 5710) {
        alert("Five thousand seven hundred " + numName);
        alert("Fifty-seven hundred " + numName);
        alert("Quinmilli-" + numberName + "septingentillion");
    } else if (num == 5710) {
        alert("Five thousand seven hundred ten");
        alert("Fifty-seven hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5711) {
        alert("Five thousand seven hundred eleven");
        alert("Fifty-seven hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5712) {
        alert("Five thousand seven hundred twelve");
        alert("Fifty-seven hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5713) {
        alert("Five thousand seven hundred thirteen");
        alert("Fifty-seven hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5714) {
        alert("Five thousand seven hundred fourteen");
        alert("Fifty-seven hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5715) {
        alert("Five thousand seven hundred fifteen");
        alert("Fifty-seven hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5716) {
        alert("Five thousand seven hundred sixteen");
        alert("Fifty-seven hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5717) {
        alert("Five thousand seven hundred seventeen");
        alert("Fifty-seven hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5718) {
        alert("Five thousand seven hundred eighteen");
        alert("Fifty-seven hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 5719) {
        alert("Five thousand seven hundred nineteen");
        alert("Fifty-seven hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 5719 && num < 5730) {
        alert("Five thousand seven hundred " + numTens + numName);
        alert("Fifty-seven hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 5729 && num < 5800) {
        alert("Five thousand seven hundred " + numTens + numName);
        alert("Fifty-seven hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 5800) {
        alert("Five thousand eight hundred");
        alert("Fifty-eight hundred");
        alert("Quinmilli-octingentillion");
    } else if (num > 5800 && num < 5810) {
        alert("Five thousand eight hundred " + numName);
        alert("Fifty-eight hundred " + numName);
        alert("Quinmilli-" + numberName + "octingentillion");
    } else if (num == 5810) {
        alert("Five thousand eight hundred ten");
        alert("Fifty-eight hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5811) {
        alert("Five thousand eight hundred eleven");
        alert("Fifty-eight hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5812) {
        alert("Five thousand eight hundred twelve");
        alert("Fifty-eight hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5813) {
        alert("Five thousand eight hundred thirteen");
        alert("Fifty-eight hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5814) {
        alert("Five thousand eight hundred fourteen");
        alert("Fifty-eight hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5815) {
        alert("Five thousand eight hundred fifteen");
        alert("Fifty-eight hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5816) {
        alert("Five thousand eight hundred sixteen");
        alert("Fifty-eight hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5817) {
        alert("Five thousand eight hundred seventeen");
        alert("Fifty-eight hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5818) {
        alert("Five thousand eight hundred eighteen");
        alert("Fifty-eight hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 5819) {
        alert("Five thousand eight hundred nineteen");
        alert("Fifty-eight hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 5819 && num < 5830) {
        alert("Five thousand eight hundred " + numTens + numName);
        alert("Fifty-eight hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 5829 && num < 5900) {
        alert("Five thousand eight hundred " + numTens + numName);
        alert("Fifty-eight hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 5900) {
        alert("Five thousand nine hundred");
        alert("Fifty-nine hundred");
        alert("Quinmilli-octingentillion");
    } else if (num > 5900 && num < 5910) {
        alert("Five thousand nine hundred " + numName);
        alert("Fifty-nine hundred " + numName);
        alert("Quinmilli-" + numberName + "nongentillion");
    } else if (num == 5910) {
        alert("Five thousand nine hundred ten");
        alert("Fifty-nine hundred ten");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5911) {
        alert("Five thousand nine hundred eleven");
        alert("Fifty-nine hundred eleven");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5912) {
        alert("Five thousand nine hundred twelve");
        alert("Fifty-nine hundred twelve");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5913) {
        alert("Five thousand nine hundred thirteen");
        alert("Fifty-nine hundred thirteen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5914) {
        alert("Five thousand nine hundred fourteen");
        alert("Fifty-nine hundred fourteen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5915) {
        alert("Five thousand nine hundred fifteen");
        alert("Fifty-nine hundred fifteen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5916) {
        alert("Five thousand nine hundred sixteen");
        alert("Fifty-nine hundred sixteen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5917) {
        alert("Five thousand nine hundred seventeen");
        alert("Fifty-nine hundred seventeen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5918) {
        alert("Five thousand nine hundred eighteen");
        alert("Fifty-nine hundred eighteen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 5919) {
        alert("Five thousand nine hundred nineteen");
        alert("Fifty-nine hundred nineteen");
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 5919 && num < 5930) {
        alert("Five thousand nine hundred " + numTens + numName);
        alert("Fifty-nine hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 5929 && num < 6000) {
        alert("Five thousand nine hundred " + numTens + numName);
        alert("Fifty-nine hundred " + numTens + numName);
        alert("Quinmilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 6000) {
        alert("Six thousand");
        alert("Sexmillillion");
    } else if (num > 6000 && num < 6010) {
        alert("Six thousand " + numName);
        alert(numberName + "sexmillillion");
    } else if (num == 6010) {
        alert("Six thousand ten");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6011) {
        alert("Six thousand eleven");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6012) {
        alert("Six thousand twelve");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6013) {
        alert("Six thousand thirteen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6014) {
        alert("Six thousand fourteen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6015) {
        alert("Six thousand fifteen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6016) {
        alert("Six thousand sixteen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6017) {
        alert("Six thousand seventeen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6018) {
        alert("Six thousand eighteen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6019) {
        alert("Six thousand nineteen");
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num > 6019 && num < 6100) {
        alert("Six thousand " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "illion");
    } else if (num == 6100) {
        alert("Six thousand one hundred");
        alert("Sixty-one hundred");
        alert("Sexmilli-centillion");
    } else if (num == 6103) {
        alert("Six thousand one hundred " + numName);
        alert("Sixty-one hundred " + numName);
        alert("Sexmilli-trescentillion");
    } else if (num > 6100 && num < 6110) {
        alert("Six thousand one hundred " + numName);
        alert("Sixty-one hundred " + numName);
        alert("Sexmilli-" + numberName + "centillion");
    } else if (num == 6110) {
        alert("Six thousand one hundred ten");
        alert("Sixty-one hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6111) {
        alert("Six thousand one hundred eleven");
        alert("Sixty-one hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6112) {
        alert("Six thousand one hundred twelve");
        alert("Sixty-one hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6113) {
        alert("Six thousand one hundred thirteen");
        alert("Sixty-one hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6114) {
        alert("Six thousand one hundred fourteen");
        alert("Sixty-one hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6115) {
        alert("Six thousand one hundred fifteen");
        alert("Sixty-one hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6116) {
        alert("Six thousand one hundred sixteen");
        alert("Sixty-one hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6117) {
        alert("Six thousand one hundred seventeen");
        alert("Sixty-one hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6118) {
        alert("Six thousand one hundred eighteen");
        alert("Sixty-one hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num == 6119) {
        alert("Six thousand one hundred nineteen");
        alert("Sixty-one hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num > 6119 && num < 6130) {
        alert("Six thousand one hundred " + numTens + numName);
        alert("Sixty-one hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "icentillion");
    } else if (num > 6129 && num < 6200) {
        alert("Six thousand one hundred " + numTens + numName);
        alert("Sixty-one hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "acentillion");
    } else if (num == 6200) {
        alert("Six thousand two hundred");
        alert("Sixty-two hundred");
        alert("Sexmilli-ducentillion");
    } else if (num > 6200 && num < 6210) {
        alert("Six thousand two hundred " + numName);
        alert("Sixty-two hundred " + numName);
        alert("Sexmilli-" + numberName + "ducentillion");
    } else if (num == 6210) {
        alert("Six thousand two hundred ten");
        alert("Sixty-two hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6211) {
        alert("Six thousand two hundred eleven");
        alert("Sixty-two hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6212) {
        alert("Six thousand two hundred twelve");
        alert("Sixty-two hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6213) {
        alert("Six thousand two hundred thirteen");
        alert("Sixty-two hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6214) {
        alert("Six thousand two hundred fourteen");
        alert("Sixty-two hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6215) {
        alert("Six thousand two hundred fifteen");
        alert("Sixty-two hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6216) {
        alert("Six thousand two hundred sixteen");
        alert("Sixty-two hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6217) {
        alert("Six thousand two hundred seventeen");
        alert("Sixty-two hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6218) {
        alert("Six thousand two hundred eighteen");
        alert("Sixty-two hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 6219) {
        alert("Six thousand two hundred nineteen");
        alert("Sixty-two hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 6219 && num < 6230) {
        alert("Six thousand two hundred " + numTens + numName);
        alert("Sixty-two hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 6229 && num < 6300) {
        alert("Six thousand two hundred " + numTens + numName);
        alert("Sixty-two hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 6300) {
        alert("Six thousand three hundred");
        alert("Sixty-three hundred");
        alert("Sexmilli-trecentillion");
    } else if (num > 6300 && num < 6310) {
        alert("Six thousand three hundred " + numName);
        alert("Sixty-three hundred " + numName);
        alert("Sexmilli-" + numberName + "trecentillion");
    } else if (num == 6310) {
        alert("Six thousand three hundred ten");
        alert("Sixty-three hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6311) {
        alert("Six thousand three hundred eleven");
        alert("Sixty-three hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6312) {
        alert("Six thousand three hundred twelve");
        alert("Sixty-three hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6313) {
        alert("Six thousand three hundred thirteen");
        alert("Sixty-three hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6314) {
        alert("Six thousand three hundred fourteen");
        alert("Sixty-three hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6315) {
        alert("Six thousand three hundred fifteen");
        alert("Sixty-three hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6316) {
        alert("Six thousand three hundred sixteen");
        alert("Sixty-three hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6317) {
        alert("Six thousand three hundred seventeen");
        alert("Sixty-three hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6318) {
        alert("Six thousand three hundred eighteen");
        alert("Sixty-three hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 6319) {
        alert("Six thousand three hundred nineteen");
        alert("Sixty-three hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 6319 && num < 6330) {
        alert("Six thousand three hundred " + numTens + numName);
        alert("Sixty-three hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 6329 && num < 6400) {
        alert("Six thousand three hundred " + numTens + numName);
        alert("Sixty-three hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 6400) {
        alert("Six thousand four hundred");
        alert("Sixty-four hundred");
        alert("Sexmilli-quadringentillion");
    } else if (num > 6400 && num < 6410) {
        alert("Six thousand four hundred " + numName);
        alert("Sixty-four hundred " + numName);
        alert("Sexmilli-" + numberName + "quadringentillion");
    } else if (num == 6410) {
        alert("Six thousand four hundred ten");
        alert("Sixty-four hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6411) {
        alert("Six thousand four hundred eleven");
        alert("Sixty-four hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6412) {
        alert("Six thousand four hundred twelve");
        alert("Sixty-four hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6413) {
        alert("Six thousand four hundred thirteen");
        alert("Sixty-four hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6414) {
        alert("Six thousand four hundred fourteen");
        alert("Sixty-four hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6415) {
        alert("Six thousand four hundred fifteen");
        alert("Sixty-four hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6416) {
        alert("Six thousand four hundred sixteen");
        alert("Sixty-four hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6417) {
        alert("Six thousand four hundred seventeen");
        alert("Sixty-four hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6418) {
        alert("Six thousand four hundred eighteen");
        alert("Sixty-four hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 6419) {
        alert("Six thousand four hundred nineteen");
        alert("Sixty-four hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 6419 && num < 6430) {
        alert("Six thousand four hundred " + numTens + numName);
        alert("Sixty-four hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 6429 && num < 6500) {
        alert("Six thousand four hundred " + numTens + numName);
        alert("Sixty-four hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 6500) {
        alert("Six thousand five hundred");
        alert("Sixty-five hundred");
        alert("Sexmilli-quingentillion");
    } else if (num > 6500 && num < 6510) {
        alert("Six thousand five hundred " + numName);
        alert("Sixty-five hundred " + numName);
        alert("Sexmilli-" + numberName + "quingentillion");
    } else if (num == 6510) {
        alert("Six thousand five hundred ten");
        alert("Sixty-five hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6511) {
        alert("Six thousand five hundred eleven");
        alert("Sixty-five hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6512) {
        alert("Six thousand five hundred twelve");
        alert("Sixty-five hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6513) {
        alert("Six thousand five hundred thirteen");
        alert("Sixty-five hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6514) {
        alert("Six thousand five hundred fourteen");
        alert("Sixty-five hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6515) {
        alert("Six thousand five hundred fifteen");
        alert("Sixty-five hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6516) {
        alert("Six thousand five hundred sixteen");
        alert("Sixty-five hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6517) {
        alert("Six thousand five hundred seventeen");
        alert("Sixty-five hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6518) {
        alert("Six thousand five hundred eighteen");
        alert("Sixty-five hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 6519) {
        alert("Six thousand five hundred nineteen");
        alert("Sixty-five hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 6519 && num < 6530) {
        alert("Six thousand five hundred " + numTens + numName);
        alert("Sixty-five hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 6529 && num < 6600) {
        alert("Six thousand five hundred " + numTens + numName);
        alert("Sixty-five hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 6600) {
        alert("Six thousand six hundred");
        alert("Sixty-six hundred");
        alert("Sexmilli-sescentillion");
    } else if (num > 6600 && num < 6610) {
        alert("Six thousand six hundred " + numName);
        alert("Sixty-six hundred " + numName);
        alert("Sexmilli-" + numberName + "sescentillion");
    } else if (num == 6610) {
        alert("Six thousand six hundred ten");
        alert("Sixty-six hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6611) {
        alert("Six thousand six hundred eleven");
        alert("Sixty-six hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6612) {
        alert("Six thousand six hundred twelve");
        alert("Sixty-six hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6613) {
        alert("Six thousand six hundred thirteen");
        alert("Sixty-six hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6614) {
        alert("Six thousand six hundred fourteen");
        alert("Sixty-six hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6615) {
        alert("Six thousand six hundred fifteen");
        alert("Sixty-six hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6616) {
        alert("Six thousand six hundred sixteen");
        alert("Sixty-six hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6617) {
        alert("Six thousand six hundred seventeen");
        alert("Sixty-six hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6618) {
        alert("Six thousand six hundred eighteen");
        alert("Sixty-six hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 6619) {
        alert("Six thousand six hundred nineteen");
        alert("Sixty-six hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 6619 && num < 6630) {
        alert("Six thousand six hundred " + numTens + numName);
        alert("Sixty-six hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 6629 && num < 6700) {
        alert("Six thousand six hundred " + numTens + numName);
        alert("Sixty-six hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 6700) {
        alert("Six thousand seven hundred");
        alert("Sixty-seven hundred");
        alert("Sexmilli-septingentillion");
    } else if (num > 6700 && num < 6710) {
        alert("Six thousand seven hundred " + numName);
        alert("Sixty-seven hundred " + numName);
        alert("Sexmilli-" + numberName + "septingentillion");
    } else if (num == 6710) {
        alert("Six thousand seven hundred ten");
        alert("Sixty-seven hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6711) {
        alert("Six thousand seven hundred eleven");
        alert("Sixty-seven hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6712) {
        alert("Six thousand seven hundred twelve");
        alert("Sixty-seven hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6713) {
        alert("Six thousand seven hundred thirteen");
        alert("Sixty-seven hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6714) {
        alert("Six thousand seven hundred fourteen");
        alert("Sixty-seven hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6715) {
        alert("Six thousand seven hundred fifteen");
        alert("Sixty-seven hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6716) {
        alert("Six thousand seven hundred sixteen");
        alert("Sixty-seven hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6717) {
        alert("Six thousand seven hundred seventeen");
        alert("Sixty-seven hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6718) {
        alert("Six thousand seven hundred eighteen");
        alert("Sixty-seven hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 6719) {
        alert("Six thousand seven hundred nineteen");
        alert("Sixty-seven hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 6719 && num < 6730) {
        alert("Six thousand seven hundred " + numTens + numName);
        alert("Sixty-seven hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 6729 && num < 6800) {
        alert("Six thousand seven hundred " + numTens + numName);
        alert("Sixty-seven hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 6800) {
        alert("Six thousand eight hundred");
        alert("Sixty-eight hundred");
        alert("Sexmilli-octingentillion");
    } else if (num > 6800 && num < 6810) {
        alert("Six thousand eight hundred " + numName);
        alert("Sixty-eight hundred " + numName);
        alert("Sexmilli-" + numberName + "octingentillion");
    } else if (num == 6810) {
        alert("Six thousand eight hundred ten");
        alert("Sixty-eight hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6811) {
        alert("Six thousand eight hundred eleven");
        alert("Sixty-eight hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6812) {
        alert("Six thousand eight hundred twelve");
        alert("Sixty-eight hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6813) {
        alert("Six thousand eight hundred thirteen");
        alert("Sixty-eight hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6814) {
        alert("Six thousand eight hundred fourteen");
        alert("Sixty-eight hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6815) {
        alert("Six thousand eight hundred fifteen");
        alert("Sixty-eight hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6816) {
        alert("Six thousand eight hundred sixteen");
        alert("Sixty-eight hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6817) {
        alert("Six thousand eight hundred seventeen");
        alert("Sixty-eight hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6818) {
        alert("Six thousand eight hundred eighteen");
        alert("Sixty-eight hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 6819) {
        alert("Six thousand eight hundred nineteen");
        alert("Sixty-eight hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 6819 && num < 6830) {
        alert("Six thousand eight hundred " + numTens + numName);
        alert("Sixty-eight hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 6829 && num < 6900) {
        alert("Six thousand eight hundred " + numTens + numName);
        alert("Sixty-eight hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 6900) {
        alert("Six thousand nine hundred");
        alert("Sixty-nine hundred");
        alert("Sexmilli-octingentillion");
    } else if (num > 6900 && num < 6910) {
        alert("Six thousand nine hundred " + numName);
        alert("Sixty-nine hundred " + numName);
        alert("Sexmilli-" + numberName + "nongentillion");
    } else if (num == 6910) {
        alert("Six thousand nine hundred ten");
        alert("Sixty-nine hundred ten");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6911) {
        alert("Six thousand nine hundred eleven");
        alert("Sixty-nine hundred eleven");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6912) {
        alert("Six thousand nine hundred twelve");
        alert("Sixty-nine hundred twelve");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6913) {
        alert("Six thousand nine hundred thirteen");
        alert("Sixty-nine hundred thirteen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6914) {
        alert("Six thousand nine hundred fourteen");
        alert("Sixty-nine hundred fourteen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6915) {
        alert("Six thousand nine hundred fifteen");
        alert("Sixty-nine hundred fifteen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6916) {
        alert("Six thousand nine hundred sixteen");
        alert("Sixty-nine hundred sixteen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6917) {
        alert("Six thousand nine hundred seventeen");
        alert("Sixty-nine hundred seventeen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6918) {
        alert("Six thousand nine hundred eighteen");
        alert("Sixty-nine hundred eighteen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 6919) {
        alert("Six thousand nine hundred nineteen");
        alert("Sixty-nine hundred nineteen");
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 6919 && num < 6930) {
        alert("Six thousand nine hundred " + numTens + numName);
        alert("Sixty-nine hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 6929 && num < 7000) {
        alert("Six thousand nine hundred " + numTens + numName);
        alert("Sixty-nine hundred " + numTens + numName);
        alert("Sexmilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 7000) {
        alert("Seven thousand");
        alert("Septimillillion");
    } else if (num > 7000 && num < 7010) {
        alert("Seven thousand " + numName);
        alert(numberName + "septimillillion");
    } else if (num == 7010) {
        alert("Seven thousand ten");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7011) {
        alert("Seven thousand eleven");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7012) {
        alert("Seven thousand twelve");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7013) {
        alert("Seven thousand thirteen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7014) {
        alert("Seven thousand fourteen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7015) {
        alert("Seven thousand fifteen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7016) {
        alert("Seven thousand sixteen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7017) {
        alert("Seven thousand seventeen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7018) {
        alert("Seven thousand eighteen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7019) {
        alert("Seven thousand nineteen");
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num > 7019 && num < 7100) {
        alert("Seven thousand " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "illion");
    } else if (num == 7100) {
        alert("Seven thousand one hundred");
        alert("Seventy-one hundred");
        alert("Septimilli-centillion");
    } else if (num == 7103) {
        alert("Seven thousand one hundred " + numName);
        alert("Seventy-one hundred " + numName);
        alert("Septimilli-trescentillion");
    } else if (num > 7100 && num < 7110) {
        alert("Seven thousand one hundred " + numName);
        alert("Seventy-one hundred " + numName);
        alert("Septimilli-" + numberName + "centillion");
    } else if (num == 7110) {
        alert("Seven thousand one hundred ten");
        alert("Seventy-one hundred ten");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7111) {
        alert("Seven thousand one hundred eleven");
        alert("Seventy-one hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7112) {
        alert("Seven thousand one hundred twelve");
        alert("Seventy-one hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7113) {
        alert("Seven thousand one hundred thirteen");
        alert("Seventy-one hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7114) {
        alert("Seven thousand one hundred fourteen");
        alert("Seventy-one hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7115) {
        alert("Seven thousand one hundred fifteen");
        alert("Seventy-one hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7116) {
        alert("Seven thousand one hundred sixteen");
        alert("Seventy-one hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7117) {
        alert("Seven thousand one hundred seventeen");
        alert("Seventy-one hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7118) {
        alert("Seven thousand one hundred eighteen");
        alert("Seventy-one hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 7119) {
        alert("Seven thousand one hundred nineteen");
        alert("Seventy-one hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 7119 && num < 7130) {
        alert("Seven thousand one hundred " + numTens + numName);
        alert("Seventy-one hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 7129 && num < 7200) {
        alert("Seven thousand one hundred " + numTens + numName);
        alert("Seventy-one hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "acentillion");
    } else if (num == 7200) {
        alert("Seven thousand two hundred");
        alert("Seventy-two hundred");
        alert("Septimilli-ducentillion");
    } else if (num > 7200 && num < 7210) {
        alert("Seven thousand two hundred " + numName);
        alert("Seventy-two hundred " + numName);
        alert("Septimilli-" + numberName + "ducentillion");
    } else if (num == 7210) {
        alert("Seven thousand two hundred ten");
        alert("Seventy-two hundred ten");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7211) {
        alert("Seven thousand two hundred eleven");
        alert("Seventy-two hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7212) {
        alert("Seven thousand two hundred twelve");
        alert("Seventy-two hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7213) {
        alert("Seven thousand two hundred thirteen");
        alert("Seventy-two hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7214) {
        alert("Seven thousand two hundred fourteen");
        alert("Seventy-two hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7215) {
        alert("Seven thousand two hundred fifteen");
        alert("Seventy-two hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7216) {
        alert("Seven thousand two hundred sixteen");
        alert("Seventy-two hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7217) {
        alert("Seven thousand two hundred seventeen");
        alert("Seventy-two hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7218) {
        alert("Seven thousand two hundred eighteen");
        alert("Seventy-two hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 7219) {
        alert("Seven thousand two hundred nineteen");
        alert("Seventy-two hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 7219 && num < 7230) {
        alert("Seven thousand two hundred " + numTens + numName);
        alert("Seventy-two hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 7229 && num < 7300) {
        alert("Seven thousand two hundred " + numTens + numName);
        alert("Seventy-two hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 7300) {
        alert("Seven thousand three hundred");
        alert("Seventy-three hundred");
        alert("Septimilli-trecentillion");
    } else if (num > 7300 && num < 7310) {
        alert("Seven thousand three hundred " + numName);
        alert("Seventy-three hundred " + numName);
        alert("Septimilli-" + numberName + "trecentillion");
    } else if (num == 7310) {
        alert("Seven thousand three hundred ten");
        alert("Seventy-three hundred ten");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7311) {
        alert("Seven thousand three hundred eleven");
        alert("Seventy-three hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7312) {
        alert("Seven thousand three hundred twelve");
        alert("Seventy-three hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7313) {
        alert("Seven thousand three hundred thirteen");
        alert("Seventy-three hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7314) {
        alert("Seven thousand three hundred fourteen");
        alert("Seventy-three hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7315) {
        alert("Seven thousand three hundred fifteen");
        alert("Seventy-three hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7316) {
        alert("Seven thousand three hundred sixteen");
        alert("Seventy-three hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7317) {
        alert("Seven thousand three hundred seventeen");
        alert("Seventy-three hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7318) {
        alert("Seven thousand three hundred eighteen");
        alert("Seventy-three hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 7319) {
        alert("Seven thousand three hundred nineteen");
        alert("Seventy-three hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 7319 && num < 7330) {
        alert("Seven thousand three hundred " + numTens + numName);
        alert("Seventy-three hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 7329 && num < 7400) {
        alert("Seven thousand three hundred " + numTens + numName);
        alert("Seventy-three hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 7400) {
        alert("Seven thousand four hundred");
        alert("Seventy-four hundred");
        alert("Septimilli-quadringentillion");
    } else if (num > 7400 && num < 7410) {
        alert("Seven thousand four hundred " + numName);
        alert("Seventy-four hundred " + numName);
        alert("Septimilli-" + numberName + "quadringentillion");
    } else if (num == 7410) {
        alert("Seven thousand four hundred ten");
        alert("Seventy-four hundred ten");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7411) {
        alert("Seven thousand four hundred eleven");
        alert("Seventy-four hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7412) {
        alert("Seven thousand four hundred twelve");
        alert("Seventy-four hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7413) {
        alert("Seven thousand four hundred thirteen");
        alert("Seventy-four hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7414) {
        alert("Seven thousand four hundred fourteen");
        alert("Seventy-four hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7415) {
        alert("Seven thousand four hundred fifteen");
        alert("Seventy-four hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7416) {
        alert("Seven thousand four hundred sixteen");
        alert("Seventy-four hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7417) {
        alert("Seven thousand four hundred seventeen");
        alert("Seventy-four hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7418) {
        alert("Seven thousand four hundred eighteen");
        alert("Seventy-four hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 7419) {
        alert("Seven thousand four hundred nineteen");
        alert("Seventy-four hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 7419 && num < 7430) {
        alert("Seven thousand four hundred " + numTens + numName);
        alert("Seventy-four hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 7429 && num < 7500) {
        alert("Seven thousand four hundred " + numTens + numName);
        alert("Seventy-four hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 7500) {
        alert("Seven thousand five hundred");
        alert("Seventy-five hundred");
        alert("Septimilli-quingentillion");
    } else if (num > 7500 && num < 7510) {
        alert("Seven thousand five hundred " + numName);
        alert("Seventy-five hundred " + numName);
        alert("Septimilli-" + numberName + "quingentillion");
    } else if (num == 7510) {
        alert("Seven thousand five hundred ten");
        alert("Seventy-five hundred ten");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7511) {
        alert("Seven thousand five hundred eleven");
        alert("Seventy-five hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7512) {
        alert("Seven thousand five hundred twelve");
        alert("Seventy-five hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7513) {
        alert("Seven thousand five hundred thirteen");
        alert("Seventy-five hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7514) {
        alert("Seven thousand five hundred fourteen");
        alert("Seventy-five hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7515) {
        alert("Seven thousand five hundred fifteen");
        alert("Seventy-five hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7516) {
        alert("Seven thousand five hundred sixteen");
        alert("Seventy-five hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7517) {
        alert("Seven thousand five hundred seventeen");
        alert("Seventy-five hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7518) {
        alert("Seven thousand five hundred eighteen");
        alert("Seventy-five hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 7519) {
        alert("Seven thousand five hundred nineteen");
        alert("Seventy-five hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 7519 && num < 7530) {
        alert("Seven thousand five hundred " + numTens + numName);
        alert("Seventy-five hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 7529 && num < 7600) {
        alert("Seven thousand five hundred " + numTens + numName);
        alert("Seventy-five hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 7600) {
        alert("Seven thousand six hundred");
        alert("Seventy-six hundred");
        alert("Septimilli-sescentillion");
    } else if (num > 7600 && num < 7610) {
        alert("Seven thousand six hundred " + numName);
        alert("Seventy-six hundred " + numName);
        alert("Septimilli-" + numberName + "sescentillion");
    } else if (num == 7610) {
        alert("Seven thousand six hundred ten");
        alert("Seventy-six hundred ten");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7611) {
        alert("Seven thousand six hundred eleven");
        alert("Seventy-six hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7612) {
        alert("Seven thousand six hundred twelve");
        alert("Seventy-six hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7613) {
        alert("Seven thousand six hundred thirteen");
        alert("Seventy-six hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7614) {
        alert("Seven thousand six hundred fourteen");
        alert("Seventy-six hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7615) {
        alert("Seven thousand six hundred fifteen");
        alert("Seventy-six hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7616) {
        alert("Seven thousand six hundred sixteen");
        alert("Seventy-six hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7617) {
        alert("Seven thousand six hundred seventeen");
        alert("Seventy-six hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7618) {
        alert("Seven thousand six hundred eighteen");
        alert("Seventy-six hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 7619) {
        alert("Seven thousand six hundred nineteen");
        alert("Seventy-six hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 7619 && num < 7630) {
        alert("Seven thousand six hundred " + numTens + numName);
        alert("Seventy-six hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 7629 && num < 7700) {
        alert("Seven thousand six hundred " + numTens + numName);
        alert("Seventy-six hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 7700) {
        alert("Seven thousand seven hundred");
        alert("Seventy-seven hundred");
        alert("Septimilli-septingentillion");
    } else if (num > 7700 && num < 7710) {
        alert("Seven thousand seven hundred " + numName);
        alert("Seventy-seven hundred " + numName);
        alert("Septimilli-" + numberName + "septingentillion");
    } else if (num == 7710) {
        alert("Seven thousand seven hundred ten");
        alert("Seventy-seven hundred ten");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7711) {
        alert("Seven thousand seven hundred eleven");
        alert("Seventy-seven hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7712) {
        alert("Seven thousand seven hundred twelve");
        alert("Seventy-seven hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7713) {
        alert("Seven thousand seven hundred thirteen");
        alert("Seventy-seven hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7714) {
        alert("Seven thousand seven hundred fourteen");
        alert("Seventy-seven hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7715) {
        alert("Seven thousand seven hundred fifteen");
        alert("Seventy-seven hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7716) {
        alert("Seven thousand seven hundred sixteen");
        alert("Seventy-seven hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7717) {
        alert("Seven thousand seven hundred seventeen");
        alert("Seventy-seven hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7718) {
        alert("Seven thousand seven hundred eighteen");
        alert("Seventy-seven hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 7719) {
        alert("Seven thousand seven hundred nineteen");
        alert("Seventy-seven hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 7719 && num < 7730) {
        alert("Seven thousand seven hundred " + numTens + numName);
        alert("Seventy-seven hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 7729 && num < 7800) {
        alert("Seven thousand seven hundred " + numTens + numName);
        alert("Seventy-seven hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 7800) {
        alert("Seven thousand eight hundred");
        alert("Seventy-eight hundred");
        alert("Septimilli-octingentillion");
    } else if (num > 7800 && num < 7810) {
        alert("Seven thousand eight hundred " + numName);
        alert("Seventy-eight hundred " + numName);
        alert("Septimilli-" + numberName + "octingentillion");
    } else if (num == 7810) {
        alert("Seven thousand eight hundred ten");
        alert("Seventy-eight hundred ten");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7811) {
        alert("Seven thousand eight hundred eleven");
        alert("Seventy-eight hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7812) {
        alert("Seven thousand eight hundred twelve");
        alert("Seventy-eight hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7813) {
        alert("Seven thousand eight hundred thirteen");
        alert("Seventy-eight hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7814) {
        alert("Seven thousand eight hundred fourteen");
        alert("Seventy-eight hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7815) {
        alert("Seven thousand eight hundred fifteen");
        alert("Seventy-eight hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7816) {
        alert("Seven thousand eight hundred sixteen");
        alert("Seventy-eight hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7817) {
        alert("Seven thousand eight hundred seventeen");
        alert("Seventy-eight hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7818) {
        alert("Seven thousand eight hundred eighteen");
        alert("Seventy-eight hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 7819) {
        alert("Seven thousand eight hundred nineteen");
        alert("Seventy-eight hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 7819 && num < 7830) {
        alert("Seven thousand eight hundred " + numTens + numName);
        alert("Seventy-eight hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 7829 && num < 7900) {
        alert("Seven thousand eight hundred " + numTens + numName);
        alert("Seventy-eight hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 7900) {
        alert("Seven thousand nine hundred");
        alert("Seventy-nine hundred");
        alert("Septimilli-octingentillion");
    } else if (num > 7900 && num < 7910) {
        alert("Seven thousand nine hundred " + numName);
        alert("Seventy-nine hundred " + numName);
        alert("Septimilli-" + numberName + "nongentillion");
    } else if (num == 7910) {
        alert("Seven thousand nine hundred ten");
        alert("Seventy-nine hundred ten");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7911) {
        alert("Seven thousand nine hundred eleven");
        alert("Seventy-nine hundred eleven");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7912) {
        alert("Seven thousand nine hundred twelve");
        alert("Seventy-nine hundred twelve");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7913) {
        alert("Seven thousand nine hundred thirteen");
        alert("Seventy-nine hundred thirteen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7914) {
        alert("Seven thousand nine hundred fourteen");
        alert("Seventy-nine hundred fourteen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7915) {
        alert("Seven thousand nine hundred fifteen");
        alert("Seventy-nine hundred fifteen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7916) {
        alert("Seven thousand nine hundred sixteen");
        alert("Seventy-nine hundred sixteen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7917) {
        alert("Seven thousand nine hundred seventeen");
        alert("Seventy-nine hundred seventeen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7918) {
        alert("Seven thousand nine hundred eighteen");
        alert("Seventy-nine hundred eighteen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 7919) {
        alert("Seven thousand nine hundred nineteen");
        alert("Seventy-nine hundred nineteen");
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 7919 && num < 7930) {
        alert("Seven thousand nine hundred " + numTens + numName);
        alert("Seventy-nine hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 7929 && num < 8000) {
        alert("Seven thousand nine hundred " + numTens + numName);
        alert("Seventy-nine hundred " + numTens + numName);
        alert("Septimilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 8000) {
        alert("Eight thousand");
        alert("Octimillillion");
    } else if (num > 8000 && num < 8010) {
        alert("Eight thousand " + numName);
        alert(numberName + "octimillillion");
    } else if (num == 8010) {
        alert("Eight thousand ten");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8011) {
        alert("Eight thousand eleven");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8012) {
        alert("Eight thousand twelve");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8013) {
        alert("Eight thousand thirteen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8014) {
        alert("Eight thousand fourteen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8015) {
        alert("Eight thousand fifteen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8016) {
        alert("Eight thousand sixteen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8017) {
        alert("Eight thousand seventeen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8018) {
        alert("Eight thousand eighteen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8019) {
        alert("Eight thousand nineteen");
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num > 8019 && num < 8100) {
        alert("Eight thousand " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "illion");
    } else if (num == 8100) {
        alert("Eight thousand one hundred");
        alert("Eighty-one hundred");
        alert("Octimilli-centillion");
    } else if (num == 8103) {
        alert("Eight thousand one hundred " + numName);
        alert("Eighty-one hundred " + numName);
        alert("Octimilli-trescentillion");
    } else if (num > 8100 && num < 8110) {
        alert("Eight thousand one hundred " + numName);
        alert("Eighty-one hundred " + numName);
        alert("Octimilli-" + numberName + "centillion");
    } else if (num == 8110) {
        alert("Eight thousand one hundred ten");
        alert("Eighty-one hundred ten");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8111) {
        alert("Eight thousand one hundred eleven");
        alert("Eighty-one hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8112) {
        alert("Eight thousand one hundred twelve");
        alert("Eighty-one hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8113) {
        alert("Eight thousand one hundred thirteen");
        alert("Eighty-one hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8114) {
        alert("Eight thousand one hundred fourteen");
        alert("Eighty-one hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8115) {
        alert("Eight thousand one hundred fifteen");
        alert("Eighty-one hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8116) {
        alert("Eight thousand one hundred sixteen");
        alert("Eighty-one hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8117) {
        alert("Eight thousand one hundred seventeen");
        alert("Eighty-one hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8118) {
        alert("Eight thousand one hundred eighteen");
        alert("Eighty-one hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num == 8119) {
        alert("Eight thousand one hundred nineteen");
        alert("Eighty-one hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 8119 && num < 8130) {
        alert("Eight thousand one hundred " + numTens + numName);
        alert("Eighty-one hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "icentillion");
    } else if (num > 8129 && num < 8200) {
        alert("Eight thousand one hundred " + numTens + numName);
        alert("Eighty-one hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "acentillion");
    } else if (num == 8200) {
        alert("Eight thousand two hundred");
        alert("Eighty-two hundred");
        alert("Octimilli-ducentillion");
    } else if (num > 8200 && num < 8210) {
        alert("Eight thousand two hundred " + numName);
        alert("Eighty-two hundred " + numName);
        alert("Octimilli-" + numberName + "ducentillion");
    } else if (num == 8210) {
        alert("Eight thousand two hundred ten");
        alert("Eighty-two hundred ten");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8211) {
        alert("Eight thousand two hundred eleven");
        alert("Eighty-two hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8212) {
        alert("Eight thousand two hundred twelve");
        alert("Eighty-two hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8213) {
        alert("Eight thousand two hundred thirteen");
        alert("Eighty-two hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8214) {
        alert("Eight thousand two hundred fourteen");
        alert("Eighty-two hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8215) {
        alert("Eight thousand two hundred fifteen");
        alert("Eighty-two hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8216) {
        alert("Eight thousand two hundred sixteen");
        alert("Eighty-two hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8217) {
        alert("Eight thousand two hundred seventeen");
        alert("Eighty-two hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8218) {
        alert("Eight thousand two hundred eighteen");
        alert("Eighty-two hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num == 8219) {
        alert("Eight thousand two hundred nineteen");
        alert("Eighty-two hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 8219 && num < 8230) {
        alert("Eight thousand two hundred " + numTens + numName);
        alert("Eighty-two hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "iducentillion");
    } else if (num > 8229 && num < 8300) {
        alert("Eight thousand two hundred " + numTens + numName);
        alert("Eighty-two hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "aducentillion");
    } else if (num == 8300) {
        alert("Eight thousand three hundred");
        alert("Eighty-three hundred");
        alert("Octimilli-trecentillion");
    } else if (num > 8300 && num < 8310) {
        alert("Eight thousand three hundred " + numName);
        alert("Eighty-three hundred " + numName);
        alert("Octimilli-" + numberName + "trecentillion");
    } else if (num == 8310) {
        alert("Eight thousand three hundred ten");
        alert("Eighty-three hundred ten");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8311) {
        alert("Eight thousand three hundred eleven");
        alert("Eighty-three hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8312) {
        alert("Eight thousand three hundred twelve");
        alert("Eighty-three hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8313) {
        alert("Eight thousand three hundred thirteen");
        alert("Eighty-three hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8314) {
        alert("Eight thousand three hundred fourteen");
        alert("Eighty-three hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8315) {
        alert("Eight thousand three hundred fifteen");
        alert("Eighty-three hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8316) {
        alert("Eight thousand three hundred sixteen");
        alert("Eighty-three hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8317) {
        alert("Eight thousand three hundred seventeen");
        alert("Eighty-three hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8318) {
        alert("Eight thousand three hundred eighteen");
        alert("Eighty-three hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num == 8319) {
        alert("Eight thousand three hundred nineteen");
        alert("Eighty-three hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 8319 && num < 8330) {
        alert("Eight thousand three hundred " + numTens + numName);
        alert("Eighty-three hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "itrecentillion");
    } else if (num > 8329 && num < 8400) {
        alert("Eight thousand three hundred " + numTens + numName);
        alert("Eighty-three hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "atrecentillion");
    } else if (num == 8400) {
        alert("Eight thousand four hundred");
        alert("Eighty-four hundred");
        alert("Octimilli-quadringentillion");
    } else if (num > 8400 && num < 8410) {
        alert("Eight thousand four hundred " + numName);
        alert("Eighty-four hundred " + numName);
        alert("Octimilli-" + numberName + "quadringentillion");
    } else if (num == 8410) {
        alert("Eight thousand four hundred ten");
        alert("Eighty-four hundred ten");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8411) {
        alert("Eight thousand four hundred eleven");
        alert("Eighty-four hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8412) {
        alert("Eight thousand four hundred twelve");
        alert("Eighty-four hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8413) {
        alert("Eight thousand four hundred thirteen");
        alert("Eighty-four hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8414) {
        alert("Eight thousand four hundred fourteen");
        alert("Eighty-four hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8415) {
        alert("Eight thousand four hundred fifteen");
        alert("Eighty-four hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8416) {
        alert("Eight thousand four hundred sixteen");
        alert("Eighty-four hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8417) {
        alert("Eight thousand four hundred seventeen");
        alert("Eighty-four hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8418) {
        alert("Eight thousand four hundred eighteen");
        alert("Eighty-four hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num == 8419) {
        alert("Eight thousand four hundred nineteen");
        alert("Eighty-four hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 8419 && num < 8430) {
        alert("Eight thousand four hundred " + numTens + numName);
        alert("Eighty-four hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "iquadringentillion");
    } else if (num > 8429 && num < 8500) {
        alert("Eight thousand four hundred " + numTens + numName);
        alert("Eighty-four hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "aquadringentillion");
    } else if (num == 8500) {
        alert("Eight thousand five hundred");
        alert("Eighty-five hundred");
        alert("Octimilli-quingentillion");
    } else if (num > 8500 && num < 8510) {
        alert("Eight thousand five hundred " + numName);
        alert("Eighty-five hundred " + numName);
        alert("Octimilli-" + numberName + "quingentillion");
    } else if (num == 8510) {
        alert("Eight thousand five hundred ten");
        alert("Eighty-five hundred ten");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8511) {
        alert("Eight thousand five hundred eleven");
        alert("Eighty-five hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8512) {
        alert("Eight thousand five hundred twelve");
        alert("Eighty-five hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8513) {
        alert("Eight thousand five hundred thirteen");
        alert("Eighty-five hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8514) {
        alert("Eight thousand five hundred fourteen");
        alert("Eighty-five hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8515) {
        alert("Eight thousand five hundred fifteen");
        alert("Eighty-five hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8516) {
        alert("Eight thousand five hundred sixteen");
        alert("Eighty-five hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8517) {
        alert("Eight thousand five hundred seventeen");
        alert("Eighty-five hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8518) {
        alert("Eight thousand five hundred eighteen");
        alert("Eighty-five hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num == 8519) {
        alert("Eight thousand five hundred nineteen");
        alert("Eighty-five hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 8519 && num < 8530) {
        alert("Eight thousand five hundred " + numTens + numName);
        alert("Eighty-five hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "iquingentillion");
    } else if (num > 8529 && num < 8600) {
        alert("Eight thousand five hundred " + numTens + numName);
        alert("Eighty-five hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "aquingentillion");
    } else if (num == 8600) {
        alert("Eight thousand six hundred");
        alert("Eighty-six hundred");
        alert("Octimilli-sescentillion");
    } else if (num > 8600 && num < 8610) {
        alert("Eight thousand six hundred " + numName);
        alert("Eighty-six hundred " + numName);
        alert("Octimilli-" + numberName + "sescentillion");
    } else if (num == 8610) {
        alert("Eight thousand six hundred ten");
        alert("Eighty-six hundred ten");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8611) {
        alert("Eight thousand six hundred eleven");
        alert("Eighty-six hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8612) {
        alert("Eight thousand six hundred twelve");
        alert("Eighty-six hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8613) {
        alert("Eight thousand six hundred thirteen");
        alert("Eighty-six hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8614) {
        alert("Eight thousand six hundred fourteen");
        alert("Eighty-six hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8615) {
        alert("Eight thousand six hundred fifteen");
        alert("Eighty-six hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8616) {
        alert("Eight thousand six hundred sixteen");
        alert("Eighty-six hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8617) {
        alert("Eight thousand six hundred seventeen");
        alert("Eighty-six hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8618) {
        alert("Eight thousand six hundred eighteen");
        alert("Eighty-six hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num == 8619) {
        alert("Eight thousand six hundred nineteen");
        alert("Eighty-six hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 8619 && num < 8630) {
        alert("Eight thousand six hundred " + numTens + numName);
        alert("Eighty-six hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "isescentillion");
    } else if (num > 8629 && num < 8700) {
        alert("Eight thousand six hundred " + numTens + numName);
        alert("Eighty-six hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "asescentillion");
    } else if (num == 8700) {
        alert("Eight thousand seven hundred");
        alert("Eighty-seven hundred");
        alert("Octimilli-septingentillion");
    } else if (num > 8700 && num < 8710) {
        alert("Eight thousand seven hundred " + numName);
        alert("Eighty-seven hundred " + numName);
        alert("Octimilli-" + numberName + "septingentillion");
    } else if (num == 8710) {
        alert("Eight thousand seven hundred ten");
        alert("Eighty-seven hundred ten");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8711) {
        alert("Eight thousand seven hundred eleven");
        alert("Eighty-seven hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8712) {
        alert("Eight thousand seven hundred twelve");
        alert("Eighty-seven hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8713) {
        alert("Eight thousand seven hundred thirteen");
        alert("Eighty-seven hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8714) {
        alert("Eight thousand seven hundred fourteen");
        alert("Eighty-seven hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8715) {
        alert("Eight thousand seven hundred fifteen");
        alert("Eighty-seven hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8716) {
        alert("Eight thousand seven hundred sixteen");
        alert("Eighty-seven hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8717) {
        alert("Eight thousand seven hundred seventeen");
        alert("Eighty-seven hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8718) {
        alert("Eight thousand seven hundred eighteen");
        alert("Eighty-seven hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num == 8719) {
        alert("Eight thousand seven hundred nineteen");
        alert("Eighty-seven hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 8719 && num < 8730) {
        alert("Eight thousand seven hundred " + numTens + numName);
        alert("Eighty-seven hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "iseptingentillion");
    } else if (num > 8729 && num < 8800) {
        alert("Eight thousand seven hundred " + numTens + numName);
        alert("Eighty-seven hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "aseptingentillion");
    } else if (num == 8800) {
        alert("Eight thousand eight hundred");
        alert("Eighty-eight hundred");
        alert("Octimilli-octingentillion");
    } else if (num > 8800 && num < 8810) {
        alert("Eight thousand eight hundred " + numName);
        alert("Eighty-eight hundred " + numName);
        alert("Octimilli-" + numberName + "octingentillion");
    } else if (num == 8810) {
        alert("Eight thousand eight hundred ten");
        alert("Eighty-eight hundred ten");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8811) {
        alert("Eight thousand eight hundred eleven");
        alert("Eighty-eight hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8812) {
        alert("Eight thousand eight hundred twelve");
        alert("Eighty-eight hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8813) {
        alert("Eight thousand eight hundred thirteen");
        alert("Eighty-eight hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8814) {
        alert("Eight thousand eight hundred fourteen");
        alert("Eighty-eight hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8815) {
        alert("Eight thousand eight hundred fifteen");
        alert("Eighty-eight hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8816) {
        alert("Eight thousand eight hundred sixteen");
        alert("Eighty-eight hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8817) {
        alert("Eight thousand eight hundred seventeen");
        alert("Eighty-eight hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8818) {
        alert("Eight thousand eight hundred eighteen");
        alert("Eighty-eight hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num == 8819) {
        alert("Eight thousand eight hundred nineteen");
        alert("Eighty-eight hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 8819 && num < 8830) {
        alert("Eight thousand eight hundred " + numTens + numName);
        alert("Eighty-eight hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "ioctingentillion");
    } else if (num > 8829 && num < 8900) {
        alert("Eight thousand eight hundred " + numTens + numName);
        alert("Eighty-eight hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "aoctingentillion");
    } else if (num == 8900) {
        alert("Eight thousand nine hundred");
        alert("Eighty-nine hundred");
        alert("Octimilli-octingentillion");
    } else if (num > 8900 && num < 8910) {
        alert("Eight thousand nine hundred " + numName);
        alert("Eighty-nine hundred " + numName);
        alert("Octimilli-" + numberName + "nongentillion");
    } else if (num == 8910) {
        alert("Eight thousand nine hundred ten");
        alert("Eighty-nine hundred ten");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8911) {
        alert("Eight thousand nine hundred eleven");
        alert("Eighty-nine hundred eleven");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8912) {
        alert("Eight thousand nine hundred twelve");
        alert("Eighty-nine hundred twelve");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8913) {
        alert("Eight thousand nine hundred thirteen");
        alert("Eighty-nine hundred thirteen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8914) {
        alert("Eight thousand nine hundred fourteen");
        alert("Eighty-nine hundred fourteen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8915) {
        alert("Eight thousand nine hundred fifteen");
        alert("Eighty-nine hundred fifteen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8916) {
        alert("Eight thousand nine hundred sixteen");
        alert("Eighty-nine hundred sixteen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8917) {
        alert("Eight thousand nine hundred seventeen");
        alert("Eighty-nine hundred seventeen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8918) {
        alert("Eight thousand nine hundred eighteen");
        alert("Eighty-nine hundred eighteen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num == 8919) {
        alert("Eight thousand nine hundred nineteen");
        alert("Eighty-nine hundred nineteen");
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 8919 && num < 8930) {
        alert("Eight thousand nine hundred " + numTens + numName);
        alert("Eighty-nine hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "inongentillion");
    } else if (num > 8929 && num < 9000) {
        alert("Eight thousand nine hundred " + numTens + numName);
        alert("Eighty-nine hundred " + numTens + numName);
        alert("Octimilli-" + numberName + numberTens + "anongentillion");
    } else if (num == 9000) {
        alert("Nine thousand");
        alert("Nonimillillion");
    } else {
        alert("Please enter a valid number");
    }
}