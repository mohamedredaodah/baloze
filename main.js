let a=prompt('ادخل عدد ساعت عمله');
let m='😅اكيد مفيش حد هيجي الشغل عشان يشتغل ساعه واحده ';
let r='يوم و9/8 من اليوم';
let y='يوم وربع';
let b="يوم واحد";
let c='نص يوم';
let d='ربع يوم';
let q='يوم وربع و9/8 من اليوم';
let f='يوم ونص';
let u='يومين الا ربع';
let o='يومين';


if(a==4){
    document.write(c);
}
else if(a==6){
    document.write('يوم الا ربع');
}
else if(a==8){
    document.write(b);
}
else if(a==2){
    document.write(d);
}
else if(a==1){
    document.write(m);
}

else if(a==10){
    document.write(y);
}

else if(a==12){
    document.write(f);
}
else if(a==14){
    document.write(u);
}
else if(a==16){
    document.write(o);
}

else{
    document.write('عدد الساعات اللي انت مدخله مش موجود علي ارض الواقع ');
}
