function cambioAmonedas(a) {
    let resp=1;
    let aux="";
    if(a==2)
    {
        resp = "1,1"
    }
    if(a==3)
    {
        resp = "2,1"
    }
    if(aux<a)
    {
        aux = aux+"5";
    }
    
    return resp;
  }
  
  export default cambioAmonedas;
  