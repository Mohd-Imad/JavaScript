let testScore = 59;
let collegeStudent = false;
let grade;

if(testScore >= 90){
    grade = 'A'
}
else if(testScore >=70){
    grade ='B'
}
else if(testScore >=50){
    grade ='C'
}
else if(testScore <=40){
    grade ='D'
}
else{
    if(collegeStudent){
        grade = 'U'
    }
    else{
        grade = 'F'
    }
}
console.log(grade);
