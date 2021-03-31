const one={
    "ㄱ":"ㄱ",
    "ㄲ":"ㄲ",
    "ㄴ":"ㄴ",
    "ㄷ":"ㄷ",
    "ㄸ":"ㄸ",
    "ㄹ":"ㄹ",
    "ㅁ":"ㅁ",
    "ㅂ":"ㅂ",
    "ㅃ":"ㅃ",
    "ㅅ":"ㅅ",
    "ㅆ":"ㅆ",
    "ㅇ":"ㅇ",
    "ㅈ":"ㅈ",
    "ㅉ":"ㅉ",
    "ㅊ":"ㅊ",
    "ㅋ":"ㅋ",
    "ㅌ":"ㅌ",
    "ㅍ":"ㅍ",
    "ㅎ":"ㅎ"
};
const two={
    "ㄱㄱ":"ㄲ",
    "ㄱㅅ":"ㄳ",
    "ㄴㅈ":"ㄵ",
    "ㄴㅎ":"ㄶ",
    "ㄷㄷ":"ㄸ",
    "ㄹㄱ":"ㄺ",
    "ㄹㅁ":"ㄻ",
    "ㄹㅂ":"ㄼ",
    "ㄹㅅ":"ㄽ",
    "ㄹㅌ":"ㄾ",
    "ㄹㅍ":"ㄿ",
    "ㄹㅎ":"ㅀ",
    "ㅂㅂ":"ㅃ",
    "ㅂㅅ":"ㅄ",
    "ㅅㅅ":"ㅆ",
    "ㅈㅈ":"ㅉ"
};
const en={
    "q":"ㅂ",
    "w":"ㅈ",
    "e":"ㄷ",
    "r":"ㄱ",
    "t":"ㅅ",
    "y":"ㅛ",
    "u":"ㅕ",
    "i":"ㅑ",
    "o":"ㅐ",
    "p":"ㅔ",
    "a":"ㅁ",
    "s":"ㄴ",
    "d":"ㅇ",
    "f":"ㄹ",
    "g":"ㅎ",
    "h":"ㅗ",
    "j":"ㅓ",
    "k":"ㅏ",
    "l":"ㅣ",
    "z":"ㅋ",
    "x":"ㅌ",
    "c":"ㅊ",
    "v":"ㅍ",
    "b":"ㅠ",
    "n":"ㅜ",
    "m":"ㅡ",
    "Q":"ㅃ",
    "W":"ㅉ",
    "E":"ㄸ",
    "R":"ㄲ",
    "T":"ㅆ",
    "Y":"ㅛ",
    "U":"ㅕ",
    "I":"ㅑ",
    "O":"ㅐ",
    "P":"ㅔ",
    "A":"ㅁ",
    "S":"ㄴ",
    "D":"ㅇ",
    "F":"ㄹ",
    "G":"ㅎ",
    "H":"ㅗ",
    "J":"ㅓ",
    "K":"ㅏ",
    "L":"ㅣ",
    "Z":"ㅋ",
    "X":"ㅌ",
    "C":"ㅊ",
    "V":"ㅍ",
    "B":"ㅠ",
    "N":"ㅜ",
    "M":"ㅡ"
};
const mo={
    "ㅗㅏ":"ㅘ",
    "ㅗㅐ":"ㅙ",
    "ㅗㅣ":"ㅚ",
    "ㅜㅓ":"ㅝ",
    "ㅜㅔ":"ㅞ",
    "ㅜㅣ":"ㅟ",
    "ㅡㅣ":"ㅢ"
};

function 변환(str){
    var result="";
    for(let i=0;i<str.length;i++){
        result+=en[str[i]]?en[str[i]]:str[i];
    }
    return result;
}

function 초성을받침으로(str){
    return str.replace(/[ㄱ-ㅎ]+(?![ㅏ-ㅣ가-힣])/g, 종성변환);
}

function 종성변환(str){
    if(two[str.slice(0, 2)]){
        return two[str.slice(0, 2)]+str.slice(2);
    }else{
        return one[str[0]]+str.slice(1);
    }
}

function 중성합치기(str){
    return str.replace(/[ㅗㅏㅐㅣㅓㅜㅔㅣㅡ]{2}/g, 종성2개합쳐져라);
}

function 종성2개합쳐져라(str){
    return mo[str]?mo[str]:str;
}

console.log(중성합치기(초성을받침으로(변환("dkssudgktpdy!"))).normalize("NFKC"));