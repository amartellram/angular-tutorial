function activar( nombre:string,
                  objeto:string = "batiseñal",
                  momento?:string){
  let mensaje:string;

  if(momento){
    mensaje = `${nombre} activó la ${objeto} en la ${momento}`;
  }else{
      mensaje = `${nombre} activó la ${objeto}`
  }

  console.log(mensaje);
}

activar("Gordon","batisenial","tarde");
