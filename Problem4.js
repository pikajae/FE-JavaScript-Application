// 4번 문제.

let user = {
  name: "지환",
  years: 24,
};

// 아래에 코드를 작성해주세요 ~//
const {Name:name, age:years,isAdmin}=user;
if(isAdmin==='')
{isAdmin="false";}


alert(Name); // "지환"
alert(age); // 24
alert(isAdmin); // false
