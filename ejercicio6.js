let num=[2,4,6,8,10,12,14,16]
let pro=0;
const promedio = () => {
    for (i = 0; i < num.length; i++) {
        pro=(num[i]+pro)
      } 
      pro=(pro/num.length);
      console.log(pro);
  };
 promedio();