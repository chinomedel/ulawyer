export default function Login (){

    return (
    <>
     <div className="sidenav">
         <div className="login-main-text">
            <h2>ULawyer<br/></h2>
            <p>Inicia sesión o registrate como usuario para encontrar uno a varios abogados para tus casos legales.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" className="btn btn-black">Iniciar Sesión</button>
                  <button type="submit" className="btn btn-secondary">Registrarme</button>
               </form>
            </div>
         </div>
      </div>
    </>
    );
    
}