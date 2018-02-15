function persona(){
    var nombre;
    var apellido;
    var estado;
    
    this.GetNombre = function(){return nombre;}
    this.Getapellido = function(){return apellido;}
    this.Getestado = function(){return estado;}
    
    this.calza = 48;
    
    this.Declara = function(){
        nombre = "Ash";
        apellido = "Ketchup";
        estado ="15";
    }
}