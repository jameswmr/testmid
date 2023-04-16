import services from "../services";
export default  function Signout(){
    services.user.getID().then((data) => {
        if(data === null){
          window.location.replace("/");
            alert("Sign in first and wait a second");
        }
        else{
            services.user.delID();
            setTimeout(function() {
                window.location.replace("/");
            }, 1000);
        }
      })
    return (
        <h1>Goodbye~~</h1>
    )
}