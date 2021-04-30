console.log("Mi Mensaje");
var full_nombre = "jorge cano";
var age = 27;
var developer = true;
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
